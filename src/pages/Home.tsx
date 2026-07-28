import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FooterWave from "@/components/FooterWave";
import SEO from "@/components/SEO";

/* ────────────────────────── data ────────────────────────── */

const SERVICES = [
  {
    tag: "Development",
    accent: "#00d4ff",
    title: "Software & Application Development",
    desc: "Bespoke web apps, mobile apps and enterprise systems — from MVPs to production-grade platforms built to scale.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 8.5 4 12l4.5 3.5M15.5 8.5 20 12l-4.5 3.5M14 6l-4 12"
      />
    ),
  },
  {
    tag: "Infrastructure",
    accent: "#5865f2",
    title: "Cloud Platforms & Data Management",
    desc: "Architecture, deployment and management of cloud platforms and data systems that power modern businesses.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18h10a4 4 0 0 0 .5-7.97 5.5 5.5 0 0 0-10.55-1.9A4.5 4.5 0 0 0 7 18Z"
      />
    ),
  },
  {
    tag: "Hardware",
    accent: "#10b981",
    title: "IoT & Embedded Systems",
    desc: "IoT devices, embedded systems and connected hardware — bridging physical and digital worlds for smart environments.",
    icon: (
      <>
        <rect x="8" y="8" width="8" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2" />
      </>
    ),
  },
  {
    tag: "Intelligence",
    accent: "#a855f7",
    title: "AI, Machine Learning & Biometrics",
    desc: "Computer vision, facial recognition and biometric systems — turning machine intelligence into measurable outcomes.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.24 6.24-1.41-1.41M6.17 6.17 4.76 4.76m12.48 0-1.41 1.41M6.17 17.83l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
    ),
  },
  {
    tag: "Advisory",
    accent: "#f59e0b",
    title: "IT Consulting & System Integration",
    desc: "Strategy, implementation and integration services that align technology with business goals across complex environments.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    tag: "Platforms",
    accent: "#f472b6",
    title: "Digital Platforms & Marketplaces",
    desc: "End-to-end development and operation of aggregator platforms, marketplaces and connected digital ecosystems.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7l2-3h12l2 3M4 7h16M9 11v6M15 11v6"
      />
    ),
  },
];

const MARQUEE_ITEMS = [
  {
    label: "Software & Application Development",
    accent: "#00d4ff",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 8.5 4 12l4.5 3.5M15.5 8.5 20 12l-4.5 3.5M14 6l-4 12"
      />
    ),
  },
  {
    label: "Cloud Platforms & Data Management",
    accent: "#5865f2",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 18h10a4 4 0 0 0 .5-7.97 5.5 5.5 0 0 0-10.55-1.9A4.5 4.5 0 0 0 7 18Z"
      />
    ),
  },
  {
    label: "IoT & Embedded Systems",
    accent: "#00d4ff",
    icon: (
      <>
        <rect
          x="8"
          y="8"
          width="8"
          height="8"
          rx="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"
        />
      </>
    ),
  },
  {
    label: "AI, Machine Learning & Biometrics",
    accent: "#a855f7",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.24 6.24-1.41-1.41M6.17 6.17 4.76 4.76m12.48 0-1.41 1.41M6.17 17.83l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
    ),
  },
  {
    label: "IT Consulting & System Integration",
    accent: "#5865f2",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    label: "Digital Platforms & Marketplaces",
    accent: "#a855f7",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7l2-3h12l2 3M4 7h16M9 11v6M15 11v6"
      />
    ),
  },
];

const ABOUT_PILLARS = [
  {
    tag: "Who We Are",
    accent: "#00d4ff",
    title: "A full-spectrum technology company.",
    desc: "Elyonware brings together engineers, AI researchers and hardware specialists to turn ambitious ideas into production-grade systems — from a single founding team, not a patchwork of vendors. We're small on purpose: senior-leaning, hands-on, and close to every project we take on.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    ),
  },
  {
    tag: "What We Do",
    accent: "#5865f2",
    title: "Design, build and operate the full stack.",
    desc: "Software, AI, cloud infrastructure, IoT and digital platforms — we take products from first sketch to production, and keep them running long after launch. One team, every layer: you're not stitching together separate vendors for design, engineering and operations.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5"
      />
    ),
  },
  {
    tag: "Our Commitment",
    accent: "#a855f7",
    title: "Honest timelines. Systems built to last.",
    desc: "No overpromising, no half-finished handoffs. We commit to transparent communication and architecture that stays reliable well past the first release — built with international standards from day one, so it holds up as you scale.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m6 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
];

/* ────────────────────────── page ────────────────────────── */

