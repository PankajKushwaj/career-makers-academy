import ResultImage from '../models/ResultImage.js'
import YearlyTopper from '../models/YearlyTopper.js'
import { uploadToCloudinary, removeFromCloudinary } from '../services/cloudinary.js'

export const uploadResultImage = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required.' })
    }

    const { title = '', caption = '', year = '' } = req.body
    const result = await uploadToCloudinary(req.file)

    const doc = await ResultImage.create({
      title,
      caption,
      year,
      src: result.secure_url,
      public_id: result.public_id,
    })

    res.status(201).json(doc)
  } catch (error) {
    next(error)
  }
}

export const deleteResultImage = async (req, res, next) => {
  try {
    const image = await ResultImage.findById(req.params.id)
    if (!image) {
      return res.status(404).json({ message: 'Result image not found.' })
    }

    if (image.public_id) {
      await removeFromCloudinary(image.public_id)
    }

    await image.deleteOne()
    res.json({ message: 'Result image deleted.' })
  } catch (error) {
    next(error)
  }
}

export const uploadYearlyTopper = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required.' })
    }

    const { year, name, course, rank, percentage } = req.body
    const result = await uploadToCloudinary(req.file)

    const doc = await YearlyTopper.create({
      year,
      name,
      course,
      rank,
      percentage,
      image: result.secure_url,
      public_id: result.public_id,
    })

    res.status(201).json(doc)
  } catch (error) {
    next(error)
  }
}

export const deleteYearlyTopper = async (req, res, next) => {
  try {
    const topper = await YearlyTopper.findById(req.params.id)
    if (!topper) {
      return res.status(404).json({ message: 'Yearly topper not found.' })
    }

    if (topper.public_id) {
      await removeFromCloudinary(topper.public_id)
    }

    await topper.deleteOne()
    res.json({ message: 'Yearly topper deleted.' })
  } catch (error) {
    next(error)
  }
}
