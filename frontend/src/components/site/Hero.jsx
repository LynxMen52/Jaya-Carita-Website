import { ArrowRight, MapPin } from "lucide-react";
import { waLink } from "@/lib/data";

const HERO_IMG =
    "https://images.unsplash.com/photo-1634671651144-adbeca8623cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBiYWxpJTIwdmlsbGElMjBwb29sfGVufDB8fHx8MTc4MTQ5MzAxMnww&ixlib=rb-4.1.0&q=85";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-32 md:pt-36 pb-16 md:pb-24 bg-brand-bg"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
                    {/* Text column */}
                    <div className="lg:col-span-6 lg:pb-12">
                        <p
                            data-testid="hero-overline"
                            className="rise text-[11px] uppercase tracking-[0.32em] text-brand-terracotta font-medium mb-8 flex items-center gap-3"
                        >
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            Jaya Carita Bali · Est. property consultancy
                        </p>

                        <h1
                            data-testid="hero-headline"
                            className="rise delay-1 font-serif font-light text-brand-olive text-5xl sm:text-6xl lg:text-[88px] leading-[0.95] tracking-[-0.02em]"
                        >
                            Your tropical
                            <br />
                            <span className="italic text-brand-terracotta">sanctuary</span>,
                            <br />
                            curated.
                        </h1>

                        <p
                            data-testid="hero-subcopy"
                            className="rise delay-2 mt-8 max-w-xl text-brand-muted text-base md:text-lg leading-relaxed font-light"
                        >
                            Villas, land, and lifestyle estates across Bali — paired with the
                            legal, visa, and management services you actually need to live here.
                        </p>

                        <div className="rise delay-3 mt-10 flex flex-wrap items-center gap-4">
                            <a
                                data-testid="hero-primary-cta"
                                href={waLink("Hi Jaya Carita, I'm exploring property in Bali.")}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 bg-brand-olive text-brand-bg px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-brand-olive-hover transition-colors duration-500"
                            >
                                Start an Inquiry
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-500 group-hover:translate-x-1"
                                />
                            </a>
                            <a
                                data-testid="hero-secondary-cta"
                                href="#properties"
                                className="inline-flex items-center gap-3 border border-brand-olive/40 text-brand-olive px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-brand-sand transition-colors duration-500"
                            >
                                View Listings
                            </a>
                        </div>

                        <div className="rise delay-4 mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-brand-line pt-8">
                            <Stat k="20+" v="Years in Bali" />
                            <Stat k="350+" v="Properties closed" />
                            <Stat k="40+" v="Countries served" />
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                            <img
                                src={HERO_IMG}
                                alt="Aerial luxury villa pool surrounded by tropical palms in Bali"
                                className="w-full h-full object-cover scale-100 hover:scale-[1.04] transition-transform duration-[1800ms] ease-out"
                                data-testid="hero-image"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                        </div>

                        {/* Floating caption card */}
                        <div className="hidden md:flex absolute -bottom-6 -left-6 bg-brand-bg border border-brand-line px-6 py-5 max-w-[280px] items-start gap-3 shadow-[0_30px_60px_-30px_rgba(43,58,40,0.25)]">
                            <MapPin className="text-brand-terracotta mt-1 shrink-0" size={18} />
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.22em] text-brand-muted">
                                    Currently exploring
                                </p>
                                <p className="font-serif text-xl text-brand-olive mt-1 leading-tight">
                                    Pererenan · Cemagi · Ubud
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
