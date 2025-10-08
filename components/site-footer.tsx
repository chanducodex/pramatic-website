export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <img src="/images/logo.png" alt="Pragmatic logo" className="h-8 w-auto mb-3" />
          <p className="text-sm text-slate-600">© 2025 Pragmatic Technical Services. All rights reserved.</p>
        </div>
        <div>
          <div className="font-medium text-slate-900">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href="#about" className="hover:text-slate-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-slate-900">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-slate-900">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-slate-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-900">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Steel Detailing</li>
            <li>Misc Steel</li>
            <li>Connection Design</li>
            <li>Engineering</li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-900">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Email: info@pragmatich.com</li>
            <li>Sales: sales@pragmatich.com</li>
            <li>Phone: +1 770-809-0806</li>
            <li>4080 McGinnis Ferry Rd, Suite #1403, Alpharetta, GA 30005, USA</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
