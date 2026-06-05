import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { MdMenu, MdClose } from 'react-icons/md'

interface NavbarProps {
  lang: string
  setLang: (l: string) => void
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: t('nav.services'),   href: '#services' },
    { label: t('nav.howItWorks'), href: '#how' },
    { label: t('nav.contact'),    href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center shadow-md group-hover:bg-primary-600 transition-colors">
            <span className="text-white font-display font-bold text-sm">ই-কা</span>
          </div>
          <span className={`font-display font-bold text-xl transition-colors ${
            scrolled ? 'text-dark' : 'text-white'
          }`}>E-Karigor</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className={`font-body text-sm font-medium transition-colors hover:text-primary-500 ${
                scrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
              {l.label}
            </a>
          ))}
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
