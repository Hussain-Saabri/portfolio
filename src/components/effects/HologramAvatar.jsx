import React from 'react';
import { motion } from 'framer-motion';

const HologramAvatar = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const neonColor = isDark ? '#00f2ff' : '#a855f7';

    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Outer Glow Ring */}
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: 360
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-primary-blue/30"
            />

            {/* Holographic Bust Placeholder (Using a stylized SVG) */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm shadow-2xl">
                <svg viewBox="0 0 200 200" className="w-full h-full opacity-80">
                    <defs>
                        <linearGradient id="hologramGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={neonColor} stopOpacity="0.8" />
                            <stop offset="100%" stopColor={neonColor} stopOpacity="0.1" />
                        </linearGradient>
                        <filter id="glitch">
                            <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="THICK" />
                            <feComposite operator="out" in="THICK" in2="SourceAlpha" result="OUTLINE" />
                        </filter>
                    </defs>

                    {/* Stylized Detailed Bust Silhouette */}
                    <motion.path
                        d="M100,30 
               C115,30 130,45 130,70 
               C130,90 125,95 125,105 
               C145,115 160,135 160,170 
               L40,170 
               C40,135 55,115 75,105 
               C75,95 70,90 70,70 
               C70,45 85,30 100,30"
                        fill="url(#hologramGradient)"
                        animate={{
                            filter: ["none", "url(#glitch)", "none"],
                            x: [0, -1, 1, 0],
                        }}
                        transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4 }}
                    />

                    {/* Facial light highlights */}
                    <motion.path
                        d="M90,65 Q100,75 110,65"
                        stroke={neonColor}
                        strokeWidth="1"
                        fill="none"
                        opacity="0.3"
                    />

                    {/* Scanning Line */}
                    <motion.rect
                        width="200"
                        height="2"
                        fill={neonColor}
                        initial={{ y: 0 }}
                        animate={{ y: 200 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="opacity-50"
                    />
                </svg>

                {/* Scanlines overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]"></div>
            </div>

            {/* Orbiting particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary-blue shadow-lg shadow-primary-blue"
                    animate={{
                        x: [Math.cos(i) * 120, Math.cos(i + 6.28) * 120],
                        y: [Math.sin(i) * 120, Math.sin(i + 6.28) * 120],
                        scale: [1, 1.5, 1],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
                />
            ))}
        </div>
    );
};

export default HologramAvatar;
