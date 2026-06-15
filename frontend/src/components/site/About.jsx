import { ShieldCheck, Compass, Handshake } from "lucide-react";
import { waLink } from "@/lib/data";

const ABOUT_IMG =
    "https://images.unsplash.com/photo-1675657144285-7daf131132de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWxpJTIwdmlsbGElMjBwb29sfGVufDB8fHx8MTc4MTQ5MzAxMnww&ixlib=rb-4.1.0&q=85";

const PILLARS = [
    {
        icon: ShieldCheck,
        title: "Verified legalities",
        copy: "Notary-backed title checks, zoning compliance, and English-translated contracts on every deal.",
    },
    {
        icon: Compass,
        title: "Local intelligence",
        copy: "Two decades of on-the-ground sourcing — including off-market villas and pre-launch land.",
    },
    {
        icon: Handshake,
        title: "End-to-end care",
        copy: "From the first WhatsApp to your KITAS in hand — one team, one promise, zero hand-offs.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="bg-brand-bg py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                                src={ABOUT_IMG}
                                alt="Curated Bali villa with infinity pool"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                        </div>
                        <div className="hidden md:block absolute"></div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            Why Jaya Carita
                        </p>
                        <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-[64px] tracking-tight leading-[1.02]">
                            Trust has become
                            <br />
                            the most <span className="italic text-brand-terracotta">valuable asset</span>
                            <br />
                            in Bali property.
                        </h2>
                        <p className="mt-8 text-brand-muted text-base md:text-lg font-light leading-relaxed max-w-2xl">
                            Bali&apos;s market moves fast — and so do the wrong agencies. We take
                            the long view: protect the contract, hold the line on price, and
                            stay with you through every renewal, repair, and rental cycle.
                        </p>

                        <div className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-brand-line pt-10">
                            {PILLARS.map((p) => (
                                <div key={p.title}>
                                    <p.icon
                                        size={28}
                                        strokeWidth={1.3}
                                        className="text-brand-terracotta mb-4"
                                    />
                                    <h4 className="font-serif text-xl text-brand-olive mb-2">
                                        {p.title}
                                    </h4>
                                    <p className="text-sm text-brand-muted font-light leading-relaxed">
                                        {p.copy}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <a
                            data-testid="about-cta"
                            href={waLink("Hi Jaya Carita, I'd like to schedule a consultation.")}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-12 inline-flex items-center gap-3 border border-brand-olive text-brand-olive px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-brand-olive hover:text-brand-bg transition-colors duration-500"
                        >
                            Book a private consultation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
