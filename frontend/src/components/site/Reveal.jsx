import { motion } from "framer-motion";

export default function Reveal({
    children,
    delay = 0,
    y = 32,
    duration = 0.9,
    once = true,
    className = "",
    as: Tag = "div",
}) {
    const MotionTag = motion[Tag] || motion.div;
    return (
        <MotionTag
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: "-80px" }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </MotionTag>
    );
}

export function RevealLines({ lines, className = "", lineClass = "", baseDelay = 0 }) {
    return (
        <span className={`block ${className}`}>
            {lines.map((line, i) => (
                <span
                    key={i}
                    className="block overflow-hidden"
                >
                    <motion.span
                        initial={{ y: "110%" }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1.05,
                            delay: baseDelay + i * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`block ${lineClass}`}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
