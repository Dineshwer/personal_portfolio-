import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
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
