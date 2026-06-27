import ResultRecord from '../models/ResultRecord.js'
import ResultImage from '../models/ResultImage.js'
import YearlyTopper from '../models/YearlyTopper.js'

export const listResults = async (req, res, next) => {
  try {
    const results = await ResultRecord.find().lean()
    res.json(results)
  } catch (error) {
    next(error)
  }
}

export const createResult = async (req, res, next) => {
  try {
    const doc = await ResultRecord.create(req.body)
    res.status(201).json(doc)
  } catch (error) {
    next(error)
  }
}

export const updateResult = async (req, res, next) => {
  try {
    const doc = await ResultRecord.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!doc) {
      return res.status(404).json({ message: 'Result not found.' })
    }
    res.json(doc)
  } catch (error) {
    next(error)
  }
}

export const deleteResult = async (req, res, next) => {
  try {
    const doc = await ResultRecord.findByIdAndDelete(req.params.id)
    if (!doc) {
      return res.status(404).json({ message: 'Result not found.' })
    }
    res.json({ message: 'Result deleted.' })
  } catch (error) {
    next(error)
  }
}

export const listResultImages = async (req, res, next) => {
  try {
    const items = await ResultImage.find().lean()
    res.json(items)
  } catch (error) {
    next(error)
  }
}

export const listYearlyToppers = async (req, res, next) => {
  try {
    const items = await YearlyTopper.find().lean()
    res.json(items)
  } catch (error) {
    next(error)
  }
}
