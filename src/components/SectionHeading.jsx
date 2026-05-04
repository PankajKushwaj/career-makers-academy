import { motion } from 'framer-motion'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = '',
  align = 'center',
}) {
  const alignClass =
    align === 'left'
      ? 'text-left'
      : 'text-center mx-auto max-w-2xl'

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className={`mb-10 md:mb-14 ${alignClass} ${className}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wider text-cma-magenta dark:text-cma-yellow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base text-slate-600 md:text-lg dark:text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  )
}
