import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Layers } from 'lucide-react';

const HelpServices = () => {
    const services = [
        {
            title: "Web Platforms",
            description: "High-performance, scalable web architectures built with React, Next.js, and Node.js.",
            icon: Monitor,
        },
        {
            title: "Brand Strategy",
            description: "Developing comprehensive digital identities that resonate with your target audience.",
            icon: Globe,
        },
        {
            title: "Interface Design",
            description: "User-centric UI/UX design focusing on accessibility, elegance, and conversion.",
            icon: Layers,
        },
        {
            title: "Mobile Solutions",
            description: "Seamless cross-platform mobile experiences for iOS and Android devices.",
            icon: Smartphone,
        }
    ];

    return (
        <section id="services" className="pt-16 pb-32 bg-brand-light relative">


            <div className="max-w-7xl mx-auto px-6">
                <div className="text-left mb-20 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-teal font-bold tracking-[0.3em] uppercase text-xs mb-6 block font-body"
                    >
                        Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-normal text-brand-navy font-heading leading-tight italic"
                    >
                        Specialized Solutions <br />
                        <span className="not-italic">for Modern Challenges</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-12 bg-white border border-slate-100 hover:border-brand-teal hover:z-10 hover:shadow-2xl hover:shadow-brand-navy/5 transition-all duration-500 group"
                        >

                            <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center mb-10 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-bold text-brand-navy font-heading mb-4">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 font-body leading-relaxed group-hover:text-slate-600">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HelpServices;
