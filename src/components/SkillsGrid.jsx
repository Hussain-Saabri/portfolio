import React from 'react';
import { motion } from 'framer-motion';

const SkillsGrid = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';

    const skillGroups = [
        { title: 'Languages & Core', skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
        { title: 'Frontend & App', skills: ['React.js', 'Next.js', 'TailwindCSS', 'React Native', 'Redux'] },
        { title: 'Backend & DB', skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Microservices'] },
        { title: 'AI & DevOps', skills: ['LangChain', 'LLMs', 'RAG', 'OpenCV', 'YOLO', 'Pinecone', 'Docker', 'Kubernetes'] }
    ];

    return (
        <section id="skills" className="py-24 md:py-32 lg:py-48 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-white/[0.02] overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-12 md:mb-20 flex items-center gap-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <span className="text-blue-600">02.</span> Tech Stack
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 lg:gap-24">
                    {skillGroups.map((group, i) => (
                        <div key={i} className="space-y-6 md:space-y-8">
                            <h3 className={`text-xs md:text-sm font-black uppercase tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {group.skills.map((skill, j) => (
                                    <motion.span
                                        key={j}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className={`px-4 sm:px-5 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold border transition-all ${isDark
                                            ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-blue-500/50 hover:bg-slate-800'
                                            : 'bg-white border-slate-200 text-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10'
                                            }`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsGrid;
