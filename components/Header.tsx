import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/en" className="flex items-center gap-3">
          <Image src="/salog.jfif" alt="logo" width={48} height={48} className="rounded-full" />
          <div>
            <div className="font-semibold">Salinas Soccer Academy</div>
            <div className="text-xs text-slate-500">Salinas, CA</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#programs">Programs</a>
          <a href="#apply">Apply</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
