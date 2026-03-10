import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { label: "Satisfied Clients", value: "10M", color: "text-[#8B5CF6]" },
        { label: "Projects Completed", value: "300M", color: "text-[#06B6D4]" },
        { label: "Years Experience", value: "150+", color: "text-[#EC4899]" }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] glass-card border-b-8 border-gray-100 flex flex-col items-center justify-center text-center group hover:border-brand-cyan/20 transition-all duration-300"
                        >
                            <span className={`text-5xl sm:text-7xl font-black ${stat.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                                {stat.value}
                            </span>
                            <span className="text-sm sm:text-base md:text-lg font-bold text-text-secondary uppercase tracking-widest leading-none">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
