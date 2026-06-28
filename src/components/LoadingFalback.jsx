import logo from "../assets/logo-ehite-removebg-preview.png";

import React, { useEffect, useRef } from "react";


const styles = `
  @keyframes avmFloat {
    0%   { transform: translateY(110%) scale(0.6); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 0.6; }
    100% { transform: translateY(-110%) scale(1.1); opacity: 0; }
  }
  @keyframes avmPulse {
    0%, 100% { transform: scale(0.88); opacity: 0.3; }
    50%       { transform: scale(1.08); opacity: 0.08; }
  }
  @keyframes avmLogoIn {
    from { opacity: 0; transform: scale(0.6) rotate(-10deg); }
    to   { opacity: 1; transform: scale(1) rotate(0deg); }
  }
  @keyframes avmGlowPulse {
    0%, 100% { transform: scale(0.9);  opacity: 0.5; }
    50%       { transform: scale(1.15); opacity: 1; }
  }
  @keyframes avmSpin { to { transform: rotate(360deg); } }
  @keyframes avmInnerGlow {
    0%, 100% { border-color: rgba(255,255,255,0.1); background: rgba(255,255,255,0.04); }
    50%       { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.08); }
  }
  @keyframes avmBrandIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes avmLineExpand {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes avmBarIn {
    from { opacity: 0; transform: scaleX(0.4); }
    to   { opacity: 1; transform: scaleX(1); }
  }
  @keyframes avmShimmer {
    0%   { transform: translateX(-250%); }
    100% { transform: translateX(500%); }
  }
  @keyframes avmDotPop {
    0%, 100% { transform: scale(1);   opacity: 0.25; background: rgba(255,255,255,0.25); }
    50%       { transform: scale(1.5); opacity: 0.9;  background: rgba(255,255,255,0.7); }
  }
  @keyframes avmSheenMove {
    0%, 100% { transform: translateX(-100%) skewX(-15deg); }
    50%       { transform: translateX(200%) skewX(-15deg); }
  }
`;

export default function LoadingFallback() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div");
      const size  = Math.random() * 5 + 2;
      const left  = Math.random() * 100;
      const dur   = Math.random() * 8 + 6;
      const delay = Math.random() * 8;
      Object.assign(p.style, {
        position: "absolute",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.08)",
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        bottom: "0",
        animation: `avmFloat ${dur}s linear ${delay}s infinite`,
      });
      container.appendChild(p);
    }
    return () => { container.innerHTML = ""; };
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div style={{
       backgroundColor: "#08161C",
        width: "100vw",
        height: "100vh",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0, left: 0,
        zIndex: 9999,
        overflow: "hidden",
      }}>

        <div ref={particlesRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.015) 50%, transparent 70%)",
          animation: "avmSheenMove 4s ease-in-out infinite",
          pointerEvents: "none",
        }} />

        {[260, 380, 480].map((size, i) => (
          <div key={size} style={{
            position: "absolute",
            width: size, height: size,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.06)",
            animation: `avmPulse ${3.5 + i}s ease-in-out ${i * 0.8}s infinite`,
          }} />
        ))}

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, position: "relative", zIndex: 2 }}>

          <div style={{ position: "relative", width: 110, height: 110, display: "flex", alignItems: "center", justifyContent: "center", animation: "avmLogoIn 0.9s cubic-bezier(0.22,1,0.36,1) both" }}>
            <div style={{
              position: "absolute", inset: -12, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
              animation: "avmGlowPulse 2.5s ease-in-out infinite",
            }} />
            <div style={{
              position: "absolute", inset: -18, borderRadius: "50%",
              border: "1px dashed rgba(255,255,255,0.12)",
              animation: "avmSpin 8s linear infinite",
            }}>
              <div style={{
                position: "absolute", top: -4, left: "50%",
                width: 8, height: 8, borderRadius: "50%",
                background: "rgba(255,255,255,0.55)",
                transform: "translateX(-50%)",
                boxShadow: "0 0 6px rgba(255,255,255,0.4)",
              }} />
            </div>
            <img
              src={logo}
              alt="AVM Metals"
              style={{
                width: "clamp(64px, 16vw, 88px)",
                height: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 0 12px rgba(255,255,255,0.15))",
                animation: "avmInnerGlow 3s ease-in-out infinite",
                borderRadius: 16,
                padding: 6,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, animation: "avmBrandIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s both" }}>
            <div style={{ position: "relative" }}>
              <p style={{
                color: "#fff",
                fontSize: "clamp(18px, 5vw, 24px)",
                fontWeight: 700,
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontFamily: "'Georgia', 'Times New Roman', serif",
                margin: 0,
              }}>
                AVM Metals
              </p>
              <div style={{
                position: "absolute", bottom: -4, left: 0, right: 0, height: 1,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
                transformOrigin: "center",
                animation: "avmLineExpand 1.2s ease 0.8s both",
                transform: "scaleX(0)",
              }} />
            </div>
            <p style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "clamp(9px, 2.2vw, 11px)",
              letterSpacing: "5px",
              textTransform: "uppercase",
              margin: 0,
            }}>
              Quality &amp; Trust
            </p>
          </div>

          <div style={{ width: "clamp(110px, 28vw, 150px)", animation: "avmBarIn 0.8s ease 0.6s both", opacity: 0 }}>
            <div style={{ height: 2, background: "rgba(255,255,255,0.08)", borderRadius: 2, overflow: "hidden" }}>
              <div style={{
                height: "100%", width: "50%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
                borderRadius: 2,
                animation: "avmShimmer 1.8s ease-in-out infinite",
              }} />
            </div>
          </div>

          <div style={{ display: "flex", gap: 7, animation: "avmBarIn 0.8s ease 0.9s both", opacity: 0 }}>
            {[0, 0.2, 0.4].map((delay, i) => (
              <div key={i} style={{
                width: 5, height: 5, borderRadius: "50%",
                background: "rgba(255,255,255,0.25)",
                animation: `avmDotPop 1.2s ease-in-out ${delay}s infinite`,
              }} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
