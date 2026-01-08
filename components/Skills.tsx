"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiReact,
    SiVuedotjs,
    SiNextdotjs,
    SiGraphql,
    SiFigma,
    SiMysql,
} from "react-icons/si";
import { HiCode, HiSparkles } from "react-icons/hi";
import { FaJava } from "react-icons/fa";

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const skillsData = [
        {
            name: "HTML5",
            icon: SiHtml5,
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-50",
            textColor: "text-orange-700",
            borderColor: "border-orange-200",
        },
        {
            name: "CSS3",
            icon: SiCss3,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700",
            borderColor: "border-blue-200",
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
            color: "from-yellow-400 to-yellow-600",
            bgColor: "bg-yellow-50",
            textColor: "text-yellow-700",
            borderColor: "border-yellow-200",
        },
        {
            name: "TypeScript",
            icon: SiTypescript,
            color: "from-blue-600 to-blue-800",
            bgColor: "bg-blue-50",
            textColor: "text-blue-800",
            borderColor: "border-blue-300",
        },
        {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
            color: "from-cyan-400 to-blue-500",
            bgColor: "bg-cyan-50",
            textColor: "text-cyan-700",
            borderColor: "border-cyan-200",
        },
        {
            name: "React",
            icon: SiReact,
            color: "from-cyan-500 to-blue-600",
            bgColor: "bg-cyan-50",
            textColor: "text-cyan-700",
            borderColor: "border-cyan-200",
        },
        {
            name: "Vue.js",
            icon: SiVuedotjs,
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-green-50",
            textColor: "text-green-700",
            borderColor: "border-green-200",
        },
        {
            name: "Next.js",
            icon: SiNextdotjs,
            color: "from-gray-800 to-black",
            bgColor: "bg-gray-50",
            textColor: "text-gray-800",
            borderColor: "border-gray-300",
        },
        {
            name: "Java",
            icon: FaJava,
            color: "from-red-600 to-orange-600",
            bgColor: "bg-red-50",
            textColor: "text-red-700",
            borderColor: "border-red-200",
        },
        {
            name: "MySQL",
            icon: SiMysql,
            color: "from-blue-500 to-blue-700",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700",
            borderColor: "border-blue-200",
        },
    ];



    return (
        <section id="skills" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-block mb-4"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-xl opacity-50 animate-pulse" />
                            <HiCode className="text-5xl text-blue-600 relative" />
                        </div>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-4">
                        Skills & Technologies
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: 80 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1.5 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto rounded-full"
                    />
                    <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
                        Mastering modern technologies to build exceptional digital experiences
                    </p>
                </motion.div>

                {/* Main Skills Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                        Core Technologies
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skillsData.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                className="relative group"
                            >
                                <div
                                    className={`relative bg-white border-2 ${skill.borderColor} rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden
                                    ${hoveredSkill === skill.name ? "scale-105 -translate-y-2" : ""}`}
                                >
                                    {/* Animated gradient background on hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                    />

                                    {/* Icon */}
                                    <div className="relative mb-4">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl filter blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                                        <skill.icon className={`text-5xl ${skill.textColor} relative transform group-hover:scale-110 transition-transform duration-300`} />
                                    </div>

                                    {/* Skill Name */}
                                    <h4 className="text-lg font-bold text-gray-900 relative">
                                        {skill.name}
                                    </h4>

                                    {/* Sparkle effect on hover */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={hoveredSkill === skill.name ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                        className="absolute top-2 right-2"
                                    >
                                        <HiSparkles className="text-yellow-400 text-xl" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default Skills;
