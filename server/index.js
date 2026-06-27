import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import config from './config/index.js'
import apiRouter from './routes/api.js'
import { securityMiddleware } from './middleware/security.js'
import { errorHandler } from './middleware/errorHandler.js'
import { seedDefaultAdmin } from './utils/seedAdmin.js'
import mongoose from 'mongoose'

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
securityMiddleware(app)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadDir = path.join(__dirname, 'uploads')
fs.mkdirSync(uploadDir, { recursive: true })

app.use('/uploads', express.static(uploadDir))
app.use('/api', apiRouter)
app.use(errorHandler)

const start = async () => {
  try {
    await mongoose.connect(config.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    console.log('Connected to MongoDB')
    await seedDefaultAdmin()
  } catch (error) {
    console.warn('MongoDB connection warning:', error.message)
  }

  app.listen(config.PORT, () => {
    console.log(`Server listening on ${config.PORT}`)
  })
}

if (process.env.NODE_ENV !== 'test' && process.env.VERCEL !== '1') {
  start()
}

export { app, start }
export default app
