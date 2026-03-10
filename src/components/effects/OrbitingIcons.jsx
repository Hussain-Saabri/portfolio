import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Atom, Hexagon, Shield } from 'lucide-react';

const OrbitingIcons = () => {
    const icons = [
        { component: <Leaf size={32} className="text-[#47A248]" />, label: 'MongoDB', delay: 0, radius: 180 },
        { component: <Atom size={32} className="text-[#61DAFB]" />, label: 'React', delay: 1.5, radius: 220 },
        { component: <Hexagon size={32} className="text-[#339933]" />, label: 'Node.js', delay: 3, radius: 260 },
        { component: <Shield size={32} className="text-[#000000] fill-white" />, label: 'Express', delay: 4.5, radius: 300 }
    ];

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {icons.map((icon, idx) => (
                <motion.div
                    key={idx}
                    className="absolute flex items-center justify-center"
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 10 + idx * 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: icon.delay
                    }}
                    style={{ width: icon.radius * 2, height: icon.radius * 2 }}
                >
                    <motion.div
                        className="p-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                        animate={{
                            rotate: -360 // Counter-rotate to keep icon upright
                        }}
                        transition={{
                            duration: 10 + idx * 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: icon.delay
                        }}
                    >
                        {icon.component}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default OrbitingIcons;
