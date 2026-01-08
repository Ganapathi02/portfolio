"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiBriefcase } from "react-icons/hi";

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const experiences = [
        {
            role: "Trainee",
            company: "ZOHO Corporation",
            location: "Chennai, India",
            period: "October 2024 – January 2025",
            responsibilities: [
                "Developed a Full Stack Web Application (Expense Calculator) utilizing Java Servlets, JSP, HTML, CSS, and MySQL",
                "Designed and implemented RESTful APIs with Java and JDBC to enhance application performance and data integration",
                "Managed and configured server environments on Linux, streamlining application deployment processes",
                "Collaborated effectively within Agile teams, ensuring timely delivery of features and adherence to project timelines",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <HiBriefcase className="text-4xl text-blue-600" />
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Experience
                        </h2>
                    </div>
                    <div className="w-20 h-1 bg-blue-600 mx-auto" />
                </motion.div>

                <div className="relative space-y-8">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10" />

                            <div className="bg-white border border-gray-200 rounded-lg p-8 md:w-[calc(50%-2rem)] hover:shadow-lg transition-shadow duration-300 relative"
                                style={index % 2 === 0 ? { marginLeft: 'auto' } : {}}>
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {exp.role}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-1">
                                            {exp.company}
                                        </p>
                                        <p className="text-gray-600 text-sm">{exp.location}</p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium">
                                            {exp.period}
                                        </span>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                                            <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                                            <span className="leading-relaxed">{responsibility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
