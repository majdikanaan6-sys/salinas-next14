'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail, Phone, MapPin } from 'lucide-react';

// Single-file React component for Salinas Soccer Academy website
// Built with Tailwind CSS utility classes (no imports required here).
// Uses framer-motion for tasteful micro-interactions and lucide-react icons.

export default function SalinasAcademySite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [formState, setFormState] = useState<{
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  program: string;
  message: string;
  resume: File | null;
}>({
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  program: "",
  message: "",
  resume: null,
});


  const [submitted, setSubmitted] = useState(false);
  const programs = [
    {
      id: '6-month',
      title: '6–9 Month Intensive',
      blurb:
        'Fast-track technical and tactical development with twice-daily training, positional coaching, and match play.',
      highlights: ['Daily technical sessions', 'Strength & conditioning', 'Match scouting reports'],
    },
    {
      id: '1-year',
      title: '1 Year Development',
      blurb:
        'Comprehensive development plan including video analysis, mental performance, and exposure to affiliate clubs.',
      highlights: ['Video + data analysis', 'Language & cultural prep', 'Placement support'],
    },
    {
      id: '2-year',
      title: '2 Year Scholarship',
      blurb:
        'Long-term pathway with individualized plans, college or pro placement support, and international tournaments.',
      highlights: ['Individual development plan', 'International tournaments', 'Pro placement assistance'],
    },
  ];

 function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  const { name, value } = target;

  if (name === "resume" && target instanceof HTMLInputElement && target.files && target.files.length > 0) {
    const file = target.files[0];
    setFormState((s) => ({ ...s, resume: file }));
  } else {
    setFormState((s) => ({ ...s, [name]: value }));
  }
}





