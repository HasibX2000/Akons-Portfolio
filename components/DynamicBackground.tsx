"use client";
import { useEffect, useRef } from "react";

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle settings
    const particles: Particle[] = [];
    const particleCount = 100; // Reduced count for minimalism
    const connectionDistance = 150; // Maximum distance to draw connections
    let mouseX = 0;
    let mouseY = 0;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 2, // Consistent size for minimalism
        speedX: (Math.random() - 0.5) * 0.5, // Slower movement
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    function drawConnections(particle: Particle, particles: Particle[]) {
      particles.forEach((p) => {
        const dx = particle.x - p.x;
        const dy = particle.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          const opacity = 1 - distance / connectionDistance;
          ctx!.beginPath();
          ctx!.strokeStyle = document.documentElement.classList.contains("dark")
            ? `rgba(255, 255, 255, ${opacity * 0.15})`
            : `rgba(0, 0, 0, ${opacity * 0.1})`;
          ctx!.lineWidth = 1;
          ctx!.moveTo(particle.x, particle.y);
          ctx!.lineTo(p.x, p.y);
          ctx!.stroke();
        }
      });
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw connections
        drawConnections(particle, particles.slice(index + 1));

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = document.documentElement.classList.contains("dark")
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(0, 0, 0, 0.3)";
        ctx.fill();

        // Optional: Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          particle.x += dx * 0.02;
          particle.y += dy * 0.02;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
  );
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}
