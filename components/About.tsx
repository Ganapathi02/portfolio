"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="bg-white border border-gray-200 rounded-lg p-8">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">
                                Developer
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                I&apos;m a front-end developer with experience in developing responsive web
                                applications using HTML5, CSS3, JavaScript, Java, and MySQL. Proficient in
                                backend development with Java, Spring Boot, and database management.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Completed training at Zoho Corp, where I built full-stack applications and
                                optimized databases. Focused on creating scalable, high-quality software
                                with seamless user experiences.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                I&apos;m passionate about learning new technologies and continuously improving
                                my development skills. Always eager to take on challenging projects and
                                contribute to innovative solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
