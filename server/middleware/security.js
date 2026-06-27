import cookieParser from 'cookie-parser'
import compression from 'compression'
import helmet from 'helmet'
import hpp from 'hpp'
import xss from 'xss-clean'
import rateLimit from 'express-rate-limit'
import config from '../config/index.js'

export const securityMiddleware = (app) => {
  app.use(helmet())
  app.use(compression())
  app.use(cookieParser())
  app.use(hpp())
  app.use(xss())

  app.use(
    '/api/auth/login',
    rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: 'Too many login attempts. Try again later.' })
  )

  app.use(
    '/api/result-images',
    rateLimit({ windowMs: 60 * 60 * 1000, max: 20, message: 'Too many image uploads. Try again later.' })
  )

  app.use(
    '/api',
    rateLimit({ windowMs: 15 * 60 * 1000, max: 100, message: 'Too many requests. Please slow down.' })
  )

  app.use((req, res, next) => {
    const origin = req.headers.origin
    if (config.CORS_ORIGINS.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin)
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Credentials', 'true')
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200)
    }
    next()
  })
}
