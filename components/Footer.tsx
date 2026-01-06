"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com", label: "GitHub" },
        { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    ];

    return (
        <footer className="bg-black border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Branding */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
                        <p className="text-gray-400 text-sm">
                            Crafting exceptional digital experiences with cutting-edge technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-primary">Follow Me</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass rounded-full flex items-center justify-center text-lg text-primary hover:glass-strong hover:scale-110 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-primary/20 pt-8 text-center">
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                        © {currentYear} Your Name. Made with <FaHeart className="text-red-500" /> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
