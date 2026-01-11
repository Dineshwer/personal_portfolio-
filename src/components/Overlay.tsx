"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

// Helper for staggering words based on scroll
const ScrollRevealText = ({
    text,
    scrollYProgress,
    range,
    className = ""
}: {
    text: string;
    scrollYProgress: MotionValue<number>;
    range: [number, number];
    className?: string;
}) => {
    const words = text.split(" ");
    const [start, end] = range;
    const segment = (end - start) / words.length;

    return (
        <span className={`inline-block whitespace-normal ${className}`}>
            {words.map((word, i) => {
                const wordStart = start + i * segment;

                // Enhanced "Optic" Reveal:
                // 1. Fade In (0 -> 1)
                // 2. Un-blur (10px -> 0px)
                // 3. Scale (1.2 -> 1) - slight zoom in effect as it resolves
                // 4. Y-drift (20px -> 0px) - slides up

                const opacity = useTransform(scrollYProgress, [wordStart, wordStart + 0.05], [0, 1]);
                const blur = useTransform(scrollYProgress, [wordStart, wordStart + 0.05], [10, 0]);
                const y = useTransform(scrollYProgress, [wordStart, wordStart + 0.05], [20, 0]);
                const scale = useTransform(scrollYProgress, [wordStart, wordStart + 0.05], [1.1, 1]);

                return (
                    <motion.span
                        key={i}
                        style={{ opacity, filter: blur, y, scale }}
                        className="inline-block mr-[0.25em] origin-center"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </span>
    );
};

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Global Opacity for sections
    const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.30, 0.40, 0.65, 0.75], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.70, 0.80, 0.95, 1.0], [0, 1, 1, 0]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 font-sans text-white mix-blend-difference">

            {/* 1. INTRO: Vertically Centered Left */}
            <motion.div
                style={{ opacity: opacity1 }}
                className="absolute top-1/2 -translate-y-1/2 left-[5vw] z-20"
            >
                <div className="max-w-[40vw]">
                    <h1 className="text-[5vw] font-bold tracking-tighter leading-[0.9] mb-4 mix-blend-difference">
                        <ScrollRevealText
                            text="R S Dineshwer"
                            scrollYProgress={scrollYProgress}
                            range={[-0.2, -0.05]}
                        />
                    </h1>
                    <p className="text-[1vw] font-medium text-neutral-300 tracking-[0.2em] uppercase opacity-80 mix-blend-difference">
                        <ScrollRevealText
                            text="Offensive Security & Systems Engineer"
                            scrollYProgress={scrollYProgress}
                            range={[-0.2, -0.05]}
                            className="text-sm md:text-base"
                        />
                    </p>
                </div>
            </motion.div>

            {/* 2. PHILOSOPHY: Vertically Centered Left */}
            <motion.div
                style={{ opacity: opacity2 }}
                className="absolute top-1/2 -translate-y-1/2 left-[5vw] z-20"
            >
                <div className="max-w-[35vw] text-left">
                    <h2 className="text-[3vw] font-bold leading-[1.1] mb-6 tracking-tighter mix-blend-difference">
                        <ScrollRevealText
                            text="I uncover how systems break — so they can be built stronger."
                            scrollYProgress={scrollYProgress}
                            range={[0.40, 0.50]}
                        />
                    </h2>
                    <p className="text-[1vw] text-neutral-400 font-light tracking-wide mix-blend-difference">
                        <ScrollRevealText
                            text="Adversary-driven. System-focused. Real-world."
                            scrollYProgress={scrollYProgress}
                            range={[0.50, 0.55]}
                        />
                    </p>
                </div>
            </motion.div>

            {/* 3. APPROACH: Vertically Centered Right */}
            <motion.div
                style={{ opacity: opacity3 }}
                className="absolute top-1/2 -translate-y-1/2 right-[5vw] z-20"
            >
                <div className="max-w-[40vw] text-right flex flex-col items-end">
                    <h2 className="text-[4vw] font-bold leading-[0.9] mb-6 tracking-tighter mix-blend-difference">
                        <ScrollRevealText
                            text="Attack Surface & Trust Boundaries"
                            scrollYProgress={scrollYProgress}
                            range={[0.80, 0.88]}
                        />
                    </h2>
                    <p className="text-[1vw] text-neutral-400 font-light tracking-wide mix-blend-difference">
                        <ScrollRevealText
                            text="Where security assumptions fail"
                            scrollYProgress={scrollYProgress}
                            range={[0.88, 0.92]}
                        />
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
