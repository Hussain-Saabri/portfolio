import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Layers } from 'lucide-react';

const HelpServices = () => {
    const services = [
        {
            title: "Web Platforms",
            description: "High-performance, scalable architectures with React, Next.js, Node.js.",
            icon: Monitor,
        },
        {
            title: "Brand Strategy",
            description: "Comprehensive digital identities that resonate with your audience.",
            icon: Globe,
        },
        {
            title: "Interface Design",
            description: "User-centric UI/UX focused on accessibility, elegance, conversion.",
            icon: Layers,
        },
        {
            title: "Mobile Solutions",
            description: "Seamless cross-platform experiences for iOS & Android.",
            icon: Smartphone,
        }
    ];

    return (
        <section id="services" className="pt-20 pb-10 bg-white border-y border-slate-100 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase mb-4 relative inline-block">
                            Expertise
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-500/50 rounded-full"></span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg md:text-xl font-medium"
                    >
                        Specialized Solutions for Modern Challenges
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="p-8 bg-white rounded-xl border border-slate-100 shadow-md hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group flex flex-col items-center text-center"
                        >
                            <div className="mb-6 text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={32} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            
                            {/* Subtle accent glow on hover */}
                            <div className="absolute inset-0 rounded-xl bg-cyan-50/0 group-hover:bg-cyan-50/50 -z-10 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HelpServices;
