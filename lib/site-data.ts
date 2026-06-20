import type { LucideIcon } from 'lucide-react'
import {
  Sparkles,
  AlignHorizontalDistributeCenter,
  Smile,
  Stethoscope,
  Sun,
  Baby,
  ScanLine,
  HeartPulse,
  Clock,
  Languages,
  ShieldCheck,
  Microscope,
  Wind,
  Droplets,
  Crown,
  Zap,
} from 'lucide-react'

export const CLINIC = {
  name: 'Élite Dental Atelier Lagos',
  shortName: 'ÉDA Lagos',
  tagline: 'Crafting Brilliance. Defining Excellence.',
  phoneDisplay: '+234 901 234 5678',
  phone: '+2349012345678',
  whatsapp: '2349012345678',
  email: 'concierge@elitedentalatelier.com',
  address: '14th Floor, Landmark Towers, Plot 5B, Idowu Taylor Street, Victoria Island, Lagos 101241',
  addressShort: 'Victoria Island, Lagos',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7!2d3.42!3d6.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDguMCJOIDPCsDI1JzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1700000000000',
  instagram: 'https://instagram.com/elitedentallagos',
  facebook: 'https://facebook.com/elitedentallagos',
  linkedin: 'https://linkedin.com/company/elite-dental-atelier-lagos',
}

