"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // State
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // Start Center
        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const vel = { x: 0, y: 0 };
        let activeHoverScale = 0; // 0 = Crosshair, 1 = Brackets
        let targetWidth = 20;
        let targetHeight = 20;

        // Configuration
        const speed = 0.15; // Smoothness (0.1 = heavy, 0.2 = snappy)

        const setMouse = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Expanded interactive list
            const interactive = target.closest('a, button, input, textarea, .interactive, .project-card, .capability-card, [role="button"]');

            if (interactive) {
                const rect = interactive.getBoundingClientRect();
                mouse.x = rect.left + rect.width / 2; // Auto-aim X
                mouse.y = rect.top + rect.height / 2; // Auto-aim Y
                targetWidth = rect.width + 10; // Padding
                targetHeight = rect.height + 10;
                setIsHovering(true);
            } else {
                targetWidth = 20; // Default Size
                targetHeight = 20;
                setIsHovering(false);
            }
        };

        const loop = () => {
            // 1. Physics (Lerp)
            const dx = mouse.x - pos.x;
            const dy = mouse.y - pos.y;

            pos.x += dx * speed;
            pos.y += dy * speed;

            // 2. Color Logic (Blue <-> Amber)
            const ratio = Math.min(Math.max(pos.x / window.innerWidth, 0), 1);
            // Blue (#3b82f6) to Amber (#f59e0b)
            const r = 59 + (245 - 59) * ratio;
            const g = 130 + (158 - 130) * ratio;
            const b = 246 + (11 - 246) * ratio;
            const color = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

            // 3. Render
            if (cursor) {
                cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
                cursor.style.setProperty('--cursor-color', color);

                // Animate Size (Manual Lerp for smooth resizing)
                const currentW = parseFloat(cursor.style.getPropertyValue('--cursor-w') || '20');
                const currentH = parseFloat(cursor.style.getPropertyValue('--cursor-h') || '20');

                const newW = currentW + (targetWidth - currentW) * speed;
                const newH = currentH + (targetHeight - currentH) * speed;

                cursor.style.setProperty('--cursor-w', `${newW}px`);
                cursor.style.setProperty('--cursor-h', `${newH}px`);
            }

            requestAnimationFrame(loop);
        };

        window.addEventListener("mousemove", setMouse);
        window.addEventListener("mouseover", checkHover);
        const raf = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("mousemove", setMouse);
            window.removeEventListener("mouseover", checkHover);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 z-[2147483647] pointer-events-none will-change-transform flex items-center justify-center mix-blend-screen"
            style={{
                transform: 'translate3d(50vw, 50vh, 0)',
                '--cursor-w': '20px',
                '--cursor-h': '20px',
                '--cursor-color': '#3b82f6'
            } as React.CSSProperties}
        >
            {/* SVG RETICLE */}
            <svg
                width="200"
                height="200"
                viewBox="0 0 100 100"
                className="overflow-visible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                {/* 1. CROSSHAIR (Default) - Fades out on hover */}
                <g className={`transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
                    <line x1="50" y1="45" x2="50" y2="55" stroke="var(--cursor-color)" strokeWidth="1.5" />
                    <line x1="45" y1="50" x2="55" y2="50" stroke="var(--cursor-color)" strokeWidth="1.5" />
                </g>

                {/* 2. BRACKETS (Target) - Expands on hover */}
                {/* Uses dynamic Width/Height from CSS vars mapped to Scale or Path? 
                    Actually, simpler: Just use a styled div for brackets to handle the dynamic width/height easily. 
                    SVG scaling is tricky for non-uniform rects.
                    Let's revert to a div for the dynamic frame, keep SVG for crosshair.
                */}
            </svg>

            {/* DYNAMIC FRAME (Brackets) */}
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    width: 'var(--cursor-w)',
                    height: 'var(--cursor-h)',
                    border: '1px solid var(--cursor-color)',
                    // Clip path to make corners? Or just border?
                    // "Corner Brackets" look:
                    // We can use 4 pseudo-elements or a clip-path.
                    // Simple Clip Path for [ ] shape:
                    // polygon(0 0, 20% 0, 20% 100%, 0 100%) etc...
                }}
            >
                {/* Corner Top-Left */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={{ borderColor: 'var(--cursor-color)' }} />
                {/* Corner Top-Right */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={{ borderColor: 'var(--cursor-color)' }} />
                {/* Corner Bottom-Left */}
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={{ borderColor: 'var(--cursor-color)' }} />
                {/* Corner Bottom-Right */}
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={{ borderColor: 'var(--cursor-color)' }} />
            </div>

            {/* CENTRAL DOT (Always Visible anchor) */}
            <div className={`w-1 h-1 rounded-full bg-white transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-80'}`} />

        </div>
    );
}
