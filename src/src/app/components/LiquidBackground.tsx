import { useEffect, useRef } from "react";

export function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Blobs
    class Blob {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;

      constructor(canvasWidth: number, canvasHeight: number, color: string) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.baseX = this.x;
        this.baseY = this.y;
        this.radius = 100 + Math.random() * 150;
        this.color = color;
        this.speed = 0.3 + Math.random() * 0.5;
        this.angle = Math.random() * Math.PI * 2;
      }

      update(canvasWidth: number, canvasHeight: number, mouseX: number, mouseY: number) {
        // Gentle floating movement
        this.angle += 0.01;
        this.baseX += Math.cos(this.angle) * this.speed;
        this.baseY += Math.sin(this.angle) * this.speed;

        // Wrap around edges
        if (this.baseX < -this.radius) this.baseX = canvasWidth + this.radius;
        if (this.baseX > canvasWidth + this.radius) this.baseX = -this.radius;
        if (this.baseY < -this.radius) this.baseY = canvasHeight + this.radius;
        if (this.baseY > canvasHeight + this.radius) this.baseY = -this.radius;

        // Mouse repulsion
        const dx = mouseX - this.baseX;
        const dy = mouseY - this.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;

        if (distance < maxDistance && distance > 0) {
          const force = (1 - distance / maxDistance) * 50;
          this.x = this.baseX - (dx / distance) * force;
          this.y = this.baseY - (dy / distance) * force;
        } else {
          // Smoothly return to base position
          this.x += (this.baseX - this.x) * 0.1;
          this.y += (this.baseY - this.y) * 0.1;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, this.color.replace(/[\d.]+\)$/g, "0)"));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create blobs
    const blobs = [
      new Blob(canvas.width, canvas.height, "rgba(255, 108, 25, 0.4)"),
      new Blob(canvas.width, canvas.height, "rgba(13, 28, 54, 0.3)"),
      new Blob(canvas.width, canvas.height, "rgba(255, 133, 64, 0.35)"),
      new Blob(canvas.width, canvas.height, "rgba(255, 108, 25, 0.25)"),
      new Blob(canvas.width, canvas.height, "rgba(13, 28, 54, 0.2)"),
    ];

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob) => {
        blob.update(canvas.width, canvas.height, mouseX, mouseY);
        blob.draw(ctx);
      });

      // Apply blur using filter
      ctx.filter = "blur(80px)";
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = "none";

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, opacity: 0.8 }}
    />
  );
}
