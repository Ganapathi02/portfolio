"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
            tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            liveLink: "#",
            githubLink: "#",
            gradient: "from-blue-500 to-purple-600",
        },
        {
            title: "AI Chat Application",
            description: "Real-time chat application with AI-powered responses, typing indicators, and message history.",
            tech: ["React", "Node.js", "Socket.io", "OpenAI"],
            liveLink: "#",
            githubLink: "#",
            gradient: "from-green-500 to-teal-600",
        },
        {
            title: "Task Management System",
            description: "Collaborative project management tool with kanban boards, team collaboration, and progress tracking.",
            tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
            liveLink: "#",
            githubLink: "#",
            gradient: "from-orange-500 to-red-600",
        },
        {
            title: "Portfolio Website Builder",
            description: "No-code platform for creating stunning portfolio websites with drag-and-drop functionality.",
            tech: ["Next.js", "MongoDB", "AWS S3", "Stripe"],
            liveLink: "#",
            githubLink: "#",
            gradient: "from-pink-500 to-purple-600",
        },
        {
            title: "Weather Dashboard",
            description: "Beautiful weather application with forecasts, location search, and interactive maps.",
            tech: ["React", "Weather API", "Mapbox", "Chart.js"],
            liveLink: "#",
            githubLink: "#",
            gradient: "from-cyan-500 to-blue-600",
        },
        {
            title: "Fitness Tracker",
            description: "Mobile-responsive fitness tracking app with workout plans, progress charts, and calorie counting.",
            tech: ["React Native", "Node.js", "MongoDB", "Chart.js"],
            liveLink: "#",
            githubLink: "#",
            gradient: "from-yellow-500 to-orange-600",
        },
    ];

    return (
        <section id="projects" className="py-20 md:py-32 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-white mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
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
                            className="glass rounded-2xl p-6 hover:glass-strong transition-all duration-300 group hover:scale-105"
                        >
                            {/* Project Header */}
                            <div className={`h-40 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center group-hover:shadow-2xl transition-shadow`}>
                                <HiCode className="text-6xl text-white opacity-50" />
                            </div>

                            {/* Project Info */}
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.liveLink}
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold"
                                >
                                    <HiExternalLink /> Live Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    className="flex items-center justify-center gap-2 px-4 py-2 glass border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-semibold"
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
