import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FooterWave from "@/components/FooterWave";
import SEO from "@/components/SEO";

/* ────────────────────────── data ────────────────────────── */

const SERVICES = [
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tag: "Development",
    accent: "#00d4ff",
    title: "Software & Application Development",
    desc: "Bespoke web apps, mobile apps and enterprise systems — from MVPs to production-grade platforms built to scale.",
  },
  {
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    tag: "Infrastructure",
    accent: "#5865f2",
    title: "Cloud Platforms & Data Management",
    desc: "Architecture, deployment and management of cloud platforms and data systems that power modern businesses.",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    tag: "Hardware",
    accent: "#00d4ff",
    title: "IoT & Embedded Systems",
    desc: "IoT devices, embedded systems and connected hardware — bridging physical and digital worlds for smart environments.",
  },
  {
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    tag: "Intelligence",
    accent: "#a855f7",
    title: "AI, Machine Learning & Biometrics",
    desc: "Computer vision, facial recognition and biometric systems — turning machine intelligence into measurable outcomes.",
  },
  {
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
    tag: "Advisory",
    accent: "#5865f2",
    title: "IT Consulting & System Integration",
    desc: "Strategy, implementation and integration services that align technology with business goals across complex environments.",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    tag: "Platforms",
    accent: "#a855f7",
    title: "Digital Platforms & Marketplaces",
    desc: "End-to-end development and operation of aggregator platforms, marketplaces and connected digital ecosystems.",
  },
];

/* ────────────────────────── page ────────────────────────── */

