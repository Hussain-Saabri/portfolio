import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const HeroMinimal = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';

    return (
        <section id="home" className="relative min-h-[90dvh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 md:pt-0 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl z-10 w-full"
            >
                <div className="flex justify-center mb-6 md:mb-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-2xl"
                    >
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hussain&backgroundColor=b6e3f4"
                            alt="Hussain"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 md:mb-10 text-balance leading-[1.05] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Dadapir Shaikh <span className="text-blue-600">Architect</span>
                </h1>

                <p className={`text-base sm:text-xl md:text-2xl font-medium mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Building robust, scalable, and AI-powered web applications with modern engineering practices.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                    <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 active:scale-95">
                        View Projects <ArrowRight size={20} />
                    </button>
                    <a
                        href="/resume.pdf"
                        download="Dadapir_Shaikh_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full sm:w-auto px-10 py-4 rounded-2xl font-bold transition-all border flex items-center justify-center gap-3 active:scale-95 ${isDark
                            ? 'border-slate-800 hover:bg-slate-800 text-white'
                            : 'border-slate-200 hover:bg-slate-50 text-slate-900'
                            }`}
                    >
                        Resume <Download size={18} />
                    </a>
                </div>
            </motion.div>

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]"></div>
            </div>
        </section>
    );
};

export default HeroMinimal;
