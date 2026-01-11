import { Variants } from "framer-motion";

// "Engineered" Easing - smooth, confident, no bounce
const EASE_ENGINEERED = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE_ENGINEERED }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05
        }
    }
};

export const revealText: Variants = {
    hidden: { clipPath: "inset(0 0 100% 0)", y: "100%" },
    visible: {
        clipPath: "inset(0 0 0 0)",
        y: "0%",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

// "Optic" Reveal - The signature motion pattern
// Fade + Blur(10->0) + Scale(1.1->1) + Y(10->0)
export const opticReveal: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.1,
        y: 10
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        y: 0,
        transition: {
            duration: 1.0,
            ease: EASE_ENGINEERED
        }
    }
};