export function whatsappLink(message = "Hello, I'd like to book a private consultation at Élite Dental Atelier Lagos.") {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`
}

export type Service = {
  slug: string
  name: string
  short: string
  icon: LucideIcon
  description: string
  about: string
  candidates: string[]
  process: { title: string; detail: string }[]
  faqs: { q: string; a: string }[]
  image: string
}

export const SERVICES: Service[] = [
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    short: 'Permanent, natural-looking tooth replacement.',
    icon: Sparkles,
    description:
      'Titanium-rooted replacements that look, feel and function like your natural teeth — for a lifetime of confidence.',
    about:
      'Dental implants are biocompatible titanium posts surgically placed into the jawbone to act as the root of a missing tooth. A custom ceramic crown is then secured on top, restoring full chewing power and aesthetics. We use guided digital implantology for millimetre-perfect placement — the gold standard across JCI-accredited institutions globally.',
    candidates: [
      'You are missing one or more teeth',
      'You want a permanent alternative to dentures or bridges',
      'You have adequate bone or are open to grafting',
      'You want to preserve facial structure and jawbone',
    ],
    process: [
      { title: 'Digital Assessment', detail: '3D CBCT imaging maps your bone and nerves for a precise surgical plan.' },
      { title: 'Guided Placement', detail: 'The implant is placed painlessly using a custom surgical guide.' },
      { title: 'Healing & Integration', detail: 'The implant fuses with your bone over 6–8 weeks (osseointegration).' },
      { title: 'Crown Delivery', detail: 'A hand-finished ceramic crown is fitted for a flawless, natural result.' },
    ],
    faqs: [
      { q: 'Are dental implants painful?', a: 'The procedure is done under local anaesthesia and most patients report less discomfort than a routine extraction. IV sedation is available for anxious patients.' },
      { q: 'How long do implants last?', a: 'With good oral hygiene, implants can last 25+ years and often a lifetime.' },
      { q: 'Do you offer payment plans?', a: 'Yes, we offer flexible payment plans and work with major health insurance providers across Nigeria and Ghana.' },
    ],
    image: '/images/service-implants.png',
  },
  {
    slug: 'invisible-aligners',
    name: 'Invisible Aligners',
    short: 'Straighten teeth discreetly, without metal braces.',
    icon: AlignHorizontalDistributeCenter,
    description:
      'Clear, removable aligners that gently move your teeth into place — virtually invisible and tailored to your smile.',
    about:
      'Invisible aligners are a series of custom clear trays that progressively align your teeth. Planned with digital intraoral scanning and predictive 3D modelling, you can preview your final smile before treatment even begins. Favoured by executives, public figures and professionals across West Africa.',
    candidates: [
      'You have mild to moderate crowding or spacing',
      'You prefer a discreet alternative to metal braces',
      'You want a removable, easy-to-clean solution',
      'You are a professional who values a refined appearance',
    ],
    process: [
      { title: 'Digital Scan', detail: 'A quick intraoral scan replaces messy impressions.' },
      { title: 'Smile Simulation', detail: 'Preview your transformation in 3D before starting.' },
      { title: 'Aligner Series', detail: 'Switch trays every 1–2 weeks as your teeth shift.' },
      { title: 'Retention', detail: 'Custom retainers lock in your brilliant new smile permanently.' },
    ],
    faqs: [
      { q: 'How long does treatment take?', a: 'Most cases complete in 6–18 months depending on complexity.' },
      { q: 'Are they noticeable?', a: 'Aligners are made from clear medical-grade material and are virtually invisible.' },
      { q: 'Can I eat with them?', a: 'You remove aligners to eat and drink, so there are no food restrictions.' },
    ],
    image: '/images/service-aligners.png',
  },
  {
    slug: 'smile-design',
    name: 'Smile Design',
    short: 'A bespoke smile engineered around your face.',
    icon: Smile,
    description:
      'A fully personalised cosmetic plan combining veneers, contouring and proportion artistry for a camera-ready smile.',
    about:
      'Digital Smile Design blends facial aesthetics, dental science and artistry. We analyse your facial proportions, lip dynamics and personality to craft a smile that looks natural and uniquely yours — fully previewed in 3D before any treatment begins. Our ceramic artisans are among the finest on the continent.',
    candidates: [
      'You want to transform the overall look of your smile',
      'You have chips, gaps, stains or uneven teeth',
      'You have an upcoming high-profile event, wedding or media appearance',
      'You want a natural yet striking, camera-ready result',
    ],
    process: [
      { title: 'Facial Analysis', detail: 'We study your facial features, lip dynamics and symmetry.' },
      { title: 'Digital Mock-Up', detail: 'See and approve your new smile in a photorealistic 3D preview.' },
      { title: 'Trial Smile', detail: 'A temporary preview is placed directly on your teeth for your approval.' },
      { title: 'Final Artistry', detail: 'Hand-layered porcelain veneers deliver the finished masterpiece.' },
    ],
    faqs: [
      { q: 'Will it look natural?', a: 'Yes — our ceramists hand-layer each veneer to mimic natural translucency and light transmission.' },
      { q: 'How many visits?', a: 'Most smile makeovers complete in 2–3 comfortable visits.' },
      { q: 'Is it reversible?', a: 'We offer minimal-prep options that conserve your natural tooth structure.' },
    ],
    image: '/images/service-smile-design.png',
  },
  {
    slug: 'porcelain-veneers',
    name: 'Porcelain Veneers',
    short: 'Ultra-thin shells for a perfect Hollywood smile.',
    icon: Crown,
    description:
      'Hand-crafted ultra-thin porcelain shells bonded to the front of your teeth for an instant, dramatic smile transformation.',
    about:
      'Our porcelain veneers are crafted by internationally trained ceramists using e.max lithium disilicate — the world\'s most lifelike dental ceramic. Each veneer is individually painted to match your natural translucency and undertone, producing results that are indistinguishable from perfect natural teeth.',
    candidates: [
      'You have permanently stained or discoloured teeth',
      'You want to correct shape, size or minor alignment issues',
      'You desire a long-lasting cosmetic solution',
      'You want a dramatic transformation in minimal visits',
    ],
    process: [
      { title: 'Consultation & Design', detail: 'Digital smile design maps your ideal veneer shape and shade.' },
      { title: 'Minimal Preparation', detail: 'A thin layer is removed to ensure a natural, flush fit.' },
      { title: 'Ceramic Crafting', detail: 'Your veneers are hand-layered by our master ceramist.' },
      { title: 'Precision Bonding', detail: 'Each veneer is individually bonded under magnification for perfection.' },
    ],
    faqs: [
      { q: 'How long do veneers last?', a: 'Premium porcelain veneers typically last 15–20 years with proper care.' },
      { q: 'Do veneers look fake?', a: 'Not with ours. Our ceramists create bespoke, lifelike results.' },
      { q: 'Is the process painful?', a: 'Minimal preparation is done under local anaesthesia — very comfortable.' },
    ],
    image: '/images/service-veneers.png',
  },
  {
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    short: 'Brighten your smile by several shades, safely.',
    icon: Sun,
    description:
      'Professional in-clinic and take-home whitening that lifts stains and brightens your smile without sensitivity.',
    about:
      'Our medically supervised whitening uses controlled-strength gels and advanced LED activation to remove years of staining safely. Enamel-protective formulations minimise sensitivity for lasting, natural-looking brightness. Results are visible immediately after your first session.',
    candidates: [
      'You have yellowing or stained teeth from food, coffee or tobacco',
      'You want a fast, visible improvement before an event',
      'You have a board presentation, wedding or television appearance',
      'You prefer a non-invasive cosmetic enhancement',
    ],
    process: [
      { title: 'Shade Mapping', detail: 'We record your current shade and target result with a precision guide.' },
      { title: 'Gum Protection', detail: 'A protective barrier shields your gums from the whitening gel.' },
      { title: 'LED Activation', detail: 'Whitening gel is activated with medical-grade LED for maximum effect.' },
      { title: 'Aftercare Kit', detail: 'Take-home trays and serum maintain your brilliant smile.' },
    ],
    faqs: [
      { q: 'Is whitening safe?', a: 'Yes, when professionally supervised it is completely safe for enamel.' },
      { q: 'How long does it last?', a: 'Results typically last 12–18 months with good maintenance.' },
      { q: 'Will it cause sensitivity?', a: 'We use advanced desensitising agents to keep you comfortable throughout.' },
    ],
    image: '/images/service-whitening.png',
  },
  {
    slug: 'full-mouth-rehabilitation',
    name: 'Full Mouth Rehabilitation',
    short: 'Complete restoration of your bite and smile.',
    icon: Zap,
    description:
      'A comprehensive, phased treatment plan that restores every tooth — function, structure and aesthetics — to peak condition.',
    about:
      'Full mouth rehabilitation combines implants, crowns, veneers and occlusal correction to restore a mouth that has suffered from decay, wear, trauma or multiple missing teeth. Our prosthodontic specialists create a phased plan that is transparent, comfortable and transformational.',
    candidates: [
      'You have multiple missing, broken or severely worn teeth',
      'You have bite problems affecting your jaw or posture',
      'You want a complete functional and aesthetic overhaul',
      'You have been told elsewhere that your case is complex',
    ],
    process: [
      { title: 'Comprehensive Assessment', detail: 'Full digital records, 3D imaging and smile analysis are taken.' },
      { title: 'Phased Planning', detail: 'A clear, costed treatment roadmap is designed and shared.' },
      { title: 'Phased Execution', detail: 'Each phase is completed comfortably in sequence.' },
      { title: 'Maintenance Protocol', detail: 'A bespoke aftercare and recall programme protects your investment.' },
    ],
    faqs: [
      { q: 'How long does it take?', a: 'Timelines vary from 3 months to 18 months depending on complexity.' },
      { q: 'Is it expensive?', a: 'We offer transparent staged pricing and flexible payment plans.' },
      { q: 'Will I be without teeth?', a: 'We always ensure you have functional, aesthetic temporaries throughout treatment.' },
    ],
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
  },
]

export const STATS = [
  { value: 3500, suffix: '+', label: 'Smiles Transformed' },
  { value: 18, suffix: ' Yrs', label: 'Of Excellence' },
  { value: 99, suffix: '%', label: 'Success Rate' },
  { value: 4.9, suffix: '★', label: 'Google Rating' },
]

export const DIFFERENTIATORS: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: ScanLine, title: '3D Digital X-Ray', detail: 'Low-radiation cone beam imaging for instant, precise diagnostics.' },
  { icon: HeartPulse, title: 'Pain-Free Protocols', detail: 'Laser dentistry and IV sedation for total, effortless comfort.' },
  { icon: Clock, title: 'Same-Day Crowns', detail: 'In-house CAD/CAM milling delivers perfect crowns in one visit.' },
  { icon: Languages, title: 'Multilingual Concierge', detail: 'Care and counsel in English, French, Yoruba and Igbo.' },
]

export const TRUST_BADGES = [
  'Google 4.9★',
  '3500+ Patients',
  '18 Yrs Excellence',
  'JCI Accredited',
  'ISO 9001:2025',
  'West Africa Health Commission',
  'WAPCAS Certified',
]

export type Testimonial = {
  name: string
  location: string
  treatment: string
  quote: string
  featured?: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Adaora Nwosu',
    location: 'Lagos, Nigeria',
    treatment: 'Smile Design & Veneers',
    quote:
      'I have visited dental clinics in London and Dubai, and Élite Dental Atelier Lagos exceeds them all. Dr. Okonkwo\'s attention to detail and artistic precision is extraordinary. My smile has completely transformed my confidence at board meetings and on television. This is world-class care on African soil.',
    featured: true,
  },
  { name: 'Kwame Asante', location: 'Accra, Ghana', treatment: 'Dental Implants', quote: 'I flew from Accra specifically for this clinic and it was worth every naira. Painless, precise and the results are indistinguishable from natural teeth. Truly exceptional.' },
  { name: 'Fatima Al-Rashid', location: 'Abuja, Nigeria', treatment: 'Invisible Aligners', quote: 'I previewed my final smile in 3D before a single tray was made. The result matched exactly. This is dentistry that understands the value of your time.' },
  { name: 'Chidi Obi', location: 'Port Harcourt, Nigeria', treatment: 'Full Mouth Rehabilitation', quote: 'A genuinely transformational experience. The phased plan was clear, the team was compassionate, and the outcome has changed my quality of life completely.' },
  { name: 'Amara Diallo', location: 'Dakar, Senegal', treatment: 'Teeth Whitening', quote: 'Several shades brighter in one visit with absolutely zero sensitivity. The clinic feels like a private members lounge — impeccable service throughout.' },
  { name: 'Seun Akinwale', location: 'Lagos, Nigeria', treatment: 'Porcelain Veneers', quote: 'My veneers are so natural that people genuinely cannot tell. The ceramic artistry here is at a level I did not expect to find in Lagos. I am so proud that this exists in our city.' },
]

export const TECHNOLOGY = {
  'Advanced Diagnostics': [
    { icon: ScanLine, title: '3D CBCT Imaging', detail: 'Precise three-dimensional scans for accurate diagnosis and precision planning.' },
    { icon: Microscope, title: 'Dental Microscopes', detail: 'Magnified precision for flawless endodontic and restorative outcomes.' },
    { icon: Clock, title: 'In-House CAD/CAM', detail: 'Same-day crowns and restorations designed and milled with digital accuracy.' },
  ],
  'Patient Comfort': [
    { icon: HeartPulse, title: 'Laser Dentistry', detail: 'Minimally invasive procedures with dramatically faster, more comfortable healing.' },
    { icon: Wind, title: 'IV Sedation Suite', detail: 'Anxiety-free, deeply comfortable care with medically monitored sedation.' },
    { icon: Smile, title: 'Private Suites', detail: 'Individual treatment suites designed for complete relaxation and privacy.' },
  ],
  'Hygiene & Safety': [
    { icon: ShieldCheck, title: 'JCI Protocols', detail: 'Joint Commission International accredited sterilisation and safety standards.' },
    { icon: Droplets, title: 'Class B Autoclaves', detail: 'Hospital-grade instrument sterilisation for every single patient, every time.' },
    { icon: Wind, title: 'HEPA Air Purification', detail: 'Surgical-grade air quality maintained throughout all treatment spaces.' },
  ],
}

export type Faq = { q: string; a: string; category: 'Treatment' | 'Pricing' | 'First Visit' | 'Technology' }

export const FAQS: Faq[] = [
  { category: 'Treatment', q: 'Are your treatments painful?', a: 'We use laser dentistry, IV sedation and modern anaesthetic techniques to ensure virtually pain-free care across all procedures. Comfort is our first priority.' },
  { category: 'Treatment', q: 'How long do dental implants last?', a: 'With proper care and regular maintenance, our premium implants last 25+ years — often a lifetime. We use only certified titanium systems.' },
  { category: 'Pricing', q: 'Do you offer payment plans?', a: 'Yes, we offer flexible instalment plans and work with major Nigerian and West African health insurance providers. Our concierge team will guide you.' },
  { category: 'Pricing', q: 'Do you accept insurance?', a: 'We work with NHIS, Hygeia, Leadway Health, and most major corporate insurance schemes. Our billing team handles all documentation on your behalf.' },
  { category: 'First Visit', q: 'What happens at my first visit?', a: 'A private consultation including digital imaging, a personalised treatment plan, smile preview and a fully transparent cost estimate — with no pressure whatsoever.' },
  { category: 'First Visit', q: 'How do I book a consultation?', a: 'Use our online booking form, call our concierge line, or message us on WhatsApp — we respond within minutes during clinic hours, 7 days a week.' },
  { category: 'Technology', q: 'What makes your technology different?', a: 'We operate the only private dental practice in West Africa equipped with full 3D CBCT imaging, in-house CAD/CAM milling and a dental microscope suite under one roof.' },
  { category: 'Technology', q: 'Do you offer digital smile preview?', a: 'Yes. Before any treatment begins, we produce a photorealistic 3D simulation of your result so you can see and approve your new smile in advance.' },
]

export const FAQ_CATEGORIES = ['Treatment', 'Pricing', 'First Visit', 'Technology'] as const

export const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'By Private Appointment' },
]

export const DOCTOR = {
  name: 'Dr. Chisom Adaeze Okonkwo',
  qualification: 'MDS — Prosthodontics & Implantology',
  credentials: ['BDS (Lagos)', 'MDS (UCL)', 'FICOI', 'JCI Fellow', '18 Yrs'],
  bio: 'A distinguished prosthodontist and smile architect, Dr. Chisom Adaeze Okonkwo has transformed over 3,500 smiles across 18 years of dedicated practice spanning London, Dubai and Lagos. Trained at University College London and fellowship-certified by the International Congress of Oral Implantologists, she returned to Nigeria with a singular mission: to bring the world\'s finest dental care to West Africa. Her philosophy is that exceptional dentistry should be deeply personal, completely transparent and utterly effortless for the patient.',
}

export const TEAM = [
  { name: 'Dr. Chisom Adaeze Okonkwo', role: 'Founder & Chief Prosthodontist', image: '/images/doctor-profile.png' },
  { name: 'Dr. Emeka Nwobi', role: 'Implantologist & Oral Surgeon', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dr. Nneka Adeleke', role: 'Orthodontist & Aligner Specialist', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80' },
  { name: 'Dr. Femi Adesanya', role: 'Cosmetic & Aesthetic Dentist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' },
]

export const GALLERY = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1581585099522-f6ac2efe5b30?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
]

export const AWARDS = [
  { title: 'JCI Accredited', detail: 'Joint Commission International — Global Gold Standard in Healthcare Quality' },
  { title: 'ISO 9001:2025', detail: 'Internationally certified quality management systems' },
  { title: 'Best Dental Practice 2025', detail: 'West Africa Healthcare Excellence Awards, Lagos' },
  { title: 'FICOI Fellowship', detail: 'International Congress of Oral Implantologists' },
  { title: 'WAPCAS Certified', detail: 'West Africa Private Clinical Accreditation Scheme' },
]

export const VALUES = [
  { title: 'Precision', detail: 'Every procedure is guided by digital accuracy, 3D imaging and meticulous planning.' },
  { title: 'Artistry', detail: 'We treat dentistry as a craft — designing smiles that look effortlessly natural and timeless.' },
  { title: 'Compassion', detail: 'Anxiety-free, judgement-free care delivered with genuine warmth and respect.' },
  { title: 'Integrity', detail: 'Transparent pricing, honest recommendations and no unexpected charges — ever.' },
]

export const BEFORE_AFTER_CASES = [
  {
    label: 'Smile Design',
    before: '/images/before-smile.png',
    after: '/images/after-smile.png',
    name: 'Adaora N.',
    treatment: 'Porcelain Veneers',
    duration: '3 visits · 14 days',
  },
  {
    label: 'Whitening',
    before: '/images/before-whitening.png',
    after: '/images/after-whitening.png',
    name: 'Kwame A.',
    treatment: 'Laser Whitening',
    duration: '1 session · same day',
  },
  {
    label: 'Implants',
    before: '/images/before-implants.png',
    after: '/images/after-implants.png',
    name: 'Seun A.',
    treatment: 'Full Implant Bridge',
    duration: '3 months · osseointegration',
  },
]
