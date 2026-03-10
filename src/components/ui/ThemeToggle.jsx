import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.9, rotate: 15 }}
            whileHover={{ scale: 1.1 }}
            className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden group shadow-2xl"
        >
            {/* Ripple Distortion Effect on Hover */}
            <motion.div
                className="absolute inset-0 bg-primary-blue/10 scale-0 rounded-full group-hover:scale-150 transition-transform duration-700"
            />

            <AnimatePresence mode="wait" initial={false}>
                {!isDark ? (
                    <motion.svg
                        key="sun"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ scale: 0, rotate: -90, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="w-8 h-8 text-amber-400"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </motion.svg>
                ) : (
                    <motion.svg
                        key="moon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ scale: 0, rotate: 90, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0, rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="w-8 h-8 text-cyan-400"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </motion.svg>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default ThemeToggle;
