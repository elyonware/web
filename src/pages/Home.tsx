import { useEffect, useRef, useState, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import AnimatedWave from "@/components/AnimatedWave";
import Shuffle from "@/components/Shuffle";
import Orb from "@/components/Orb";
import GradientButton from "@/components/GradientButton";
import NeonButton from "@/components/NeonButton";

const SERVICE_PILLS = [
  "AI Systems",
  "Web Apps",
  "Mobile Apps",
  "Cloud Platforms",
  "IoT",
];

const WHY_US = [
  {
    title: "Practical Delivery",
    desc: "Clear scopes, honest timelines, and engineering decisions that keep the product moving.",
    accent: "#0891b2",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    title: "Full-Stack Team",
    desc: "Software, AI, cloud, IoT, and data work handled by one connected technical team.",
    accent: "#7c3aed",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.964 0a9 9 0 1 0-11.964 0m11.964 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    ),
  },
  {
    title: "Built to Scale",
    desc: "Systems designed for real users, production traffic, maintainability, and long-term growth.",
    accent: "#2563eb",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    ),
  },
  {
    title: "Straight Communication",
    desc: "No vague status updates. You get direct progress, clear tradeoffs, and next steps.",
    accent: "#db2777",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    ),
  },
  {
    title: "Support After Launch",
    desc: "We help maintain, improve, monitor, and extend the products we ship.",
    accent: "#059669",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.828c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.828c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
      />
    ),
  },
];

