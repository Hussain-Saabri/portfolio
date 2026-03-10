import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, Code2, Rocket } from 'lucide-react';

const About = () => {
    const skillHighlights = [
        { label: 'Modern Web Development', icon: Code2, desc: 'Building fast, scalable applications with React and modern toolchains.' },
        { label: 'Responsive Design', icon: Layout, desc: 'Ensuring seamless experiences across every device and screen size.' },
        { label: 'Clean & Scalable Code', icon: Zap, desc: 'Writing maintainable, industry-standard code that grows with your business.' },
        { label: 'Performance Optimization', icon: Rocket, desc: 'Optimizing for speed, SEO, and ultimate user engagement.' },
    ];

    return (
        <section id="about" className="pt-32 pb-16 bg-[#F8FAFC] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Left - Narrative & Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-brand-teal font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block font-body">
                            The Narrative
                        </span>

                        <h2 className="text-5xl md:text-7xl font-bold text-brand-navy font-heading mb-10 leading-[1.1] tracking-tight">
                            Beyond <span className="italic font-light text-brand-teal relative">
                                Code
                                <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-teal/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                                </svg>
                            </span>: <br />
                            A Creative Vision
                        </h2>

                        <div className="space-y-8 text-slate-500 font-body text-lg leading-relaxed max-w-[600px] font-light tracking-wide mb-16">
                            <p>
                                I am an early-career developer with a deep-seated passion for the intersection of logic and aesthetics. My journey is defined by a relentless drive to master the latest technologies and translate complex ideas into intuitive digital experiences.
                            </p>
                            <p>
                                I believe that a website is more than just code; it's a bridge between a brand and its audience. My philosophy centers on building clean, high-performance solutions that prioritize the user above all else.
                            </p>
                        </div>

                        {/* Skill-Based Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skillHighlights.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 p-2 rounded-lg bg-white shadow-sm border border-slate-100 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                                            <skill.icon size={18} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-brand-navy font-heading mb-1">{skill.label}</p>
                                            <p className="text-xs text-slate-400 font-body leading-relaxed">{skill.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Modern Tech Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative hidden lg:block"
                    >
                        {/* Layered Frame Design */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-brand-teal/5 rounded-[3rem] translate-x-6 translate-y-6 -rotate-2 -z-10 transition-transform group-hover:translate-x-8 group-hover:translate-y-8 transition-all duration-700"></div>
                            <div className="absolute inset-0 border border-slate-200 rounded-[3rem] -translate-x-6 -translate-y-6 rotate-1 -z-10 transition-transform group-hover:-translate-x-8 group-hover:-translate-y-8 transition-all duration-700"></div>

                            <div className="aspect-square bg-white rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-100 p-8">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                                    alt="Workflow Technology"
                                    className="w-full h-full object-cover rounded-[2rem] opacity-90 grayscale-[0.5] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                                />

                                {/* Inner Glass Badge */}
                                <div className="absolute bottom-12 right-12 p-6 glass-blur rounded-2xl shadow-xl border border-white/20 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-teal animate-ping"></div>
                                        <span className="text-[10px] font-bold text-brand-navy uppercase tracking-[0.2em]">Crafting Quality</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Abstract Decor */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-teal/10 blur-3xl rounded-full -z-20"></div>
                        <div className="absolute -bottom-20 left-20 w-48 h-48 bg-brand-navy/5 blur-[80px] rounded-full -z-20"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
