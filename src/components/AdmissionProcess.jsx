import { motion } from 'framer-motion'
import { FaClipboardList, FaPhoneAlt, FaRocket, FaUserGraduate } from 'react-icons/fa'
import { SectionHeading } from './SectionHeading'
import { ADMISSION_PROCESS_STEPS, getWhatsAppUrl } from '../data/siteData'

const icons = [FaClipboardList, FaPhoneAlt, FaRocket, FaUserGraduate]

export function AdmissionProcess() {
  return (
    <section
      id="admission-process"
      className="relative overflow-hidden bg-white py-16 md:py-24 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,179,39,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Admission flow"
          title="From enquiry to learning in four simple steps"
          subtitle="A clear process that helps parents and students make a confident decision without confusion."
        />

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.45 }}
          >
            {ADMISSION_PROCESS_STEPS.map((step, index) => {
              const Icon = icons[index] ?? FaClipboardList
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-30px' }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cma-blue-muted text-cma-blue dark:bg-cma-blue/20 dark:text-cma-yellow">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-cma-magenta dark:text-cma-yellow">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            className="rounded-3xl border border-cma-blue/20 bg-gradient-to-br from-cma-blue-dark via-cma-blue to-cma-blue-dark p-7 text-white shadow-xl shadow-cma-blue/15"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cma-yellow">
              Fast response
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold">
              Book a free demo class today
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-100">
              Get guidance on the right course, batch timings, and admission details from our team.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-cma-yellow px-4 py-3 text-sm font-semibold text-cma-blue-dark transition hover:brightness-105"
              >
                Apply now
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                WhatsApp us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
