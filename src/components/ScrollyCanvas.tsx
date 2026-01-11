"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";
import { frameNames } from "@/data/frames";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isFixed, setIsFixed] = useState(true);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameCount = frameNames.length;

    useEffect(() => {
        let loaded = 0;
        const imgArray: HTMLImageElement[] = [];

        frameNames.forEach((file) => {
            const img = new Image();
            img.src = `/sequence/${file}`;
            img.onload = () => {
                loaded++;
                if (loaded === frameCount) setIsLoaded(true);
            };
            imgArray.push(img);
        });
        setImages(imgArray);
    }, []);

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]?.complete) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        const { width, height } = canvas;

        // precise object-cover logic
        const scale = Math.max(width / img.width, height / img.height);
        const x = (width - img.width * scale) / 2;
        const y = (height - img.height * scale) / 2;

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        if (!isLoaded || !images.length) return;

        const frameIndex = Math.min(frameCount - 1, Math.floor(progress * frameCount));
        requestAnimationFrame(() => drawFrame(frameIndex));

        // Hybrid Positioning Switch
        if (containerRef.current) {
            const { bottom } = containerRef.current.getBoundingClientRect();
            // Switch when container bottom aligns with viewport bottom
            setIsFixed(bottom > window.innerHeight);
        }
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                if (isLoaded) {
                    const idx = Math.min(frameCount - 1, Math.floor(scrollYProgress.get() * frameCount));
                    drawFrame(idx);
                }
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images]);

    useEffect(() => {
        if (isLoaded) drawFrame(0);
    }, [isLoaded]);

    return (
        <section ref={containerRef} className="relative h-[400vh] w-full bg-black">
            <div
                className={`top-0 left-0 h-screen w-full overflow-hidden will-change-transform ${isFixed ? "fixed z-0" : "absolute bottom-0 z-0"
                    }`}
            >
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </section>
    );
}
