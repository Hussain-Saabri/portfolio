import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-sm border border-slate-100 mb-4 md:mb-6 transition-all duration-700">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/60 transition-colors duration-500 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-navy"
                    >
                        <ArrowUpRight size={28} />
                    </motion.div>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-brand-teal"></span>
                    <span className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] font-body">
                        {project.category}
                    </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy font-heading transition-colors group-hover:text-brand-teal">
                    {project.title}
                </h3>
                <p className="text-sm text-slate-500 font-body leading-relaxed max-w-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    {project.description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
