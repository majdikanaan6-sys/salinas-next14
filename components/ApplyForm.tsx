'use client'
import { useState } from 'react'

export default function ApplyForm({ lang, thanksMessage }: { lang: string, thanksMessage: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', country: '', program: '6-month', message: '' })

  function onChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onSubmit(e: any) {
    e.preventDefault()
    // TODO: wire to API route or third-party form handler
    setSubmitted(true)
  }

  if (submitted) {
    return <div className="rounded-md p-6 bg-emerald-50 border">{thanksMessage}</div>
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 space-y-3 bg-white p-4 border rounded-md">
      <div className="grid grid-cols-2 gap-2">
        <input name="firstName" value={form.firstName} onChange={onChange} placeholder="First name" className="border rounded px-2 py-2" required />
        <input name="lastName" value={form.lastName} onChange={onChange} placeholder="Last name" className="border rounded px-2 py-2" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="border rounded px-2 py-2" required />
        <input name="country" value={form.country} onChange={onChange} placeholder="Country" className="border rounded px-2 py-2" required />
      </div>
      <select name="program" value={form.program} onChange={onChange} className="border rounded px-2 py-2 w-full">
        <option value="6-month">6–9 Month Intensive</option>
        <option value="1-year">1 Year Development</option>
        <option value="2-year">2 Year Scholarship</option>
      </select>
      <textarea name="message" value={form.message} onChange={onChange} placeholder="Brief playing history" className="border rounded px-2 py-2 w-full h-28" />
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-emerald-600 text-white rounded">Submit Application</button>
        <button type="button" onClick={() => setForm({ firstName: '', lastName: '', email: '', country: '', program: '6-month', message: '' })} className="px-3 py-2 border rounded">Reset</button>
      </div>
    </form>
  )
}
