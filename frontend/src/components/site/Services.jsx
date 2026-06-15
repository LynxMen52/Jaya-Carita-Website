import { Home, KeyRound, Scale, Stamp, Building2, ArrowUpRight } from "lucide-react";
import { SERVICES, waLink } from "@/lib/data";

const ICONS = { Home, KeyRound, Scale, Stamp, Building2 };

export default function Services() {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="bg-brand-sand py-24 md:py-32 border-y border-brand-line"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
                    <div className="lg:col-span-7">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            What we do
                        </p>
                        <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                            Beyond brokerage —
                            <br />
                            <span className="italic">a complete</span> Bali partner.
                        </h2>
                    </div>
                    <div className="lg:col-span-5 lg:pt-6">
                        <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
                            Most agencies stop at the sale. We stay with you through notary,
                            visa, staffing, and rental yield — so you actually enjoy what you
                            bought.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-line border border-brand-line">
                    {SERVICES.map((s, i) => {
                        const Icon = ICONS[s.icon] || Home;
                        return (
                            <a
                                key={s.id}
                                href={waLink(`Hi Jaya Carita, I'd like to learn about your ${s.title}.`)}
                                target="_blank"
                                rel="noreferrer"
                                data-testid={`service-card-${s.id}`}
                                className={`group relative bg-brand-bg p-8 md:p-10 lg:p-12 hover:bg-brand-olive transition-colors duration-500 min-h-[280px] flex flex-col justify-between ${
                                    i === 0 ? "lg:col-span-2" : ""
                                }`}
                            >
                                <div className="flex items-start justify-between">
                                    <Icon
                                        size={36}
                                        strokeWidth={1.2}
                                        className="text-brand-olive group-hover:text-brand-bg transition-colors duration-500"
                                    />
                                    <ArrowUpRight
                                        size={18}
                                        className="text-brand-muted group-hover:text-brand-terracotta transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl md:text-3xl text-brand-olive group-hover:text-brand-bg transition-colors duration-500 mb-3">
                                        {s.title}
                                    </h3>
                                    <p className="text-brand-muted group-hover:text-brand-bg/80 transition-colors duration-500 text-sm md:text-base leading-relaxed font-light max-w-md">
                                        {s.copy}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
