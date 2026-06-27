import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const ADMIN_ROLES = ['superadmin', 'contentadmin', 'teacher']

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minlength: 8,
    },
    role: {
      type: String,
      enum: ADMIN_ROLES,
      default: 'superadmin',
    },
  },
  { timestamps: true }
)

adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

adminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.model('Admin', adminSchema)
