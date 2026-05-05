import { motion } from 'framer-motion'
import { FaAtom, FaCalculator, FaFlask } from 'react-icons/fa'
import { SectionHeading } from './SectionHeading'
import { FACULTY } from '../data/siteData'

const iconMap = {
  Maths: FaCalculator,
  Physics: FaAtom,
  Chemistry: FaFlask,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42 } },
}

export function Faculty() {
  return (
    <section
      id="faculty"
      className="relative bg-white py-16 md:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Faculty"
          title="Learn from dedicated subject experts"
          subtitle="Focused teaching from experienced mentors for core Science and Maths subjects."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {FACULTY.map((faculty) => {
            const Icon = iconMap[faculty.subject] ?? FaCalculator
            return (
              <motion.article
                key={faculty.subject}
                variants={card}
                className="group rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-cma-blue-muted/45 p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-cma-blue/35 hover:shadow-md dark:border-slate-800 dark:from-slate-900 dark:to-cma-blue-dark/20"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cma-blue text-white shadow-md shadow-cma-blue/25 transition group-hover:scale-105 dark:bg-cma-yellow dark:text-cma-blue-dark">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-wider text-cma-magenta dark:text-cma-yellow">
                  {faculty.subject}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  {faculty.name}
                </h3>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
