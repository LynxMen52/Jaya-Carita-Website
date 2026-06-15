import Marquee from "react-fast-marquee";
import { HOT_AREAS } from "@/lib/data";

export default function AreasMarquee() {
    return (
        <section
            data-testid="areas-marquee"
            className="relative bg-brand-sand border-y border-brand-line py-10 md:py-12 overflow-hidden"
        >
            <div className="marquee-fade">
                <Marquee
                    gradient={false}
                    speed={42}
                    pauseOnHover
                    className="select-none"
                >
                    {HOT_AREAS.concat(HOT_AREAS).map((area, i) => (
                        <span
                            key={`${area}-${i}`}
                            data-testid={`marquee-item-${area.toLowerCase().replace(/\s+/g, "-")}`}
                            className="flex items-center gap-12 px-8"
                        >
                            <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-olive italic tracking-tight whitespace-nowrap">
                                {area}
                            </span>
                            <Diamond />
                        </span>
                    ))}
                </Marquee>
            </div>
            <p className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-brand-terracotta">
                Hot Areas · Bali
            </p>
        </section>
    );
}

function Diamond() {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className="text-brand-terracotta shrink-0"
            aria-hidden
        >
            <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="currentColor" />
        </svg>
    );
}
