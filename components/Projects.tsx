"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiExternalLink, HiFolder } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: "Hospital Management System",
            period: "December 2023",
            description: "Developed using Java and MySQL, implemented using Spring Tool Suite. Achieved high system efficiency with quick data processing and secure data management.",
            features: [
                "Patient registration and data storage",
                "Doctor appointment scheduling",
                "Quick data processing",
                "Secure data management"
            ],
            tech: ["Java", "MySQL", "Spring Tool Suite"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Online Book Store",
            period: "March 2024",
            description: "Built with Spring Boot and MySQL, utilizing Thymeleaf for frontend rendering. Designed for scalability, security, and enhanced user experience.",
            features: [
                "User authentication system",
                "Comprehensive book catalog",
                "Shopping cart functionality",
                "Admin management panel"
            ],
            tech: ["Spring Boot", "MySQL", "Thymeleaf"],
            liveLink: "#",
            githubLink: "#",
        },
    ];

    return (
        <section id="projects" className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HiFolder className="text-4xl text-blue-600" />
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Featured Projects
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-600 mx-auto" />
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Showcasing my best work and creative solutions to real-world problems
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Project Icon */}
                            <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                <HiFolder className="text-6xl text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>

                            {/* Project Info */}
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-xs text-gray-500 font-medium">{project.period}</span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Features */}
                            <ul className="text-gray-600 text-xs mb-4 space-y-1">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-1">
                                        <span className="text-blue-600 mt-0.5">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.liveLink}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                                >
                                    <HiExternalLink /> Live Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors text-sm font-medium"
                                >
                                    <FaGithub /> Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
