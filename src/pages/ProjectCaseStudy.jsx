import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjectCaseStudy = () => {
    const { id } = useParams();

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Link to="/" className="inline-flex items-center text-primary-blue hover:underline mb-12 group">
                    <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Deep-Dive: {id}</h1>
                <div className="flex gap-4 mb-12">
                    <span className="px-3 py-1 bg-surface-dark border border-surface-dark rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-surface-dark border border-surface-dark rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-surface-dark border border-surface-dark rounded-full text-sm">Tailwind CSS</span>
                </div>

                <div className="aspect-video bg-surface-dark rounded-3xl mb-12 flex items-center justify-center border border-surface-dark overflow-hidden">
                    <span className="text-text-main/20 text-lg italic">Project Image / Video Preview Placeholder</span>
                </div>

                <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                    <p className="text-text-main/80 mb-8 leading-relaxed">
                        Summary of the problem this project solved. Detailed explanation of Hussain's role and the technical complexity involved.
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
                    <ul className="list-disc pl-5 text-text-main/80 space-y-2 mb-12">
                        <li>Architecture design and system modeling</li>
                        <li>Optimization of high-traffic endpoints</li>
                        <li>Custom UI component library implementation</li>
                    </ul>

                    <div className="flex gap-6 pt-12 border-t border-surface-dark">
                        <a href="#" className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                            <Github size={20} /> View Source
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                            <ExternalLink size={20} /> Live Demo
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCaseStudy;
