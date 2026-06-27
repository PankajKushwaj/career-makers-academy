import express from 'express'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import ResultRecord from '../models/ResultRecord.js'
import ResultImage from '../models/ResultImage.js'
import YearlyTopper from '../models/YearlyTopper.js'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const uploadDir = path.join(__dirname, '..', 'uploads')
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
})

const upload = multer({ storage })

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
  const src = req.file ? `/uploads/${req.file.filename}` : req.body.src
  const doc = await ResultImage.create({ src, ...req.body })
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
  const image = req.file ? `/uploads/${req.file.filename}` : req.body.image
  const doc = await YearlyTopper.create({ image, ...req.body })
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
