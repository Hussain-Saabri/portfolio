import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const quotes = [
        {
            text: "Working with HS Creative was a transformative experience for our brand. Their eye for minimalist detail is unmatched in the industry today.",
            author: "Alexander Wright",
            role: "Design Director at Linear",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        },
        {
            text: "The perfect blend of technical expertise and artistic vision. Our platform's engagement tripled within months of the redesign.",
            author: "Sarah Chen",
            role: "Founder of Nexus Tech",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
        },
        {
            text: "High-end, professional, and reliably consistent. HS knows exactly how to make a digital product feel like a luxury experience.",
            author: "Jameson Brooks",
            role: "VPE at Strata",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % quotes.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % quotes.length);
    const prev = () => setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);

    return (
        <section id="testimonials" className="py-32 bg-brand-navy overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-brand-teal font-bold tracking-[0.3em] uppercase text-xs mb-6 block font-body">
                        The Sentiment
                    </span>
                    <h2 className="text-5xl md:text-6xl font-normal text-white font-heading leading-tight italic">
                        Client <span className="not-italic">Perspectives</span>
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute -top-10 -left-10 text-brand-teal opacity-20">
                        <Quote size={80} />
                    </div>

                    <div className="min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.8 }}
                                className="text-center"
                            >
                                <p className="text-2xl md:text-3xl text-brand-light/80 font-heading italic leading-relaxed mb-12">
                                    "{quotes[current].text}"
                                </p>

                                <div className="flex flex-col items-center gap-4">
                                    <img
                                        src={quotes[current].avatar}
                                        alt={quotes[current].author}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-brand-teal/30"
                                    />
                                    <div>
                                        <p className="text-white font-bold tracking-widest uppercase text-xs mb-1">
                                            {quotes[current].author}
                                        </p>
                                        <p className="text-brand-teal font-medium text-[10px] uppercase tracking-widest">
                                            {quotes[current].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-6 mt-16">
                        <button onClick={prev} className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-brand-navy transition-all">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={next} className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-brand-navy transition-all">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
