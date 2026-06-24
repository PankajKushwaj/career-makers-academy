/**
 * Central site content for Career Maker's Academy.
 * WhatsApp number: country code + number, digits only.
 */

export const SITE_NAME = "Career Maker's Academy"
export const BRAND_WORDMARK = 'Career Makers Academy'
export const LOGO_SRC = '/logo.png'
export const FOUNDER_IMAGE_SRC = '/founder.png'

export const SITE_TAGLINE =
  'Expert faculty, proven results, and career-focused education for boards, JEE, NEET, and foundation students.'

export const WHATSAPP_NUMBER = '918769516329'
export const WHATSAPP_MESSAGE =
  "Hello, I want to apply for admission at Career Maker's Academy."

export const PHONE_DISPLAY = '+91 87695 16329'
export const PHONE_TEL = '+918769516329'
export const OTHER_PHONE_DISPLAY = '+91 74259 26655'
export const OTHER_PHONE_TEL = '+917425926655'
export const EMAIL = ''
export const DIRECTOR_NAME = 'Er. Shobhit Pandey'
export const INSTAGRAM_HANDLE = '@cma_dholpur'

export const ADDRESS =
  "Career Maker's Academy CMA, Behind Rana Marriage Garden, SR Colony, GT Road, Dholpur - 328001, Rajasthan"

export const COACHING_TIMINGS = 'Daily: 7:00 AM - 7:30 PM (Mon-Sun)'

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
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
  { label: 'Toppers', href: '#toppers' },
  { label: 'Results', href: '#result-portal' },
  { label: 'Apply', href: '#admission' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_STATS = [
  { value: 1000, suffix: '+', label: 'Students' },
  { value: 95, suffix: '%', label: 'Success rate' },
  { value: 12, suffix: '+', label: 'Expert faculty' },
  { value: 5, suffix: '+', label: 'Courses' },
]

export const TRUST_STATS = [
  { value: 10, suffix: '+', label: 'Years of excellence' },
  { value: 1000, suffix: '+', label: 'Students mentored' },
  { value: 300, suffix: '+', label: 'Career selections' },
  { value: 12, suffix: '+', label: 'Faculty mentors' },
]

export const STATS = TRUST_STATS

export const COURSES = [
  {
    id: 'foundation',
    title: 'Class 9-10 Foundation',
    description:
      'Strong fundamentals in Maths and Science with board-focused tests and habit-building mentorship.',
    duration: '10 months',
    eligibility: 'Class 9-10',
    fees: 'Enquire',
    icon: 'foundation',
    highlights: ['NCERT mastery', 'Weekly tests', 'Doubt desk', 'Parent updates'],
  },
  {
    id: 'science',
    title: 'Class 11-12 Science',
    description:
      'PCM/PCB coaching with structured notes, board alignment, and competitive exam readiness.',
    duration: '12 months',
    eligibility: 'Class 11-12',
    fees: 'Enquire',
    icon: 'science',
    highlights: ['Physics', 'Chemistry', 'Maths/Biology', 'Board + entrance'],
  },
  {
    id: 'jee',
    title: 'JEE Preparation',
    description:
      'Concept-first problem solving, DPPs, doubt support, and full-length tests for serious aspirants.',
    duration: '1-2 years',
    eligibility: 'Class 11-12 / Dropper',
    fees: 'Enquire',
    icon: 'jee',
    highlights: ['DPP practice', 'Mock tests', 'Rank tracking', 'Advanced concepts'],
  },
  {
    id: 'neet',
    title: 'NEET Preparation',
    description:
      'NCERT-deep Biology, Chemistry, and Physics with exam-style MCQ practice and analysis.',
    duration: '1-2 years',
    eligibility: 'Class 11-12 / Dropper',
    fees: 'Enquire',
    icon: 'neet',
    highlights: ['NCERT focus', 'MCQ drills', 'Bio mastery', 'Test analysis'],
  },
  {
    id: 'skills',
    title: 'Spoken English / Computer Basics',
    description:
      'Practical communication confidence and digital skills for school, college, and career readiness.',
    duration: '3 months',
    eligibility: 'Open batch',
    fees: 'Enquire',
    icon: 'skills',
    highlights: ['Speaking practice', 'Computer basics', 'Confidence', 'Career skills'],
  },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Faculty',
    description:
      'Subject mentors who simplify tough concepts and keep every learner accountable.',
    icon: 'teachers',
  },
  {
    title: 'Regular Assessments',
    description:
      'Weekly tests, detailed review, and improvement plans before weak areas become habits.',
    icon: 'tests',
  },
  {
    title: 'Career Guidance',
    description:
      'Personal counselling for boards, competitive exams, and realistic academic planning.',
    icon: 'guidance',
  },
  {
    title: 'Personalized Mentorship',
    description:
      'Smaller batches, individual attention, and close progress tracking for each student.',
    icon: 'mentorship',
  },
  {
    title: 'Digital Learning Resources',
    description:
      'Notes, practice material, assignments, and updates designed for modern learners.',
    icon: 'digital',
  },
  {
    title: 'Result-Oriented Approach',
    description:
      'Every class, test, and doubt session is aligned with measurable academic growth.',
    icon: 'results',
  },
]

export const FACULTY = [
  { subject: 'Maths', name: 'Chanchal Mudgal' },
  { subject: 'Physics', name: 'Shobhit Pandey' },
  { subject: 'Chemistry', name: 'Kishor Shrivastav' },
]

