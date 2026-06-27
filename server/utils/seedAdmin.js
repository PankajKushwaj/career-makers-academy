import Admin from '../models/Admin.js'
import config from '../config/index.js'

export const seedDefaultAdmin = async () => {
  if (!config.ADMIN_USERNAME || !config.ADMIN_EMAIL || !config.ADMIN_PASSWORD) {
    console.warn('Default admin credentials are not set. Skipping seed.')
    return
  }

  const existing = await Admin.findOne({ username: config.ADMIN_USERNAME.toLowerCase() })
  if (existing) {
    return
  }

  await Admin.create({
    username: config.ADMIN_USERNAME.toLowerCase(),
    email: config.ADMIN_EMAIL.toLowerCase(),
    password: config.ADMIN_PASSWORD,
    role: config.ADMIN_ROLE,
  })
  console.log('Default admin seeded.')
}
