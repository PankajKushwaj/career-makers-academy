import jwt from 'jsonwebtoken'
import config from '../config/index.js'
import Admin from '../models/Admin.js'

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing.' })
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET)
    const admin = await Admin.findById(decoded.id).select('+password')

    if (!admin) {
      return res.status(401).json({ message: 'Invalid authentication token.' })
    }

    req.admin = admin
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Authentication token is invalid or expired.' })
  }
}

export const authorize = (roles = []) => (req, res, next) => {
  if (!roles.length) return next()
  if (!req.admin || !roles.includes(req.admin.role)) {
    return res.status(403).json({ message: 'Unauthorized access.' })
  }
  next()
}
