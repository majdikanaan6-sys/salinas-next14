'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import translations from '../../lib/translations'
import Programs from '../../components/Programs'
import ApplyForm from '../../components/ApplyForm'

export default function LocalePage({ params }: { params: { lang: string }}) {
  const lang = params.lang || 'en'
  const t = translations(lang)

  return (
    <div>
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold">{t.siteTitle}</h1>
          <p className="mt-4 text-slate-600 text-lg">{t.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href={`/${lang}#apply`} className="px-5 py-3 bg-emerald-600 text-white rounded-md">{t.applyNow}</a>
            <a href={`/${lang}#programs`} className="px-5 py-3 border rounded-md">{t.viewPrograms}</a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image src="/images/hero-placeholder.jpg" alt="Hero" width={1200} height={700} className="w-full h-72 object-cover" />
        </div>
      </section>

      <section id="programs" className="mt-12">
        <h2 className="text-2xl font-bold">{t.programs}</h2>
        <Programs lang={lang} />
      </section>

      <section id="apply" className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">{t.apply}</h2>
          <ApplyForm lang={lang} thanksMessage={t.admissionsResponse} />
        </div>
        <aside className="bg-white border rounded-xl p-6">
          <h4 className="font-semibold">{t.contact}</h4>
          <p className="mt-2 text-sm text-slate-600">Salinas, California, USA</p>
        </aside>
      </section>
    </div>
  )
}
