import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fs from 'fs'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const { default: apiRouter } = await import('./routes/api.js')

const app = express()
app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadDir = path.join(__dirname, 'uploads')
fs.mkdirSync(uploadDir, { recursive: true })

// serve uploaded files
app.use('/uploads', express.static(uploadDir))

app.use('/api', apiRouter)

const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  console.warn('MONGO_URI is not set. Uploads will still work through Cloudinary, but database persistence is disabled.')
} else {
  mongoose
    .connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((err) => {
      console.warn('MongoDB connection warning:', err.message)
    })
}

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))

export default app
