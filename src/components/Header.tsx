import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

/* ── Products ───────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "hilabi",
    name: "Hilabi",
    tagline: "Smart Vehicle QR Tag System",
    desc: "Register your vehicle and emergency contacts. Anyone who scans your QR tag can instantly call or message you — whether it's a parking issue or a roadside emergency.",
    color: "bg-[#241505]",
    border: "border-orange-400/30",
    accent: "text-amber-400",
    iconBg: "bg-orange-500/15",
    cta: "learn-more" as const,
    ctaHref: "https://hilabi.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
      </svg>
    ),
    features: ["QR tag registration for any vehicle", "Emergency contact management", "Instant call & message on scan", "Wrong parking & accident alerts"],
  },
  {
    id: "aes",
    name: "Assessment & Evaluation System",
    tagline: "End-to-End Academic Assessment Platform",
    desc: "Assign subjects and faculty, conduct assessments, and generate official results and transcripts — all within a fully customisable grading and academic calendar framework.",
    color: "bg-[#161536]",
    border: "border-indigo-500/20",
    accent: "text-indigo-400",
    iconBg: "bg-indigo-500/15",
    cta: "demo" as const,
    ctaHref: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    features: ["Subject & faculty assignment", "Assessments & evaluations", "Result & transcript generation", "Custom grade scale management", "Academic calendar"],
  },
  {
    id: "sms",
    name: "Scholar Management System",
    tagline: "Integrated Scholarship & Learning Platform",
    desc: "Track scholar progress on a visual timeline, manage academic calendars, and deliver learning content through a built-in LMS.",
    color: "bg-[#0c2620]",
    border: "border-emerald-500/20",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    cta: "demo" as const,
    ctaHref: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    features: ["Scholar timeline tracking", "Academic calendar management", "Built-in LMS", "Progress & milestone reporting"],
  },
];

/* ── Services ───────────────────────────────────────────── */
const SERVICES = [
  {
    id: "software-dev",
    name: "Software & App Development",
    desc: "Designing, developing and maintaining computer software, web & mobile applications, cloud-based platforms and data management systems.",
    accent: "text-blue-400", iconBg: "bg-blue-500/15",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>,
  },
  {
    id: "iot",
    name: "IoT & Embedded Systems",
    desc: "Designing, developing and integrating IoT devices, embedded systems, sensors and connected hardware solutions.",
    accent: "text-cyan-400", iconBg: "bg-cyan-500/15",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" /></svg>,
  },
  {
    id: "ai",
    name: "AI, ML & Biometric Systems",
    desc: "Developing and deploying AI, machine learning, computer vision, facial recognition and biometric identification technologies.",
    accent: "text-violet-400", iconBg: "bg-violet-500/15",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>,
  },
  {
    id: "consulting",
    name: "IT Consulting & Integration",
    desc: "Providing IT consulting, advisory, implementation and system integration services across complex enterprise environments.",
    accent: "text-amber-400", iconBg: "bg-amber-500/15",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>,
  },
  {
    id: "platforms",
    name: "Digital Platforms & Marketplaces",
    desc: "Developing, operating and managing digital platforms including aggregator and marketplace platforms.",
    accent: "text-pink-400", iconBg: "bg-pink-500/15",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" /></svg>,
  },
  {
    id: "ecosystems",
    name: "Connected Digital Ecosystems",
    desc: "Undertaking all related activities in the field of information technology and connected digital ecosystems.",
    accent: "text-emerald-400", iconBg: "bg-emerald-500/15",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253" /></svg>,
  },
];

type DropdownKey = "products" | "services" | null;