export default function Home() {
  return (
    <>
      <SEO
        title="Elyonware | Software, AI, IoT & Cloud Solutions"
        description="Elyonware designs and builds software, AI, IoT and cloud solutions for businesses creating modern digital products."
        path="/"
      />
      <main className="relative min-h-screen overflow-hidden bg-[#04060f] pt-24">
        <Header />
        <Hero />

        {/* ── Services ── */}
        <section id="services" className="relative z-10 py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="group relative z-10 overflow-hidden rounded-3xl border border-white/[0.08] hover:border-white/[0.18] backdrop-blur-md transition-all duration-300 p-8 flex flex-col gap-5"
                  style={{
                    background: `linear-gradient(160deg, ${s.accent}1c 0%, rgba(255,255,255,0.03) 55%)`,
                    boxShadow: `0 4px 40px ${s.accent}22`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0"
                      style={{
                        color: s.accent,
                        background: `${s.accent}14`,
                        border: `1px solid ${s.accent}40`,
                        boxShadow: `0 0 20px ${s.accent}30`,
                      }}
                    >
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {s.icon}
                      </svg>
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] border"
                      style={{
                        color: s.accent,
                        borderColor: `${s.accent}50`,
                        background: `${s.accent}18`,
                      }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-black text-xl md:text-2xl leading-tight text-white">
                    {s.title}
                  </h3>
                  <p className="text-white/85 text-base leading-relaxed">
                    {s.desc}
                  </p>

                  {/* accent glow line */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${s.accent}cc, transparent)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who we are / what we do / commitments — each its own section ── */}
        {ABOUT_PILLARS.map((p, i) => (
          <section
            key={p.tag}
            id={p.tag.toLowerCase().replace(/\s+/g, "-")}
            className="relative z-10 min-h-screen flex items-center py-16 px-4 sm:px-6"
          >
            <div
              className={`w-full max-w-7xl mx-auto flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
            >
              {/* Image */}
              <div
                className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 rounded-3xl overflow-hidden border border-white/[0.08] flex-shrink-0"
                style={{ boxShadow: `0 4px 50px ${p.accent}22` }}
              >
                <img
                  src={p.img}
                  alt={p.tag}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${p.accent}30, transparent 60%)`,
                  }}
                />
                <span
                  className="absolute top-5 left-5 flex items-center justify-center w-12 h-12 rounded-xl backdrop-blur-sm"
                  style={{
                    color: p.accent,
                    background: `${p.accent}22`,
                    border: `1px solid ${p.accent}50`,
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {p.icon}
                  </svg>
                </span>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ color: p.accent }}
                >
                  {p.tag}
                </span>
                <h3 className="font-black text-2xl md:text-3xl leading-tight text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-white/85 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {p.desc}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* ── Contact / CTA ── */}
        <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative z-10 overflow-hidden border border-[#00d4ff]/30 bg-black/30 backdrop-blur-sm p-12 md:p-20 text-center">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00d4ff]/80 hud-corner" />
              <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00d4ff]/80 hud-corner" />
              <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00d4ff]/80 hud-corner" />
              <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00d4ff]/80 hud-corner" />
              {/* Top edge glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/70 to-transparent" />
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#a855f7]/5 pointer-events-none" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#00d4ff]/40 bg-[#00d4ff]/5 text-[#00d4ff] text-xs font-bold uppercase tracking-[0.2em] mb-5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]"
                    style={{
                      animation: "antenna-glow 1.5s ease-in-out infinite",
                    }}
                  />
                  Establish Connection
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                  Ready to build at{" "}
                  <span className="bg-gradient-to-r from-[#00d4ff] to-[#a855f7] bg-clip-text text-transparent">
                    global scale?
                  </span>
                </h2>
                <p className="text-white text-lg max-w-xl mx-auto mb-10">
                  Talk to a solutions engineer today. No sales scripts — just an
                  honest conversation about what you&apos;re building.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <a
                    href="mailto:contact@elyonware.com"
                    className="px-8 py-4 border border-white/20 hover:border-white/40
                               bg-white/5 hover:bg-white/10 text-white
                               font-semibold uppercase tracking-wider transition-all duration-200"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave + decorative scene */}
        <div className="relative">
          <FooterWave />
          <img
            src="/moon.png"
            alt=""
            className="absolute pointer-events-none drop-shadow-xl"
            style={{
              bottom: 100,
              left: "calc(50% - 260px)",
              width: 90,
              animation: "robot-float 6s ease-in-out infinite",
            }}
          />
          <img
            src="/cloud1.png"
            alt=""
            className="absolute pointer-events-none opacity-90"
            style={{
              bottom: 120,
              left: "calc(50% + 120px)",
              width: 110,
              animation: "robot-float 7s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
          <img
            src="/cloud2.png"
            alt=""
            className="absolute pointer-events-none opacity-80"
            style={{
              bottom: 90,
              left: "calc(50% - 320px)",
              width: 90,
              animation: "robot-float 5.5s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
          <img
            src="/elyon-sits.png"
            alt=""
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-auto object-contain drop-shadow-2xl pointer-events-none"
          />
        </div>

        <Footer />
      </main>
    </>
  );
}
