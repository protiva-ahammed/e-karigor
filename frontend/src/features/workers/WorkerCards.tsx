import { useTranslation } from 'react-i18next'
import { MdVerified, MdStar, MdBuild, MdLocationOn } from 'react-icons/md'
import { useInView } from '../../hooks/useInView'
import { WORKERS } from './workers.data'

interface WorkerCardsProps {
  lang: string
}

export default function WorkerCards({ lang }: WorkerCardsProps) {
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
            <div
              key={i}
              className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0 shadow-md"
                  style={{ backgroundColor: w.color }}
                >
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