function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (!formState.firstName || !formState.email || !formState.country) {
    alert('Please fill in your name, email and country.');
    return;
  }
  setSubmitted(true);
}

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-emerald-600 text-white px-3 py-2 font-bold">SSA</div>
            <div>
              <h1 className="text-lg font-semibold">Salinas Soccer Academy</h1>
              <p className="text-xs text-slate-500">Salinas, CA — Global Development Pathways</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-emerald-600" href="#programs">Programs</a>
            <a className="hover:text-emerald-600" href="#coaches">Coaches</a>
            <a className="hover:text-emerald-600" href="#placements">Placements</a>
            <a className="hover:text-emerald-600" href="#apply">Apply</a>
            <a className="hover:text-emerald-600" href="#contact">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-emerald-50">
              <Phone size={16} /> +1 (831) 555-0123
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen((v) => !v)} className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#programs">Programs</a>
              <a href="#coaches">Coaches</a>
              <a href="#placements">Placements</a>
              <a href="#apply">Apply</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-extrabold leading-tight"
            >
              Train in Salinas, Play the World
            </motion.h2>
            <p className="mt-4 text-slate-600 max-w-xl">
              Salinas Soccer Academy accepts trainees worldwide. Training pathways from 6 months to 2
              years are available. On graduation we place players with affiliate clubs across Europe,
              Asia, and the Middle East.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 text-white rounded-md shadow"
              >
                Apply Now
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 px-5 py-3 border rounded-md">
                View Programs
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm">
              <div className="text-center">
                <div className="text-2xl font-semibold">6–24</div>
                <div className="text-xs text-slate-500">Months of training</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">50+</div>
                <div className="text-xs text-slate-500">Placement partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold">Global</div>
                <div className="text-xs text-slate-500">Trainees accepted</div>
              </div>
            </div>
          </div>

          {/* Photo / visual */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              alt="Training session at Salinas Soccer Academy"
              src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1200&q=60"
              className="w-full h-80 object-cover"
            />
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="mt-16">
          <h3 className="text-2xl font-bold">Programs</h3>
          <p className="mt-2 text-slate-600 max-w-2xl">Choose a pathway that fits your goals and timeline.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="rounded-xl border p-6 bg-white"
              >
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-slate-600 text-sm">{p.blurb}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-600">
                  {p.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a href="#apply" className="text-emerald-600 text-sm font-medium">
                    Start application →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Coaches */}
        <section id="coaches" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Coaches & Staff</h3>
            <p className="text-sm text-slate-500">Licenced coaches with professional & academy backgrounds</p>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Miguel Santos', role: 'Head Coach', bio: 'Ex-pro, U17 development specialist' },
              { name: 'Amira Jafari', role: 'Technical Coach', bio: 'Tactical analysis & set pieces' },
              { name: 'Tom Reynolds', role: 'Strength & Conditioning', bio: 'Performance & rehab' },
            ].map((c) => (
              <div key={c.name} className="rounded-xl border p-6 bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">👤</div>
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm text-slate-500">{c.role}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600">{c.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Placement partners / map */}
        <section id="placements" className="mt-16">
          <h3 className="text-2xl font-bold">Placement Network</h3>
          <p className="mt-2 text-slate-600 max-w-2xl">We maintain relationships with clubs across Europe, Asia & the Middle East.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6 bg-white">
              <h4 className="font-semibold">Europe</h4>
              <p className="text-sm text-slate-600 mt-2">Professional and semi-pro clubs across Spain, Portugal, and the UK.</p>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <h4 className="font-semibold">Asia</h4>
              <p className="text-sm text-slate-600 mt-2">Affiliations in Japan, South Korea and Southeast Asia.</p>
            </div>
            <div className="rounded-xl border p-6 bg-white">
              <h4 className="font-semibold">Middle East</h4>
              <p className="text-sm text-slate-600 mt-2">Placement opportunities with clubs in UAE, Saudi Arabia and Qatar.</p>
            </div>
          </div>
        </section>

        {/* Application form */}
        <section id="apply" className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Apply to Train</h3>
              <p className="mt-2 text-slate-600">Complete the short form — our admissions team will review and contact you.</p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="border rounded-md px-3 py-2"
                      required
                    />
                    <input
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="border rounded-md px-3 py-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Email"
                      type="email"
                      className="border rounded-md px-3 py-2"
                      required
                    />
                    <input
                      name="country"
                      value={formState.country}
                      onChange={handleChange}
                      placeholder="Country"
                      className="border rounded-md px-3 py-2"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <select
                      name="program"
                      value={formState.program}
                      onChange={handleChange}
                      className="border rounded-md px-3 py-2"
                    >
                      <option value="6-month">6–9 Month Intensive</option>
                      <option value="1-year">1 Year Development</option>
                      <option value="2-year">2 Year Scholarship</option>
                    </select>
                    <input
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx,video/*,image/*"
                      onChange={handleChange}
                      className="border rounded-md px-3 py-2"
                    />
                  </div>

                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your playing history, position, age, and goals"
                    className="border rounded-md px-3 py-2 w-full h-28"
                  />

                  <div className="flex items-center gap-3">
                    <button className="px-5 py-3 bg-emerald-600 text-white rounded-md">Submit Application</button>
                    <button
                      type="button"
                      className="px-4 py-2 border rounded-md"
                      onClick={() => setFormState({ firstName: '', lastName: '', email: '', country: '', program: '6-month', message: '', resume: null })}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-6 rounded-md p-6 bg-emerald-50 border">
                  <h4 className="font-semibold">Thanks — application received</h4>
                  <p className="text-sm text-slate-600 mt-2">Our admissions team will email you within 5–7 business days.</p>
                </div>
              )}
            </div>

            <aside className="bg-white border rounded-xl p-6">
              <h4 className="font-semibold">Admission checklist</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>• Completed application form</li>
                <li>• Recent match/training videos (links or uploads)</li>
                <li>• Player CV or club history</li>
                <li>• Passport copy for international trainees</li>
                <li>• Proof of medical clearance</li>
              </ul>

              <div className="mt-6">
                <h5 className="text-sm font-medium">Fees & scholarships</h5>
                <p className="text-sm text-slate-600 mt-2">We offer merit scholarships and limited accommodation support. Contact us for details.</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold">What Graduates Say</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <blockquote className="rounded-xl border p-6 bg-white">
              "The coaching and exposure changed my career — I signed with a club in Spain after 10 months."
              <div className="mt-3 text-sm text-slate-500">— Alejandro, Graduate</div>
            </blockquote>

            <blockquote className="rounded-xl border p-6 bg-white">
              "Professional environment, great support with placements and visas."
              <div className="mt-3 text-sm text-slate-500">— Priya, Graduate</div>
            </blockquote>

            <blockquote className="rounded-xl border p-6 bg-white">
              "I arrived without a network — the academy introduced me to clubs in the Middle East."
              <div className="mt-3 text-sm text-slate-500">— Omar, Graduate</div>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 mb-24 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border p-6 bg-white">
            <h3 className="text-2xl font-bold">Contact & Visit</h3>
            <p className="mt-2 text-slate-600">Plan a visit or ask questions — our team is happy to help international applicants.</p>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <div>Salinas, California, USA</div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} />
                <div>+1 (831) 555-0123</div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} />
                <div>admissions@salinassocceracademy.com</div>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium">Office hours</h5>
              <div className="text-sm text-slate-600 mt-2">Mon–Fri, 9:00 AM — 5:00 PM (Pacific Time)</div>
            </div>
          </div>

          <div className="rounded-xl border p-6 bg-white">
            <h3 className="text-2xl font-bold">Subscribe</h3>
            <p className="mt-2 text-slate-600">Get updates about trials, scholarships and placement news.</p>
            <form className="mt-4 flex gap-2">
              <input placeholder="Email address" className="border rounded-md px-3 py-2 flex-1" />
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-md">Subscribe</button>
            </form>

            <div className="mt-6">
              <h5 className="text-sm font-medium">Follow us</h5>
              <div className="mt-3 flex gap-3 text-slate-600 text-sm">
                <a href="#">Instagram</a>
                <a href="#">YouTube</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Salinas Soccer Academy</div>
          <div className="text-sm text-slate-600">Privacy · Terms · Cookie Policy</div>
        </div>
      </footer>
    </div>
  );
}
