"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Ganapathi02", label: "GitHub" },
        { icon: FaLinkedin, href: "http://www.linkedin.com/in/ganapathi-vg", label: "LinkedIn" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>© {currentYear} Ganapathi</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap gap-6 text-sm">
                        <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors text-xl"
                                aria-label={social.label}
                            >
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
