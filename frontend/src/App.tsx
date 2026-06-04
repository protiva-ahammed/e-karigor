import './i18n'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MdDryCleaning, MdConstruction, MdElectricBolt, MdPlumbing,
  MdFormatPaint, MdAcUnit, MdBuild, MdLocalShipping,
  MdSecurity, MdSchool, MdStar, MdVerified, MdPhone,
  MdLocationOn, MdArrowForward, MdMenu, MdClose, MdCheck,
  MdGridOn,
  MdHomeRepairService,
  MdCarpenter
} from 'react-icons/md'

// ── Types ────────────────────────────────────────────────────────────────────
interface WorkerCard {
  name: string
  nameBn: string
  service: string
  serviceBn: string
  location: string
  rating: number
  jobs: number
  photo: string
  color: string
}

// ── Demo worker data ──────────────────────────────────────────────────────────
const WORKERS: WorkerCard[] = [
  {
    name: 'Md. Karim Molla',
    nameBn: 'মোঃ করিম মোল্লা',
    service: 'Electrician',
    serviceBn: 'ইলেকট্রিশিয়ান',
    location: 'Dhaka, Mirpur',
    rating: 4.8,
    jobs: 143,
    photo: 'KM',
    color: '#f97316',
  },
  {
    name: 'Rashida Begum',
    nameBn: 'রাশিদা বেগম',
    service: 'Home Cleaning',
    serviceBn: 'বাড়ি পরিষ্ই-কার',
    location: 'Dhaka, Dhanmondi',
    rating: 4.9,
    jobs: 287,
    photo: 'RB',
    color: '#10b981',
  },
  {
    name: 'Belal Hossain',
    nameBn: 'বেলাল হোসেন',
    service: 'Construction',
    serviceBn: 'নির্মাণ ই-কাজ',
    location: 'Chattogram',
    rating: 4.7,
    jobs: 95,
    photo: 'BH',
    color: '#3b82f6',
  },
]

// ── Category data ─────────────────────────────────────────────────────────────
const CATEGORIES = [
  { key: 'cleaning',     Icon: MdDryCleaning,      bg: '#fff7ed', accent: '#f97316' },
  { key: 'construction', Icon: MdConstruction,   bg: '#fef2f2', accent: '#ef4444' },
  { key: 'electrical',   Icon: MdElectricBolt,   bg: '#fefce8', accent: '#eab308' },
  { key: 'plumbing',     Icon: MdPlumbing,       bg: '#eff6ff', accent: '#3b82f6' },
  { key: 'painting',     Icon: MdFormatPaint,    bg: '#f0fdf4', accent: '#22c55e' },
  { key: 'ac',           Icon: MdAcUnit,         bg: '#f0f9ff', accent: '#0ea5e9' },
  { key: 'appliance',    Icon: MdBuild,          bg: '#fdf4ff', accent: '#a855f7' },
  { key: 'moving',       Icon: MdLocalShipping,  bg: '#fff7ed', accent: '#f97316' },
  { key: 'security',     Icon: MdSecurity,       bg: '#fef2f2', accent: '#ef4444' },
  { key: 'mason',       Icon: MdHomeRepairService, bg: '#faf5ff', accent: '#a855f7' },
{ key: 'tilefix',       Icon: MdGridOn,             bg: '#f0f9ff', accent: '#0ea5e9' },
{ key: 'carpenter',     Icon: MdCarpenter,          bg: '#fef9ec', accent: '#d97706' },
  
  // { key: 'tutoring',     Icon: MdSchool,         bg: '#f0fdf4', accent: '#22c55e' },
]

