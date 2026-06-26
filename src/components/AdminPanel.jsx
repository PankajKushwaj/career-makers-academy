import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  STORAGE_KEYS_EXPORT,
  loadData,
  saveData,
  TESTIMONIALS,
  GALLERY_SLIDES,
  RESULT_IMAGES,
  RESULT_RECORDS,
  NOTICES,
  COURSES,
} from '../data/siteData'

const sections = [
  { id: 'results', label: 'Results' },
  { id: 'result-images', label: 'Result Images' },
  { id: 'yearly-toppers', label: 'Yearly Toppers' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'notices', label: 'Notices' },
  { id: 'testimonials', label: 'Testimonials' },
]

const emptyResult = { roll: '', name: '', course: '', batch: '', year: '', score: '', status: '' }
const emptyResultImage = { id: '', src: '', title: '', caption: '', year: '' }
const emptyYearlyTopper = {
  id: '',
  year: '',
  name: '',
  course: '',
  rank: '',
  percentage: '',
  image: '',
}
const emptyGallery = { src: '', category: '', caption: '' }
const emptyNotice = { id: '', title: '', message: '', type: 'info' }
const emptyTestimonial = { name: '', course: '', image: '', rating: 5, parent: '', text: '', story: '', video: false }

function useLocalCollection(key, defaultItems) {
  const [items, setItems] = useState(() => loadData(key, defaultItems))

  useEffect(() => {
    saveData(key, items)
  }, [items, key])

  return [items, setItems]
}

