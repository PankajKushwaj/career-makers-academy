import { motion } from 'framer-motion'
import {
  FaSchool,
  FaMicroscope,
  FaRocket,
  FaHeartbeat,
  FaLaptopCode,
} from 'react-icons/fa'
import { SectionHeading } from './SectionHeading'
import { COURSES } from '../data/siteData'

const iconMap = {
  foundation: FaSchool,
  science: FaMicroscope,
  jee: FaRocket,
  neet: FaHeartbeat,
  skills: FaLaptopCode,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function Courses() {
  return (
    <section
      id="courses"
      className="relative bg-gradient-to-b from-white to-cma-blue-muted/40 py-16 md:py-24 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Programs"
          title="Courses designed for real exam success"
          subtitle="From foundation years to competitive entrances — structured paths, caring mentors, and accountability at every step."
        />

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {COURSES.map((course) => {
            const Icon = iconMap[course.icon] ?? FaSchool
            return (
              <motion.article
                key={course.id}
                variants={item}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cma-blue/35 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-cma-yellow/35"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cma-blue to-cma-blue-dark text-white shadow-md shadow-cma-blue/25 transition group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {course.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-cma-yellow py-2.5 text-sm font-semibold text-cma-blue-dark transition hover:brightness-105 dark:bg-cma-yellow dark:text-cma-blue-dark"
                >
                  Enquiry
                </a>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
