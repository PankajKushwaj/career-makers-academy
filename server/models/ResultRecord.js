import mongoose from 'mongoose'

const ResultRecordSchema = new mongoose.Schema(
  {
    roll: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    batch: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true },
    score: { type: mongoose.Schema.Types.Mixed, required: true },
    status: { type: String, required: true, trim: true },
  },
  { timestamps: true }
)

export default mongoose.model('ResultRecord', ResultRecordSchema)
