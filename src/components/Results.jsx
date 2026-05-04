import { motion } from 'framer-motion'
import { AnimatedCounter } from './AnimatedCounter'
import { STATS } from '../data/siteData'

export function Results() {
  return (
    <section
      id="results"
      className="relative bg-cma-blue-dark py-16 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(75,95,165,0.5), transparent 50%), radial-gradient(circle at 80% 70%, rgba(242,179,39,0.2), transparent 45%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-cma-yellow">
            Track record
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Results that speak louder than ads
          </h2>
          <p className="mt-3 text-base text-slate-300 md:text-lg">
            Numbers from our journey so far — every student adds a new story.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <p className="font-display text-4xl font-bold tabular-nums text-white md:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
