import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SectionHeading } from './SectionHeading'
import { TESTIMONIALS } from '../data/siteData'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const len = TESTIMONIALS.length

  const go = useCallback(
    (delta) => {
      setDirection(delta)
      setIndex((i) => (i + delta + len) % len)
    },
    [len],
  )

  useEffect(() => {
    const t = setInterval(() => go(1), 6000)
    return () => clearInterval(t)
  }, [go])

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 48 : -48,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir < 0 ? 48 : -48,
      opacity: 0,
    }),
  }

  const current = TESTIMONIALS[index]

  return (
    <section
      id="testimonials"
      className="bg-white py-16 md:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Voices"
          title="What our students say"
          subtitle="Honest feedback from learners who studied with us — swap these with real quotes anytime."
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/80 md:p-10">
            <FaQuoteLeft
              className="mb-4 text-2xl text-cma-blue/80"
              aria-hidden
            />
            <div className="min-h-[140px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current.name + index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                    “{current.text}”
                  </p>
                  <p className="mt-6 font-display font-bold text-slate-900 dark:text-white">
                    {current.name}
                  </p>
                  <p className="text-sm font-medium text-cma-blue dark:text-cma-yellow">
                    {current.course}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1)
                      setIndex(i)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? 'w-8 bg-cma-blue'
                        : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
