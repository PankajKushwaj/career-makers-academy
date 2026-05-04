import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SectionHeading } from './SectionHeading'
import { GALLERY_SLIDES } from '../data/siteData'

const AUTO_MS = 3000

export function Gallery() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [paused, setPaused] = useState(false)
  const resumeRef = useRef(null)

  const len = GALLERY_SLIDES.length

  const go = useCallback(
    (delta) => {
      setDirection(delta)
      setIndex((i) => (i + delta + len) % len)
    },
    [len],
  )

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => go(1), AUTO_MS)
    return () => clearInterval(id)
  }, [paused, go, index])

  const onMouseEnter = () => {
    if (resumeRef.current) clearTimeout(resumeRef.current)
    setPaused(true)
  }

  const onMouseLeave = () => {
    resumeRef.current = setTimeout(() => setPaused(false), 400)
  }

  const slide = GALLERY_SLIDES[index]

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-cma-blue-muted/50 to-white py-16 md:py-24 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Life at Our Coaching Centre"
          subtitle="Real moments from our centre — awards, results celebrations, and the community behind every success."
        />

        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={slide.src + index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'tween', duration: 0.45, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={slide.src}
                  alt={slide.caption}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 pb-4 pt-16 md:px-6 md:pb-5">
                  <p className="text-center font-display text-base font-semibold text-white md:text-lg">
                    {slide.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur transition hover:bg-white md:left-4 md:h-12 md:w-12"
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-md backdrop-blur transition hover:bg-white md:right-4 md:h-12 md:w-12"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {GALLERY_SLIDES.map((_, i) => (
              <button
                key={_.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1)
                  setIndex(i)
                }}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? 'w-9 bg-cma-blue'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
            Auto-advances every 3s · pauses on hover
          </p>
        </motion.div>
      </div>
    </section>
  )
}
