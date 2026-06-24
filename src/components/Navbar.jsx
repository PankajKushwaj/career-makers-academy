import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { NAV_LINKS, getWhatsAppUrl } from '../data/siteData'
import { BrandLockup } from './BrandLockup'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`sticky top-0 z-50 border-b border-sky-200/80 transition-colors ${
        scrolled
          ? 'bg-sky-100 shadow-sm backdrop-blur-md'
          : 'bg-sky-50 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex min-w-0 items-center"
          onClick={closeMenu}
        >
          <BrandLockup
            tone="neutral"
            logoClassName="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20"
            showTagline={false}
            textClassName="text-base md:text-xl"
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-cma-blue-muted hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-cma-yellow px-4 py-2 text-sm font-semibold text-black shadow-md shadow-cma-yellow/35 transition hover:brightness-105"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-black md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-sky-200 bg-sky-50 md:hidden"
          >
            <ul className="flex flex-col px-4 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-900 hover:bg-sky-100 hover:text-black"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl bg-cma-yellow px-3 py-3 text-center text-base font-semibold text-black"
                  onClick={closeMenu}
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
