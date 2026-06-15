import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, waLink } from "@/lib/data";

export default function FAQ() {
    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="bg-brand-bg py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    <div className="lg:col-span-5">
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            Frequently asked
                        </p>
                        <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                            Visa, legal,
                            <br />
                            <span className="italic">ownership.</span>
                        </h2>
                        <p className="mt-8 text-brand-muted text-base md:text-lg font-light leading-relaxed max-w-md">
                            The questions every foreign buyer asks before saying yes. If
                            yours isn&apos;t here — message us directly.
                        </p>
                        <a
                            data-testid="faq-cta"
                            href={waLink("Hi Jaya Carita, I have a question about buying in Bali.")}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-10 inline-flex items-center gap-3 text-brand-olive border-b border-brand-olive pb-1 text-[11px] uppercase tracking-[0.24em] hover:text-brand-terracotta hover:border-brand-terracotta transition-colors duration-500"
                        >
                            Ask our team directly →
                        </a>
                    </div>

                    <div className="lg:col-span-7">
                        <Accordion type="single" collapsible className="w-full">
                            {FAQS.map((item, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`item-${i}`}
                                    data-testid={`faq-item-${i}`}
                                    className="border-b border-brand-line"
                                >
                                    <AccordionTrigger className="text-left py-6 hover:no-underline group">
                                        <span className="font-serif text-xl md:text-2xl text-brand-olive font-light pr-8 group-hover:text-brand-terracotta transition-colors duration-300">
                                            {item.q}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-brand-muted text-base font-light leading-relaxed pb-6 pr-8">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
