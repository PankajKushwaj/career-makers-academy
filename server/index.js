import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
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

// serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', apiRouter)

const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cma'

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
