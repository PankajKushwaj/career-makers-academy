import dotenv from 'dotenv'

dotenv.config()

const requiredEnv = [
  'PORT',
  'MONGO_URI',
  'JWT_SECRET',
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET',
  'VITE_API_URL',
  'CORS_ORIGINS',
]

const missingEnv = requiredEnv.filter((key) => !process.env[key] || process.env[key].trim() === '')

if (missingEnv.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnv.join(', ')}`)
}

const CORS_ORIGINS = process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim())

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: Number(process.env.PORT),
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  VITE_API_URL: process.env.VITE_API_URL,
  CORS_ORIGINS,
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || '',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || '',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || '',
  ADMIN_ROLE: process.env.ADMIN_ROLE || 'superadmin',
}
