import mongoose from 'mongoose'

const YearlyTopperSchema = new mongoose.Schema(
  {
    year: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    rank: { type: String, required: true, trim: true },
    percentage: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    public_id: { type: String, trim: true },
  },
  { timestamps: true }
)

export default mongoose.model('YearlyTopper', YearlyTopperSchema)