const STARS = [
  { left: "8%", top: "12%", size: 5, delay: "0s", duration: "3.8s" },
  { left: "18%", top: "34%", size: 7, delay: "1.1s", duration: "4.6s" },
  { left: "27%", top: "16%", size: 5, delay: "2.4s", duration: "3.4s" },
  { left: "39%", top: "43%", size: 6, delay: "0.7s", duration: "5s" },
  { left: "47%", top: "9%", size: 8, delay: "1.8s", duration: "4.1s" },
  { left: "59%", top: "28%", size: 5, delay: "0.3s", duration: "3.2s" },
  { left: "67%", top: "14%", size: 10, delay: "2s", duration: "4.8s" },
  { left: "78%", top: "39%", size: 6, delay: "1.4s", duration: "3.6s" },
  { left: "88%", top: "18%", size: 8, delay: "0.9s", duration: "4.3s" },
  { left: "93%", top: "55%", size: 5, delay: "2.7s", duration: "5.2s" },
  { left: "13%", top: "68%", size: 5, delay: "1.9s", duration: "4s" },
  { left: "31%", top: "73%", size: 7, delay: "0.4s", duration: "4.7s" },
  { left: "52%", top: "64%", size: 5, delay: "2.2s", duration: "3.9s" },
  { left: "71%", top: "79%", size: 8, delay: "1.2s", duration: "4.5s" },
  { left: "84%", top: "70%", size: 6, delay: "0.1s", duration: "3.5s" },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Elyonware | Software, AI, IoT & Cloud Solutions"
        description="Elyonware designs and builds software, AI, IoT and cloud solutions for businesses creating modern digital products."
        path="/"
      />
      <main
        className="relative min-h-screen overflow-hidden bg-cover bg-top bg-scroll bg-no-repeat"
        style={{ backgroundImage: "url('/wallpaper-1.png')" }}
      >
        <div
          className="space-scene pointer-events-none absolute inset-0 z-0"
          aria-hidden="true"
        >
          {STARS.map((star) => (
            <span
              key={`${star.left}-${star.top}`}
              className="space-star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
          <span className="shooting-star shooting-star-one" />
          <span className="shooting-star shooting-star-two" />
          <span className="shooting-star shooting-star-three" />
        </div>
        <div className="relative z-10">
          <Header />
          <Hero />

          {/* ── Services marquee strip ── */}
          <div className="relative overflow-hidden border-y border-[#00d4ff]/10 bg-black/50 backdrop-blur-sm py-6">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black/60 to-transparent" />

            <div className="marquee-track flex items-center gap-0 whitespace-nowrap w-max">
              {/* Duplicate for seamless loop */}
              {[...Array(2)].map((_, set) => (
                <span key={set} className="flex items-center">
                  {[
                    "Software & Application Development",
                    "Cloud Platforms & Data Management",
                    "IoT & Embedded Systems",
                    "AI, Machine Learning & Biometrics",
                    "IT Consulting & System Integration",
                    "Digital Platforms & Marketplaces",
                  ].map((service) => (
                    <span
                      key={service}
                      className="flex items-center gap-6 px-6"
                    >
                      <span className="text-xl font-bold uppercase tracking-widest text-white">
                        {service}
                      </span>
                      <img
                        src="/logo-white.png"
                        alt=""
                        className="h-8 w-auto opacity-90 flex-shrink-0"
                      />
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          {/* ── Services ── */}
          <section
            id="services"
            className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#0d1240]"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#00d4ff]/40 bg-[#00d4ff]/5 text-[#00d4ff] text-xs font-bold uppercase tracking-[0.2em] mb-5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]"
                    style={{
                      animation: "antenna-glow 1.5s ease-in-out infinite",
                    }}
                  />
                  Capabilities
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                  End-to-end technology solutions
                  <br />
                  <span className="bg-gradient-to-r from-[#00d4ff] via-[#5865f2] to-[#a855f7] bg-clip-text text-transparent">
                    for the digital era.
                  </span>
                </h2>
                <p className="text-white text-lg max-w-2xl mx-auto">
                  From embedded hardware to enterprise AI — we design, build and
                  operate the full stack of modern technology.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {SERVICES.map((s, i) => (
                  <div
                    key={s.title}
                    className="group relative overflow-hidden rounded-3xl border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300"
                    style={{
                      background: "#0d1240",
                      boxShadow: `0 4px 40px ${s.accent}22`,
                    }}
                  >
                    {/* Image — absolutely positioned, never drives card height */}
                    <div
                      className={`hidden lg:block absolute inset-y-0 ${i % 2 === 1 ? "left-0" : "right-0"} w-[45%] overflow-hidden`}
                    >
                      <img
                        src={s.img}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: i % 2 === 1 ? "linear-gradient(to right, #0d1240, transparent 50%)" : "linear-gradient(to left, #0d1240, transparent 50%)" }}
                      />
                      <span
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] border backdrop-blur-sm"
                        style={{ color: s.accent, borderColor: `${s.accent}50`, background: `${s.accent}18` }}
                      >
                        {s.tag}
                      </span>
                    </div>

                    {/* Mobile image */}
                    <div className="lg:hidden relative h-48 overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <span
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] border backdrop-blur-sm"
                        style={{ color: s.accent, borderColor: `${s.accent}50`, background: `${s.accent}18` }}
                      >
                        {s.tag}
                      </span>
                    </div>

                    {/* Content — drives card height */}
                    <div
                      className={`relative z-10 px-8 py-10 lg:px-12 lg:py-12 gap-4 flex flex-col justify-center ${i % 2 === 1 ? "lg:ml-[47%]" : "lg:mr-[47%]"}`}
                    >
                      <span
                        className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: s.accent }}
                      >
                        {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                      </span>
                      <h3 className="font-black text-2xl md:text-3xl leading-tight text-white">
                        {s.title}
                      </h3>
                      <p className="text-white text-base leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                    {/* accent glow line */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${s.accent}cc, transparent)` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

         

          {/* ── Contact / CTA ── */}
          <section
            id="contact"
            className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6"
          >
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden border border-[#00d4ff]/30 bg-black/60 backdrop-blur-sm p-12 md:p-20 text-center">
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
                    Talk to a solutions engineer today. No sales scripts — just
                    an honest conversation about what you&apos;re building.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <a
                      href="mailto:hello@elyonware.com"
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
        </div>
      </main>
    </>
  );
}
