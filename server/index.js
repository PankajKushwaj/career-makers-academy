import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import fs from 'fs'
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'
import apiRouter from './routes/api.js'

dotenv.config()

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
  console.error('MONGO_URI is not set. Add your MongoDB Atlas connection string to the environment.')
  process.exit(1)
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
  })
  .catch((err) => {
    console.error('MongoDB connection error', err)
    process.exit(1)
  })

export default app
