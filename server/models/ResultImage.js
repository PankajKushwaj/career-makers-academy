import mongoose from 'mongoose'

const ResultImageSchema = new mongoose.Schema(
  {
    src: { type: String, required: true, trim: true },
    public_id: { type: String, trim: true },
    title: { type: String, trim: true, default: '' },
    caption: { type: String, trim: true, default: '' },
    year: { type: String, trim: true, default: '' },
  },
  { timestamps: true }
)

export default mongoose.model('ResultImage', ResultImageSchema)
