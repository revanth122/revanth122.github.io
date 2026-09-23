export default function OrbitField({ compact = false }: { compact?: boolean }) {
  const size = compact ? 520 : 780;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden grain-mask">
      <div
        className="absolute rounded-full opacity-[0.35] blur-[90px]"
        style={{
          width: size * 0.55,
          height: size * 0.55,
          background: "radial-gradient(circle, rgba(255,138,61,0.5), transparent 70%)",
        }}
      />

      <svg
        width={size}
        height={size}
        viewBox="0 0 600 600"
        className="relative opacity-70"
        aria-hidden="true"
      >
        <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="280" fill="none" stroke="#27282b" strokeWidth="1" strokeDasharray="2 10" />
        </g>
        <g className="animate-spin-slower" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="210" fill="none" stroke="#3b3c40" strokeWidth="1" strokeDasharray="1 8" />
        </g>
        <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="140" fill="none" stroke="#27282b" strokeWidth="1" />
        </g>

        <g className="animate-spin-slower" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="20" r="4" fill="#ff8a3d" />
          <circle cx="300" cy="20" r="9" fill="#ff8a3d" opacity="0.25" />
        </g>
        <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="580" cy="300" r="3.5" fill="#ff5470" />
          <circle cx="580" cy="300" r="8" fill="#ff5470" opacity="0.25" />
        </g>
        <g className="animate-spin-slower" style={{ transformOrigin: "300px 300px", animationDirection: "reverse" }}>
          <circle cx="160" cy="300" r="3" fill="#ff8a3d" opacity="0.8" />
        </g>

        <circle cx="300" cy="300" r="2.5" fill="#f5f5f2" />
      </svg>
    </div>
  );
}
