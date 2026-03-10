import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-10 bg-transparent'}`}>
            <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
                <motion.a
                    href="#home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-4 group"
                >
                    <span className="text-2xl font-black tracking-tighter uppercase font-body text-white">HS</span>
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60 group-hover:text-white transition-colors">CREATIVE</span>
                </motion.a>

                {/* Desktop Nav - Centered */}
                <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 hover:text-white transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Hire Me Button */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="px-10 py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] bg-white text-black hover:bg-brand-teal hover:text-white transition-all duration-500 rounded-sm"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 w-full h-screen bg-[#020617]/90 backdrop-blur-3xl z-[100] md:hidden flex flex-col pt-32 px-10"
                    >
                        {/* Mobile Header (HS Logo + Close) */}
                        <div className="absolute top-0 left-0 w-full py-10 px-10 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <span className="text-2xl font-black tracking-tighter uppercase font-body text-white">HS</span>
                                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60">CREATIVE</span>
                            </div>
                            <button
                                className="text-white p-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={32} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Centered Navigation */}
                        <nav className="flex flex-col items-center justify-center flex-grow gap-12">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-5xl font-medium text-white font-heading hover:text-brand-teal transition-colors tracking-tight"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>

                        {/* Social Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="pb-20 border-t border-white/10 pt-10 flex flex-col items-center gap-8"
                        >
                            <div className="flex gap-10">
                                <motion.a whileHover={{ y: -5 }} href="#" className="p-4 bg-white/5 rounded-full text-white/60 hover:text-white transition-all">
                                    <Github size={24} strokeWidth={1.5} />
                                </motion.a>
                                <motion.a whileHover={{ y: -5 }} href="#" className="p-4 bg-white/5 rounded-full text-white/60 hover:text-white transition-all">
                                    <Linkedin size={24} strokeWidth={1.5} />
                                </motion.a>
                                <motion.a whileHover={{ y: -5 }} href="#" className="p-4 bg-white/5 rounded-full text-white/60 hover:text-white transition-all">
                                    <Mail size={24} strokeWidth={1.5} />
                                </motion.a>
                            </div>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
                                Based in Pakistan
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
