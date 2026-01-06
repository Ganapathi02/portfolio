"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiMongodb,
    SiPostgresql,
    SiGit,
    SiDocker,
    SiFigma,
    SiFramer,
} from "react-icons/si";

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: SiReact, level: 95 },
                { name: "Next.js", icon: SiNextdotjs, level: 90 },
                { name: "TypeScript", icon: SiTypescript, level: 88 },
                { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
                { name: "Framer Motion", icon: SiFramer, level: 85 },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: SiNodedotjs, level: 87 },
                { name: "Python", icon: SiPython, level: 82 },
                { name: "MongoDB", icon: SiMongodb, level: 85 },
                { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
            ],
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git", icon: SiGit, level: 90 },
                { name: "Docker", icon: SiDocker, level: 78 },
                { name: "Figma", icon: SiFigma, level: 85 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-black to-black/80 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-white mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                            className="glass-strong rounded-2xl p-8 glow-blue hover:scale-105 transition-transform duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-6 gradient-text">
                                {category.title}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{
                                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                            duration: 0.5,
                                        }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <skill.icon className="text-2xl text-primary" />
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{
                                                    delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                                                    duration: 1,
                                                    ease: "easeOut",
                                                }}
                                                className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full glow-blue"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
