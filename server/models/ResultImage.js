import mongoose from 'mongoose'

const ResultImageSchema = new mongoose.Schema({
  src: String,
  title: String,
  caption: String,
  year: String,
})

export default mongoose.model('ResultImage', ResultImageSchema)
