import mongoose from 'mongoose'

const ResultRecordSchema = new mongoose.Schema({
  roll: String,
  name: String,
  course: String,
  batch: String,
  year: String,
  score: mongoose.Schema.Types.Mixed,
  status: String,
})

export default mongoose.model('ResultRecord', ResultRecordSchema)
