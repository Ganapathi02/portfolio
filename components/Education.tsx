"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiAcademicCap } from "react-icons/hi";

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const education = [
        {
            degree: "Bachelor of Engineering",
            field: "Computer Science and Engineering",
            cgpa: "8.53 CGPA",
            institution: "S.A. Engineering College",
            location: "Chennai, India",
            period: "2020 - 2024",
            description:
                "Completed Bachelor of Engineering in Computer Science and Engineering with a strong focus on software development, web technologies, and modern programming paradigms.",
        },
    ];

    return (
        <section id="education" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HiAcademicCap className="text-4xl text-blue-600" />
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Education
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-600 mx-auto" />
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-gray-800 font-medium mb-1">
                                        {edu.field}
                                    </p>
                                    <p className="text-blue-600 font-medium mb-1">
                                        {edu.institution}
                                    </p>
                                    <p className="text-gray-600 text-sm">{edu.location}</p>
                                </div>
                                <div className="mt-4 md:mt-0 flex flex-col gap-2">
                                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded text-sm font-semibold">
                                        {edu.cgpa}
                                    </span>
                                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium">
                                        {edu.period}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
