import React, { useRef, useEffect } from 'react';

const NebulaBackground = ({ theme = 'dark' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const particles = [];
        const particleCount = 100;
        const isDark = theme === 'dark';

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random()
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(34, 211, 238, ${p.opacity * 0.5})`
                    : `rgba(99, 102, 241, ${p.opacity * 0.3})`;
                ctx.fill();
            });

            // Subtle Nebula Glows
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width / 1.5);

            if (isDark) {
                gradient.addColorStop(0, 'rgba(8, 20, 30, 0)');
                gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.05)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            } else {
                gradient.addColorStop(0, 'rgba(99, 102, 241, 0)');
                gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ filter: 'blur(1px)' }}
        />
    );
};

export default NebulaBackground;
