import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const ABOUT_SECTIONS = [
  {
    title:
      "Born from a belief that great technology should be within everyone's reach.",
    body: "Elyonware was founded in 2024 with one conviction: the gap between ambitious ideas and working technology is a problem we can solve. Too many organisations — especially in emerging markets — are held back not by lack of vision, but by lack of access to the right technical partner. We set out to change that.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
    alt: "Team gathered around a laptop brainstorming ideas",
    flip: false,
  },
  {
    title: "We build across every layer of the stack.",
    body: "From AI pipelines and biometric systems to IoT firmware and cloud platforms — our team works across the full spectrum of modern technology. We are lean, senior-leaning and genuinely invested in every project we take on. Being early-stage means we move fast, focus deeply and care about outcomes.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80",
    alt: "Code on a monitor representing full-stack development",
    flip: true,
  },
  {
    title: "International standards. Real-world impact.",
    body: "We build with global-grade architecture from day one — scalable, compliant, and ready for any market. Our work spans software, AI, IoT and digital platforms, always with an eye toward systems that outlast the sprint and serve the people who depend on them.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",
    alt: "Digital globe representing global technology reach",
    flip: false,
  },
];

const VALUES = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Move Fast",
    desc: "We ship, iterate and learn. Speed is a competitive advantage — we embrace it without sacrificing quality.",
    bg: "#141a3d",
    iconBg: "bg-indigo-500/20 text-indigo-400",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
    title: "Own the Outcome",
    desc: "We take full responsibility for every project. No finger-pointing — just solutions and accountability.",
    bg: "#1c1330",
    iconBg: "bg-violet-500/20 text-violet-400",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Build Together",
    desc: "The best solutions emerge from close collaboration — with clients, partners and within our team.",
    bg: "#04212b",
    iconBg: "bg-cyan-500/20 text-cyan-400",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
    title: "Stay Curious",
    desc: "Technology never stops evolving. Neither do we. Every problem is a chance to learn something new.",
    bg: "#2b210a",
    iconBg: "bg-amber-500/20 text-amber-400",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Earn Trust",
    desc: "We never overpromise. Honest timelines, transparent communication and work that speaks for itself.",
    bg: "#0c2620",
    iconBg: "bg-emerald-500/20 text-emerald-400",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 00.284 2.253"
        />
      </svg>
    ),
    title: "Think Global",
    desc: "We build with international standards from day one — scalable, compliant and ready for any market.",
    bg: "#241030",
    iconBg: "bg-purple-500/20 text-purple-400",
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Elyonware | Our Story, Mission & Values"
        description="Founded in 2024, Elyonware is on a mission to make powerful software, AI and connected systems accessible to every organisation — regardless of size."
        path="/about"
      />
      <main
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(180,230,255,0.22) 0%, transparent 50%), radial-gradient(ellipse at 0% 30%, rgba(0,150,255,0.18) 0%, transparent 50%), radial-gradient(ellipse at 100% 20%, rgba(100,200,255,0.18) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(50,100,220,0.12) 0%, transparent 50%), #03080f",
        }}
      >
        <Header />

        {/* ── Hero ── */}
        <section className="relative min-h-[58vh] flex items-center justify-center px-4 sm:px-6 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4">
              About Elyonware
            </p>
            <h1
              className="font-black tracking-tight leading-[1.05] mb-6 text-white"
              style={{ fontSize: "clamp(2.6rem,7vw,5rem)" }}
            >
              We build technology that{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                matters.
              </span>
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
              Elyonware is a technology startup on a mission to make powerful
              software, AI and connected systems accessible to every
              organisation — regardless of size.
            </p>
          </div>
        </section>

        {/* ── Story image cards ── */}
        <section className="px-4 sm:px-6 md:px-18 flex flex-col gap-6 pb-10 border-t border-white/[0.06] pt-16">
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              Our Story
            </p>
          </div>
          {ABOUT_SECTIONS.map((s) => (
            <div
              key={s.title}
              className={`relative z-10 flex flex-col ${s.flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0 rounded-3xl overflow-hidden border border-white/[0.07] bg-[#0d0f1a]`}
            >
              <div className="relative lg:w-[52%] h-72 lg:h-auto flex-shrink-0">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  {s.title}
                </h2>
                <p className="text-white/85 text-base leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ── Mission & Vision ── */}
        <section className="py-20 px-4 sm:px-6 md:px-18 border-t border-white/[0.06]">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Purpose-built for the long game.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-indigo-500/20 bg-[#141a3d]">
              <div className="relative h-52 w-full">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
                  alt="Engineers collaborating on a solution"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/80" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-indigo-500/30 text-indigo-300 backdrop-blur-sm">
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To design, develop and deliver transformative technology
                  solutions that empower businesses to operate smarter, scale
                  faster and compete globally — across software, AI, IoT and
                  digital platforms.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-violet-500/20 bg-[#1c1330]">
              <div className="relative h-52 w-full">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80"
                  alt="Earth from space representing global vision"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-950/80" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-violet-500/30 text-violet-300 backdrop-blur-sm">
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
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <h3 className="text-xl font-bold text-white mb-3">
                  Our Vision
                </h3>
                <p className="text-white/80 leading-relaxed">
                  To become the most trusted technology partner for ambitious
                  organisations across emerging and global markets — known for
                  building reliable, intelligent and future-proof digital
                  ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-20 px-4 sm:px-6 md:px-18 border-t border-white/[0.06]">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              The principles that guide everything we do.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group relative z-10 p-6 rounded-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                style={{ background: v.bg }}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-xl ${v.iconBg} mb-4 transition-colors`}
                >
                  {v.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-base">
                  {v.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 sm:px-6 border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Ready to build something{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                great together?
              </span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              We'd love to hear about your project. Reach out and let's start a
              conversation.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-[30px] transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/25"
            >
              Contact us →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
