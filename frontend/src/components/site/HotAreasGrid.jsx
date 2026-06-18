import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AREAS, waLink } from "@/lib/data";

export default function HotAreasGrid() {
    return (
        <section
            id="areas"
            data-testid="hot-areas-grid"
            className="bg-brand-bg py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            Bali by region
                        </p>
                        <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                            Where do you want
                            <br />
                            <span className="italic">to wake up?</span>
                        </h2>
                    </div>
                    <p className="md:max-w-xs text-brand-muted text-base font-light leading-relaxed">
                        From clifftop Uluwatu to rice-field Ubud — each area carries its
                        own rhythm, yield potential, and lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {AREAS.map((a, i) => (
                        <motion.a
                            key={a.name}
                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            data-testid={`area-card-${a.name.toLowerCase().replace(/\s+/g, "-")}`}
                            href={waLink(`Hi Jaya Carita, I'm interested in properties in ${a.name}.`)}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative overflow-hidden aspect-[4/5] block"
                        >
                            <img
                                src={a.image}
                                alt={`${a.name} area in Bali`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/90 via-brand-olive/30 to-transparent" />
                            <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between text-brand-bg">
                                <ArrowUpRight
                                    size={18}
                                    className="self-end opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500"
                                />
                                <div>
                                    <h3 className="font-serif text-2xl md:text-3xl leading-none mb-2">
                                        {a.name}
                                    </h3>
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-brand-bg/85">
                                        {a.note}
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
