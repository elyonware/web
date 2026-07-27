import { useEffect, useRef } from "react";

type Particle = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  phase: number;
};

export default function AntiGravityCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarsePointer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    const buildParticles = () => {
      const count = Math.min(110, Math.max(52, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          baseX: x,
          baseY: y,
          x,
          y,
          vx: 0,
          vy: 0,
          size: 1.2 + Math.random() * 2.8,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      frame += 0.016;
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        const idleX = Math.cos(frame * 0.9 + particle.phase) * 0.28;
        const idleY = Math.sin(frame * 0.75 + particle.phase) * 0.28;
        const homeX = particle.baseX + idleX - particle.x;
        const homeY = particle.baseY + idleY - particle.y;

        particle.vx += homeX * 0.012;
        particle.vy += homeY * 0.012;

        if (mouse.active) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const radius = 165;

          if (dist < radius && dist > 0.01) {
            const force = ((radius - dist) / radius) ** 2;
            particle.vx += (dx / dist) * force * 5.8;
            particle.vy += (dy / dist) * force * 5.8;
          }
        }

        particle.vx *= 0.88;
        particle.vy *= 0.88;
        particle.x += particle.vx;
        particle.y += particle.vy;

        const speed = Math.min(1, Math.hypot(particle.vx, particle.vy) / 8);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size + speed * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 190, 255, ${0.22 + speed * 0.48})`;
        ctx.shadowColor = "rgba(88, 101, 242, 0.65)";
        ctx.shadowBlur = 10 + speed * 16;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.lineWidth = 0.7;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > 105) continue;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(125, 141, 255, ${((1 - dist / 105) * 0.12).toFixed(3)})`;
          ctx.stroke();
        }
      }

      if (mouse.active) {
        const pulse = 1 + Math.sin(frame * 5) * 0.08;
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 78 * pulse);
        gradient.addColorStop(0, "rgba(255,255,255,0.16)");
        gradient.addColorStop(0.45, "rgba(88,101,242,0.08)");
        gradient.addColorStop(1, "rgba(88,101,242,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 78 * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 mix-blend-screen"
    />
  );
}
