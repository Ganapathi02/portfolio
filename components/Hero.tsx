"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Full Stack Developer";
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Futuristic background"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-strong rounded-3xl p-8 md:p-12 lg:p-16 glow-blue"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        Hi, I&apos;m <span className="gradient-text">Your Name</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-2xl lg:text-3xl text-primary-light mb-8 h-12 flex items-center justify-center"
                    >
                        <span>{text}</span>
                        <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
                    >
                        Crafting exceptional digital experiences with cutting-edge technologies.
                        Specialized in building scalable web applications with modern frameworks.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 glow-blue hover:scale-105"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 glass border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 bg-primary rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
