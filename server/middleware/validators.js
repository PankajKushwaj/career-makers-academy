import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().trim().min(3),
  password: z.string().min(8),
})

export const resultRecordSchema = z.object({
  roll: z.string().trim().min(1),
  name: z.string().trim().min(1),
  course: z.string().trim().min(1),
  batch: z.string().trim().min(1),
  year: z.string().trim().min(1),
  score: z.string().trim().min(1),
  status: z.string().trim().min(1),
})

export const resultImageSchema = z.object({
  title: z.string().trim().optional(),
  caption: z.string().trim().optional(),
  year: z.string().trim().optional(),
  src: z.string().trim().url().optional(),
})

export const yearlyTopperSchema = z.object({
  year: z.string().trim().min(1),
  name: z.string().trim().min(1),
  course: z.string().trim().min(1),
  rank: z.string().trim().min(1),
  percentage: z.string().trim().min(1),
  image: z.string().trim().url().optional(),
})

export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({ ...req.body, ...req.params, ...req.query })
    next()
  } catch (error) {
    next(error)
  }
}
