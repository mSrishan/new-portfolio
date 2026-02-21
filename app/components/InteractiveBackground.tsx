'use client';

import { useEffect, useRef } from 'react';

interface InteractiveBackgroundProps {
    isDarkMode: boolean;
}

const InteractiveBackground = ({ isDarkMode }: InteractiveBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        class Particle {
            x = 0; y = 0; size = 0; speedX = 0; speedY = 0; opacity = 0;

            constructor() { this.reset(); }

            reset() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas!.width) this.x = 0;
                if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                if (this.y < 0) this.y = canvas!.height;

                if (mouseRef.current.x != null && mouseRef.current.y != null) {
                    const dx = mouseRef.current.x - this.x;
                    const dy = mouseRef.current.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        this.x -= dx * 0.01;
                        this.y -= dy * 0.01;
                    }
                }
            }

            draw() {
                ctx!.fillStyle = isDarkMode
                    ? `rgba(129, 140, 248, ${this.opacity})`
                    : `rgba(79, 70, 229, ${this.opacity})`;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        const init = () => {
            particles = [];
            const count = Math.min(Math.floor(window.innerWidth / 10), 100);
            for (let i = 0; i < count; i++) particles.push(new Particle());
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p, index) => {
                p.update();
                p.draw();
                for (let j = index + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x;
                    const dy = p.y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 150) {
                        ctx.strokeStyle = isDarkMode
                            ? `rgba(129, 140, 248, ${0.1 * (1 - distance / 150)})`
                            : `rgba(79, 70, 229, ${0.1 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDarkMode]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000"
            style={{ opacity: 0.6 }}
        />
    );
};

export default InteractiveBackground;
