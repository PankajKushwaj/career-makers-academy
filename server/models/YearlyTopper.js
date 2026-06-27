import mongoose from 'mongoose'

const YearlyTopperSchema = new mongoose.Schema({
  year: String,
  name: String,
  course: String,
  rank: String,
  percentage: String,
  image: String,
})

export default mongoose.model('YearlyTopper', YearlyTopperSchema)
