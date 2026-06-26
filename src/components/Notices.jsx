import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { NOTICES, STORAGE_KEYS_EXPORT, loadData } from '../data/siteData'

export function Notices() {
  const notices = useMemo(
    () => loadData(STORAGE_KEYS_EXPORT.notices, NOTICES),
    [],
  )

  if (!notices.length) {
    return null
  }

  return (
    <section className="bg-cma-blue-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 md:px-6 md:py-5">
        <div className="grid gap-4 md:grid-cols-3">
          {notices.map((notice) => (
            <motion.article
              key={notice.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-sm backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cma-yellow">
                {notice.type}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{notice.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{notice.message}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
