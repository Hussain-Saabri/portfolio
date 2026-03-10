import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="absolute top-0 left-0 w-full z-50 py-6 bg-transparent">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center group relative z-10"
                >
                    <div className="flex items-baseline tracking-tight">
                        <span className="text-2xl font-black text-white">HS</span>
                        <span className="text-2xl font-light text-white/80 ml-1">Creative</span>
                    </div>
                </motion.a>

                {/* Desktop Nav - Centered Pills */}
                <nav className="hidden md:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="premium-nav-pill text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                {/* Hire Me Button */}
                <div className="hidden md:block relative z-10">
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="cta-button-premium"
                    >
                        Hire Me
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 relative z-10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 w-full h-screen bg-[#020617]/95 backdrop-blur-2xl z-[100] md:hidden flex flex-col pt-32 px-10"
                    >
                        {/* Mobile Header (HS Logo + Close) */}
                        <div className="absolute top-0 left-0 w-full py-8 px-6 flex items-center justify-between">
                            <div className="flex items-baseline tracking-tight">
                                <span className="text-2xl font-black text-white">HS</span>
                                <span className="text-2xl font-light text-white/80 ml-1">Creative</span>
                            </div>
                            <button
                                className="text-white p-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={28} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Centered Navigation */}
                        <nav className="flex flex-col items-center justify-center flex-grow gap-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-bold text-white font-body hover:text-brand-teal transition-colors tracking-tight uppercase"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>

                        {/* Social Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="pb-20 border-t border-white/5 pt-10 flex flex-col items-center gap-8"
                        >
                            <div className="flex gap-8">
                                <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-white/5 rounded-full text-white/40 hover:text-white transition-all">
                                    <Github size={20} strokeWidth={1.5} />
                                </motion.a>
                                <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-white/5 rounded-full text-white/40 hover:text-white transition-all">
                                    <Linkedin size={20} strokeWidth={1.5} />
                                </motion.a>
                                <motion.a whileHover={{ y: -5 }} href="#" className="p-3 bg-white/5 rounded-full text-white/40 hover:text-white transition-all">
                                    <Mail size={20} strokeWidth={1.5} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
