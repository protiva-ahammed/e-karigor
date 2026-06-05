import { useTranslation } from 'react-i18next'
import { MdPhone, MdLocationOn } from 'react-icons/md'

interface FooterProps {
  lang: string
}

export default function Footer({ lang }: FooterProps) {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
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

          <div>
            <h4 className={`font-semibold text-gray-200 mb-4 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
              {t('footer.contact')}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="tel:+8801994-387156"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors font-body">
                <MdPhone size={16} /> +880 199 438 7156
              </a>
              <span className="flex items-center gap-2 font-body">
                <MdLocationOn size={16} /> Dhaka, Bangladesh
              </span>
            </div>
          </div>

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
          <span className="font-body text-xs">Built with ❤️ for 🇧🇩 BD</span>
        </div>
      </div>
    </footer>
  )
}
