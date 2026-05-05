import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { SectionHeading } from './SectionHeading'
import {
  ADDRESS,
  CLASS_OPTIONS,
  COACHING_TIMINGS,
  DIRECTOR_NAME,
  EMAIL,
  FOUNDER_IMAGE_SRC,
  INSTAGRAM_HANDLE,
  MAP_EMBED_URL,
  MAPS_DIRECTIONS_URL,
  OTHER_PHONE_DISPLAY,
  OTHER_PHONE_TEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIAL_LINKS,
  getWhatsAppUrl,
} from '../data/siteData'

const initialForm = {
  name: '',
  phone: '',
  class: '',
  message: '',
}

const getClassLabel = (classValue) =>
  CLASS_OPTIONS.find((option) => option.value === classValue)?.label || 'Not selected'

const buildEnquiryMessage = (formData) =>
  [
    "Hello, I want to enquire about Career Maker's Academy.",
    '',
    `Name: ${formData.name.trim() || 'Not provided'}`,
    `Phone: ${formData.phone.trim()}`,
    `Class / program: ${getClassLabel(formData.class)}`,
    `Message: ${formData.message.trim() || 'Not provided'}`,
  ].join('\n')

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setError('')
    if (submitted) setSubmitted(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.phone.trim()) {
      setError('Please enter your phone number so we can call you back.')
      return
    }
    const whatsappUrl = getWhatsAppUrl(buildEnquiryMessage(form))
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    if (!whatsappWindow) {
      window.location.href = whatsappUrl
    }
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-cma-blue-muted via-white to-cma-yellow-soft py-16 md:py-24 dark:from-slate-950 dark:via-slate-950 dark:to-cma-blue-dark/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(242,179,39,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Start your journey today"
          subtitle="One message is all it takes. We respond quickly on phone and WhatsApp."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            className="flex flex-col gap-6 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-8"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
          >
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Quick actions
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Tap to connect instantly — no forms required.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-cma-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-cma-blue-dark dark:bg-cma-blue dark:hover:bg-cma-blue-dark"
              >
                <FaPhoneAlt /> Call Now
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                <FaWhatsapp /> WhatsApp Now
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                <FaMapMarkerAlt /> Get Directions
              </a>
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-50 p-4 text-sm dark:bg-slate-800/60">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-4 dark:border-slate-700">
                <img
                  src={FOUNDER_IMAGE_SRC}
                  alt={`${DIRECTOR_NAME}, Director and Founder`}
                  className="h-20 w-20 shrink-0 rounded-2xl bg-cma-blue-muted object-cover object-top dark:bg-slate-900"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-cma-yellow">
                    Director / Founder
                  </p>
                  <p className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {DIRECTOR_NAME}
                  </p>
                </div>
              </div>
              <p className="flex gap-2 text-slate-700 dark:text-slate-200">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-cma-blue" />
                <span>{ADDRESS}</span>
              </p>
              <p className="flex gap-2 text-slate-700 dark:text-slate-200">
                <FaPhoneAlt className="mt-0.5 shrink-0 text-cma-blue" />
                <span>
                  Phone:{' '}
                  <a href={`tel:${PHONE_TEL}`} className="font-medium hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </span>
              </p>
              <p className="flex gap-2 text-slate-700 dark:text-slate-200">
                <FaPhoneAlt className="mt-0.5 shrink-0 text-cma-blue" />
                <span>
                  Other number:{' '}
                  <a
                    href={`tel:${OTHER_PHONE_TEL}`}
                    className="font-medium hover:underline"
                  >
                    {OTHER_PHONE_DISPLAY}
                  </a>
                </span>
              </p>
              <p className="flex gap-2 text-slate-700 dark:text-slate-200">
                <FaInstagram className="mt-0.5 shrink-0 text-cma-blue" />
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </p>
              {EMAIL ? (
                <p className="flex gap-2 text-slate-700 dark:text-slate-200">
                  <HiMail className="mt-0.5 h-4 w-4 shrink-0 text-cma-blue" />
                  <a href={`mailto:${EMAIL}`} className="hover:underline">
                    {EMAIL}
                  </a>
                </p>
              ) : null}
              <p className="font-medium text-slate-800 dark:text-slate-100">
                Timings: {COACHING_TIMINGS}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 md:p-8"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Enquiry form
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              We’ll reach out with batch timings and fee structure.
            </p>

            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-cma-blue/0 transition focus:border-cma-blue focus:ring-4 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-cma-blue/0 transition focus:border-cma-blue focus:ring-4 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="10-digit mobile"
                />
              </div>
              <div>
                <label
                  htmlFor="class"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Class / program
                </label>
                <select
                  id="class"
                  name="class"
                  value={form.class}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-cma-blue/0 transition focus:border-cma-blue focus:ring-4 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                >
                  <option value="">Select…</option>
                  {CLASS_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Message <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={onChange}
                  className="mt-1 w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 outline-none ring-cma-blue/0 transition focus:border-cma-blue focus:ring-4 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  placeholder="Goals, preferred batch timing, etc."
                />
              </div>

              {error ? (
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cma-blue to-cma-blue-dark py-3 text-base font-semibold text-white shadow-md shadow-cma-blue/25 transition hover:brightness-110"
              >
                Submit enquiry
              </button>
            </form>

            <AnimatePresence>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-2xl border border-cma-blue/25 bg-cma-blue-muted px-4 py-3 text-sm font-medium text-cma-blue-dark dark:border-cma-yellow/30 dark:bg-cma-blue/20 dark:text-cma-yellow-soft"
                >
                  Your enquiry details are ready in WhatsApp. Please tap send
                  there to share them with us.
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-md dark:border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            title="Coaching centre location"
            src={MAP_EMBED_URL}
            className="h-72 w-full border-0 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
