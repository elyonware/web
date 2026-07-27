import { useEffect, useRef } from "react";

const CELL = 28;
const LASER_SPEED = 0.003;
const LASER_HALF_W = 180;
const LASER_RGB = "190,235,255";

interface Dot {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
}

interface Ripple {
  x: number;
  y: number;
  r: number;
  maxR: number;
  speed: number;
  alpha: number;
}

export default function HeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = 0;
    let H = 0;
    let dots: Dot[] = [];
    let ripples: Ripple[] = [];
    let t = 0;
    let laserPos = 0;
    let animId: number;

    function buildDots() {
      dots = [];
      for (let x = 0; x < W; x += CELL) {
        for (let y = 0; y < H; y += CELL) {
          if (Math.random() > 0.52) {
            dots.push({
              x,
              y,
              size: 1.2 + Math.random() * 1.3,
              baseAlpha: 0.02 + Math.random() * 0.05,
            });
          }
        }
      }
    }

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
      buildDots();
    }

    resize();
    window.addEventListener("resize", resize);

    function draw() {
      animId = requestAnimationFrame(draw);
      t++;
      ctx.clearRect(0, 0, W, H);

      laserPos = (laserPos + LASER_SPEED) % 1;
      const eased = (1 - Math.cos(laserPos * Math.PI * 2)) / 2;
      const laserY = -60 + eased * (H + 120);

      for (const d of dots) {
        const dist = Math.abs(d.y - laserY);
        const influence = Math.max(0, 1 - dist / 54);
        ctx.globalAlpha = Math.min(d.baseAlpha + influence * 0.28, 0.42);
        ctx.fillStyle = "rgba(210,235,255,1)";
        ctx.fillRect(d.x, d.y, d.size, d.size);
      }
      ctx.globalAlpha = 1;

      if (t % 120 === 0) {
        ripples.push({
          x: W / 2 + (Math.random() - 0.5) * 120,
          y: H / 2 + (Math.random() - 0.5) * 120,
          r: 0,
          maxR: 120 + Math.random() * 80,
          speed: 0.6 + Math.random() * 0.6,
          alpha: 0.28,
        });
      }
      ripples = ripples.filter((r) => r.alpha > 0.02 && r.r < r.maxR);
      for (const r of ripples) {
        r.r += r.speed;
        r.alpha *= 0.965;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${LASER_RGB},${r.alpha.toFixed(3)})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }

      const cx = W / 2;

      const glowGrad = ctx.createLinearGradient(cx - LASER_HALF_W, 0, cx + LASER_HALF_W, 0);
      glowGrad.addColorStop(0, `rgba(${LASER_RGB},0)`);
      glowGrad.addColorStop(0.5, `rgba(${LASER_RGB},0.1)`);
      glowGrad.addColorStop(1, `rgba(${LASER_RGB},0)`);
      ctx.fillStyle = glowGrad;
      ctx.fillRect(cx - LASER_HALF_W, laserY - 1.5, LASER_HALF_W * 2, 3);

      const coreGrad = ctx.createLinearGradient(cx - LASER_HALF_W, 0, cx + LASER_HALF_W, 0);
      coreGrad.addColorStop(0, `rgba(${LASER_RGB},0)`);
      coreGrad.addColorStop(0.5, `rgba(255,255,255,0.3)`);
      coreGrad.addColorStop(1, `rgba(${LASER_RGB},0)`);
      ctx.fillStyle = coreGrad;
      ctx.fillRect(cx - LASER_HALF_W, laserY - 0.3, LASER_HALF_W * 2, 0.6);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}
