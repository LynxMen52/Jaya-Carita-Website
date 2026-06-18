import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [hover, setHover] = useState(false);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            setHidden(false);
        };
        const out = () => setHidden(true);

        const isInteractive = (el) =>
            !!el?.closest?.("a, button, [role='button'], input, textarea, select, label");

        const over = (e) => setHover(isInteractive(e.target));

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseleave", out);
        window.addEventListener("mouseover", over);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseleave", out);
            window.removeEventListener("mouseover", over);
        };
    }, []);

    return (
        <>
            <motion.div
                aria-hidden
                className="hidden md:block fixed top-0 left-0 z-[80] pointer-events-none rounded-full border border-brand-olive mix-blend-difference"
                animate={{
                    x: pos.x - (hover ? 22 : 14),
                    y: pos.y - (hover ? 22 : 14),
                    width: hover ? 44 : 28,
                    height: hover ? 44 : 28,
                    opacity: hidden ? 0 : 1,
                    backgroundColor: hover ? "rgba(192,108,80,0.18)" : "transparent",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.4 }}
            />
            <motion.div
                aria-hidden
                className="hidden md:block fixed top-0 left-0 z-[80] pointer-events-none rounded-full bg-brand-terracotta mix-blend-difference"
                animate={{
                    x: pos.x - 2,
                    y: pos.y - 2,
                    width: 4,
                    height: 4,
                    opacity: hidden ? 0 : 1,
                    scale: hover ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 600, damping: 30 }}
            />
        </>
    );
}
