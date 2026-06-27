import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { YEARLY_TOPPERS, STORAGE_KEYS_EXPORT, loadData } from '../data/siteData'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export function YearlyToppers() {
  const [toppers, setToppers] = useState(() => loadData(STORAGE_KEYS_EXPORT.yearlyToppers, YEARLY_TOPPERS))

  useEffect(() => {
    const loadToppers = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/yearly-toppers`)
        if (!response.ok) return
        const data = await response.json()
        setToppers(Array.isArray(data) ? data : [])
      } catch {
        // fall back to local data
      }
    }

    loadToppers()
  }, [])

  if (!toppers.length) {
    return null
  }

  return (
    <section className="bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-cma-yellow">
            Yearly toppers
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Top performers by year
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 md:text-lg">
            Publish year-by-year topper records with their course, rank, percentage, and result photo.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {toppers.map((topper) => (
            <motion.article
              key={topper.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-20px' }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-28 w-28 overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800">
                  {topper.image ? (
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-slate-500">
                      No image
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cma-magenta dark:text-cma-yellow">
                    {topper.year}
                  </p>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {topper.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{topper.course}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/90 p-4 text-sm shadow-sm dark:bg-slate-950 dark:text-slate-200">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Rank</p>
                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">{topper.rank || 'Topper'}</p>
                </div>
                <div className="rounded-3xl bg-white/90 p-4 text-sm shadow-sm dark:bg-slate-950 dark:text-slate-200">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Percentage</p>
                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">{topper.percentage || '—'}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
