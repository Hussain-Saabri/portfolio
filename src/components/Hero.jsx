import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
            {/* World-Class Background Mesh & Light Rays */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Mesh Nodes */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-brand-teal/20 blur-[180px] rounded-full mix-blend-screen"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 120, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-brand-navy blur-[150px] rounded-full mix-blend-overlay"
                />

                {/* Futuristic Light Rays */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-teal/40 to-transparent rotate-[15deg]"></div>
                    <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-[-10deg]"></div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] contrast-150 brightness-150"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Floating Glassmorphism Elements (Apple Style) */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-[10%] w-64 h-80 glass-blur rounded-[2rem] hidden lg:block z-20 overflow-hidden shadow-2xl"
            >
                <div className="p-8 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
                        <ArrowRight size={20} className="text-white" />
                    </div>
                    <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                    <div className="h-4 w-1/2 bg-white/5 rounded-full"></div>
                    <div className="pt-8 grid grid-cols-2 gap-4">
                        <div className="h-20 bg-white/5 rounded-xl"></div>
                        <div className="h-20 bg-white/5 rounded-xl"></div>
                    </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal/20 blur-3xl"></div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-30 text-center pt-32 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-medium text-white font-heading leading-[0.9] mb-10 tracking-tight">
                        Elevating <br />
                        <span className="italic font-light text-white/90">Digital</span> Excellence
                    </h1>

                    <p className="text-slate-400 text-base sm:text-lg md:text-xl font-body max-w-3xl mx-auto mb-16 leading-relaxed font-light tracking-wide opacity-80">
                        I build high-performance, modern websites that help businesses
                        grow online. Merging world-class engineering with premium
                        aesthetics.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#portfolio"
                            className="w-full sm:w-auto px-14 py-6  bg-white text-black font-bold uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-brand-teal hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group shadow-2xl"
                        >
                            Explore Portfolio
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="w-full sm:w-auto px-14 py-6 border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-[10px] rounded-full backdrop-blur-md transition-all duration-500"
                        >
                            Let's Connect
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/40 to-white/0"></div>
                <span className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-medium rotate-90 translate-y-8">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
