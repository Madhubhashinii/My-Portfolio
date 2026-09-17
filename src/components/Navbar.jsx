import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <a href="#hero" className="nav-logo">
          K.G.G.M 
        </a>

        {/* Desktop */}
        <div style={{ display:"flex", alignItems:"center", gap:"36px" }} className="desktop-nav">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
          <a href="#contact" className="btn-p" style={{ padding:"9px 20px", fontSize:".78rem" }}>
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-toggle"
          style={{ background:"none", border:"none", color:"var(--cyan)", fontSize:"1.4rem", cursor:"none" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background:"rgba(2,4,10,.97)", backdropFilter:"blur(20px)",
          padding:"24px 40px", borderTop:"1px solid var(--border)",
          display:"flex", flexDirection:"column", gap:"20px"
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link"
              onClick={() => setMenuOpen(false)} style={{ fontSize:"1rem" }}>
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .desktop-nav{display:none!important} .mobile-toggle{display:block!important} }
        @media(min-width:769px){ .mobile-toggle{display:none!important} }
      `}</style>
    </nav>
  );
}