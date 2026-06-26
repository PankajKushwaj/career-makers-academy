import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { RESULT_IMAGES, STORAGE_KEYS_EXPORT, loadData } from '../data/siteData'

export function ResultImages() {
  const resultImages = useMemo(
    () => loadData(STORAGE_KEYS_EXPORT.resultImages, RESULT_IMAGES),
    [],
  )

  if (!resultImages.length) {
    return null
  }

  return (
    <section className="bg-slate-50 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-cma-yellow">
            Result gallery
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Uploaded result snapshots
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 md:text-lg">
            Share verified student result images to showcase success, certificates, and merit achievements.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resultImages.map((image) => (
            <motion.article
              key={image.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-20px' }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={image.src}
                  alt={image.title || 'Result image'}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cma-magenta dark:text-cma-yellow">
                    {image.year || 'Year unknown'}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {image.title || 'Result image'}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {image.caption || 'Add a caption inside the admin panel to describe this result image.'}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
