import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="container">
        <div style={{ textAlign:"center", marginBottom:"64px" }}>
          <div className="reveal s-label" style={{ justifyContent:"center" }}>Get In Touch</div>
          <h2 className="reveal s-title reveal-delay-1">Let's <span>Work Together</span></h2>

          <p className="reveal reveal-delay-2 s-sub" style={{ margin:"0 auto" }}>
           {/* Have a project in mind or just want to say hello? I'm always open to new ideas and collaborations. */}
          </p>

        </div>

        <div className="contact-cols" style={{ display:"grid", gridTemplateColumns:"1fr", gap:"48px", alignItems:"start", justifyItems:"center" }}>
          {/* Left */}
          <div className="reveal">
            {/* Contact info — 2 columns x 2 rows */}
            <div style={{ marginBottom:"36px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"28px 24px" }}>
              {[
                { icon:"📧", label:"Email", val:"gayanthishini@gmail.com", href:"mailto:gayanthishini@gmail.com" },
                { icon:"📍", label:"Location", val:"Galle, Sri Lanka", href:null },
                { icon:"💼", label:"Status", val:"Open to opportunities", href:null },
                { icon:"⏰", label:"Response Time", val:"Within 24 hours", href:null },
              ].map(i => (
                <div key={i.label} style={{ display:"flex", gap:"14px", alignItems:"flex-start" }}>
                  <div style={{
                    width:"46px", height:"46px", flexShrink:0,
                    background:"var(--surface)", border:"1px solid var(--border)",
                    borderRadius:"10px", display:"flex", alignItems:"center",
                    justifyContent:"center", fontSize:"1.1rem"
                  }}>{i.icon}</div>
                  <div>
                    <div style={{ fontFamily:"var(--mono)", fontSize:".64rem", color:"var(--text-muted)", letterSpacing:".1em", textTransform:"uppercase", marginBottom:"4px" }}>{i.label}</div>
                    {i.href
                      ? <a href={i.href} style={{ color:"var(--cyan)", textDecoration:"none", fontWeight:500, fontSize:".9rem" }}>{i.val}</a>
                      : <div style={{ color:"var(--text)", fontWeight:500, fontSize:".9rem" }}>{i.val}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <div style={{ fontFamily:"var(--mono)", fontSize:".64rem", color:"var(--text-muted)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:"14px" }}>
                 find me on
              </div>
              <div style={{ display:"flex", gap:"10px" }}>
                {[["GH","https://github.com/Madhubhashinii"],["LI","https://www.linkedin.com/in/gayanthika-madhubhashini-250163438"]].map(([lbl,href]) => (
                  <a key={lbl} href={href} target="_blank" rel="noreferrer" className="social-btn">{lbl}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Designed & built by <span>Gaya</span> · {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </section>
  );
}
