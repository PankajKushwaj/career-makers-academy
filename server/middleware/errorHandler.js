import { ZodError } from 'zod'

export const errorHandler = (err, req, res, next) => {
  console.error(err)

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation failed.',
      errors: err.errors.map((error) => ({ path: error.path.join('.'), message: error.message })),
    })
  }

  if (err.name === 'MongoServerError' && err.code === 11000) {
    return res.status(409).json({ message: 'Duplicate record exists.', detail: err.keyValue })
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid ID format.' })
  }

  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Invalid or expired token.' })
  }

  if (err.name === 'MulterError') {
    return res.status(400).json({ message: err.message })
  }

  if (err.httpStatus) {
    return res.status(err.httpStatus).json({ message: err.message })
  }

  res.status(500).json({ message: 'Internal server error.' })
}
