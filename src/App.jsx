import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Courses } from './components/Courses'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Faculty } from './components/Faculty'
import { Results } from './components/Results'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

function App() {
  useEffect(() => {
    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest('a[href^="#"]')
      if (!anchor || anchor.target === '_blank') return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const id = href.slice(1)
      const element = document.getElementById(id)
      if (!element) return

      event.preventDefault()
      window.history.pushState(null, '', href)

      window.setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 40)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return (
    <motion.div
      className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <WhyChooseUs />
        <Faculty />
        <Results />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </motion.div>
  )
}

export default App
