import { ArrowUpRight, BedDouble, Bath, Maximize2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LISTINGS, ALL_LISTINGS_URL } from "@/lib/data";
import Reveal, { RevealLines } from "./Reveal";

export default function FeaturedProperties() {
    return (
        <section
            id="properties"
            data-testid="featured-properties"
            className="bg-brand-bg py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            Featured Estates
                        </p>
                        <h2
                            data-testid="properties-headline"
                            className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]"
                        >
                            A handpicked
                            <br />
                            <span className="italic">collection</span> for 2026.
                        </h2>
                    </div>
                    <p className="md:max-w-xs text-brand-muted text-base font-light leading-relaxed">
                        Each property is personally inspected, title-verified, and matched
                        to the owners we trust most.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-[280px] md:auto-rows-[320px] lg:auto-rows-[280px]">
                    {LISTINGS.map((p, idx) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
                            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 1.1,
                                delay: idx * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={idx === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
                        >
                            <ListingCard p={p} featured={idx === 0} />
                        </motion.div>
                    ))}
                </div>

                {/* View all listings CTA */}
                <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-brand-line pt-10">
                    <p className="text-brand-muted font-light text-base max-w-md">
                        Browse our complete portfolio — hundreds of villas and land plots updated weekly.
                    </p>
                    <a
                        data-testid="view-all-listings-cta"
                        href={ALL_LISTINGS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-3 bg-brand-olive text-brand-bg px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-brand-olive-hover transition-colors duration-500"
                    >
                        View Full Listings
                        <ArrowRight
                            size={16}
                            className="transition-transform duration-500 group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

function ListingCard({ p, className = "", featured = false }) {
    return (
        <a
            data-testid={`listing-card-${p.id}`}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className={`group relative overflow-hidden bg-brand-sand block h-full w-full ${className}`}
        >
            <img
                src={p.image}
                alt={`${p.title} in ${p.location}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            {/* Status badge */}
            <span className="absolute top-5 left-5 bg-brand-bg/95 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-brand-olive border border-brand-line">
                {p.status}
            </span>

            {featured && (
                <span className="absolute top-5 right-5 bg-brand-terracotta text-brand-bg px-3 py-1.5 text-[10px] uppercase tracking-[0.22em]">
                    Signature
                </span>
            )}

            {/* Content */}
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-brand-bg">
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/80 mb-2">
                    {p.location}
                </p>
                <h3
                    className={`font-serif leading-tight ${
                        featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    } mb-4`}
                >
                    {p.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-white/85">
                    {p.specs.map((s, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                            {i === 0 && <Maximize2 size={12} />}
                            {p.specs.length > 1 && i === 1 && <BedDouble size={12} />}
                            {p.specs.length > 1 && i === 2 && <Bath size={12} />}
                            {s}
                        </span>
                    ))}
                </div>

                <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand-bg group-hover:text-brand-terracotta transition-colors duration-500">
                    View on JC Bali Property
                    <ArrowUpRight
                        size={14}
                        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                </div>
            </div>
        </a>
    );
}
