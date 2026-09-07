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
              <p className="text-white text-base leading-relaxed max-w-[240px]">
                Building the technology behind tomorrow's businesses.
              </p>
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
