"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiCode, HiLightningBolt, HiSparkles } from "react-icons/hi";

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { label: "Years Experience", value: "5+", icon: HiLightningBolt },
        { label: "Projects Completed", value: "50+", icon: HiCode },
        { label: "Happy Clients", value: "30+", icon: HiSparkles },
    ];

    return (
        <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-black/80 to-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-white mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="glass-strong rounded-2xl p-8 glow-blue">
                            <h3 className="text-2xl font-bold mb-4 text-primary">
                                Passionate Developer & Creative Problem Solver
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                I&apos;m a full-stack developer with a passion for creating beautiful,
                                functional, and user-centered digital experiences. With expertise in
                                modern web technologies, I transform ideas into exceptional products.
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                My approach combines technical excellence with creative design thinking,
                                ensuring every project not only works flawlessly but also delivers an
                                outstanding user experience.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with the
                                developer community.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                                className="glass rounded-xl p-6 hover:glass-strong transition-all duration-300 hover:scale-105 glow-blue"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl text-primary">
                                        <stat.icon />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