const Chevron = ({ open }: { open: boolean }) => (
  <svg className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
       fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ── Header ─────────────────────────────────────────────── */
export default function Header() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;
  const [open, setOpen]           = useState<DropdownKey>(null);
  const [scrolled, setScrolled]   = useState(false);
  const [visible, setVisible]     = useState(true);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 10) {
        setVisible(true);
      } else if (y > lastScrollY.current + 6) {
        setVisible(false);
        setOpen(null);
      } else if (y < lastScrollY.current - 4) {
        setVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const openFor       = (key: DropdownKey) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(key); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpen(null), 130); };
  const closeMobile   = () => { setMobileOpen(false); setMobileExpanded(null); };

  const anyOpen = open !== null || mobileOpen;

  return (
    <>
      {/* ── Top bar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || anyOpen ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.07]" : "bg-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="mx-auto px-4 sm:px-6 md:px-18 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={closeMobile} className="flex-shrink-0">
            <img src="/logo3.png" alt="Elyonware" width={220} height={60}
                 className="h-6 sm:h-7 w-auto object-contain" />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => openFor("products")} onMouseLeave={scheduleClose}>
              <button className={`flex items-center gap-1.5 px-4 py-2 text-[17px] font-semibold rounded-[30px] transition-all duration-150 ${open === "products" ? "text-white bg-white/[0.08]" : "text-white hover:bg-white/[0.06]"}`}>
                Products <Chevron open={open === "products"} />
              </button>
            </div>
            <div className="relative" onMouseEnter={() => openFor("services")} onMouseLeave={scheduleClose}>
              <button className={`flex items-center gap-1.5 px-4 py-2 text-[17px] font-semibold rounded-[30px] transition-all duration-150 ${open === "services" ? "text-white bg-white/[0.08]" : "text-white hover:bg-white/[0.06]"}`}>
                Services <Chevron open={open === "services"} />
              </button>
            </div>
            <Link to="/about" className={`px-4 py-2 text-[17px] font-semibold text-white rounded-[30px] transition-all duration-150 ${isActive("/about") ? "bg-white/[0.08]" : "hover:bg-white/[0.06]"}`}>About</Link>
            <Link to="/careers" className={`px-4 py-2 text-[17px] font-semibold text-white rounded-[30px] transition-all duration-150 ${isActive("/careers") ? "bg-white/[0.08]" : "hover:bg-white/[0.06]"}`}>Careers</Link>
            <Link to="/contact" className={`px-4 py-2 text-[17px] font-semibold text-white rounded-[30px] transition-all duration-150 ${isActive("/contact") ? "bg-white/[0.08]" : "hover:bg-white/[0.06]"}`}>Contact us</Link>
          </nav>

          {/* ── Hamburger ── */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-[30px] hover:bg-white/[0.08] transition-colors touch-manipulation"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ── Desktop: Unified dropdown (Products + Services share one panel) ── */}
      {(open === "products" || open === "services") && (
        <div
          className="fixed left-0 right-0 z-40 animate-dropdown-in hidden md:block"
          style={{ top: "68px" }}
          onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-[#111214]/97 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/60">
            <div className="max-w-7xl mx-auto px-6 py-8">

              {/* Overlay grid — both panels occupy the same cell so height is always the max of the two */}
              <div style={{ display: "grid", gridTemplateRows: "1fr", gridTemplateColumns: "1fr" }}>

                {/* ── Products panel ── */}
                <div
                  style={{
                    gridRow: "1",
                    gridColumn: "1",
                    display: "flex",
                    alignItems: "center",
                    opacity: open === "products" ? 1 : 0,
                    transform: open === "products" ? "translateY(0)" : "translateY(-8px)",
                    transition: "opacity 180ms ease, transform 180ms ease",
                    pointerEvents: open === "products" ? "auto" : "none",
                  }}
                >
                  <div className="w-full py-4 grid grid-cols-3 gap-5">
                    {PRODUCTS.map((p) => (
                      <div
                        key={p.id}
                        className={`group flex flex-col gap-4 p-5 rounded-2xl border ${p.border} ${p.color} transition-all duration-200`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg ${p.iconBg} ${p.accent}`}>{p.icon}</div>
                          <div>
                            <div className="text-white font-semibold text-sm leading-tight">{p.name}</div>
                            <div className={`text-xs mt-0.5 ${p.accent}`}>{p.tagline}</div>
                          </div>
                        </div>
                        <p className="text-xs text-white leading-relaxed">{p.desc}</p>
                        <ul className="flex flex-col gap-1.5">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs text-white">
                              <span className={`w-1 h-1 rounded-full flex-shrink-0 ${p.accent}`} style={{ background: "currentColor" }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          {p.cta === "learn-more" ? (
                            <a
                              href={p.ctaHref!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${p.accent} hover:opacity-80 transition-opacity`}
                            >
                              Learn more
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                              </svg>
                            </a>
                          ) : (
                            <Link
                              to="/contact"
                              onClick={() => setOpen(null)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all duration-150"
                            >
                              Book a demo
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Services panel ── */}
                <div
                  style={{
                    gridRow: "1",
                    gridColumn: "1",
                    display: "flex",
                    alignItems: "center",
                    opacity: open === "services" ? 1 : 0,
                    transform: open === "services" ? "translateY(0)" : "translateY(-8px)",
                    transition: "opacity 180ms ease, transform 180ms ease",
                    pointerEvents: open === "services" ? "auto" : "none",
                  }}
                >
                  <div className="w-full py-4 grid grid-cols-3 gap-5">
                    {SERVICES.map((s) => (
                      <Link key={s.id} to="#services"
                            className="group flex items-start gap-4 p-6 rounded-2xl border border-white/[0.08] bg-[#1a1b1f] hover:border-white/[0.18] hover:bg-[#212227] transition-all duration-200">
                        <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl ${s.iconBg} ${s.accent} mt-0.5`}>{s.icon}</div>
                        <div>
                          <p className={`text-sm font-semibold text-white group-hover:${s.accent} transition-colors leading-snug mb-1.5`}>{s.name}</p>
                          <p className="text-xs text-white/70 leading-relaxed">{s.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col" style={{ top: "68px" }}>
          <div className="flex-1 bg-[#111214]/98 backdrop-blur-2xl overflow-y-auto">
            <div className="px-4 py-6 flex flex-col gap-1">

              {/* Products */}
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-white rounded-[30px] hover:bg-white/[0.07] transition-colors"
              >
                Products <Chevron open={mobileExpanded === "products"} />
              </button>
              {mobileExpanded === "products" && (
                <div className="mt-1 mb-2 flex flex-col gap-2 pl-2">
                  {PRODUCTS.map((p) => (
                    <div key={p.id} className={`flex flex-col gap-3 p-3 rounded-2xl border ${p.border} ${p.color}`}>
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg ${p.iconBg} ${p.accent}`}>{p.icon}</div>
                        <div>
                          <div className="text-sm font-semibold text-white">{p.name}</div>
                          <div className={`text-xs ${p.accent}`}>{p.tagline}</div>
                        </div>
                      </div>
                      {p.cta === "learn-more" ? (
                        <a
                          href={p.ctaHref!}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobile}
                          className={`inline-flex items-center gap-1 text-xs font-semibold ${p.accent}`}
                        >
                          Learn more
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          to="/contact"
                          onClick={closeMobile}
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all self-start"
                        >
                          Book a demo →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Services */}
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-white rounded-[30px] hover:bg-white/[0.07] transition-colors"
              >
                Services <Chevron open={mobileExpanded === "services"} />
              </button>
              {mobileExpanded === "services" && (
                <div className="mt-1 mb-2 flex flex-col gap-1.5 pl-2">
                  {SERVICES.map((s) => (
                    <Link key={s.id} to="#services" onClick={closeMobile}
                          className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.08] bg-[#1a1b1f] hover:bg-[#212227] transition-colors">
                      <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg ${s.iconBg} ${s.accent}`}>{s.icon}</div>
                      <span className="text-sm font-medium text-white">{s.name}</span>
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/about" onClick={closeMobile} className={`px-4 py-3 text-base font-semibold text-white rounded-[30px] transition-colors ${isActive("/about") ? "bg-white/[0.08]" : "hover:bg-white/[0.07]"}`}>About</Link>
              <Link to="/careers" onClick={closeMobile} className={`px-4 py-3 text-base font-semibold text-white rounded-[30px] transition-colors ${isActive("/careers") ? "bg-white/[0.08]" : "hover:bg-white/[0.07]"}`}>Careers</Link>
              <Link to="/contact" onClick={closeMobile} className={`px-4 py-3 text-base font-semibold text-white rounded-[30px] transition-colors ${isActive("/contact") ? "bg-white/[0.08]" : "hover:bg-white/[0.07]"}`}>Contact us</Link>
              <div className="my-3 h-px bg-white/[0.08]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
