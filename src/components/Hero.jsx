import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dust = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random() * 0.6 + 0.15,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.5;
      const R = Math.min(w, h) * 0.35;

      // Glowing ring
      const ringGrad = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.15);
      ringGrad.addColorStop(0, "rgba(97,0,148,0)");
      ringGrad.addColorStop(0.5, "rgba(247,7,118,0.35)");
      ringGrad.addColorStop(1, "rgba(97,0,148,0)");
      ctx.strokeStyle = ringGrad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.stroke();

      // Wave particles
      for (let i = 0; i < 320; i++) {
        const p = i / 320;
        const angle = p * Math.PI * 2;
        const wave = Math.sin(angle * 3 + t * 0.02) * 22 + Math.sin(angle * 5 + t * 0.03) * 12;
        const rr = R + wave;
        const x = cx + Math.cos(angle) * rr;
        const y = cy + Math.sin(angle) * rr * 0.55 + Math.sin(t * 0.01 + i) * 8;
        const alpha = 0.35 + Math.sin(t * 0.02 + i * 0.1) * 0.25;
        ctx.fillStyle = `rgba(${180 + Math.sin(i) * 40},${80 + Math.cos(i) * 40},${200},${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ambient dust
      dust.forEach(d => {
        d.x += d.dx; d.y += d.dy;
        if (d.x < 0 || d.x > w) d.dx *= -1;
        if (d.y < 0 || d.y > h) d.dy *= -1;
        ctx.fillStyle = `rgba(200,140,240,${d.a})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });

      t++;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  const icon = (path) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );

  return (
    <section className="hero-section" id="hero" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "60px", alignItems: "center" }}>

          {/* LEFT */}
          <div>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Available
            </div>

            <div style={{ fontFamily: "var(--mono)", color: "#c9b8e6", fontSize: "1rem", marginBottom: "6px", letterSpacing: ".05em" }}>
              Hi , I'm
            </div>

            <h1 className="hero-name-title">
              Madhubhashini
            </h1>

            <div className="hero-tag-row">
              <span>UNDERGRADUATE</span>
              <span className="dot">•</span>
              <span>Learner</span>
              
            </div>

            <p className="hero-desc">
             Passionate about technology, I enjoy turning ideas into practical digital solutions while bringing together creativity, business thinking, and technical skills.

            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn-hero-primary">
                View My Work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              {/*
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-hero-outline">
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
              */}
            </div>

            <div className="hero-socials">
              <a href="https://github.com/Madhubhashinii" target="_blank" rel="noreferrer" className="social-circle" aria-label="GitHub">
                {icon(<><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></>)}
              </a>
              <a href="https://www.linkedin.com/in/gayanthika-madhubhashini-250163438" target="_blank" rel="noreferrer" className="social-circle" aria-label="LinkedIn">
                {icon(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>)}
              </a>
              <a href="mailto:gayamdha@gmail.com" className="social-circle" aria-label="Email">
                {icon(<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>)}
              </a>
            </div>
          </div>

          {/* RIGHT — Glow orb canvas */}
          <div className="hero-orb-wrap">
            <canvas ref={canvasRef} className="hero-orb-canvas" />
          </div>
        </div>
      </div>

      <style>{`
        .hero-name-title{
          font-family:'Orbitron',sans-serif;
          font-weight:900;
          font-size:clamp(2.0rem, 5vw, 3.5rem);
          line-height:.98;
          letter-spacing:-.02em;
          margin:8px 0 22px;
          background:linear-gradient(120deg,#ffffff 0%,#e8d5ff 30%,#c084fc 55%,#F70776 90%);
          -webkit-background-clip:text; background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:fadeUp .8s ease .35s both;
        }
        .hero-tag-row{
          display:flex; flex-wrap:wrap; align-items:center; gap:14px;
          font-family:var(--mono); font-size:.78rem; color:#c9b8e6;
          letter-spacing:.14em; margin-bottom:28px;
          animation:fadeUp .8s ease .5s both;
        }
        .hero-tag-row .dot{ color:#F70776; }
        .btn-hero-primary{
          display:inline-flex; align-items:center; gap:12px;
          background:linear-gradient(135deg,#F70776 0%,#610094 100%);
          color:#fff; padding:15px 30px; border-radius:10px;
          font-weight:600; font-size:.95rem; text-decoration:none;
          box-shadow:0 8px 32px rgba(247,7,118,.35);
          transition:transform .25s, box-shadow .25s; cursor:none;
        }
        .btn-hero-primary:hover{ transform:translateY(-2px); box-shadow:0 12px 40px rgba(247,7,118,.55); }
        .btn-hero-outline{
          display:inline-flex; align-items:center; gap:10px;
          background:transparent; color:#fff; padding:14px 28px; border-radius:10px;
          font-weight:600; font-size:.95rem; text-decoration:none;
          border:1.5px solid rgba(247,7,118,.55);
          transition:all .25s; cursor:none;
        }
        .btn-hero-outline:hover{ background:rgba(247,7,118,.08); border-color:#F70776; }
        .hero-socials{ display:flex; gap:14px; margin-top:34px; }
        .social-circle{
          width:42px; height:42px; border-radius:50%;
          border:1.5px solid rgba(247,7,118,.45);
          display:inline-flex; align-items:center; justify-content:center;
          color:#F70776; transition:all .25s; cursor:none;
        }
        .social-circle:hover{
          background:rgba(247,7,118,.1); color:#fff;
          box-shadow:0 0 20px rgba(247,7,118,.4); transform:translateY(-2px);
        }
        .hero-orb-wrap{
          position:relative; width:100%; aspect-ratio:1/1; max-width:560px;
          margin-left:auto;
        }
        .hero-orb-canvas{ width:100%; height:100%; display:block; }
        @media(max-width:900px){
          .hero-grid{ grid-template-columns:1fr!important; }
          .hero-orb-wrap{ margin:0 auto; max-width:380px; }
        }
      `}</style>
    </section>
  );
}