export const TOPPERS = [
  {
    name: 'Pankaj Kushwah',
    course: 'Science',
    rank: 'Batch Topper',
    percentage: '96%',
    badge: 'Physics Excellence',
    image: '/gallery/01.png',
    year: '2025',
  },
  {
    name: 'Aaditya Gurjar',
    course: 'Science',
    rank: 'Top 5',
    percentage: '94%',
    badge: 'Consistent Performer',
    image: '/gallery/02.png',
    year: '2025',
  },
  {
    name: 'Ankush Sharma',
    course: 'JEE',
    rank: 'Scholar Batch',
    percentage: '92%',
    badge: 'Problem Solver',
    image: '/gallery/03.png',
    year: '2025',
  },
  {
    name: 'Vinayak Parmar',
    course: 'NEET',
    rank: 'Top Scorer',
    percentage: '93%',
    badge: 'Biology Star',
    image: '/gallery/04.png',
    year: '2025',
  },
]

export const RESULT_RECORDS = [
  {
    roll: 'CMA2501',
    name: 'Pankaj Kushwah',
    course: 'Science',
    batch: 'Morning',
    year: '2025',
    score: 96,
    status: 'Topper',
  },
  {
    roll: 'CMA2502',
    name: 'Aaditya Gurjar',
    course: 'Science',
    batch: 'Evening',
    year: '2025',
    score: 94,
    status: 'Distinction',
  },
  {
    roll: 'CMA2503',
    name: 'Ankush Sharma',
    course: 'JEE',
    batch: 'Scholar',
    year: '2025',
    score: 92,
    status: 'Selected',
  },
  {
    roll: 'CMA2504',
    name: 'Vinayak Parmar',
    course: 'NEET',
    batch: 'Target',
    year: '2025',
    score: 93,
    status: 'Selected',
  },
  {
    roll: 'CMA2505',
    name: 'Ram Sharma',
    course: 'Science',
    batch: 'Morning',
    year: '2025',
    score: 91,
    status: 'Distinction',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Pankaj Kushwah',
    course: 'Science - Class 12',
    image: '/gallery/01.png',
    rating: 5,
    parent: 'Parent review',
    text: 'The teachers made Science concepts clear with regular practice, tests, and personal guidance.',
    story: 'Improved test scores by staying consistent through weekly review sessions.',
    video: true,
  },
  {
    name: 'Ankush Sharma',
    course: 'JEE Foundation',
    image: '/gallery/03.png',
    rating: 5,
    parent: 'Student review',
    text: 'Physics and Chemistry became easier because every doubt was solved in a simple way.',
    story: 'Built confidence through DPPs and mock-test feedback.',
    video: false,
  },
  {
    name: 'Aaditya Gurjar',
    course: 'Science - Class 12',
    image: '/gallery/02.png',
    rating: 5,
    parent: 'Parent review',
    text: 'The study plan and feedback made board preparation organised and manageable.',
    story: 'Moved from irregular preparation to a disciplined weekly rhythm.',
    video: true,
  },
]

export const GALLERY_SLIDES = [
  {
    src: '/gallery/01.png',
    category: 'Toppers',
    caption:
      "Class 12th RBSE & CBSE achiever honoured - award ceremony at Career Maker's Academy",
  },
  {
    src: '/gallery/02.png',
    category: 'Events',
    caption:
      'Celebrating success - student receives framed award with faculty at CMA, Dholpur',
  },
  {
    src: '/gallery/03.png',
    category: 'Toppers',
    caption:
      'Recognition in the spotlight - award presentation with our results showcase',
  },
  {
    src: '/gallery/04.png',
    category: 'Events',
    caption:
      'Excellence recognised - ceremony with Class 10th and 12th result displays',
  },
  {
    src: '/gallery/05.png',
    category: 'Activities',
    caption: 'Medal and merit - celebrating board results with the CMA family',
  },
  {
    src: '/gallery/06.png',
    category: 'Classrooms',
    caption:
      'Faculty and achievers - RBSE and CBSE celebration at our centre',
  },
]

export const FAQS = [
  {
    question: 'How do I apply for admission?',
    answer:
      'Fill the admission form on this website, call us, or message on WhatsApp. Our counsellor will share batch timings and guide you through the next step.',
  },
  {
    question: 'Do students get regular tests?',
    answer:
      'Yes. Students receive regular assessments, performance review, and doubt support to improve steadily.',
  },
  {
    question: 'Are demo classes available?',
    answer:
      'Yes. You can book a free demo class before final admission to experience the teaching approach.',
  },
  {
    question: 'Which courses are currently available?',
    answer:
      'CMA offers Class 9-10 Foundation, Class 11-12 Science, JEE, NEET, Spoken English, and Computer Basics.',
  },
]

export const DASHBOARD_METRICS = [
  { label: 'Total students', value: 1000, suffix: '+', trend: '+18%' },
  { label: 'New admissions', value: 86, suffix: '', trend: '+24%' },
  { label: 'Fees collected', value: 12, suffix: 'L', trend: '+16%' },
  { label: 'Results uploaded', value: 148, suffix: '', trend: '+31%' },
  { label: 'Active courses', value: 5, suffix: '', trend: 'Live' },
  { label: 'Gallery images', value: 64, suffix: '', trend: '+12' },
]

export const ADMISSION_STEPS = [
  'Student Information',
  'Academic Details',
  'Course Selection',
  'Parent Information',
  'Review & Submit',
]

export const CLASS_OPTIONS = [
  { value: '9-10', label: 'Class 9-10 Foundation' },
  { value: '11-12-science', label: 'Class 11-12 Science' },
  { value: 'jee', label: 'JEE Preparation' },
  { value: 'neet', label: 'NEET Preparation' },
  { value: 'spoken-computer', label: 'Spoken English / Computer Basics' },
  { value: 'others', label: 'Others' },
]

export function getWhatsAppUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
