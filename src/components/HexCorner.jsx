export default function HexCorner() {
  return (
    <div className="hex-corner" aria-hidden="true">
      <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="hgrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#610094" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F70776" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="hnode" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F70776" stopOpacity="1" />
            <stop offset="100%" stopColor="#610094" stopOpacity="0" />
          </radialGradient>
          <filter id="hglow"><feGaussianBlur stdDeviation="2.5" /></filter>
        </defs>

        {/* connecting lines */}
        <g stroke="url(#hgrad)" strokeWidth="1" fill="none" opacity="0.55">
          <line x1="80" y1="340" x2="180" y2="280" />
          <line x1="180" y1="280" x2="260" y2="220" />
          <line x1="260" y1="220" x2="360" y2="160" />
          <line x1="360" y1="160" x2="440" y2="90" />
          <line x1="180" y1="280" x2="290" y2="330" />
          <line x1="260" y1="220" x2="200" y2="150" />
          <line x1="360" y1="160" x2="290" y2="90" />
          <line x1="440" y1="90" x2="380" y2="30" />
          <line x1="200" y1="150" x2="120" y2="200" />
          <line x1="290" y1="90" x2="220" y2="40" />
        </g>

        {/* hexagons */}
        <g fill="none" stroke="#610094" strokeWidth="1.2">
          {[
            [80,340,18],[180,280,22],[260,220,20],[360,160,26],[440,90,20],
            [290,330,16],[200,150,18],[290,90,20],[380,30,16],[120,200,14],[220,40,14]
          ].map(([cx,cy,r],i) => {
            const pts = Array.from({length:6},(_,k) => {
              const a = (Math.PI/3)*k - Math.PI/2;
              return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`;
            }).join(" ");
            return (
              <polygon
                key={i}
                points={pts}
                className={`hex hex-${i%4}`}
                style={{ animationDelay: `${i*0.3}s` }}
              />
            );
          })}
        </g>

        {/* glowing nodes */}
        <g filter="url(#hglow)">
          {[
            [80,340],[260,220],[440,90],[290,90],[220,40],[120,200]
          ].map(([cx,cy],i) => (
            <circle
              key={i}
              cx={cx} cy={cy} r="6"
              fill="url(#hnode)"
              className="hex-node"
              style={{ animationDelay: `${i*0.5}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
