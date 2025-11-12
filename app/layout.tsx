import './globals.css'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Salinas Soccer Academy',
  description: 'Train in Salinas, Play the World',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        <Header />
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
