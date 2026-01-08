"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    texts: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

const TypewriterText = ({
    texts,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    className = "",
}: TypewriterTextProps) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimer);
        }

        const targetText = texts[currentTextIndex];

        if (!isDeleting && currentText === targetText) {
            setIsPaused(true);
            return;
        }

        if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(
            () => {
                setCurrentText((prev) => {
                    if (isDeleting) {
                        return targetText.substring(0, prev.length - 1);
                    } else {
                        return targetText.substring(0, prev.length + 1);
                    }
                });
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block ml-1"
            >
                |
            </motion.span>
        </span>
    );
};

export default TypewriterText;
