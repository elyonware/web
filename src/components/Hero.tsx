import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const LINE1 = "Build the future.";
const LINE2 = "At any scale.";
const CHAR_MS = 52;
const LINE_PAUSE = 380;

// line1 done at: 18 * 52 = 936ms
// line2 done at: 936 + 380 + 13 * 52 = 1992ms
const CONTENT_DELAY_MS = 2100;

export default function Hero() {
  const waveCanvasRef = useRef<HTMLCanvasElement>(null);

  const [typed1, setTyped1] = useState("");
  const [typed2, setTyped2] = useState("");
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0); // 0=line1 1=pause 2=line2 3=done

  /* Typewriter */
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 0) {
      if (typed1.length < LINE1.length)
        t = setTimeout(() => setTyped1(LINE1.slice(0, typed1.length + 1)), CHAR_MS);
      else
        t = setTimeout(() => setPhase(2), LINE_PAUSE);
    } else if (phase === 2) {
      if (typed2.length < LINE2.length)
        t = setTimeout(() => setTyped2(LINE2.slice(0, typed2.length + 1)), CHAR_MS);
      else
        t = setTimeout(() => setPhase(3), 200);
    }
    return () => clearTimeout(t);
  }, [phase, typed1, typed2]);

  /* Glowing layered wave canvas */
  useEffect(() => {
    const canvas = waveCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let t = 0;
    let animId: number;

    // pink, purple, blue, yellow
    const RIBBONS = [
      { yOff: 0.80, amp: 0.12, f: 0.0042, spd: 0.20, ph: 2.1, c: [235, 60, 160] as [number,number,number] },
      { yOff: 0.73, amp: 0.15, f: 0.0046, spd: 0.24, ph: 1.4, c: [130, 30, 220] as [number,number,number] },
      { yOff: 0.66, amp: 0.18, f: 0.0039, spd: 0.17, ph: 0.7, c: [ 20,120, 255] as [number,number,number] },
      { yOff: 0.59, amp: 0.20, f: 0.0034, spd: 0.13, ph: 0.0, c: [240,190,  20] as [number,number,number] },
    ];

    function drawRibbon(rib: typeof RIBBONS[0]) {
      const baseY = rib.yOff * h;
      const amp   = rib.amp  * h;
      const [cr, cg, cb] = rib.c;

      const pts: [number, number, number][] = []; // x, y, normalised displacement (-1..1)
      for (let x = 0; x <= w; x += 5) {
        const d = Math.sin(x * rib.f + t * rib.spd + rib.ph)
                + 0.28 * Math.sin(x * rib.f * 2.1 - t * rib.spd * 0.6 + rib.ph + 1.2);
        pts.push([x, baseY + amp * d, d]);
      }

      // --- shaded fill below the wave ---
      let minY = h;
      for (const [, y] of pts) if (y < minY) minY = y;

      const grad = ctx.createLinearGradient(0, minY, 0, h);
      grad.addColorStop(0,    `rgba(${cr},${cg},${cb},0.22)`);
      grad.addColorStop(0.18, `rgba(${cr},${cg},${cb},0.10)`);
      grad.addColorStop(0.5,  `rgba(${cr},${cg},${cb},0.03)`);
      grad.addColorStop(1,    `rgba(${cr},${cg},${cb},0)`);

      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (const [x, y] of pts) ctx.lineTo(x, y);
      ctx.lineTo(w, h + 2);
      ctx.lineTo(0, h + 2);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // --- thin wave line with per-segment brightness based on |displacement| ---
      for (let i = 0; i < pts.length - 1; i++) {
        const [x0, y0, d0] = pts[i];
        const [x1, y1, d1] = pts[i + 1];
        const intensity = Math.abs((d0 + d1) / 2) / 1.28;
        const alpha = 0.25 + intensity * 0.55;

        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha.toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // --- persistent glow at local peaks and troughs ---
      ctx.shadowColor = `rgba(${cr},${cg},${cb},1)`;
      ctx.shadowBlur  = 28;
      for (let i = 2; i < pts.length - 2; i++) {
        const y  = pts[i][1];
        const yp = pts[i - 1][1];
        const yn = pts[i + 1][1];
        if ((y < yp && y < yn) || (y > yp && y > yn)) {   // local extrema
          ctx.beginPath();
          ctx.arc(pts[i][0], y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr},${cg},${cb},1)`;
          ctx.fill();
        }
      }
      ctx.shadowBlur = 0;
    }

    function draw() {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, h);
      t += 0.006;
      for (const rib of RIBBONS) drawRibbon(rib);
    }

    draw();

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);


  const showContent = phase === 3;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={waveCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-6 lg:pt-16 flex flex-col lg:flex-row items-center justify-between">

        {/* Left — text */}
        <div className="w-full lg:w-[60%] text-center lg:text-left order-2 lg:order-1 flex flex-col gap-y-8">

          <h1
            className="font-black tracking-tight leading-[1.04] animate-fade-in-up"
            style={{ fontSize: "clamp(2.45rem,6vw,4.8rem)", animationDelay: "0ms", minHeight: "2.2em" }}
          >
            {/* Line 1 */}
            <span className="block text-white animate-glow-pulse" style={{ minHeight: "1.04em" }}>
              {typed1}
              {phase === 0 && <span className="cursor-blink inline-block w-[3px] h-[0.85em] bg-white align-middle ml-1 rounded-sm" />}
            </span>

            {/* Line 2 — only render once line 1 is done */}
            {phase >= 2 && (
              <span
                className="block text-white animate-pink-glow"
                style={{ minHeight: "1.04em" }}
              >
                {typed2}
                {phase === 2 && <span className="cursor-blink inline-block w-[3px] h-[0.85em] bg-[#a855f7] align-middle ml-1 rounded-sm" />}
              </span>
            )}
          </h1>

          {/* Accent bar — appears when typing finishes */}
          <div
            className="h-[3px] rounded-full bg-gradient-to-r from-[#00d4ff] via-[#5865f2] to-transparent mx-auto lg:mx-0 transition-all duration-700"
            style={{ width: showContent ? 72 : 0, opacity: showContent ? 1 : 0 }}
          />

          <p
            className="text-white text-[1.1rem] max-w-xl leading-relaxed animate-fade-in-up mx-auto lg:mx-0"
            style={{ animationDelay: `${CONTENT_DELAY_MS}ms` }}
          >
            Web apps, mobile apps, IoT systems, biometrics, and AI — built end-to-end for the businesses shaping tomorrow.
          </p>

          {/* CTA buttons */}
          <div
            className="flex justify-center lg:justify-start animate-fade-in-up"
            style={{ animationDelay: `${CONTENT_DELAY_MS + 160}ms` }}
          >
            <Link
              to="/contact"
              className="group relative px-8 py-4 border border-[#00d4ff]/50
                         hover:border-[#00d4ff]/90 hover:bg-[#00d4ff]/20
                         text-[#00d4ff] font-bold text-[1rem] lg:text-[0.95rem] uppercase tracking-widest
                         transition-all duration-200 neon-btn shadow-lg shadow-[#00d4ff]/10"
              style={{ background: "rgba(0,30,60,0.72)", backdropFilter: "blur(24px) saturate(160%)", WebkitBackdropFilter: "blur(24px) saturate(160%)" }}
            >
              Start Project
              <span className="ml-2 inline-block group-hover:translate-x-0.5 transition-transform duration-150">▶</span>
            </Link>
          </div>

        </div>

        {/* Right — robot flies in on a snake path after text types out */}
        <div
          className="flex-shrink-0 flex items-center justify-center order-1 lg:order-2 robot-snake-enter"
          style={{ position: "relative", width: "min(560px, 48vw)", animationDelay: `${CONTENT_DELAY_MS - 100}ms` }}
        >
          <div style={{ animation: "robot-float 4s ease-in-out infinite", position: "relative" }}>
            <img
              src="/robot-on-flying-machine.png"
              alt="Elyonware AI"
              width={600}
              height={600}
              className="w-[300px] lg:w-[560px] h-auto drop-shadow-2xl"
            />
            <div
              className="robot-gleam"
              style={{ animationDelay: `${CONTENT_DELAY_MS - 100}ms` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
