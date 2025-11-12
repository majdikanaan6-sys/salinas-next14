import Image from 'next/image'

export default function Programs({ lang }: { lang: string }) {
  const list = [
    { id: '6m', title: '6–9 Month Intensive', blurb: 'Fast-track technical and tactical development.' , img: '/images/program-1.jpg'},
    { id: '1y', title: '1 Year Development', blurb: 'Comprehensive plan with video analysis.', img: '/images/program-2.jpg'},
    { id: '2y', title: '2 Year Scholarship', blurb: 'Long-term pathway with placement support.', img: '/images/program-3.jpg'},
  ]

  return (
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      {list.map(p => (
        <article key={p.id} className="rounded-xl border bg-white p-4">
          <Image src={p.img} alt={p.title} width={600} height={400} className="w-full h-40 object-cover rounded-md"/>
          <h4 className="mt-3 font-semibold">{p.title}</h4>
          <p className="text-sm text-slate-600 mt-2">{p.blurb}</p>
        </article>
      ))}
    </div>
  )
}
