import { LOGO_SRC, SITE_NAME } from '../data/siteData'

export function BrandLockup({
  className = '',
  dark = false,
  logoClassName = 'h-16 w-16 md:h-20 md:w-20',
  showTagline = true,
  textClassName = 'text-lg md:text-xl',
}) {
  const careerColor = dark
    ? 'text-white'
    : 'bg-gradient-to-r from-cma-blue-dark to-cma-blue bg-clip-text text-transparent'
  const taglineColor = dark ? 'text-white/65' : 'text-slate-500'
  const academyShadow = dark
    ? '0 1px 10px rgba(242, 179, 39, 0.2)'
    : '0 1px 2px rgba(58, 74, 122, 0.75), 0 0 1px rgba(58, 74, 122, 0.9)'

  return (
    <div className={`flex min-w-0 items-center gap-4 ${className}`}>
      <img
        src={LOGO_SRC}
        alt={SITE_NAME}
        className={`shrink-0 object-contain ${logoClassName}`}
      />
      <span className="min-w-0">
        <span
          className={`block font-display ${textClassName} font-extrabold leading-tight drop-shadow-sm`}
        >
          <span className={careerColor}>Career</span>{' '}
          <span className="text-cma-yellow">Makers</span>{' '}
          <span className="text-white" style={{ textShadow: academyShadow }}>
            Academy
          </span>
        </span>
        {showTagline ? (
          <span className={`mt-0.5 block text-xs font-semibold ${taglineColor}`}>
            Learn. Build. Become.
          </span>
        ) : null}
      </span>
    </div>
  )
}
