import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TEAM, waLink } from "@/lib/data";

export default function Team() {
    const [active, setActive] = useState(0);

    return (
        <section
            id="team"
            data-testid="team-section"
            className="bg-brand-bg py-24 md:py-32 border-t border-brand-line"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            The team
                        </p>
                        <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                            Five people behind
                            <br />
                            <span className="italic">every signature.</span>
                        </h2>
                    </div>
                    <p className="md:max-w-xs text-brand-muted text-base font-light leading-relaxed">
                        Hover or tap a name — meet the people protecting your investment in Bali.
                    </p>
                </div>

                {/* Desktop: hover-driven image preview */}
                <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
                    <ul className="col-span-7 border-t border-brand-line">
                        {TEAM.map((m, i) => (
                            <li
                                key={m.name}
                                onMouseEnter={() => setActive(i)}
                                data-testid={`team-row-${i}`}
                                className="border-b border-brand-line group relative cursor-pointer"
                            >
                                <div className="grid grid-cols-12 items-baseline gap-6 py-7 transition-all duration-500">
                                    <span
                                        className={`col-span-1 text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                                            active === i ? "text-brand-terracotta" : "text-brand-muted/60"
                                        }`}
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span
                                        className={`col-span-7 font-serif text-4xl lg:text-5xl leading-none tracking-tight transition-all duration-500 ${
                                            active === i
                                                ? "text-brand-terracotta italic translate-x-2"
                                                : "text-brand-olive"
                                        }`}
                                    >
                                        {m.name}
                                    </span>
                                    <span className="col-span-4 text-[11px] uppercase tracking-[0.22em] text-brand-muted text-right">
                                        {m.role}
                                    </span>
                                </div>
                                {/* progress bar */}
                                <span
                                    className={`absolute left-0 bottom-0 h-px bg-brand-terracotta transition-all duration-700 ease-out ${
                                        active === i ? "w-full" : "w-0"
                                    }`}
                                />
                            </li>
                        ))}
                    </ul>

                    {/* Floating preview card */}
                    <div className="col-span-5 sticky top-28">
                        <div className="relative aspect-[3/4] overflow-hidden bg-brand-sand">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={TEAM[active].image}
                                    src={TEAM[active].image}
                                    alt={TEAM[active].name}
                                    initial={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    data-testid="team-preview-image"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/80 via-brand-olive/10 to-transparent" />
                            <div className="absolute bottom-0 inset-x-0 p-7 text-brand-bg">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={TEAM[active].name}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <p className="text-[10px] uppercase tracking-[0.28em] text-brand-bg/80 mb-2">
                                            Based in {TEAM[active].location}
                                        </p>
                                        <p className="text-sm font-light leading-relaxed max-w-md">
                                            {TEAM[active].bio}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                        <a
                            href={waLink(`Hi Jaya Carita, I'd like to speak with ${TEAM[active].name}.`)}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="team-cta"
                            className="mt-6 inline-flex items-center gap-3 border-b border-brand-olive pb-1 text-[11px] uppercase tracking-[0.24em] text-brand-olive hover:text-brand-terracotta hover:border-brand-terracotta transition-colors duration-300"
                        >
                            Talk to {TEAM[active].name.split(" ")[0]} on WhatsApp
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                {/* Mobile / tablet: snap carousel */}
                <div className="lg:hidden -mx-6 md:-mx-10 px-6 md:px-10 overflow-x-auto snap-x snap-mandatory scroll-pl-6 md:scroll-pl-10 flex gap-5 pb-6">
                    {TEAM.map((m, i) => (
                        <article
                            key={m.name}
                            data-testid={`team-card-mobile-${i}`}
                            className="snap-start shrink-0 w-[78vw] sm:w-[55vw] md:w-[44vw] bg-brand-sand"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={m.image}
                                    alt={m.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/85 via-transparent to-transparent" />
                                <div className="absolute bottom-0 inset-x-0 p-5 text-brand-bg">
                                    <p className="text-[10px] uppercase tracking-[0.24em] text-brand-bg/80 mb-1">
                                        {String(i + 1).padStart(2, "0")} · {m.location}
                                    </p>
                                    <h3 className="font-serif text-2xl leading-tight">{m.name}</h3>
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-bg/85 mt-1">
                                        {m.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-brand-muted font-light leading-relaxed p-5">
                                {m.bio}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
