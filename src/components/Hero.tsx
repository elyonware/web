import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroBg from "@/components/HeroBg";

const LINE1 = "Build the future.";
const LINE2 = "At enterprise scale.";
const CHAR_MS = 52;
const LINE_PAUSE = 380;
const CONTENT_DELAY_MS = 2450;

export default function Hero() {
  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 0) {
      if (typed1.length < LINE1.length) {
        t = setTimeout(
          () => setTyped1(LINE1.slice(0, typed1.length + 1)),
          CHAR_MS,
        );
      } else {
        t = setTimeout(() => setPhase(2), LINE_PAUSE);
      }
    } else if (phase === 2) {
      if (typed2.length < LINE2.length) {
        t = setTimeout(
          () => setTyped2(LINE2.slice(0, typed2.length + 1)),
          CHAR_MS,
        );
      } else {
        t = setTimeout(() => setPhase(3), 200);
      }
    }
    return () => clearTimeout(t);
  }, [phase, typed1, typed2]);

  const showContent = phase === 3;

  return (
    <section
      className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-enterprise-bg.png')",
        backgroundPosition: "center right",
      }}
    >
      <HeroBg />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03050d] via-[#03050d]/78 to-[#03050d]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#03050d]/55" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 lg:pt-28 lg:pb-20 flex min-h-screen items-center">
        <div className="w-full max-w-2xl text-center lg:text-left flex flex-col gap-y-8">
          <h1
            className="font-black tracking-tight leading-[1.04] animate-fade-in-up"
            style={{
              fontSize: "clamp(2.45rem,6vw,4.8rem)",
              animationDelay: "0ms",
              minHeight: "2.2em",
            }}
          >
            <span
              className="block text-white animate-glow-pulse"
              style={{ minHeight: "1.04em" }}
            >
              {typed1}
              {phase === 0 && (
                <span className="cursor-blink inline-block w-[3px] h-[0.85em] bg-white align-middle ml-1 rounded-sm" />
              )}
            </span>

            {phase >= 2 && (
              <span
                className="block text-white animate-pink-glow sm:whitespace-nowrap"
                style={{ minHeight: "1.04em" }}
              >
                {typed2.slice(0, 3)}
                <span className="bg-gradient-to-r from-[#00d4ff] via-[#5865f2] to-[#a855f7] bg-clip-text text-transparent">
                  {typed2.slice(3)}
                </span>
                {phase === 2 && (
                  <span className="cursor-blink inline-block w-[3px] h-[0.85em] bg-[#a855f7] align-middle ml-1 rounded-sm" />
                )}
              </span>
            )}
          </h1>

          <div
            className="h-[3px] rounded-full bg-gradient-to-r from-[#00d4ff] via-[#5865f2] to-transparent mx-auto lg:mx-0 transition-all duration-700"
            style={{
              width: showContent ? 72 : 0,
              opacity: showContent ? 1 : 0,
            }}
          />

          <p
            className="text-white text-[1.1rem] max-w-xl leading-relaxed animate-fade-in-up mx-auto lg:mx-0"
            style={{ animationDelay: `${CONTENT_DELAY_MS}ms` }}
          >
            We build secure AI, cloud, mobile, IoT, and enterprise software that
            helps businesses scale faster.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
            style={{ animationDelay: `${CONTENT_DELAY_MS + 160}ms` }}
          >
            <Link
              to="/contact"
              className="enterprise-cta group relative px-8 py-4 border border-[#00d4ff]/55 text-white font-bold text-[0.92rem] uppercase tracking-[0.18em] transition-all duration-300 shadow-lg shadow-[#00d4ff]/10"
              style={{
                background: "rgba(0,30,60,0.72)",
                backdropFilter: "blur(24px) saturate(160%)",
                WebkitBackdropFilter: "blur(24px) saturate(160%)",
              }}
            >
              Start Your Project
              <span className="ml-2 inline-block text-[#00d4ff] group-hover:translate-x-1 transition-transform duration-200">
                -&gt;
              </span>
            </Link>
            <a
              href="#services"
              className="enterprise-secondary-cta px-8 py-4 border border-white/15 bg-white/[0.04] text-white/90 font-bold text-[0.92rem] uppercase tracking-[0.18em] transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
