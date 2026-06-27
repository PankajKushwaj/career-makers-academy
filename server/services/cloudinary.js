import { v2 as cloudinary } from 'cloudinary'
import config from '../config/index.js'

cloudinary.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
})

export const uploadToCloudinary = async (file) => {
  const result = await cloudinary.uploader.upload(file.path, {
    folder: 'cma-results',
    resource_type: 'image',
    transformation: [{ quality: 'auto' }, { fetch_format: 'auto' }],
  })
  return result
}

export const removeFromCloudinary = async (publicId) => {
  if (!publicId) return null
  return cloudinary.uploader.destroy(publicId)
}
