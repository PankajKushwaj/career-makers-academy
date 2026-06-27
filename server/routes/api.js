import express from 'express'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import { v2 as cloudinary } from 'cloudinary'
import ResultRecord from '../models/ResultRecord.js'
import ResultImage from '../models/ResultImage.js'
import YearlyTopper from '../models/YearlyTopper.js'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadDir = path.join(__dirname, '..', 'uploads')
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
})

const upload = multer({ storage })

const uploadToCloudinary = async (file) => {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    return null
  }

  const result = await cloudinary.uploader.upload(file.path, {
    folder: 'cma-results',
    resource_type: 'image',
  })

  return result.secure_url
}

// Results CRUD
router.get('/results', async (req, res) => {
  const items = await ResultRecord.find().lean()
  res.json(items)
})

router.post('/results', async (req, res) => {
  const doc = await ResultRecord.create(req.body)
  res.json(doc)
})

router.put('/results/:id', async (req, res) => {
  const doc = await ResultRecord.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(doc)
})

router.delete('/results/:id', async (req, res) => {
  await ResultRecord.findByIdAndDelete(req.params.id)
  res.json({ ok: true })
})

// Result images CRUD + upload
router.get('/result-images', async (req, res) => {
  const items = await ResultImage.find().lean()
  res.json(items)
})

router.post('/result-images', upload.single('image'), async (req, res) => {
  let src = req.body.src

  if (req.file) {
    const cloudUrl = await uploadToCloudinary(req.file)
    src = cloudUrl || `/uploads/${req.file.filename}`
  }

  let doc
  try {
    doc = await ResultImage.create({ src, ...req.body })
  } catch (error) {
    console.warn('Result image save skipped:', error.message)
    doc = { _id: req.file?.filename || Date.now().toString(), src, ...req.body }
  }

  res.json(doc)
})

router.put('/result-images/:id', async (req, res) => {
  const doc = await ResultImage.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(doc)
})

router.delete('/result-images/:id', async (req, res) => {
  await ResultImage.findByIdAndDelete(req.params.id)
  res.json({ ok: true })
})

// Yearly toppers CRUD + upload
router.get('/yearly-toppers', async (req, res) => {
  const items = await YearlyTopper.find().lean()
  res.json(items)
})

router.post('/yearly-toppers', upload.single('image'), async (req, res) => {
  let image = req.body.image

  if (req.file) {
    const cloudUrl = await uploadToCloudinary(req.file)
    image = cloudUrl || `/uploads/${req.file.filename}`
  }

  let doc
  try {
    doc = await YearlyTopper.create({ image, ...req.body })
  } catch (error) {
    console.warn('Yearly topper save skipped:', error.message)
    doc = { _id: req.file?.filename || Date.now().toString(), image, ...req.body }
  }

  res.json(doc)
})

router.put('/yearly-toppers/:id', async (req, res) => {
  const doc = await YearlyTopper.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(doc)
})

router.delete('/yearly-toppers/:id', async (req, res) => {
  await YearlyTopper.findByIdAndDelete(req.params.id)
  res.json({ ok: true })
})

export default router
