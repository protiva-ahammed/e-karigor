import { useTranslation } from 'react-i18next'
import { MdVerified, MdArrowForward } from 'react-icons/md'

interface HeroProps {
  lang: string
}

export default function Hero({ lang }: HeroProps) {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-green-400 opacity-20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-green-300 opacity-15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm mb-6 animate-fade-in">
            <MdVerified className="text-green-300" size={16} />
            <span className={`text-white/90 text-sm font-medium ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
              {t('hero.badge')}
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up ${
              lang === 'bn' ? 'font-bangla' : 'font-display'
            }`}
            style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {t('hero.headline').split('\n').map((line, i) => (
              <span key={i}>
                {i === 0 ? line : <><br /><span className="text-green-300">{line}</span></>}
              </span>
            ))}
          </h1>

          <p
            className={`text-lg text-white/80 mb-8 leading-relaxed max-w-lg animate-fade-up ${
              lang === 'bn' ? 'font-bangla' : 'font-body'
            }`}
            style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {t('hero.sub')}
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <a href="#services"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-green-800 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 ${
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

          <div
            className="flex flex-wrap gap-8 mt-12 animate-fade-up"
            style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {[
              { num: 'Dhaka', label: lang === 'bn' ? 'যাচাইকৃত কর্মী'   : 'Verified Workers' },
              { num: '10+',  label: lang === 'bn' ? 'সেবা ক্যাটাগরি'    : 'Service Categories' },
              { num: '18/7', label: lang === 'bn' ? 'সাপোর্ট'           : 'Support' },
            ].map(s => (
              <div key={s.num}>
                <div className="text-3xl font-display font-bold text-white">{s.num}</div>
                <div className={`text-white/70 text-sm mt-0.5 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-white/40 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </div>
    </section>
  )
}
