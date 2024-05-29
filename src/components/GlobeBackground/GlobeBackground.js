import React, { useEffect, useRef } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const GlobeBackground = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: globeRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x6cace4,
      backgroundColor: 0xBED1CF,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={globeRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default GlobeBackground;
