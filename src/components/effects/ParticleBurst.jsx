import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ParticleBurst = ({ x, y, onComplete }) => {
    const particles = Array.from({ length: 12 });

    useEffect(() => {
        const timer = setTimeout(onComplete, 1000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div
            className="fixed pointer-events-none z-[100]"
            style={{ left: x, top: y }}
        >
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{
                        x: (Math.random() - 0.5) * 200,
                        y: (Math.random() - 0.5) * 200,
                        scale: 0,
                        opacity: 0,
                        rotate: Math.random() * 360
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute w-2 h-2 bg-primary-blue rounded-full shadow-lg shadow-primary-blue/50"
                />
            ))}
        </div>
    );
};

export default ParticleBurst;
