const COLS = [
  {
    title: "Products",
    links: [
      { label: "Hilabi", href: "#" },
      { label: "ERP", href: "#" },
      { label: "Examination Portal", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Dev", href: "#services" },
      { label: "Cloud & Data", href: "#services" },
      { label: "IoT & Embedded", href: "#services" },
      { label: "AI & ML", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className="relative z-10 pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
            {/* Brand */}
            <div className="col-span-2">
              <img
                src="/logo3.png"
                alt="Elyonware"
                className="h-12 w-auto object-contain mb-4"
              />
              <p className="text-white text-base leading-relaxed max-w-[240px] mb-5">
                Building the technology behind tomorrow's businesses.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:contact@elyonware.com"
                  aria-label="Email us"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/15 text-blue-400 hover:bg-blue-500/25 transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
                <a
                  href="tel:+918730032780"
                  aria-label="Call us"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 transition-colors duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/918730032780"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp us"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 transition-colors duration-200"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.031 7.8L0 32l8.418-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.078 22.616c-.337.947-1.97 1.809-2.695 1.927-.69.112-1.56.159-2.514-.158-.58-.19-1.324-.444-2.276-.87-4.002-1.73-6.614-5.76-6.814-6.026-.198-.265-1.618-2.153-1.618-4.108s1.023-2.91 1.386-3.309c.362-.398.792-.497 1.056-.497.264 0 .528.002.759.014.243.013.569-.092.891.68.336.8 1.141 2.755 1.24 2.955.099.199.166.431.033.694-.133.264-.199.43-.397.661-.198.232-.417.518-.595.695-.198.199-.404.414-.174.812.23.397 1.022 1.687 2.195 2.733 1.508 1.343 2.78 1.758 3.177 1.957.397.198.628.166.86-.1.23-.265.99-1.155 1.254-1.552.264-.397.528-.331.891-.199.364.133 2.31 1.09 2.707 1.288.397.199.661.298.76.464.099.166.099.962-.238 1.91z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Link columns */}
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="text-white/70 font-bold text-sm uppercase tracking-wider mb-5">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block text-white text-base transition-all duration-200 hover:translate-x-1.5 hover:text-cyan-400"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm">
              © 2026 Elyonware Technologies LLP. All rights reserved. LLPIN: ACX-1617
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
