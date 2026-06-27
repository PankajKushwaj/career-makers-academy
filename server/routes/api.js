import express from 'express'
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import { authenticate, authorize } from '../middleware/auth.js'
import { validate, loginSchema, resultRecordSchema, resultImageSchema, yearlyTopperSchema } from '../middleware/validators.js'
import { login, createAdmin } from '../controllers/authController.js'
import { listResults, createResult, updateResult, deleteResult, listResultImages, listYearlyToppers } from '../controllers/contentController.js'
import { uploadResultImage, deleteResultImage, uploadYearlyTopper, deleteYearlyTopper } from '../controllers/uploadController.js'

const router = express.Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadDir = path.join(__dirname, '..', 'uploads')

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp']
    if (allowed.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Only jpg, jpeg, png, and webp files are allowed.'))
    }
  },
})

router.post('/auth/login', validate(loginSchema), login)
router.post('/auth/admins', authenticate, authorize(['superadmin']), createAdmin)

router.get('/results', authenticate, authorize(['superadmin', 'contentadmin', 'teacher']), listResults)
router.post('/results', authenticate, authorize(['superadmin', 'teacher']), validate(resultRecordSchema), createResult)
router.put('/results/:id', authenticate, authorize(['superadmin', 'teacher']), validate(resultRecordSchema), updateResult)
router.delete('/results/:id', authenticate, authorize(['superadmin']), deleteResult)

router.get('/result-images', listResultImages)
router.post('/result-images', authenticate, authorize(['superadmin', 'contentadmin']), upload.single('image'), validate(resultImageSchema), uploadResultImage)
router.delete('/result-images/:id', authenticate, authorize(['superadmin']), deleteResultImage)

router.get('/yearly-toppers', listYearlyToppers)
router.post('/yearly-toppers', authenticate, authorize(['superadmin', 'contentadmin']), upload.single('image'), validate(yearlyTopperSchema), uploadYearlyTopper)
router.delete('/yearly-toppers/:id', authenticate, authorize(['superadmin']), deleteYearlyTopper)

export default router
