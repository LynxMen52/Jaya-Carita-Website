import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowUpRight,
    Building2,
    ScrollText,
    FileCheck2,
    ShieldCheck,
    Handshake,
    Receipt,
    Plane,
    Crown,
    Laptop,
    Stamp,
    Palmtree,
    Briefcase,
    Key,
    RefreshCcw,
    Scale,
} from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import { SERVICE_DETAILS, waLink } from "@/lib/data";

const ICON_MAP = {
    Building2,
    ScrollText,
    FileCheck2,
    ShieldCheck,
    Handshake,
    Receipt,
    Plane,
    Crown,
    Laptop,
    Stamp,
    PalmtreeIcon: Palmtree,
    Briefcase,
    Key,
    RefreshCcw,
    Scale,
};

const HEROES = {
    legal:
        "https://images.unsplash.com/photo-1675657144285-7daf131132de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYWxpJTIwdmlsbGElMjBwb29sfGVufDB8fHx8MTc4MTQ5MzAxMnww&ixlib=rb-4.1.0&q=85",
    visa:
        "https://images.unsplash.com/photo-1634671651144-adbeca8623cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBiYWxpJTIwdmlsbGElMjBwb29sfGVufDB8fHx8MTc4MTQ5MzAxMnww&ixlib=rb-4.1.0&q=85",
};

export default function ServiceDetail() {
    const { slug } = useParams();
    const data = SERVICE_DETAILS[slug];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    if (!data) return <Navigate to="/" replace />;

    return (
        <main
            data-testid={`service-detail-${slug}`}
            className="min-h-screen bg-brand-bg text-brand-ink overflow-x-hidden"
        >
            <Header />

            {/* Hero */}
            <section className="relative pt-32 md:pt-36 pb-20 md:pb-28 bg-brand-bg">
                <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                    <Link
                        to="/"
                        data-testid="service-back-link"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand-muted hover:text-brand-terracotta transition-colors duration-300 mb-10"
                    >
                        <ArrowLeft size={14} /> Back to home
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
                        <div className="lg:col-span-7">
                            <p className="text-[11px] uppercase tracking-[0.32em] text-brand-terracotta font-medium mb-6 flex items-center gap-3">
                                <span className="inline-block w-10 h-px bg-brand-terracotta" />
                                {data.eyebrow}
                            </p>
                            <h1
                                data-testid="service-detail-title"
                                className="font-serif font-light text-brand-olive text-5xl sm:text-6xl lg:text-[80px] leading-[0.98] tracking-[-0.02em]"
                            >
                                {data.title.split(" ")[0]}{" "}
                                <span className="italic text-brand-terracotta">
                                    {data.title.split(" ").slice(1).join(" ")}
                                </span>
                            </h1>
                            <p className="mt-8 max-w-2xl text-brand-muted text-base md:text-lg leading-relaxed font-light">
                                {data.intro}
                            </p>
                            <a
                                data-testid="service-detail-cta"
                                href={waLink(`Hi Jaya Carita, I have questions about your ${data.title}.`)}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-10 inline-flex items-center gap-3 bg-brand-olive text-brand-bg px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-brand-olive-hover transition-colors duration-500"
                            >
                                Talk to our team
                                <ArrowUpRight size={16} />
                            </a>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img
                                    src={HEROES[slug]}
                                    alt={`${data.title} — Jaya Carita Bali`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-services grid */}
            <section className="bg-brand-sand py-24 md:py-32 border-y border-brand-line">
                <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
                        <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
                            What we <span className="italic">handle</span> for you.
                        </h2>
                        <p className="md:max-w-xs text-brand-muted text-base font-light leading-relaxed">
                            Tap any service to start a WhatsApp conversation with our specialist.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-line border border-brand-line">
                        {data.items.map((item, idx) => {
                            const Icon = ICON_MAP[item.icon] || Scale;
                            return (
                                <a
                                    key={item.title}
                                    data-testid={`sub-service-${slug}-${idx}`}
                                    href={waLink(`Hi Jaya Carita, I'd like to know more about: ${item.title} (${data.title}).`)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative bg-brand-bg p-8 md:p-10 hover:bg-brand-olive transition-colors duration-500 min-h-[260px] flex flex-col justify-between"
                                >
                                    <div className="flex items-start justify-between">
                                        <Icon
                                            size={32}
                                            strokeWidth={1.2}
                                            className="text-brand-olive group-hover:text-brand-bg transition-colors duration-500"
                                        />
                                        <ArrowUpRight
                                            size={16}
                                            className="text-brand-muted group-hover:text-brand-terracotta transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.24em] text-brand-terracotta group-hover:text-brand-bg/70 transition-colors duration-500 mb-2">
                                            {String(idx + 1).padStart(2, "0")}
                                        </p>
                                        <h3 className="font-serif text-2xl text-brand-olive group-hover:text-brand-bg transition-colors duration-500 mb-3 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-brand-muted group-hover:text-brand-bg/80 transition-colors duration-500 text-sm leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Cross-link */}
            <CrossLink current={slug} />

            <Footer />
            <WhatsAppFloat />
        </main>
    );
}

function CrossLink({ current }) {
    const other = current === "legal" ? "visa" : "legal";
    const otherData = SERVICE_DETAILS[other];
    return (
        <section className="bg-brand-bg py-24 md:py-32">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <Link
                    to={`/services/${other}`}
                    data-testid="service-cross-link"
                    className="group block border-t border-brand-line pt-10"
                >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5">
                        Next
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <h3 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] group-hover:text-brand-terracotta transition-colors duration-500">
                            <span className="italic">{otherData.title}</span>
                        </h3>
                        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-brand-olive group-hover:text-brand-terracotta transition-colors duration-500">
                            Explore
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
