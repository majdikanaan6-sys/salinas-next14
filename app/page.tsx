'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const lang = (navigator.language || navigator['userLanguage'] || 'en').slice(0,2)
    const supported = ['en','es','fr','ar']
    const target = supported.includes(lang) ? lang : 'en'
    window.location.replace('/' + target)
  }, [])

  return <div className="text-center py-24">Redirecting based on your browser language...</div>
}
