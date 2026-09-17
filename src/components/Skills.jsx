import { useEffect, useRef } from "react";

const cats = [
  {
    icon:"🎨", label:"Frontend", color:"rgba(97,0,148,.08)",
    skills:[
      { icon:"⚛️", name:"C  Language", pct:70 },
      { icon:"🌐", name:"HTML & CSS", pct:95 },
      { icon:"🟨", name:"Java Language", pct:85 },
      
    ],
  },
  {
    icon:"⚙️", label:"Backend", color:"rgba(63,0,113,.08)",
    skills:[
      { icon:"🟩", name:"MySQL", pct:76 },
      { icon:"🐍", name:"Java  (JSP,Servlets)", pct:72 },
      { icon:"🚂", name:"Oracle database", pct:70 },

    ],
  },
  {
    icon:"🛠️", label:"Tools & Design", color:"rgba(247,7,118,.06)",
    skills:[
      { icon:"🐙", name:"Git & GitHub", pct:45 },
      { icon:"🎭", name:"Figma", pct:74 },
      { icon:"⚡", name:"Tableau", pct:80 },
      { icon:"🔗", name:"Power BI", pct:82 },
      { icon:"🔗", name:"AWS", pct:55 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          e.target.querySelectorAll(".skill-fill").forEach(b => {
            b.style.width = b.dataset.pct + "%";
          });
        }
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="skill-section" id="skills" ref={ref}>
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"64px" }}>
          <div className="reveal s-label" style={{ justifyContent:"center" }}>My Skills</div>
          <h2 className="reveal s-title reveal-delay-1">
            Technical <span>skills</span>
          </h2>
          <p className="reveal reveal-delay-2 s-sub" style={{ margin:"0 auto" }}>
            A curated stack of tools and technologies I used to build my projects.
          </p>
        </div>

        <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }}>
          {cats.map((cat, ci) => (
            <div key={cat.label} className={`reveal reveal-delay-${ci + 1}`}>
              {/* Category header */}
              <div style={{
                background:cat.color, border:"1px solid var(--border)",
                borderRadius:"12px", padding:"16px 20px", marginBottom:"14px",
                display:"flex", alignItems:"center", gap:"12px"
              }}>
                <span style={{ fontSize:"1.4rem" }}>{cat.icon}</span>
                <span style={{ fontFamily:"'Orbitron',sans-serif", fontWeight:700, fontSize:".9rem", color:"var(--text)" }}>
                  {cat.label}
                </span>
              </div>

              {/* Skill cards */}
              <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
                {cat.skills.map(sk => (
                  <div key={sk.name} className="skill-card">
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"8px" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"9px" }}>
                        <span style={{ fontSize:"1rem" }}>{sk.icon}</span>
                        <span style={{ fontWeight:600, fontSize:".86rem", color:"var(--text)" }}>{sk.name}</span>
                      </div>
                      <span style={{ fontFamily:"var(--mono)", fontSize:".7rem", color:"#9259BD" }}>{sk.pct}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" data-pct={sk.pct} style={{ width:"0%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag  */}
        <div className="reveal" style={{ marginTop:"56px", textAlign:"center" }}>
          <div style={{ fontFamily:"var(--mono)", fontSize:".66rem", color:"#b579e6 ", marginBottom:"18px", letterSpacing:".12em", textTransform:"uppercase" }}>
               also familiar with
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"9px", justifyContent:"center" }}>
            {["AWS","MySQL","Docker","Linux"].map(tag => (
              <span key={tag}
                style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"100px", padding:"5px 14px", fontFamily:"var(--mono)", fontSize:".68rem", color:"#b579e6", cursor:"default", transition:"all .2s" }}
                onMouseEnter={e=>{ e.target.style.borderColor="rgba(97,0,148,.3)"; e.target.style.color="#b579e6 "; }}
                onMouseLeave={e=>{ e.target.style.borderColor="var(--border)"; e.target.style.color="#b579e6 "; }}
              >{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}