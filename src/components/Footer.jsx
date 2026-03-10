import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-20 bg-brand-light border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-3xl font-black text-brand-navy tracking-tighter uppercase font-body">HS</span>
                    <div className="w-[1px] h-6 bg-brand-navy/20"></div>
                    <span className="text-sm font-bold text-brand-navy/60 tracking-[0.2em]">TECH</span>
                </div>

                <div className="flex gap-6 mb-12">
                    <a href="#" className="p-3 bg-white rounded-full text-brand-navy hover:text-brand-teal shadow-sm hover:shadow-md transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-brand-navy hover:text-brand-teal shadow-sm hover:shadow-md transition-all">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-brand-navy hover:text-brand-teal shadow-sm hover:shadow-md transition-all">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full text-brand-navy hover:text-brand-teal shadow-sm hover:shadow-md transition-all">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    <a href="#about" className="text-xs font-bold text-slate-500 hover:text-brand-teal uppercase tracking-widest">About</a>
                    <a href="#portfolio" className="text-xs font-bold text-slate-500 hover:text-brand-teal uppercase tracking-widest">Portfolio</a>
                    <a href="#services" className="text-xs font-bold text-slate-500 hover:text-brand-teal uppercase tracking-widest">Services</a>
                    <a href="#contact" className="text-xs font-bold text-slate-500 hover:text-brand-teal uppercase tracking-widest">Contact</a>
                </div>

                <p className="text-slate-400 font-medium text-center text-xs tracking-widest uppercase">
                    © 2026 HS TECH. ALL RIGHTS RESERVED.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