// ── useInView hook for scroll animations ─────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// ════════════════════════════════════════════════════════════════════════════
// NAVBAR
// ════════════════════════════════════════════════════════════════════════════
function Navbar({ lang, setLang }: { lang: string; setLang: (l: string) => void }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: t('nav.services'),    href: '#services' },
    { label: t('nav.howItWorks'),  href: '#how' },
    { label: t('nav.contact'),     href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center shadow-md group-hover:bg-primary-600 transition-colors">
            <span className="text-white font-display font-bold text-sm">ই-কা</span>
          </div>
          <span className={`font-display font-bold text-xl transition-colors ${
            scrolled ? 'text-dark' : 'text-white'
          }`}>E-Karigor</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className={`font-body text-sm font-medium transition-colors hover:text-primary-500 ${
                scrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
              {l.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="px-3 py-1.5 rounded-full border border-primary-300 bg-primary-50 text-primary-700 font-body text-xs font-semibold hover:bg-primary-100 transition-colors"
          >
            {lang === 'en' ? 'বাংলা' : 'EN'}
          </button>

          <a href="#contact"
            className="px-4 py-2 rounded-full bg-green-500 text-white font-body text-sm font-semibold hover:bg-primary-600 transition-colors shadow-md">
            {t('nav.findHelper')}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
            className="px-3 py-1 rounded-full border border-primary-300 text-primary-600 text-xs font-semibold">
            {lang === 'en' ? 'বাংলা' : 'EN'}
          </button>
          <button onClick={() => setOpen(!open)}
            className={scrolled ? 'text-dark' : 'text-white'}>
            {open ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-4 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-gray-700 font-medium py-1">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-full bg-primary-500 text-white font-body text-sm font-semibold text-center">
            {t('nav.findHelper')}
          </a>
        </div>
      )}
    </nav>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// HERO
// ════════════════════════════════════════════════════════════════════════════
function Hero({ lang }: { lang: string }) {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />
      {/* <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      /> */}
      {/* Decorative circle */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-green-400 opacity-20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-green-300 opacity-15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm mb-6 animate-fade-in">
            <MdVerified className="text-green-300" size={16} />

            <span className={`text-white/90 text-sm font-medium ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
              {t('hero.badge')}
            </span>
          </div>

          {/* Headline */}
          <h1 className={`text-5xl sm:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up ${
            lang === 'bn' ? 'font-bangla' : 'font-display'
          }`} style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            {t('hero.headline').split('\n').map((line, i) => (
              <span key={i}>
                {i === 0 ? line : <><br /><span className="text-green-300">{line}</span></>}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className={`text-lg text-white/80 mb-8 leading-relaxed max-w-lg animate-fade-up ${
            lang === 'bn' ? 'font-bangla' : 'font-body'
          }`} style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            {t('hero.sub')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <a href="#services"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-orange-700 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 ${
                lang === 'bn' ? 'font-bangla' : 'font-body'
              }`}>
              {t('hero.cta')}
              <MdArrowForward size={18} />
            </a>
            <a href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-all duration-200 ${
                lang === 'bn' ? 'font-bangla' : 'font-body'
              }`}>
              {t('hero.ctaSub')}
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            {[
              { num: '500+', label: lang === 'bn' ? 'যাচাইকৃত কর্মী' : 'Verified Workers' },
              { num: '10+',  label: lang === 'bn' ? 'সেবা ক্যাটাগরি' : 'Service Categories' },
              { num: '24/7', label: lang === 'bn' ? 'সাপোর্ট' : 'Support' },
            ].map(s => (
              <div key={s.num}>
                <div className="text-3xl font-display font-bold text-white">{s.num}</div>
                <div className={`text-white/70 text-sm mt-0.5 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-white/40 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// CATEGORIES
// ════════════════════════════════════════════════════════════════════════════
function Categories({ lang }: { lang: string }) {
  const { t } = useTranslation()
  const { ref, inView } = useInView()

  return (
    <section id="services" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className={`text-4xl font-bold text-dark mb-3 ${lang === 'bn' ? 'font-bangla' : 'font-display'}`}>
            {t('categories.title')}
          </h2>
          <p className={`text-gray-500 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
            {t('categories.sub')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CATEGORIES.map((cat, i) => (
            <a key={cat.key} href="#contact"
              className={`group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: cat.bg }}>
                <cat.Icon size={24} style={{ color: cat.accent }} />
              </div>
              <span className={`text-sm font-medium text-gray-700 text-center leading-tight ${
                lang === 'bn' ? 'font-bangla' : 'font-body'
              }`}>
                {t(`categories.items.${cat.key}`)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// HOW IT WORKS
// ════════════════════════════════════════════════════════════════════════════
function HowItWorks({ lang }: { lang: string }) {
  const { t } = useTranslation()
  const { ref, inView } = useInView()
  const steps = t('howItWorks.steps', { returnObjects: true }) as Array<{num:string;title:string;desc:string}>

  return (
    <section id="how" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className={`text-4xl font-bold text-dark mb-3 ${lang === 'bn' ? 'font-bangla' : 'font-display'}`}>
            {t('howItWorks.title')}
          </h2>
          <p className={`text-gray-500 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
            {t('howItWorks.sub')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          {steps.map((step, i) => (
            <div key={i}
              className={`relative flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}>
              {/* Step number */}
              <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center mb-5 shadow-lg shadow-primary-200 relative z-10">
                <span className="text-white font-display font-bold text-lg">{step.num}</span>
              </div>
              <h3 className={`text-xl font-bold text-dark mb-3 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
                {step.title}
              </h3>
              <p className={`text-gray-500 leading-relaxed text-sm ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="md:hidden w-0.5 h-8 bg-primary-200 mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// WORKER CARDS
// ════════════════════════════════════════════════════════════════════════════
function WorkerCards({ lang }: { lang: string }) {
  const { t } = useTranslation()
  const { ref, inView } = useInView()

  return (
    <section className="py-20 bg-amber-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className={`text-4xl font-bold text-dark mb-3 ${lang === 'bn' ? 'font-bangla' : 'font-display'}`}>
            {t('workers.title')}
          </h2>
          <p className={`text-gray-500 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
            {t('workers.sub')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {WORKERS.map((w, i) => (
            <div key={i}
              className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-start gap-4 mb-5">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0 shadow-md"
                  style={{ backgroundColor: w.color }}>
                  {w.photo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className={`font-semibold text-dark truncate ${lang === 'bn' ? 'font-bangla text-sm' : 'font-body'}`}>
                      {lang === 'bn' ? w.nameBn : w.name}
                    </h3>
                    <MdVerified className="text-blue-500 flex-shrink-0" size={16} />
                  </div>
                  <p className={`text-sm text-gray-500 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
                    {lang === 'bn' ? w.serviceBn : w.service}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MdStar className="text-amber-400" size={16} />
                  <span className="font-body font-semibold text-gray-700">{w.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdBuild size={14} className="text-gray-400" />
                  <span className={lang === 'bn' ? 'font-bangla' : 'font-body'}>
                    {w.jobs} {t('workers.jobs')}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MdLocationOn size={14} className="text-gray-400" />
                  <span className="font-body truncate">{w.location}</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-body font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {t('workers.available')}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-body font-medium">
                  <MdVerified size={12} />
                  {t('workers.verified')}
                </span>
              </div>

              <a href="#contact"
                className={`w-full block text-center py-2.5 rounded-xl bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 transition-colors ${
                  lang === 'bn' ? 'font-bangla' : 'font-body'
                }`}>
                {t('workers.contact')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// REQUEST FORM
// ════════════════════════════════════════════════════════════════════════════
function RequestForm({ lang }: { lang: string }) {
  const { t } = useTranslation()
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name:'', phone:'', service:'', location:'', message:'' })
  const [status, setStatus] = useState<'idle'|'sending'|'done'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: connect to backend POST /api/requests
    await new Promise(r => setTimeout(r, 1200))
    setStatus('done')
    setForm({ name:'', phone:'', service:'', location:'', message:'' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const inputClass = `w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition text-gray-700 text-sm ${
    lang === 'bn' ? 'font-bangla' : 'font-body'
  }`
  const labelClass = `block text-sm font-medium text-gray-600 mb-1.5 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — info */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className={`text-4xl font-bold text-dark mb-4 ${lang === 'bn' ? 'font-bangla' : 'font-display'}`}>
              {t('request.title')}
            </h2>
            <p className={`text-gray-500 mb-8 leading-relaxed ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
              {t('request.sub')}
            </p>
            {[
              lang === 'bn' ? '২ ঘণ্টার মধ্যে কল করা হবে' : 'We call you within 2 hours',
              lang === 'bn' ? 'NID যাচাইকৃত কর্মী' : 'NID verified workers only',
              lang === 'bn' ? 'bKash / Nagad এ পেমেন্ট' : 'Pay via bKash / Nagad',
              lang === 'bn' ? 'সন্তুষ্টির গ্যারান্টি' : 'Satisfaction guaranteed',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <MdCheck className="text-primary-600" size={16} />
                </div>
                <span className={`text-gray-600 ${lang === 'bn' ? 'font-bangla text-sm' : 'font-body'}`}>{item}</span>
              </div>
            ))}

            {/* Contact info */}
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+8801994-387156"
                className="inline-flex items-center gap-3 text-primary-600 hover:text-primary-700 transition-colors">
                <MdPhone size={20} />
                <span className="font-body font-medium">+880 199 438 7156</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
              {status === 'done' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <MdCheck className="text-green-600" size={32} />
                  </div>
                  <p className={`text-green-700 font-semibold text-lg ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
                    {t('request.success')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>{t('request.name')}</label>
                      <input type="text" required placeholder={t('request.name')}
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t('request.phone')}</label>
                      <input type="tel" required placeholder="01700000000"
                        value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t('request.service')}</label>
                    <select required value={form.service}
                      onChange={e => setForm({...form, service: e.target.value})}
                      className={inputClass}>
                      <option value="">{t('request.selectService')}</option>
                      {CATEGORIES.map(c => (
                        <option key={c.key} value={c.key}>
                          {t(`categories.items.${c.key}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>{t('request.location')}</label>
                    <input type="text" required placeholder="Dhaka, Mirpur"
                      value={form.location}
                      onChange={e => setForm({...form, location: e.target.value})}
                      className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>{t('request.message')}</label>
                    <textarea rows={3} placeholder={t('request.message')}
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" disabled={status === 'sending'}
                    className={`w-full py-3.5 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-600 disabled:opacity-60 transition-all duration-200 flex items-center justify-center gap-2 ${
                      lang === 'bn' ? 'font-bangla' : 'font-body'
                    }`}>
                    {status === 'sending' ? (
                      <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />{t('request.sending')}</>
                    ) : (
                      <>{t('request.submit')} <MdArrowForward size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// FOOTER
// ════════════════════════════════════════════════════════════════════════════
function Footer({ lang }: { lang: string }) {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">ই-কা</span>
              </div>
              <span className="font-display font-bold text-xl">E-Karigor</span>
            </div>
            <p className={`text-gray-400 text-sm leading-relaxed ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
              {t('footer.tagline')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-semibold text-gray-200 mb-4 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
              {t('footer.contact')}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="tel:+8801994-387156" className="flex items-center gap-2 hover:text-primary-400 transition-colors font-body">
                <MdPhone size={16} /> +880 199 438 7156
              </a>
              <span className="flex items-center gap-2 font-body">
                <MdLocationOn size={16} /> Dhaka, Bangladesh
              </span>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h4 className={`font-semibold text-gray-200 mb-4 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
              {t('footer.payment')}
            </h4>
            <div className="flex gap-3">
              {['bKash', 'Nagad', 'Rocket'].map(p => (
                <span key={p} className="px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 text-xs font-body font-medium">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span className="font-body">© {year} E-Karigor. {t('footer.rights')}</span>
          <span className="font-body text-xs">Built with ❤️ for 🇧🇩 BD </span>
        </div>
      </div>
    </footer>
  )
}

// ════════════════════════════════════════════════════════════════════════════
// ROOT APP
// ════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [lang, setLang] = useState('en')
  const { i18n } = useTranslation()

  const handleLang = (l: string) => {
    setLang(l)
    i18n.changeLanguage(l)
  }

  return (
    <div className={`min-h-screen ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
      <Navbar lang={lang} setLang={handleLang} />
      <Hero lang={lang} />
      <Categories lang={lang} />
      <HowItWorks lang={lang} />
      <WorkerCards lang={lang} />
      <RequestForm lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}
