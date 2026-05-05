/**
 * Replace values here to customize the site (branding, contact, links).
 * WhatsApp number: country code + number, digits only (no + or spaces).
 */

export const SITE_NAME = "Career Maker's Academy"
/** Logo file in /public — swap the PNG to update artwork */
export const LOGO_SRC = '/logo.png'
export const FOUNDER_IMAGE_SRC = '/founder.png'

export const SITE_TAGLINE =
  "Let's build your career — expert coaching for boards, JEE, NEET & beyond, with personal attention at every step."

export const WHATSAPP_NUMBER = '918769516329'
export const WHATSAPP_MESSAGE =
  'Hello, I want to know about your coaching classes.'

export const PHONE_DISPLAY = '+91 87695 16329'
export const PHONE_TEL = '+918769516329'
export const OTHER_PHONE_DISPLAY = '+91 74259 26655'
export const OTHER_PHONE_TEL = '+917425926655'
export const EMAIL = ''
export const DIRECTOR_NAME = 'Er. Shobhit Pandey'
export const INSTAGRAM_HANDLE = '@cma_dholpur'

export const ADDRESS =
  "Career Maker's Academy CMA, Behind Rana Marriage Garden, SR Colony, GT Road, Dholpur - 328001, Rajasthan"

export const COACHING_TIMINGS = 'Daily: 7:00 AM – 7:30 PM (Mon–Sun)'

/** Google Maps search URL for “Get directions” — swap for your location */
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

/** Google Maps embed generated from the coaching centre address. */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://www.instagram.com/cma_dholpur/',
  youtube: 'https://youtube.com',
  linkedin: 'https://linkedin.com',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Results', href: '#results' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const COURSES = [
  {
    id: 'c1',
    title: 'Class 9–10 Foundation',
    description:
      'Strong basics in Maths & Science with exam-style practice and mentoring.',
    icon: 'foundation',
  },
  {
    id: 'c2',
    title: 'Class 11–12 Science',
    description:
      'PCM/PCB tracks with structured notes, tests, and board + competitive alignment.',
    icon: 'science',
  },
  {
    id: 'c4',
    title: 'JEE Preparation',
    description:
      'Concept-first problem solving, DPPs, and full tests for JEE Main & Advanced.',
    icon: 'jee',
  },
  {
    id: 'c5',
    title: 'NEET Preparation',
    description:
      'NCERT-deep Biology, Chemistry & Physics with clinical-style MCQ practice.',
    icon: 'neet',
  },
  {
    id: 'c6',
    title: 'Spoken English / Computer Basics',
    description:
      'Communication confidence plus practical digital skills for school & career.',
    icon: 'skills',
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced teachers',
    description:
      'Faculty with years of classroom results and a calm, student-first approach.',
    icon: 'teachers',
  },
  {
    title: 'Weekly tests',
    description:
      'Timed assessments with feedback so gaps never pile up till the exam.',
    icon: 'tests',
  },
  {
    title: 'Doubt solving',
    description:
      'Dedicated doubt counters and one-on-one clarity when you need it.',
    icon: 'doubt',
  },
  {
    title: 'Personal attention',
    description:
      'Smaller batches and tracking — no student gets lost in the crowd.',
    icon: 'attention',
  },
  {
    title: 'Updated study material',
    description:
      'Notes and sheets refreshed every session to match the latest pattern.',
    icon: 'material',
  },
  {
    title: 'Result-focused teaching',
    description:
      'We teach for understanding, but every class moves you toward better scores.',
    icon: 'results',
  },
]

export const FACULTY = [
  { subject: 'Maths', name: 'Chanchal Mudgal' },
  { subject: 'Physics', name: 'Shobhit Pandey' },
  { subject: 'Chemistry', name: 'Kishor Shrivastav' },
]

export const STATS = [
  { value: 500, suffix: '+', label: 'Students taught' },
  { value: 95, suffix: '%', label: 'Success rate' },
  { value: 10, suffix: '+', label: 'Years experience' },
  { value: 50, suffix: '+', label: 'Top results' },
]

export const TESTIMONIALS = [
  {
    name: 'Ananya Sharma',
    course: 'NEET · Class 12',
    text: 'The faculty made Biology feel logical. Mock tests here matched the real exam pressure — I felt ready.',
  },
  {
    name: 'Rohan Mehta',
    course: 'JEE · Drop year',
    text: 'Doubt sessions saved me. Every mistake became a lesson. Finally cracked my target college.',
  },
  {
    name: 'Priya Nair',
    course: 'Class 10 Foundation',
    text: 'I was weak in Maths; now I actually enjoy solving problems. Weekly tests kept me consistent.',
  },
  {
    name: 'Pankaj Kushwah',
    course: 'Science · Class 12',
    text: 'Science concepts became much clearer with regular practice, tests, and personal guidance.',
  },
  {
    name: 'Ankush Sharma',
    course: 'Science · Class 12',
    text: 'The teachers explained Physics and Chemistry in a simple way, which helped me stay confident.',
  },
  {
    name: 'Ram Sharma',
    course: 'Science · Class 12',
    text: 'Weekly tests and doubt sessions helped me improve steadily throughout the year.',
  },
  {
    name: 'Aaditya Gurjar',
    course: 'Science · Class 12',
    text: 'The study plan and regular feedback made board preparation feel organised and manageable.',
  },
  {
    name: 'Vinayak Parmar',
    course: 'Science · Class 12',
    text: 'Personal attention from the faculty helped me strengthen my weak topics in Science.',
  },
]

/** Local files in /public/gallery — add or reorder slides here */
export const GALLERY_SLIDES = [
  {
    src: '/gallery/01.png',
    caption:
      "Class 12th RBSE & CBSE achiever honoured — award ceremony at Career Maker's Academy",
  },
  {
    src: '/gallery/02.png',
    caption:
      'Celebrating success — student receives framed award with faculty at CMA, Dholpur',
  },
  {
    src: '/gallery/03.png',
    caption:
      'Recognition in the spotlight — award presentation with our results showcase',
  },
  {
    src: '/gallery/04.png',
    caption:
      'Excellence recognised — ceremony with Class 10th & 12th result displays',
  },
  {
    src: '/gallery/05.png',
    caption:
      'Medal and merit — celebrating board results with the CMA family',
  },
  {
    src: '/gallery/06.png',
    caption:
      'Faculty and achievers — RBSE & CBSE 2024–25 celebration at our centre',
  },
]

export const CLASS_OPTIONS = [
  { value: '9-10', label: 'Class 9–10' },
  { value: '11-12-science', label: 'Class 11–12 Science' },
  { value: 'jee', label: 'JEE' },
  { value: 'neet', label: 'NEET' },
  { value: 'others', label: 'Others' },
]

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
