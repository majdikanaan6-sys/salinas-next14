export default function Footer() {
  return (
    <footer className="border-t bg-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-600 flex justify-between">
        <div>© {new Date().getFullYear()} Salinas Soccer Academy</div>
        <div>Privacy · Terms</div>
      </div>
    </footer>
  )
}
