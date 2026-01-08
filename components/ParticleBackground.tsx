"use client";

import { motion } from "framer-motion";

interface ParticleBackgroundProps {
    particleCount?: number;
    colors?: string[];
}

const ParticleBackground = ({
    particleCount = 50,
    colors = ["rgba(59, 130, 246, 0.5)", "rgba(147, 51, 234, 0.5)", "rgba(236, 72, 153, 0.5)"]
}: ParticleBackgroundProps) => {
    const particles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        backgroundColor: particle.color,
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
