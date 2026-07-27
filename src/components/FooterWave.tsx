import { useEffect, useRef } from "react";

export default function FooterWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let w = (canvas.width = canvas.offsetWidth);
    const H = 140;
    canvas.height = H;
    let t = 0;
    let animId: number;

    const WAVES = [
      { yOff: 0.45, amp: 22, f: 0.007,  spd: 0.4,  ph: 0.0, lw: 2.5, alpha: 0.9  },
      { yOff: 0.55, amp: 18, f: 0.009,  spd: 0.3,  ph: 1.4, lw: 1.5, alpha: 0.55 },
      { yOff: 0.65, amp: 14, f: 0.011,  spd: 0.5,  ph: 2.8, lw: 1.0, alpha: 0.35 },
    ];

    function draw() {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, H);
      t += 0.008;

      for (const wave of WAVES) {
        const baseY = wave.yOff * H;

        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const y = baseY
            + wave.amp * Math.sin(x * wave.f + t * wave.spd + wave.ph)
            + wave.amp * 0.4 * Math.sin(x * wave.f * 1.8 - t * wave.spd * 0.6 + wave.ph + 1);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.lineTo(w, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fillStyle = `rgba(9,11,38,${wave.alpha})`;
        ctx.fill();
      }
    }

    draw();

    const onResize = () => { w = canvas.width = canvas.offsetWidth; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full block"
      style={{ height: 140 }}
    />
  );
}
