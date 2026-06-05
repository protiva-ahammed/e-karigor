import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'

interface HowItWorksProps {
  lang: string
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const { t } = useTranslation()
  const { ref, inView } = useInView()
  const steps = t('howItWorks.steps', { returnObjects: true }) as Array<{ num: string; title: string; desc: string }>

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
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
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
