import { motion } from 'framer-motion'
import {
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaQuestionCircle,
  FaUserFriends,
  FaBook,
  FaTrophy,
} from 'react-icons/fa'
import { SectionHeading } from './SectionHeading'
import { WHY_CHOOSE_US } from '../data/siteData'

const iconMap = {
  teachers: FaChalkboardTeacher,
  tests: FaClipboardCheck,
  doubt: FaQuestionCircle,
  attention: FaUserFriends,
  material: FaBook,
  results: FaTrophy,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
}

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-gradient-to-br from-cma-yellow-soft via-white to-cma-blue-muted py-16 md:py-24 dark:from-slate-900 dark:via-slate-950 dark:to-cma-blue-dark/50"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(75,95,165,0.14),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Why us"
          title="Why families choose our centre"
          subtitle="We combine discipline with empathy — so students improve steadily without burning out."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {WHY_CHOOSE_US.map((f) => {
            const Icon = iconMap[f.icon] ?? FaTrophy
            return (
              <motion.div
                key={f.title}
                variants={card}
                className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cma-blue-muted text-cma-blue dark:bg-cma-blue/25 dark:text-cma-yellow">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
