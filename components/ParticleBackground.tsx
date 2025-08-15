"use client";

import dynamic from "next/dynamic";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = {
    fullScreen: {
      enable: false, // importante: NO fullscreen para que se adapte al contenedor
    },
    background: {
      color: "transparent",
    },
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 200, links: { opacity: 0.8 } },
        push: { quantity: 4 },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
    />
  );
};

export default ParticleBackground;
