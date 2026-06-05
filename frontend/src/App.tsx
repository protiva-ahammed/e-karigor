import './i18n'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './features/navbar/Navbar'
import Hero from './features/hero/Hero'
import Categories from './features/categories/Categories'
import HowItWorks from './features/how-it-works/HowItWorks'
import WorkerCards from './features/workers/WorkerCards'
import RequestForm from './features/request/RequestForm'
import Footer from './components/layout/Footer'

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
