import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'
import { CATEGORIES } from './categories.data'

interface CategoriesProps {
  lang: string
}

export default function Categories({ lang }: CategoriesProps) {
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
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: cat.bg }}
              >
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
