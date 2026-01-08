"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Message sent! (This is a demo - no actual message was sent)");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    const contactInfo = [
        { icon: HiMail, label: "Email", value: "ganapathivg02@gmail.com", href: "mailto:ganapathivg02@gmail.com" },
        { icon: HiLocationMarker, label: "Location", value: "Chennai, Tamil Nadu, India", href: "#" },
    ];

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Ganapathi02", label: "GitHub" },
        { icon: FaLinkedin, href: "http://www.linkedin.com/in/ganapathi-vg", label: "LinkedIn" },
    ];

    return (
        <section id="contact" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto" />
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s work together to create something amazing
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-white border border-gray-200 rounded-lg p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors text-gray-900 bg-gray-50"
                                    placeholder="Enter your name"
                                    suppressHydrationWarning
                                />
                                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors text-gray-900 bg-gray-50"
                                    placeholder="Enter your email"
                                    suppressHydrationWarning
                                />
                                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 transition-colors resize-none text-gray-900 bg-gray-50"
                                    placeholder="Enter your message"
                                    suppressHydrationWarning
                                />
                                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-all duration-300"
                                suppressHydrationWarning
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Contact Details */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                                    className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 block"
                                >
                                    <div className="text-3xl text-blue-600">
                                        <info.icon />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">{info.label}</div>
                                        <div className="font-medium text-gray-900">{info.value}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="bg-white border border-gray-200 rounded-lg p-8"
                        >
                            <h3 className="text-xl font-bold mb-6 text-gray-900">Connect With Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 border-2 border-gray-300 rounded flex items-center justify-center text-2xl text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
