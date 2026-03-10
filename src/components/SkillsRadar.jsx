import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsRadar = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';
    const [activeSkill, setActiveSkill] = useState(null);
    const [typedHeader, setTypedHeader] = useState("");
    const fullHeader = "My Digital Arsenal";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedHeader(fullHeader.slice(0, i));
            i++;
            if (i > fullHeader.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const skills = [
        { name: "React", level: 98, angle: 0, snippet: "useEffect(() => {\n  initSystem();\n}, []);" },
        { name: "Node.js", level: 92, angle: 60, snippet: "app.listen(3000,\n  () => log('Ready'));" },
        { name: "MongoDB", level: 88, angle: 120, snippet: "const db = await\nMongoClient.connect();" },
        { name: "Express", level: 90, angle: 180, snippet: "router.get('/core',\n  authGuard);" },
        { name: "Tailwind", level: 95, angle: 240, snippet: "className='bg-neon\nblur-xl opacity-80'" },
        { name: "Next.js", level: 94, angle: 300, snippet: "export async function\ngetServerSideProps()" },
    ];

    const radius = 150;
    const centerX = 200;
    const centerY = 200;

    const getPos = (angle, dist) => {
        const rad = (angle - 90) * (Math.PI / 180);
        return {
            x: centerX + dist * Math.cos(rad),
            y: centerY + dist * Math.sin(rad),
        };
    };

    return (
        <section className="relative py-32 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Decor & Depth */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Infinite Depth Rings */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [0.5, 2],
                            rotate: [0, i % 2 === 0 ? 360 : -360]
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2
                        }}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${isDark ? 'border-cyan-500/10' : 'border-indigo-500/5'
                            }`}
                        style={{ width: `${(i + 1) * 300}px`, height: `${(i + 1) * 300}px` }}
                    />
                ))}

                {/* Electric Sparks / Fireflies */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 2000 - 1000,
                            y: Math.random() * 2000 - 1000,
                            opacity: 0
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            x: (Math.random() - 0.5) * 200,
                            y: (Math.random() - 0.5) * 200,
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 10
                        }}
                        className={`absolute top-1/2 left-1/2 w-1 h-1 rounded-full blur-[2px] ${isDark
                                ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
                                : 'bg-yellow-400 shadow-[0_0_10px_#fbbf24]'
                            }`}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                {/* Typing Header */}
                <div className="text-center mb-24 relative">
                    <h2 className={`text-6xl md:text-8xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {typedHeader}
                        <span className={`inline-block w-4 h-12 md:w-8 md:h-20 ml-2 align-middle ${isDark ? 'bg-cyan-400 shadow-[0_0_20px_#22d3ee]' : 'bg-indigo-600'}`} />
                    </h2>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <div className={`h-[1px] w-12 ${isDark ? 'bg-cyan-500/30' : 'bg-indigo-500/20'}`} />
                        <p className={`text-[12px] font-black uppercase tracking-[0.6em] ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                            Digital Arsenal
                        </p>
                        <div className={`h-[1px] w-12 ${isDark ? 'bg-cyan-500/30' : 'bg-indigo-500/20'}`} />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-32 w-full">
                    {/* Radar Visualization */}
                    <div className="relative w-[450px] h-[450px]">
                        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                            {/* Radar Rings with Shimmer */}
                            {[1, 0.75, 0.5, 0.25].map((r, i) => (
                                <motion.circle
                                    key={i}
                                    cx={centerX}
                                    cy={centerY}
                                    r={radius * r}
                                    fill="none"
                                    stroke={isDark ? "rgba(34, 211, 238, 0.15)" : "rgba(99, 102, 241, 0.1)"}
                                    strokeWidth="1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                />
                            ))}

                            {/* Connecting Circuits */}
                            {skills.map((s, i) => {
                                const pos = getPos(s.angle, radius);
                                return (
                                    <g key={i}>
                                        <line
                                            x1={centerX}
                                            y1={centerY}
                                            x2={pos.x}
                                            y2={pos.y}
                                            stroke={isDark ? "rgba(34, 211, 238, 0.05)" : "rgba(99, 102, 241, 0.05)"}
                                            strokeWidth="0.5"
                                        />
                                        <motion.circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="1.5"
                                            fill={isDark ? "#22d3ee" : "#6366f1"}
                                            animate={{ opacity: [0.2, 1, 0.2] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                        />
                                    </g>
                                );
                            })}

                            {/* Skills Polygon - Ethereal Fill */}
                            <motion.path
                                d={skills.map((s, i) => {
                                    const pos = getPos(s.angle, (s.level / 100) * radius);
                                    return `${i === 0 ? 'M' : 'L'} ${pos.x} ${pos.y}`;
                                }).join(' ') + ' Z'}
                                fill={isDark ? "rgba(34, 211, 238, 0.3)" : "rgba(99, 102, 241, 0.15)"}
                                stroke={isDark ? "#22d3ee" : "#6366f1"}
                                strokeWidth="3"
                                className="drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2.5, ease: "circOut" }}
                            />

                            {/* Skill Nodes with Energy Pulse */}
                            {skills.map((s, i) => {
                                const pos = getPos(s.angle, (s.level / 100) * radius);
                                return (
                                    <g key={i}>
                                        {/* Pulsing Energy Aura */}
                                        <motion.circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="12"
                                            fill={isDark ? "rgba(34, 211, 238, 0.2)" : "rgba(99, 102, 241, 0.1)"}
                                            animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.6, 0.3] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                        />
                                        {/* The Node */}
                                        <motion.circle
                                            cx={pos.x}
                                            cy={pos.y}
                                            r="8"
                                            fill={isDark ? "#22d3ee" : "#6366f1"}
                                            className="cursor-pointer"
                                            whileHover={{ scale: 1.5, filter: "brightness(1.5)" }}
                                            onMouseEnter={() => setActiveSkill(s)}
                                            onMouseLeave={() => setActiveSkill(null)}
                                        />
                                        {/* Floating Labels */}
                                        <text
                                            x={getPos(s.angle, radius + 40).x}
                                            y={getPos(s.angle, radius + 40).y}
                                            fill={isDark ? "rgba(255,255,255,0.8)" : "rgba(15,23,42,0.8)"}
                                            fontSize="10"
                                            fontWeight="900"
                                            textAnchor="middle"
                                            className="uppercase tracking-[0.2em] pointer-events-none drop-shadow-lg"
                                        >
                                            {s.name}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Holographic Snippets Overlay with Glitch */}
                        <AnimatePresence>
                            {activeSkill && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
                                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                    exit={{ opacity: 0, scale: 0.5, rotateX: 45 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
                                >
                                    <div className={`p-6 rounded-2xl backdrop-blur-3xl border-2 ${isDark
                                            ? 'bg-black/60 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.4)] text-cyan-400'
                                            : 'bg-white/60 border-indigo-400 shadow-2xl text-indigo-600'
                                        }`}>
                                        {/* Scanline Effect */}
                                        <div className="absolute inset-x-0 top-0 h-[1px] bg-white opacity-20 animate-scanline" />
                                        <div className="text-[12px] font-mono whitespace-pre leading-relaxed font-black mb-2">
                                            {activeSkill.snippet}
                                        </div>
                                        <div className={`text-[8px] font-black uppercase text-right opacity-50`}>
                                            MERN_NODE_PROTO_v2.0
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Side Panels - Glass Cards */}
                    <div className="flex flex-col gap-4 w-full max-w-sm">
                        {skills.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onMouseEnter={() => setActiveSkill(s)}
                                onMouseLeave={() => setActiveSkill(null)}
                                className={`p-6 rounded-3xl border relative overflow-hidden group transition-all duration-500 ${isDark
                                        ? 'border-white/5 bg-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/[0.02]'
                                        : 'border-slate-200 bg-white/40 backdrop-blur-sm hover:border-indigo-500/40 shadow-sm'
                                    }`}
                            >
                                {/* Background Shimmer */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-cyan-500/0 via-cyan-500/5 to-cyan-500/0' : 'from-indigo-500/0 via-indigo-500/5 to-indigo-500/0'
                                    } translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />

                                <div className="flex justify-between items-end mb-3 relative z-10">
                                    <span className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.name}</span>
                                    <span className={`text-xs font-black ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>{s.level}%</span>
                                </div>
                                <div className={`h-2 w-full ${isDark ? 'bg-white/10' : 'bg-slate-200'} rounded-full overflow-hidden relative z-10`}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${s.level}%` }}
                                        transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                                        className={`h-full relative ${isDark ? 'bg-cyan-500 shadow-[0_0_20px_#22d3ee]' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                                            }`}
                                    >
                                        {/* Internal Wave Animation */}
                                        <motion.div
                                            animate={{ x: [0, 100] }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 bg-white/20 skew-x-[-20deg] w-4"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scanline {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scanline {
          animation: scanline 2s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default SkillsRadar;
