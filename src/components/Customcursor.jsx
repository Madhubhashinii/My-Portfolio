import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const move = e => {
      mx = e.clientX; my = e.clientY;
      dot.current.style.left = mx + "px";
      dot.current.style.top  = my + "px";
    };

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.current.style.left = rx + "px";
      ring.current.style.top  = ry + "px";
      requestAnimationFrame(tick);
    };

    const on  = () => ring.current.classList.add("hover");
    const off = () => ring.current.classList.remove("hover");

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,.skill-card,.project-card,.filter-btn").forEach(el => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });

    tick();
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}