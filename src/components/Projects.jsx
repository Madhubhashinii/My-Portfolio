import { useEffect, useRef, useState } from "react";

const projects = [
  { id:1, emoji:"🛒", tag:"Projects", title:"Soleforge", desc:"SoleForge turns your shoe ideas into reality.👟Design, customize, and create your perfect sneaker your way. 💜 ", tech:["React","Node.js","MongoDB","Stripe"], img:"/imagevi/frontShoe.jpeg", github:"https://github.com/Madhubhashinii", live:"https://soleforge-woad.vercel.app/", bg:"rgba(97,0,148,0.06)" },

  { id:4, emoji:"💬", tag:"Projects", title:"MediNova", desc:"MediNova is a modern healthcare platform that helps users explore healthcare information.It is deployed on AWS using a serverless architecture with S3, Lambda, and CloudFront.", tech:["TypeScript","CSS","JavaScript"], img:"/imagevi/ch.jpeg", github:"https://github.com/Madhubhashinii", live:"https://d3spjzcabmiagf.cloudfront.net/", bg:"rgba(247,7,118,0.05)" },

  { id:3, emoji:"🌤️", tag:"Projects", title:"InfoSphere", desc:"InfoSphere makes library access simple and secure.Manage your library easily with smart facial recognition no ID cards or logbooks needed.💜", tech:["OpenCV","Python","face-recognition","flask"], img:"/imagevi/frontLib.jpeg", github:"https://github.com/Madhubhashinii", live:"#", bg:"rgba(247,7,118,0.05)" },

  { id:2, emoji:"📋", tag:"Projects", title:"Swift POS", desc:"SwiftPOS makes selling simple and easy.💜 Manage your sales, products, and everything you need in one place.", tech:["mysql","java","jsp"], img:"/imagevi/frontPos.jpeg", github:"https://github.com/Madhubhashinii", bg:"rgba(63,0,113,0.06)" },

  { id:5, emoji:"🎮", tag:"UI/UX Designs", title:"Smart Genie App", desc:"Design of the Smart Genie app with a focus on user experience and intuitive navigation.", tech:[], img:"/imagevi/geni.jpeg", video:"/imagevi/SmartGenie.mp4", figma:"https://figma.com/your-actual-design-link", github:"#", live:"#", bg:"rgba(97,0,148,0.04)" },

  { id:6, emoji:"🎮", tag:"UI/UX Designs", title:"Aqua Tracker App", desc:"Design of the Aqua Tracker app with a focus on user experience and intuitive navigation.", tech:[], img:"/imagevi/aqu.jpeg", video:"/imagevi/aquva.mp4", figma:"https://figma.com/your-actual-design-link", github:"#", live:"#", bg:"rgba(97,0,148,0.04)" }, 
];

const filters = ["All","Projects","UI/UX Designs"];

export default function Projects() {
  const ref = useRef(null);
  const [active, setActive] = useState("All");
  const [playingCard, setPlayingCard] = useState(null);
  const filtered = active === "All" ? projects : projects.filter(p => p.tag === active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal") || [];
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"52px" }}>
          <div className="reveal s-label" style={{ justifyContent:"center" }}>My Work</div>
          <h2 className="reveal s-title reveal-delay-1">Featured <span>Projects</span></h2>
          <p className="reveal reveal-delay-2 s-sub" style={{ margin:"0 auto" }}>
            A selection of projects showcasing my skills across different domains and technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal" style={{ display:"flex", justifyContent:"center", gap:"8px", flexWrap:"wrap", marginBottom:"44px" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)} className={`filter-btn ${active === f ? "active" : ""}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }}>
          {filtered.map((p, i) => (
            <div key={`${active}-${p.id}`} className="project-card reveal visible" style={{ transitionDelay:`${i * 0.08}s` }}>

              <div
                className="proj-img"
                style={{
                  background:p.bg,
                  cursor: (p.video || (p.live && p.live !== "#")) ? "pointer" : "default",
                  height: playingCard === p.id ? "340px" : "190px",
                  transition:"height .35s ease"
                }}
                onClick={() => {
                  if (p.video) {
                    setPlayingCard(playingCard === p.id ? null : p.id);
                  } else if (p.live && p.live !== "#") {
                    window.open(p.live, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                {playingCard === p.id && p.video ? (
                  <video
                    src={p.video}
                    autoPlay loop muted playsInline
                    style={{ width:"100%", height:"100%", objectFit:"contain", background:"#000" }}
                  />
                ) : p.img ? (
                  <img src={p.img} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                ) : (
                  <div className="proj-preview">{p.emoji}</div>
                )}
                <div className="proj-overlay" />
              </div>

              <div className="proj-body">
                <span className="proj-tag">{p.tag}</span>
                <h3 className="proj-title">{p.title}</h3>

                {playingCard !== p.id && (
                  <>
                    <p className="proj-desc">{p.desc}</p>
                    {p.tech.length > 0 && (
                      <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"16px" }}>
                        {p.tech.map(t => <span key={t} className="proj-tech">{t}</span>)}
                      </div>
                    )}
                  </>
                )}

                <div style={{ display:"flex", gap:"16px" }}>
                  {p.figma ? (
                    <a href={p.figma} className="proj-link" target="_blank" rel="noreferrer">🎨 View Figma</a>
                  ) : p.github && p.github !== "#" ? (
                    <a href={p.github} className="proj-link" target="_blank" rel="noreferrer">⌨️ Code</a>
                  ) : null}

                  {p.video ? (
                    <button
                      onClick={() => setPlayingCard(playingCard === p.id ? null : p.id)}
                      className="proj-link"
                      style={{ background:"none", border:"none", cursor:"pointer", padding:0, font:"inherit" }}
                    >
                      🔗 {playingCard === p.id ? "Stop Demo" : "Live Demo"}
                    </button>
                  ) : p.live && p.live !== "#" ? (
                    <a href={p.live} className="proj-link" target="_blank" rel="noreferrer">🔗 Live Demo</a>
                  ) : null}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign:"center", marginTop:"52px" }}>
          <a href="https://github.com/Madhubhashinii" target="_blank" rel="noreferrer" className="btn-s">
            View All on GitHub →
          </a>

          <br/><br/>

          {/* <a href="https://figma.com" target="_blank" rel="noreferrer" className="btn-s">
            View All on Figma →
          </a> */}

        </div>
      </div>
    </section>
  );
}