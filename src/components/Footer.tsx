const COLS = [
  {
    title: "Products",
    links: [
      { label: "Hilabi",             href: "#" },
      { label: "Assessment System",  href: "#" },
      { label: "Scholar MS",         href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Dev",   href: "#services" },
      { label: "Cloud & Data",   href: "#services" },
      { label: "IoT & Embedded", href: "#services" },
      { label: "AI & ML",        href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",    href: "/about" },
      { label: "Contact",  href: "/contact" },
      { label: "Careers",  href: "/careers" },
      { label: "Blog",     href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      
      <footer className="pt-16 pb-10 px-6 bg-[#02030a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
            {/* Brand */}
            <div className="col-span-2">
              <img src="/logo3.png" alt="Elyonware" className="h-12 w-auto object-contain mb-4" />
              <p className="text-white text-base leading-relaxed max-w-[240px]">
                Building the full stack of modern technology — from hardware to frontier AI.
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
                      <a href={link.href}
                         className="text-white text-base hover:opacity-70 transition-opacity duration-150">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm">© 2026 Elyonware, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