export function AdminPanel({ onLogout }) {
  const [activeSection, setActiveSection] = useState('results')
  const [results, setResults] = useLocalCollection(STORAGE_KEYS_EXPORT.results, RESULT_RECORDS)
  const [resultImages, setResultImages] = useLocalCollection(STORAGE_KEYS_EXPORT.resultImages, RESULT_IMAGES)
  const [yearlyToppers, setYearlyToppers] = useLocalCollection(STORAGE_KEYS_EXPORT.yearlyToppers, [])
  const [gallery, setGallery] = useLocalCollection(STORAGE_KEYS_EXPORT.gallery, GALLERY_SLIDES)
  const [notices, setNotices] = useLocalCollection(STORAGE_KEYS_EXPORT.notices, NOTICES)
  const [testimonials, setTestimonials] = useLocalCollection(STORAGE_KEYS_EXPORT.testimonials, TESTIMONIALS)

  const activeItems = useMemo(() => {
    switch (activeSection) {
      case 'results':
        return results
      case 'result-images':
        return resultImages
      case 'yearly-toppers':
        return yearlyToppers
      case 'gallery':
        return gallery
      case 'notices':
        return notices
      case 'testimonials':
        return testimonials
      default:
        return []
    }
  }, [activeSection, results, resultImages, gallery, notices, testimonials])

  const setActiveItems = (items) => {
    switch (activeSection) {
      case 'results':
        setResults(items)
        break
      case 'result-images':
        setResultImages(items)
        break
      case 'yearly-toppers':
        setYearlyToppers(items)
        break
      case 'gallery':
        setGallery(items)
        break
      case 'notices':
        setNotices(items)
        break
      case 'testimonials':
        setTestimonials(items)
        break
    }
  }

  const addItem = () => {
    switch (activeSection) {
      case 'results':
        setResults([...results, { ...emptyResult, id: crypto.randomUUID() }])
        break
      case 'result-images':
        setResultImages([...resultImages, { ...emptyResultImage, id: crypto.randomUUID() }])
        break
      case 'yearly-toppers':
        setYearlyToppers([...yearlyToppers, { ...emptyYearlyTopper, id: crypto.randomUUID() }])
        break
      case 'gallery':
        setGallery([...gallery, { ...emptyGallery, id: crypto.randomUUID() }])
        break
      case 'notices':
        setNotices([...notices, { ...emptyNotice, id: crypto.randomUUID() }])
        break
      case 'testimonials':
        setTestimonials([...testimonials, { ...emptyTestimonial, id: crypto.randomUUID() }])
        break
    }
  }

  const updateField = (index, field, value) => {
    const updated = [...activeItems]
    updated[index] = { ...updated[index], [field]: value }
    setActiveItems(updated)
  }

  const removeItem = (index) => {
    const updated = [...activeItems]
    updated.splice(index, 1)
    setActiveItems(updated)
  }

  return (
    <section className="min-h-screen bg-slate-100 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.21em] text-cma-magenta dark:text-cma-yellow">
                Admin panel
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Website content manager</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
                Update results, gallery images, notices, and testimonials directly from this panel. Changes are stored locally in your browser.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  activeSection === section.id
                    ? 'bg-cma-blue text-white'
                    : 'border border-slate-300 bg-white text-slate-700 hover:border-cma-blue hover:text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{sections.find((section) => section.id === activeSection)?.label}</h2>
            <button
              type="button"
              onClick={addItem}
              className="rounded-2xl bg-cma-yellow px-4 py-2 text-sm font-semibold text-cma-blue-dark transition hover:brightness-105"
            >
              Add new item
            </button>
          </div>

          <div className="space-y-4">
            {activeItems.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                No items yet. Use the button above to add your first record.
              </div>
            ) : (
              activeItems.map((item, index) => (
                <motion.div
                  key={item.id ?? index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">Item {index + 1}</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="rounded-2xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50 dark:border-red-700/40 dark:text-red-300 dark:hover:bg-red-900/30"
                      >
                        Remove
                      </button>
                      {onLogout ? (
                        <button
                          type="button"
                          onClick={onLogout}
                          className="rounded-2xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        >
                          Logout
                        </button>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    {activeSection === 'results' && (
                      <>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Roll number
                          <input
                            value={item.roll}
                            onChange={(event) => updateField(index, 'roll', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Name
                          <input
                            value={item.name}
                            onChange={(event) => updateField(index, 'name', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Course
                          <input
                            value={item.course}
                            onChange={(event) => updateField(index, 'course', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Batch
                          <input
                            value={item.batch}
                            onChange={(event) => updateField(index, 'batch', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Year
                          <input
                            value={item.year}
                            onChange={(event) => updateField(index, 'year', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Score
                          <input
                            value={item.score}
                            onChange={(event) => updateField(index, 'score', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Status
                          <input
                            value={item.status}
                            onChange={(event) => updateField(index, 'status', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                      </>
                    )}

                    {activeSection === 'result-images' && (
                      <>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Image URL
                          <input
                            value={item.src}
                            onChange={(event) => updateField(index, 'src', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Title
                          <input
                            value={item.title}
                            onChange={(event) => updateField(index, 'title', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Caption
                          <textarea
                            value={item.caption}
                            onChange={(event) => updateField(index, 'caption', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            rows={3}
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Year
                          <input
                            value={item.year}
                            onChange={(event) => updateField(index, 'year', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                      </>
                    )}

                    {activeSection === 'yearly-toppers' && (
                      <>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Year
                          <input
                            value={item.year}
                            onChange={(event) => updateField(index, 'year', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Student name
                          <input
                            value={item.name}
                            onChange={(event) => updateField(index, 'name', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Course
                          <input
                            value={item.course}
                            onChange={(event) => updateField(index, 'course', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Rank
                          <input
                            value={item.rank}
                            onChange={(event) => updateField(index, 'rank', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Percentage
                          <input
                            value={item.percentage}
                            onChange={(event) => updateField(index, 'percentage', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Image URL
                          <input
                            value={item.image}
                            onChange={(event) => updateField(index, 'image', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                      </>
                    )}

                    {activeSection === 'gallery' && (
                      <>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Image URL
                          <input
                            value={item.src}
                            onChange={(event) => updateField(index, 'src', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Category
                          <input
                            value={item.category}
                            onChange={(event) => updateField(index, 'category', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Caption
                          <textarea
                            value={item.caption}
                            onChange={(event) => updateField(index, 'caption', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            rows={3}
                          />
                        </label>
                      </>
                    )}

                    {activeSection === 'notices' && (
                      <>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Title
                          <input
                            value={item.title}
                            onChange={(event) => updateField(index, 'title', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Message
                          <textarea
                            value={item.message}
                            onChange={(event) => updateField(index, 'message', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            rows={4}
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Type
                          <select
                            value={item.type}
                            onChange={(event) => updateField(index, 'type', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          >
                            <option value="info">Info</option>
                            <option value="success">Success</option>
                            <option value="warning">Warning</option>
                          </select>
                        </label>
                      </>
                    )}

                    {activeSection === 'testimonials' && (
                      <>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Name
                          <input
                            value={item.name}
                            onChange={(event) => updateField(index, 'name', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Course
                          <input
                            value={item.course}
                            onChange={(event) => updateField(index, 'course', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Review text
                          <textarea
                            value={item.text}
                            onChange={(event) => updateField(index, 'text', event.target.value)}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            rows={4}
                          />
                        </label>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                          Rating
                          <input
                            type="number"
                            min="1"
                            max="5"
                            value={item.rating}
                            onChange={(event) => updateField(index, 'rating', Number(event.target.value))}
                            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-cma-blue focus:ring-2 focus:ring-cma-blue/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                          />
                        </label>
                      </>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
