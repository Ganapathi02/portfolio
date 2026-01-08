"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiDownload } from "react-icons/hi";
import TypewriterText from "./TypewriterText";

const Hero = () => {
    const roles = [
        "Front-End Developer"
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
        >
            {/* Content */}
            <motion.div
                className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="py-12"
                >
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg md:text-xl text-gray-600 mb-4 font-light"
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900"
                    >
                        Ganapathi V
                    </motion.h1>

                    {/* Typewriter Title */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6 font-light h-12 md:h-16"
                    >
                        <TypewriterText
                            texts={roles}
                            typingSpeed={100}
                            deletingSpeed={50}
                            pauseDuration={2000}
                        />
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        I craft responsive, user-friendly web experiences with modern technologies.
                        Passionate about clean code, intuitive interfaces, and continuous learning.
                    </motion.p>

                    {/* CTA Buttons with Enhanced Animations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
                    >
                        <motion.a
                            href="#projects"
                            className="group relative px-8 py-3 bg-blue-600 text-white font-medium rounded overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">View My Work</span>
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="group relative px-8 py-3 bg-blue-600 text-white font-medium rounded overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">Get In Touch</span>
                        </motion.a>
                    </motion.div>

                    {/* Social Icons with Enhanced Animations */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex gap-6 justify-center"
                    >
                        <motion.a
                            href="https://github.com/Ganapathi02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors text-2xl"
                            aria-label="GitHub"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="http://www.linkedin.com/in/ganapathi-vg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors text-2xl"
                            aria-label="LinkedIn"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="mailto:ganapathivg02@gmail.com"
                            className="text-gray-600 hover:text-blue-600 transition-colors text-2xl"
                            aria-label="Email"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <HiMail />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
