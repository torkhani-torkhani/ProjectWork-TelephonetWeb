import { useEffect, useRef } from "react";
import "./ConstellationBg.css";

export default function ConstellationBg() {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const cv = canvasRef.current;
    if (!root || !cv) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const LINK = 132;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let parts = [];
    let raf = 0;
    let live = false;
    let resizeTimer = null;
    const mouse = { x: -9999, y: -9999 };

    const size = () => {
      const r = root.getBoundingClientRect();
      w = r.width;
      h = r.height;
      if (w === 0 || h === 0) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = Math.min(120, Math.max(28, Math.round((w * h) / 13000)));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.34,
        vy: (Math.random() - 0.5) * 0.34,
        r: Math.random() * 1.6 + 0.9,
      }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 26000 && d2 > 1) {
          p.x += (dx / d2) * 22;
          p.y += (dy / d2) * 22;
        }
      }

      ctx.beginPath();
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x;
          const dy = parts[i].y - parts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
          }
        }
      }
      ctx.strokeStyle = "rgba(120,220,220,0.16)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = "rgba(190,245,240,0.85)";
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (live) {
        raf = window.requestAnimationFrame(frame);
      }
    };

    const start = () => {
      if (!live && !calm) {
        live = true;
        raf = window.requestAnimationFrame(frame);
      }
    };

    const stop = () => {
      live = false;
      window.cancelAnimationFrame(raf);
    };

    size();

    let observer = null;
    if (calm) {
      frame();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start();
            else stop();
          });
        },
        { threshold: 0 }
      );
      observer.observe(root);
    }

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        size();
        if (calm) frame();
      }, 160);
    };

    const onPointerMove = (e) => {
      const r = root.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", onResize);
    root.addEventListener("pointermove", onPointerMove, { passive: true });
    root.addEventListener("pointerleave", onPointerLeave);

    return () => {
      stop();
      if (observer) observer.disconnect();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="bga-10-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="bga-10__c" />
      <div className="bga-10__wash" />
    </div>
  );
}