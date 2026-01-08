"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {
    return (
        <main className="min-h-screen">
            <ScrollProgress />
            <Navigation />
            <Hero />
            <SectionWrapper>
                <About />
            </SectionWrapper>
            <SectionWrapper>
                <Skills />
            </SectionWrapper>
            <SectionWrapper>
                <Projects />
            </SectionWrapper>
            <SectionWrapper>
                <Experience />
            </SectionWrapper>
            <SectionWrapper>
                <Education />
            </SectionWrapper>
            <SectionWrapper>
                <Contact />
            </SectionWrapper>
            <Footer />
        </main>
    );
}
