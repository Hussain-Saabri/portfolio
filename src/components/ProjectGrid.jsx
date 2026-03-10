import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectGrid = () => {
    const projects = [
        {
            id: 1,
            title: "Modern Architectural Platform",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            description: "A high-end platform for architects to showcase their global portfolios."
        },
        {
            id: 2,
            title: "Minimalist E-Commerce",
            category: "UI/UX Design",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
            description: "Seamless shopping experience focused on white space and typography."
        },
        {
            id: 3,
            title: "SaaS Dashboard Architecture",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            description: "High-performance data visualization and analytics dashboard for enterprise scale."
        },
        {
            id: 4,
            title: "Futuristic Mobile App",
            category: "App Design",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
            description: "Personal finance management with intuitive data visualization."
        }
    ];

    return (
        <section id="portfolio" className="pt-10 pb-8 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-right mb-10 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-teal font-bold tracking-[0.3em] uppercase text-xs mb-6 block font-body"
                    >
                        The Portfolio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-normal text-brand-navy font-heading leading-tight italic"
                    >
                        Curation of <span className="not-italic">Excellence</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
