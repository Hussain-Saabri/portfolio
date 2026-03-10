import React from 'react';
import { motion } from 'framer-motion';
import NebulaBackground from './effects/NebulaBackground';
import ProjectCard from './ProjectCard';

const ProjectShowcase = ({ theme = 'dark' }) => {
    const isDark = theme === 'dark';

    // Real data placeholders mapping to generated images
    const projects = [
        {
            title: "Real-Time SaaS Nexus",
            stack: ["React", "Node", "MongoDB", "Tailwind"],
            image: "/src/assets/project_mockup_1.png", // We'll need to move/rename the generated images
            github: "#",
            link: "#",
            featured: true
        },
        {
            title: "AI Ethereal Chat",
            stack: ["Next.js", "Python", "OpenAI", "Vite"],
            image: "/src/assets/project_mockup_2.png",
            github: "#",
            link: "#",
            featured: false
        },
        {
            title: "Cosmic Commerce",
            stack: ["React", "Node", "Stripe", "Express"],
            image: "/src/assets/project_mockup_3.png",
            github: "#",
            link: "#",
            featured: false
        }
    ];

    return (
        <section id="projects" className="relative py-32 overflow-hidden border-t border-white/5">
            <NebulaBackground theme={theme} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={`text-[10px] font-black uppercase tracking-[0.5em] ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}
                    >
                        Digital Artifacts
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`text-5xl md:text-7xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                        Selected Works
                    </motion.h2>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
                        >
                            <ProjectCard project={project} theme={theme} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Parallax Binary Decorator */}
            <div className={`absolute right-0 top-1/2 -translate-y-1/2 text-[15rem] leading-none font-black opacity-[0.02] select-none pointer-events-none ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                0101
            </div>
        </section>
    );
};

export default ProjectShowcase;
