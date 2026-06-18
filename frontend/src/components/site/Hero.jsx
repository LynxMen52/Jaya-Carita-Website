import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { waLink } from "@/lib/data";
import { RevealLines } from "./Reveal";
import Magnetic from "./Magnetic";

const HERO_IMG =
    "https://images.unsplash.com/photo-1634671651144-adbeca8623cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBiYWxpJTIwdmlsbGElMjBwb29sfGVufDB8fHx8MTc4MTQ5MzAxMnww&ixlib=rb-4.1.0&q=85";

export default function Hero() {
    const wrapRef = useRef(null);
    const imgRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: wrapRef,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

    return (
        <section
            id="top"
            ref={wrapRef}
            data-testid="hero-section"
            className="relative pt-32 md:pt-36 pb-16 md:pb-24 bg-brand-bg overflow-hidden"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
                    <motion.div style={{ y: textY }} className="lg:col-span-6 lg:pb-12">
                        <motion.p
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            data-testid="hero-overline"
                            className="text-[11px] uppercase tracking-[0.32em] text-brand-terracotta font-medium mb-8 flex items-center gap-3"
                        >
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                className="inline-block w-10 h-px bg-brand-terracotta origin-left"
                            />
                            Jaya Carita Bali · Est. property consultancy
                        </motion.p>

                        <h1
                            data-testid="hero-headline"
                            className="font-serif font-light text-brand-olive text-5xl sm:text-6xl lg:text-[88px] leading-[0.95] tracking-[-0.02em]"
                        >
                            <RevealLines
                                lines={[
                                    <>Your tropical</>,
                                    <span key="2"><em className="italic not-italic text-brand-terracotta">sanctuary</em>,</span>,
                                    <>curated.</>,
                                ]}
                                baseDelay={0.15}
                            />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            data-testid="hero-subcopy"
                            className="mt-8 max-w-xl text-brand-muted text-base md:text-lg leading-relaxed font-light"
                        >
                            Villas, land, and lifestyle estates across Bali — paired with the
                            legal, visa, and management services you actually need to live here.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            <Magnetic>
                                <a
                                    data-testid="hero-primary-cta"
                                    href={waLink("Hi Jaya Carita, I'm exploring property in Bali.")}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative inline-flex items-center gap-3 bg-brand-olive text-brand-bg px-7 py-4 text-[11px] uppercase tracking-[0.24em] overflow-hidden"
                                >
                                    <span className="absolute inset-0 bg-brand-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                                    <span className="relative z-10 flex items-center gap-3">
                                        Start an Inquiry
                                        <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                                    </span>
                                </a>
                            </Magnetic>
                            <a
                                data-testid="hero-secondary-cta"
                                href="#properties"
                                className="group relative inline-flex items-center gap-3 border border-brand-olive/40 text-brand-olive px-7 py-4 text-[11px] uppercase tracking-[0.24em] overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-brand-sand -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                                <span className="relative z-10">View Listings</span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-brand-line pt-8"
                        >
                            <Stat k="20+" v="Years in Bali" />
                            <Stat k="350+" v="Properties closed" />
                            <Stat k="40+" v="Countries served" />
                        </motion.div>
                    </motion.div>

                    {/* Image column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-6 relative"
                    >
                        <div ref={imgRef} className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                            <motion.img
                                src={HERO_IMG}
                                alt="Aerial luxury villa pool surrounded by tropical palms in Bali"
                                style={{ y: imgY, scale: imgScale }}
                                className="absolute -inset-y-[10%] w-full h-[120%] object-cover will-change-transform"
                                data-testid="hero-image"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="hidden md:flex absolute -bottom-6 -left-6 bg-brand-bg border border-brand-line px-6 py-5 max-w-[280px] items-start gap-3 shadow-[0_30px_60px_-30px_rgba(43,58,40,0.25)]"
                        >
                            <MapPin className="text-brand-terracotta mt-1 shrink-0" size={18} />
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">
                                    Currently exploring
                                </p>
                                <p className="font-serif text-xl text-brand-olive mt-1 leading-tight">
                                    Pererenan · Cemagi · Ubud
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-3 text-brand-muted"
            >
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <motion.span
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="w-px h-10 bg-brand-olive/60 block"
                />
            </motion.div>
        </section>
    );
}

function Stat({ k, v }) {
    return (
        <div>
            <div className="font-serif text-3xl text-brand-olive leading-none">{k}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-brand-muted mt-2">
                {v}
            </div>
        </div>
    );
}
