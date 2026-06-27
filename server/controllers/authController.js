import jwt from 'jsonwebtoken'
import config from '../config/index.js'
import Admin from '../models/Admin.js'

const signToken = (admin) => {
  return jwt.sign({ id: admin._id, role: admin.role }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRES_IN,
  })
}

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username: username.toLowerCase() }).select('+password')

    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid username or password.' })
    }

    const token = signToken(admin)
    res.json({ token, admin: { id: admin._id, username: admin.username, email: admin.email, role: admin.role } })
  } catch (error) {
    next(error)
  }
}

export const createAdmin = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body
    const admin = await Admin.create({ username, email, password, role })
    res.status(201).json({ admin: { id: admin._id, username: admin.username, email: admin.email, role: admin.role } })
  } catch (error) {
    next(error)
  }
}
