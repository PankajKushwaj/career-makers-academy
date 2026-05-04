import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa'
import {
  ADDRESS,
  DIRECTOR_NAME,
  EMAIL,
  INSTAGRAM_HANDLE,
  NAV_LINKS,
  OTHER_PHONE_DISPLAY,
  OTHER_PHONE_TEL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  SITE_TAGLINE,
  SOCIAL_LINKS,
} from '../data/siteData'
import { BrandLockup } from './BrandLockup'

const social = [
  { href: SOCIAL_LINKS.facebook, Icon: FaFacebookF, label: 'Facebook' },
  { href: SOCIAL_LINKS.instagram, Icon: FaInstagram, label: 'Instagram' },
  { href: SOCIAL_LINKS.youtube, Icon: FaYoutube, label: 'YouTube' },
  { href: SOCIAL_LINKS.linkedin, Icon: FaLinkedinIn, label: 'LinkedIn' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-cma-blue/25 bg-cma-blue-dark text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLockup dark logoClassName="h-20 w-20" textClassName="text-2xl" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              {SITE_TAGLINE}
            </p>
            <div className="mt-5 flex gap-2">
              {social.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-cma-yellow hover:text-cma-blue-dark"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/70 transition hover:text-cma-yellow"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#why-us"
                  className="text-white/70 transition hover:text-cma-yellow"
                >
                  Why choose us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/70 transition hover:text-cma-yellow"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>{ADDRESS}</li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="transition hover:text-cma-yellow">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${OTHER_PHONE_TEL}`}
                  className="transition hover:text-cma-yellow"
                >
                  {OTHER_PHONE_DISPLAY}
                </a>
              </li>
              <li>Director / Founder: {DIRECTOR_NAME}</li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cma-yellow"
                >
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </li>
              {EMAIL ? (
                <li>
                  <a href={`mailto:${EMAIL}`} className="transition hover:text-cma-yellow">
                    {EMAIL}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {year} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