const SERVICES = [
  {
    title: "Custom Websites & Apps",
    desc: "Fast, responsive web and mobile products built around your workflow, not generic templates.",
    accent: "#2563eb",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6.75 7.5-3 4.5 3 4.5m10.5-9 3 4.5-3 4.5m-6-13.5-3 18"
      />
    ),
  },
  {
    title: "AI Integration",
    desc: "AI agents, automation, computer vision, and machine learning features connected to real business processes.",
    accent: "#7c3aed",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
      />
    ),
  },
  {
    title: "Cloud & Data Platforms",
    desc: "Architecture, deployment, databases, APIs, dashboards, and operational infrastructure.",
    accent: "#0891b2",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
      />
    ),
  },
  {
    title: "IoT & Embedded Systems",
    desc: "Connected hardware, sensors, embedded software, device communication, and monitoring.",
    accent: "#059669",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
      />
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Clean interfaces that reduce confusion and make complex workflows feel approachable.",
    accent: "#db2777",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
      />
    ),
  },
  {
    title: "Digital Platforms",
    desc: "Marketplaces, portals, aggregators, and internal platforms designed for repeated daily use.",
    accent: "#ea580c",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
      />
    ),
  },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function FeatureIcon({
  children,
  className = "h-6 w-6",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      {children}
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Elyonware | Software, AI, IoT & Cloud Solutions"
        description="Elyonware designs and builds software, AI, IoT and cloud solutions for businesses creating modern digital products."
        path="/"
      />
      <main className="min-h-screen overflow-x-hidden ">
        <Header />

        <section className="relative flex min-h-screen items-center overflow-hidden  px-4 pt-20 text-white sm:px-6">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: "100%", height: "100%" }}
          >
            <Orb
              hoverIntensity={2}
              rotateOnHover
              hue={0}
              forceHoverState={false}
              backgroundColor="#000000"
            />
          </div>

          <div className="pointer-events-none relative mx-auto flex max-w-5xl flex-col items-center gap-12">
            <div className="text-center">
              <Shuffle
                tag="h1"
                text="Build the future. Define what's next."
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover
                respectReducedMotion={true}
                loop={false}
                loopDelay={0}
                textAlign="center"
                className="normal-case mx-auto max-w-4xl text-4xl font-black leading-[1.05] tracking-normal text-white sm:text-5xl sm:leading-[0.98] lg:text-7xl"
              />
              <div className="mb-7 mt-12 flex flex-wrap justify-center gap-3">
                {SERVICE_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white bg-white/10 px-2.5 py-1 text-xs font-bold text-white/90 backdrop-blur sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <GradientButton
                  size="lg"
                  className="pointer-events-auto font-black uppercase tracking-wide cursor-pointer"
                  onClick={() => {
                    window.location.href = "mailto:contact@elyonware.com";
                  }}
                >
                  Start a Project
                </GradientButton>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-3 py-8">
          <Reveal className="grid overflow-hidden rounded-[2rem] bg-slate-50 text-slate-950 sm:rounded-[2.5rem] lg:grid-cols-2">
            <div className="relative order-2 min-h-[380px] overflow-hidden rounded-[2rem] lg:order-1 lg:min-h-[620px] lg:rounded-none lg:[border-top-right-radius:45%_100%] lg:[border-bottom-right-radius:45%_100%]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Elyonware team planning a digital product"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/60 via-blue-800/15 to-transparent" />
              <div className="absolute bottom-6 left-6 h-28 w-28 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:h-36 sm:w-36">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                  alt="Engineers reviewing a product build"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:order-2 lg:px-16 lg:py-0">
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
                About Elyonware
              </p>
              <h2 className="max-w-3xl text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
                A technology team for products that need more than a landing
                page.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                We work across software, AI, cloud infrastructure, IoT, and
                digital platforms. The goal is simple: turn complex requirements
                into clean systems that users can actually rely on.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                {[
                  { value: "5+", label: "Core Domains" },
                  { value: "100%", label: "In-House Team" },
                  { value: "24/7", label: "Post-Launch Support" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-black text-slate-950 sm:text-3xl lg:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-3 py-8">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-white text-slate-950 px-4 py-20 sm:rounded-[2.5rem] sm:px-6 lg:py-24">
            <div className="pointer-events-none absolute -bottom-48 -right-48 h-[42rem] w-[42rem] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(124,58,237,0.22),rgba(37,99,235,0.18),rgba(8,145,178,0.16),rgba(219,39,119,0.14),rgba(124,58,237,0.22))] blur-[100px]" />
            <div className="relative mx-auto max-w-7xl">
              <div className="mb-14 max-w-3xl">
                <p className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-violet-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                  Why Choose Us
                </p>
                <h2 className="text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Built for clarity, speed, and ownership.
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {WHY_US.map((item, index) => (
                  <Reveal key={item.title} delay={index * 100}>
                    <div
                      className="group/card relative flex min-h-[220px] flex-col items-start justify-center overflow-hidden rounded-[1.75rem] p-8 text-white shadow-xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 sm:p-10"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${item.accent} 85%, white), ${item.accent} 45%, color-mix(in srgb, ${item.accent} 75%, black))`,
                        boxShadow: `0 20px 45px -18px ${item.accent}99`,
                      }}
                    >
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity duration-300 group-hover/card:opacity-70"
                        style={{ background: "rgba(255,255,255,0.35)" }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.15),transparent_40%)]" />
                      <span className="pointer-events-none absolute -top-4 right-6 text-5xl font-black text-white opacity-20 transition-transform duration-300 group-hover/card:scale-110 sm:text-7xl lg:text-8xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 shadow-inner ring-1 ring-white/25 backdrop-blur transition-transform duration-300 group-hover/card:scale-110">
                        <FeatureIcon className="h-6 w-6 text-white">
                          {item.icon}
                        </FeatureIcon>
                      </div>
                      <h3 className="relative text-xl font-black sm:text-2xl lg:text-3xl">
                        {item.title}
                      </h3>
                      <p className="relative mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="services" className="px-3 py-8">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-slate-50 text-slate-950 px-4 py-20 sm:rounded-[2.5rem] sm:px-6 lg:py-28">
            <div className="pointer-events-none absolute -bottom-48 -right-48 h-[42rem] w-[42rem] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(37,99,235,0.20),rgba(5,150,105,0.16),rgba(234,88,12,0.14),rgba(219,39,119,0.16),rgba(37,99,235,0.20))] blur-[100px]" />
            <div className="relative mx-auto max-w-7xl">
              <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div className="max-w-3xl">
                  <p className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-violet-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                    Our Services
                  </p>
                  <h2 className="text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
                    Everything needed to move from idea to working system.
                  </h2>
                </div>
                <NeonButton
                  href="mailto:contact@elyonware.com"
                  color="#00b8d4"
                  className="w-fit text-sm"
                >
                  Discuss your project
                </NeonButton>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {SERVICES.map((service) => (
                  <div
                    key={service.title}
                    className="group relative overflow-hidden rounded-[1.6rem] p-[1.5px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
                    style={{ background: `${service.accent}55` }}
                  >
                    <div
                      className="pointer-events-none absolute inset-[-75%] animate-[spin-border_3s_linear_infinite] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: `conic-gradient(from 0deg, transparent 0%, transparent 82%, #f8fafc 90%, #ffffff 94%, ${service.accent} 98%, transparent 100%)`,
                      }}
                    />
                    <div className="relative overflow-hidden rounded-[calc(1.6rem-1.5px)] bg-white p-7">
                      <div
                        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                        style={{ background: service.accent }}
                      />
                      <div
                        className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `${service.accent}18`,
                          color: service.accent,
                        }}
                      >
                        <FeatureIcon>{service.icon}</FeatureIcon>
                      </div>
                      <h3 className="relative text-lg font-black sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="relative mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="flex min-h-screen items-center p-1">
          <Reveal className="relative flex h-[calc(100vh-0.5rem)] w-full items-center justify-center overflow-hidden">
            <AnimatedWave
              colorFrom="#6366f1"
              colorTo="#06b6d4"
              amplitude={22}
              opacity={0.55}
              cameraY={140}
              cameraZ={230}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_50%,rgba(88,110,255,0.14),transparent_55%)]" />
            <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
              <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl sm:leading-[1.02] lg:text-6xl">
                Turn Vision Into Reality
                <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 cursor-blink bg-gradient-to-b from-cyan-300 via-fuchsia-300 to-amber-300 align-middle" />
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                Tell us what you are trying to build. We will help turn it into
                a practical plan.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <GradientButton
                  size="lg"
                  className="font-black uppercase tracking-wide"
                  onClick={() => {
                    window.location.href = "mailto:contact@elyonware.com";
                  }}
                >
                  Schedule a Consultation
                </GradientButton>
              </div>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
