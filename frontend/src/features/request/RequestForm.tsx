import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MdCheck, MdArrowForward, MdPhone } from 'react-icons/md'
import { useInView } from '../../hooks/useInView'
import { CATEGORIES } from '../categories/categories.data'

interface RequestFormProps {
  lang: string
}

export default function RequestForm({ lang }: RequestFormProps) {
  const { t } = useTranslation()
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', phone: '', service: '', location: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: connect to backend POST /api/requests
    await new Promise(r => setTimeout(r, 1200))
    setStatus('done')
    setForm({ name: '', phone: '', service: '', location: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const inputClass = `w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition text-gray-700 text-sm ${
    lang === 'bn' ? 'font-bangla' : 'font-body'
  }`
  const labelClass = `block text-sm font-medium text-gray-600 mb-1.5 ${lang === 'bn' ? 'font-bangla' : 'font-body'}`

  const bulletPoints = lang === 'bn'
    ? ['২ ঘণ্টার মধ্যে কল করা হবে', 'NID যাচাইকৃত কর্মী', 'bKash / Nagad এ পেমেন্ট', 'সন্তুষ্টির গ্যারান্টি']
    : ['We call you within 2 hours', 'NID verified workers only', 'Pay via bKash / Nagad', 'Satisfaction guaranteed']

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className={`text-4xl font-bold text-dark mb-4 ${lang === 'bn' ? 'font-bangla' : 'font-display'}`}>
              {t('request.title')}
            </h2>
            <p className={`text-gray-500 mb-8 leading-relaxed ${lang === 'bn' ? 'font-bangla' : 'font-body'}`}>
              {t('request.sub')}
            </p>

            {bulletPoints.map((item, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <MdCheck className="text-primary-600" size={16} />
                </div>
                <span className={`text-gray-600 ${lang === 'bn' ? 'font-bangla text-sm' : 'font-body'}`}>{item}</span>
              </div>
            ))}

            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+8801994-387156"
                className="inline-flex items-center gap-3 text-primary-600 hover:text-primary-700 transition-colors">
                <MdPhone size={20} />
                <span className="font-body font-medium">+880 199 438 7156</span>
              </a>
            </div>
          </div>

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
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t('request.phone')}</label>
                      <input type="tel" required placeholder="01700000000"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t('request.service')}</label>
                    <select required value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
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
                      onChange={e => setForm({ ...form, location: e.target.value })}
                      className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>{t('request.message')}</label>
                    <textarea rows={3} placeholder={t('request.message')}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
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
