import { motion } from 'framer-motion'
import {
  FaBookOpen,
  FaGraduationCap,
  FaLightbulb,
  FaPencilAlt,
} from 'react-icons/fa'
import {
  DIRECTOR_NAME,
  FOUNDER_IMAGE_SRC,
  SITE_TAGLINE,
  getWhatsAppUrl,
} from '../data/siteData'
import { BrandLockup } from './BrandLockup'

const floatIcons = [
  { Icon: FaGraduationCap, className: 'left-[8%] top-[18%] text-cma-blue/90' },
  { Icon: FaBookOpen, className: 'right-[10%] top-[22%] text-cma-yellow/90' },
  { Icon: FaLightbulb, className: 'left-[14%] bottom-[28%] text-cma-yellow/85' },
  { Icon: FaPencilAlt, className: 'right-[16%] bottom-[24%] text-cma-blue/85' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-cma-blue-muted via-white to-cma-yellow-soft dark:from-slate-950 dark:via-slate-950 dark:to-cma-blue-dark/80"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(75,95,165,0.2), transparent 45%), radial-gradient(circle at 80% 10%, rgba(242,179,39,0.18), transparent 40%), radial-gradient(circle at 50% 80%, rgba(75,95,165,0.1), transparent 45%)',
        }}
      />

      {floatIcons.map(({ Icon, className }, i) => (
        <motion.div
          key={className}
          className={`pointer-events-none absolute hidden text-4xl md:block ${className}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.55, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 0.2 + i * 0.08, duration: 0.5 },
            y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
          }}
          aria-hidden
        >
          <Icon />
        </motion.div>
      ))}

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-14 md:flex-row md:items-center md:px-6 md:pb-24 md:pt-20">
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <BrandLockup
              logoClassName="h-24 w-24 md:h-28 md:w-28"
              textClassName="text-3xl md:text-4xl"
            />
          </motion.div>
          <motion.p
            className="mt-5 text-sm font-semibold text-cma-blue dark:text-cma-yellow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            Admissions open · Limited seats
          </motion.p>
          <motion.h1
            className="font-display mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Crack Your Exams With Expert Coaching
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {SITE_TAGLINE} Quality teaching, structured tests, and personal
            guidance so you stay confident from day one to exam day.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cma-blue to-cma-blue-dark px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cma-blue/25 transition hover:brightness-110"
            >
              Book Free Demo Class
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-cma-blue/35 bg-white/90 px-6 py-3.5 text-base font-semibold text-cma-blue backdrop-blur transition hover:border-cma-blue hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-900"
            >
              WhatsApp Now
            </a>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <span className="rounded-full border border-cma-blue/15 bg-white/80 px-3 py-1 font-medium text-cma-blue-dark shadow-sm dark:border-cma-yellow/25 dark:bg-slate-800/80 dark:text-cma-yellow">
              Boards · JEE · NEET
            </span>
            <span className="rounded-full border border-cma-blue/15 bg-white/80 px-3 py-1 font-medium text-cma-blue-dark shadow-sm dark:border-cma-yellow/25 dark:bg-slate-800/80 dark:text-cma-yellow">
              Small batches
            </span>
            <span className="rounded-full border border-cma-blue/15 bg-white/80 px-3 py-1 font-medium text-cma-blue-dark shadow-sm dark:border-cma-yellow/25 dark:bg-slate-800/80 dark:text-cma-yellow">
              Proven methodology
            </span>
          </motion.div>
        </div>

        <motion.div
          className="relative flex flex-1 justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-cma-blue/15 bg-gradient-to-br from-white via-cma-blue-muted to-cma-yellow-soft shadow-xl shadow-cma-blue/10 backdrop-blur-md dark:border-slate-700/80 dark:from-slate-900 dark:via-slate-900 dark:to-cma-blue-dark">
            <div className="relative flex min-h-[360px] items-end justify-center px-4 pt-8">
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cma-blue/20 to-transparent" />
              <img
                src={FOUNDER_IMAGE_SRC}
                alt={`${DIRECTOR_NAME}, Director and Founder of Career Maker's Academy`}
                className="relative z-10 h-[340px] w-full object-contain object-bottom drop-shadow-2xl md:h-[390px]"
              />
            </div>
            <div className="relative border-t border-white/70 bg-white/90 px-6 py-5 text-left backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
              <p className="text-xs font-bold uppercase tracking-wider text-cma-yellow">
                Director / Founder
              </p>
              <h2 className="font-display mt-1 text-2xl font-extrabold text-cma-blue-dark dark:text-white">
                {DIRECTOR_NAME}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Guiding students with focused teaching, steady discipline, and
                personal attention at every step.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
