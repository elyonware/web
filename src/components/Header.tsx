import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const CIRCLE_LINKS = [
  {
    label: "Products",
    to: "/#projects",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5 12 2.25 3 7.5m18 0-9 5.25M21 7.5v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    ),
  },
  {
    label: "Services",
    to: "/#services",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
      />
    ),
  },
  {
    label: "About",
    to: "/about",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    ),
  },
  {
    label: "Careers",
    to: "/careers",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    ),
  },
  {
    label: "Contact us",
    to: "/contact",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    ),
  },
];

/* ── Products ───────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "hilabi",
    name: "Hilabi",
    tagline: "Smart Vehicle QR Tag System",
    desc: "Register your vehicle and emergency contacts. Anyone who scans your QR tag can instantly call or message you — whether it's a parking issue or a roadside emergency.",
    color: "bg-[#212121]",
    border: "border-[#fdc50a]/40",
    accent: "text-[#fdc50a]",
    iconBg: "bg-[#fdc50a]/15",
    cta: "learn-more" as const,
    ctaHref: "https://hilabi.com",
    icon: <img src="/Hilabi-logo.png" alt="Hilabi" className="h-full w-full object-cover" />,
    features: [
      "QR tag registration for any vehicle",
      "Emergency contact management",
      "Instant call & message on scan",
      "Wrong parking & accident alerts",
    ],
  },
  {
    id: "erp",
    name: "ERP",
    tagline: "Unified Enterprise Resource Planning Platform",
    desc: "Centralize finance, HR, inventory and operations into one connected system — with real-time reporting and role-based access across your organization.",
    color: "bg-blue-600",
    border: "border-white/30",
    accent: "text-white",
    iconBg: "bg-white/15",
    cta: "demo" as const,
    ctaHref: null,
    icon: (
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
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
    features: [
      "Finance & accounting management",
      "HR & payroll",
      "Inventory & procurement",
      "Real-time dashboards & reporting",
    ],
  },
  {
    id: "exam-portal",
    name: "Examination Portal",
    tagline: "Secure Online Examination & Proctoring Platform",
    desc: "Create, schedule and deliver exams online with automated grading, question banks and secure proctoring — from registration to results.",
    color: "bg-emerald-600",
    border: "border-white/30",
    accent: "text-white",
    iconBg: "bg-white/15",
    cta: "demo" as const,
    ctaHref: null,
    icon: (
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
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
    features: [
      "Question bank & exam builder",
      "Scheduling & candidate registration",
      "Automated grading & scoring",
      "Secure online proctoring",
    ],
  },
];

/* ── Services ───────────────────────────────────────────── */
const SERVICES = [
  {
    id: "software-dev",
    name: "Software & App Development",
    desc: "Designing, developing and maintaining computer software, web & mobile applications, cloud-based platforms and data management systems.",
    color: "bg-blue-600",
    accent: "text-white",
    iconBg: "bg-white/15",
    icon: (
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
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    id: "iot",
    name: "IoT & Embedded Systems",
    desc: "Designing, developing and integrating IoT devices, embedded systems, sensors and connected hardware solutions.",
    color: "bg-cyan-600",
    accent: "text-white",
    iconBg: "bg-white/15",
    icon: (
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
          d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
        />
      </svg>
    ),
  },
  {
    id: "ai",
    name: "AI, ML & Biometric Systems",
    desc: "Developing and deploying AI, machine learning, computer vision, facial recognition and biometric identification technologies.",
    color: "bg-violet-600",
    accent: "text-white",
    iconBg: "bg-white/15",
    icon: (
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
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
        />
      </svg>
    ),
  },
  {
    id: "consulting",
    name: "IT Consulting & Integration",
    desc: "Providing IT consulting, advisory, implementation and system integration services across complex enterprise environments.",
    color: "bg-amber-600",
    accent: "text-white",
    iconBg: "bg-white/15",
    icon: (
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
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    id: "platforms",
    name: "Digital Platforms & Marketplaces",
    desc: "Developing, operating and managing digital platforms including aggregator and marketplace platforms.",
    color: "bg-pink-600",
    accent: "text-white",
    iconBg: "bg-white/15",
    icon: (
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
          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
        />
      </svg>
    ),
  },
  {
    id: "ecosystems",
    name: "Connected Digital Ecosystems",
    desc: "Undertaking all related activities in the field of information technology and connected digital ecosystems.",
    color: "bg-emerald-600",
    accent: "text-white",
    iconBg: "bg-white/15",
    icon: (
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
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253"
        />
      </svg>
    ),
  },
];

type DropdownKey = "products" | "services" | null;

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`w-3.5 h-3.5 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ── Header ─────────────────────────────────────────────── */
export default function Header() {
  const { pathname } = useLocation();
  const isActive = (path: string) => pathname === path;
  const [open, setOpen] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [circleExpanded, setCircleExpanded] = useState<"products" | "services" | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const circleBtnRef = useRef<HTMLButtonElement>(null);
  const circleNavRef = useRef<HTMLElement>(null);
  const circleActive = useRef(false);

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

  const openFor = (key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 130);
  };

  const getBtnCenter = () => {
    const rect = circleBtnRef.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const maxDist = Math.max(
      Math.hypot(cx, cy),
      Math.hypot(w - cx, cy),
      Math.hypot(cx, h - cy),
      Math.hypot(w - cx, h - cy),
    );
    return { cx, cy, radius: Math.ceil(maxDist) + 40 };
  };

  const openCircleMenu = () => {
    const btn = circleBtnRef.current;
    const nav = circleNavRef.current;
    if (!btn || !nav) return;
    const { cx, cy, radius } = getBtnCenter();
    const items = nav.querySelectorAll("li");
    const lineIcon = btn.querySelector(".circle-nav-btn__line");
    const closeIcon = btn.querySelector(".circle-nav-btn__close");

    gsap.set(nav, {
      clipPath: `circle(0px at ${cx}px ${cy}px)`,
      pointerEvents: "auto",
    });
    gsap.set(items, { x: -80, opacity: 0, pointerEvents: "none" });

    gsap
      .timeline()
      .set(btn, { pointerEvents: "none" })
      .to(
        nav,
        {
          clipPath: `circle(${radius}px at ${cx}px ${cy}px)`,
          duration: 1.1,
          ease: "power4.out",
        },
        0,
      )
      .to(
        items,
        {
          x: 0,
          opacity: 1,
          pointerEvents: "all",
          duration: 0.9,
          stagger: 0.08,
          ease: "elastic.out(1.15, 0.95)",
        },
        0,
      )
      .to(
        closeIcon,
        { opacity: 1, yPercent: -125, duration: 0.7, ease: "power4.out" },
        0,
      )
      .to(
        lineIcon,
        { opacity: 0, yPercent: -125, duration: 0.7, ease: "power4.out" },
        0,
      )
      .set(btn, { pointerEvents: "all" });
  };

  const closeCircleMenu = () => {
    const btn = circleBtnRef.current;
    const nav = circleNavRef.current;
    if (!btn || !nav) return;
    const { cx, cy } = getBtnCenter();
    const items = nav.querySelectorAll("li");
    const bg = btn.querySelector(".circle-nav-btn__bg");
    const lineIcon = btn.querySelector(".circle-nav-btn__line");
    const closeIcon = btn.querySelector(".circle-nav-btn__close");

    gsap
      .timeline({ onComplete: () => gsap.set(nav, { pointerEvents: "none" }) })
      .set(btn, { pointerEvents: "none" })
      .to(
        items,
        {
          x: -80,
          opacity: 0,
          pointerEvents: "none",
          duration: 0.6,
          stagger: 0.06,
          ease: "power4.out",
        },
        0,
      )
      .to(
        nav,
        {
          clipPath: `circle(0px at ${cx}px ${cy}px)`,
          duration: 0.9,
          ease: "power4.out",
        },
        "-=0.6",
      )
      .to(bg, { scale: 0.9, duration: 0.15 }, "-=0.5")
      .to(bg, { scale: 1, duration: 0.15 }, "-=0.3")
      .to(
        closeIcon,
        { opacity: 0, yPercent: 125, duration: 0.6, ease: "power4.out" },
        0,
      )
      .to(
        lineIcon,
        { opacity: 1, yPercent: 0, duration: 0.6, ease: "power4.out" },
        0,
      )
      .set(btn, { pointerEvents: "all" });
  };

  const toggleCircleMenu = () => {
    if (!circleActive.current) openCircleMenu();
    else closeCircleMenu();
    circleActive.current = !circleActive.current;
    setMobileOpen(circleActive.current);
  };

  const closeMobile = () => {
    if (circleActive.current) {
      closeCircleMenu();
      circleActive.current = false;
    }
    setMobileOpen(false);
    setCircleExpanded(null);
  };

  const anyOpen = open !== null || mobileOpen;

  return (
    <>
      {/* ── Top bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[80] backdrop-blur-2xl transition-all duration-300 ${
          scrolled || anyOpen
            ? "bg-black/50 border-b border-white/[0.07]"
            : "bg-black/20 border-b border-white/[0.03]"
        } ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto px-4 sm:px-6 md:px-18 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMobile} className="flex-shrink-0">
            <img
              src="/logo3.png"
              alt="Elyonware"
              width={220}
              height={60}
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => openFor("products")}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-[17px] font-semibold rounded-[30px] transition-all duration-150 ${open === "products" ? "text-white bg-white/[0.08]" : "text-white hover:bg-white/[0.06]"}`}
              >
                Products <Chevron open={open === "products"} />
              </button>
            </div>
            <div
              className="relative"
              onMouseEnter={() => openFor("services")}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-[17px] font-semibold rounded-[30px] transition-all duration-150 ${open === "services" ? "text-white bg-white/[0.08]" : "text-white hover:bg-white/[0.06]"}`}
              >
                Services <Chevron open={open === "services"} />
              </button>
            </div>
            <Link
              to="/about"
              className={`px-4 py-2 text-[17px] font-semibold text-white rounded-[30px] transition-all duration-150 ${isActive("/about") ? "bg-white/[0.08]" : "hover:bg-white/[0.06]"}`}
            >
              About
            </Link>
            <Link
              to="/careers"
              className={`px-4 py-2 text-[17px] font-semibold text-white rounded-[30px] transition-all duration-150 ${isActive("/careers") ? "bg-white/[0.08]" : "hover:bg-white/[0.06]"}`}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 text-[17px] font-semibold text-white rounded-[30px] transition-all duration-150 ${isActive("/contact") ? "bg-white/[0.08]" : "hover:bg-white/[0.06]"}`}
            >
              Contact us
            </Link>
          </nav>

          {/* ── Hamburger (circle-reveal menu trigger) ── */}
          <button
            ref={circleBtnRef}
            type="button"
            className="relative z-[70] flex h-12 w-12 items-center justify-center rounded-full touch-manipulation md:hidden"
            onClick={toggleCircleMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="circle-nav-btn__bg absolute inset-0 rounded-full bg-white/10 transition-colors hover:bg-white/[0.16]" />
            <span className="relative block h-full w-full overflow-hidden">
              <svg
                viewBox="0 0 448 512"
                className="circle-nav-btn__line absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 fill-white"
              >
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
              </svg>
              <svg
                viewBox="0 0 320 512"
                className="circle-nav-btn__close absolute left-1/2 top-1/2 h-[45%] w-[45%] fill-white opacity-0"
                style={{ transform: "translate(-50%, -50%) translateY(125%)" }}
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </span>
          </button>
        </div>
      </header>

      {/* ── Desktop: Unified dropdown (Products + Services share one panel) ── */}
      {(open === "products" || open === "services") && (
        <div
          className="fixed left-0 right-0 z-40 backdrop-blur-2xl transition-all duration-300"
          style={{ top: "50px" }}
          onMouseEnter={() => {
            if (closeTimer.current) clearTimeout(closeTimer.current);
          }}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-gradient-to-b from-white/[0.08] via-black/60 to-black/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/10 shadow-2xl shadow-black/60">
            <div className="max-w-7xl mx-auto px-6 py-8">
              {/* Overlay grid — both panels occupy the same cell so height is always the max of the two */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "1fr",
                  gridTemplateColumns: "1fr",
                }}
              >
                {/* ── Products panel ── */}
                <div
                  style={{
                    gridRow: "1",
                    gridColumn: "1",
                    display: "flex",
                    alignItems: "flex-start",
                    opacity: open === "products" ? 1 : 0,
                    transform:
                      open === "products"
                        ? "translateY(0)"
                        : "translateY(-8px)",
                    transition: "opacity 180ms ease, transform 180ms ease",
                    pointerEvents: open === "products" ? "auto" : "none",
                  }}
                >
                  <div className="w-full py-4 grid grid-cols-3 gap-6">
                    {PRODUCTS.map((p) => (
                      <div
                        key={p.id}
                        className={`group flex flex-col gap-5 p-7 rounded-3xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 ${p.border} ${
                          ["hilabi", "erp", "exam-portal"].includes(p.id)
                            ? `${p.color} hover:brightness-110`
                            : "bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-white/[0.09]"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden rounded-xl ${p.iconBg} ${p.accent} [&_svg]:w-6 [&_svg]:h-6`}
                          >
                            {p.icon}
                          </div>
                          <div>
                            <div className="text-white font-bold text-lg leading-tight">
                              {p.name}
                            </div>
                            <div className={`text-sm mt-1 ${p.accent}`}>
                              {p.tagline}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-white leading-relaxed">
                          {p.desc}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {p.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-2 text-sm text-white"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.accent}`}
                                style={{ background: "currentColor" }}
                              />
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
                              className={`inline-flex items-center gap-1.5 text-sm font-semibold ${p.accent} hover:opacity-80 transition-opacity`}
                            >
                              Learn more
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </a>
                          ) : (
                            <Link
                              to="/contact"
                              onClick={() => setOpen(null)}
                              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all duration-150"
                            >
                              Book a demo
                              <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
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
                    alignItems: "flex-start",
                    opacity: open === "services" ? 1 : 0,
                    transform:
                      open === "services"
                        ? "translateY(0)"
                        : "translateY(-8px)",
                    transition: "opacity 180ms ease, transform 180ms ease",
                    pointerEvents: open === "services" ? "auto" : "none",
                  }}
                >
                  <div className="w-full py-4 grid grid-cols-3 gap-6">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        to="#services"
                        className={`group flex items-start gap-4 p-7 rounded-3xl border border-white/20 ${s.color} transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl hover:shadow-black/30`}
                      >
                        <div
                          className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${s.iconBg} ${s.accent} mt-0.5 [&_svg]:w-6 [&_svg]:h-6`}
                        >
                          {s.icon}
                        </div>
                        <div>
                          <p className="text-base font-bold text-white leading-snug mb-2">
                            {s.name}
                          </p>
                          <p className="text-sm text-white/80 leading-relaxed">
                            {s.desc}
                          </p>
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

      {/* ── Mobile menu: circle-reveal nav ── */}
      <nav
        ref={circleNavRef}
        className="circle-nav fixed inset-0 z-[60] flex items-center overflow-y-auto bg-black/95 py-24 md:hidden"
        style={{ clipPath: "circle(0px at 100% 0%)", pointerEvents: "none" }}
      >
        <ul className="flex w-full flex-col gap-1 pl-8 pr-6">
          {CIRCLE_LINKS.map((item) => {
            const dropdownKey = item.label === "Products" ? "products" : item.label === "Services" ? "services" : null;

            if (dropdownKey) {
              const expanded = circleExpanded === dropdownKey;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setCircleExpanded(expanded ? null : dropdownKey)}
                    className={`flex w-full items-center justify-between gap-3 py-2 text-xl font-bold uppercase tracking-tight transition-colors duration-200 hover:text-cyan-400 sm:text-2xl ${expanded ? "text-cyan-400" : "text-white"}`}
                    style={{ fontFamily: "'Krona One', sans-serif" }}
                  >
                    <span className="flex items-center gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6"
                      >
                        {item.icon}
                      </svg>
                      {item.label}
                    </span>
                    <Chevron open={expanded} />
                  </button>
                  {expanded && (
                    <div className="mb-2 mt-1 flex flex-col gap-3 pl-8">
                      {dropdownKey === "products"
                        ? PRODUCTS.map((p) =>
                            p.cta === "learn-more" ? (
                              <a
                                key={p.id}
                                href={p.ctaHref!}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobile}
                                className="text-base font-semibold text-white/90 transition-colors hover:text-cyan-400"
                              >
                                {p.name}
                              </a>
                            ) : (
                              <Link
                                key={p.id}
                                to="/contact"
                                onClick={closeMobile}
                                className="text-base font-semibold text-white/90 transition-colors hover:text-cyan-400"
                              >
                                {p.name}
                              </Link>
                            )
                          )
                        : SERVICES.map((s) => (
                            <Link
                              key={s.id}
                              to="/#services"
                              onClick={closeMobile}
                              className="text-base font-semibold text-white/90 transition-colors hover:text-cyan-400"
                            >
                              {s.name}
                            </Link>
                          ))}
                    </div>
                  )}
                </li>
              );
            }

            const active = isActive(item.to);
            return (
              <li key={item.label} className="group">
                <Link
                  to={item.to}
                  onClick={closeMobile}
                  className={`flex items-center gap-3 py-2 text-xl font-bold uppercase tracking-tight transition-colors duration-200 hover:text-cyan-400 sm:text-2xl ${active ? "text-cyan-400" : "text-white"}`}
                  style={{ fontFamily: "'Krona One', sans-serif" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6"
                  >
                    {item.icon}
                  </svg>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
