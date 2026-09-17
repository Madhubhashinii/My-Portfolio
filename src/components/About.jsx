import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const iconWrap = (svg) => (
    <div className="ai-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {svg}
      </svg>
    </div>
  );

  const info = [
    { label: "FULL NAME", val: "K.G.G.Madhubhashini",
      svg: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></> },
    { label: "ROLE", val: "Intern",
      svg: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> },
    { label: "LOCATION", val: "Galle, Sri Lanka",
      svg: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></> },
    { label: "EDUCATION", val: "BSc. Management Information System",
      svg: <><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></> },
    { label: "LANGUAGES", val: "Sinhala, English",
      svg: <><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></> },
    { label: "AVAILABILITY", val: "Available", accent: true,
      svg: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
  ];

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid-new">

          {/* LEFT — code orb frame */}
          <div className="reveal about-frame-wrap">
            <div className="about-frame">
              <div className="about-orb">
                <div className="about-code-icon">
                  <svg width="70" height="70" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" stroke="url(#gA)"/>
                    <polyline points="8 6 2 12 8 18" stroke="url(#gA)"/>
                    <line x1="14" y1="4" x2="10" y2="20" stroke="url(#gA)"/>
                    <defs>
                      <linearGradient id="gA" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#c084fc"/>
                        <stop offset="100%" stopColor="#F70776"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="about-open-pill">
                <span>OPEN TO WORK</span>
                <span className="dot-green" />
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div>
            <div className="reveal about-me-eyebrow">
              <span style={{ color: "#F70776" }}>   </span> ABOUT ME
            </div>

            <div className="reveal reveal-delay-1 about-bio">
              <p>
                I'm K.G.G.Madhubhashini,
              </p>
              <p style={{ marginTop: "18px" }}>
              I love creating solutions that are easy to use and work well and look nice. I always want to learn technologies and find better methods. For me writing code is not about getting something to function but about creating something that people really enjoy using.
              </p>
            </div>

            <div className="reveal reveal-delay-2 about-info-grid">
              {info.map(i => (
                <div key={i.label} className="about-info-card">
                  {iconWrap(i.svg)}
                  <div>
                    <div className="ai-label">{i.label}</div>
                    <div className={"ai-val" + (i.accent ? " accent" : "")}>{i.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-3 about-cta-row">
              <a href="#contact" className="btn-hero-primary">
                LET'S TALK
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              {/*}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-hero-outline">
                DOWNLOAD CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </a>
           */}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid-new{
          display:grid; grid-template-columns:0.9fr 1.1fr; gap:70px; align-items:center;
        }
        .about-frame-wrap{ display:flex; justify-content:center; }
        .about-frame{
          position:relative; width:100%; max-width:420px; aspect-ratio:3/4;
          border-radius:24px; border:1.5px solid rgba(192,132,252,.35);
          background:linear-gradient(180deg, rgba(21,0,80,.35), rgba(0,0,0,.6));
          box-shadow:0 0 60px rgba(97,0,148,.35), inset 0 0 40px rgba(63,0,113,.2);
          display:flex; flex-direction:column; align-items:center; justify-content:space-between;
          padding:60px 30px 40px;
        }
        .about-orb{
          width:200px; height:200px; border-radius:50%;
          background:radial-gradient(circle at 50% 40%, #1a0038 0%, #0a0018 70%, #000 100%);
          box-shadow:0 0 60px rgba(192,132,252,.45), inset 0 0 40px rgba(63,0,113,.5);
          display:flex; align-items:center; justify-content:center;
          position:relative;
        }
        .about-orb::before{
          content:''; position:absolute; inset:-6px; border-radius:50%;
          border:1px solid rgba(192,132,252,.3);
        }
        .about-code-icon{ filter:drop-shadow(0 0 12px rgba(247,7,118,.5)); }
        .about-open-pill{
          display:inline-flex; align-items:center; gap:12px;
          padding:12px 26px; border-radius:100px;
          border:1.5px solid rgba(192,132,252,.5);
          background:rgba(21,0,80,.3);
          font-family:var(--mono); font-size:.82rem; color:#c9b8e6;
          letter-spacing:.14em; font-weight:600;
        }
        .dot-green{
          width:8px; height:8px; border-radius:50%; background:#22ff88;
          box-shadow:0 0 8px #22ff88;
        }
        .about-me-eyebrow{
          font-family:var(--mono); font-size:.85rem; color:#c084fc;
          letter-spacing:.15em; margin-bottom:22px; font-weight:600;
        }
        .about-bio{
          border-left:2px solid #F70776; padding-left:22px;
          color:#e8dcf5; font-size:1.02rem; line-height:1.7; font-weight:300;
          margin-bottom:36px;
        }
        .about-info-grid{
          display:grid; grid-template-columns:repeat(3, 1fr); gap:14px; margin-bottom:36px;
        }
        .about-info-card{
          display:flex; gap:14px; align-items:center;
          background:linear-gradient(180deg, rgba(21,0,80,.4), rgba(0,0,0,.6));
          border:1px solid rgba(97,0,148,.3); border-radius:12px;
          padding:16px 14px;
        }
        .ai-icon{
          width:42px; height:42px; border-radius:10px; flex-shrink:0;
          background:rgba(63,0,113,.5); color:#c084fc;
          display:inline-flex; align-items:center; justify-content:center;
          box-shadow:inset 0 0 10px rgba(192,132,252,.25);
        }
        .ai-label{
          font-family:var(--mono); font-size:.62rem; color:#c084fc;
          letter-spacing:.12em; font-weight:600; margin-bottom:4px;
        }
        .ai-val{ font-size:.82rem; color:#f5ecff; font-weight:500; line-height:1.35; }
        .ai-val.accent{ color:#22ff88; }
        .about-cta-row{ display:flex; gap:14px; flex-wrap:wrap; }
        @media(max-width:900px){
          .about-grid-new{ grid-template-columns:1fr!important; gap:40px; }
          .about-info-grid{ grid-template-columns:repeat(2,1fr)!important; }
        }
        @media(max-width:560px){
          .about-info-grid{ grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  );
}
