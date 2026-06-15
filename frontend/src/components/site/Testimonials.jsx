import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
    return (
        <section
            data-testid="testimonials-section"
            className="bg-brand-sand py-24 md:py-32 border-y border-brand-line"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="max-w-2xl mb-16">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                        <span className="inline-block w-10 h-px bg-brand-terracotta" />
                        Trusted by buyers worldwide
                    </p>
                    <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl tracking-tight leading-[1.05]">
                        What our clients
                        <br />
                        <span className="italic">say about us.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-px bg-brand-line border border-brand-line">
                    {TESTIMONIALS.map((t, i) => (
                        <figure
                            key={i}
                            data-testid={`testimonial-${i}`}
                            className="bg-brand-bg p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[320px]"
                        >
                            <Quote
                                size={28}
                                strokeWidth={1.2}
                                className="text-brand-terracotta mb-6"
                            />
                            <blockquote className="font-serif text-xl md:text-2xl text-brand-olive leading-snug font-light">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <figcaption className="mt-8 pt-6 border-t border-brand-line">
                                <p className="text-sm font-medium text-brand-ink">{t.name}</p>
                                <p className="text-[10px] uppercase tracking-[0.22em] text-brand-muted mt-1">
                                    {t.place}
                                </p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
