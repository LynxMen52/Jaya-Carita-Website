import { ArrowUpRight, Building2, MessageCircleQuestion } from "lucide-react";
import { waLink } from "@/lib/data";

const ACTIONS = [
    {
        id: "submit-listing",
        eyebrow: "Owners & developers",
        title: "List your property with us",
        copy: "Have a villa, land, or development to list? Share the details and our acquisition team will reply on WhatsApp with next steps and a discreet valuation.",
        cta: "Submit your listing",
        icon: Building2,
        message:
            "Hi Jaya Carita, I'd like to list my property with you. Here are the details:\n\nProperty type: \nLocation: \nSize / bedrooms: \nAsking price: \nNotes: ",
    },
    {
        id: "ask-question",
        eyebrow: "Buyers & investors",
        title: "Ask us anything",
        copy: "Questions about visas, legal structure, financing, or a specific area? Send a quick WhatsApp — one of our advisors will jump in.",
        cta: "Start a WhatsApp chat",
        icon: MessageCircleQuestion,
        message: "Hi Jaya Carita, I have a question about property in Bali.",
    },
];

export default function ContactCTAs() {
    return (
        <section
            id="contact-form"
            data-testid="contact-ctas"
            className="bg-brand-bg py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="max-w-2xl mb-14 md:mb-20">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                        <span className="inline-block w-10 h-px bg-brand-terracotta" />
                        Get in touch
                    </p>
                    <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
                        Two ways to reach
                        <br />
                        <span className="italic">our team.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-brand-line border border-brand-line">
                    {ACTIONS.map((a) => (
                        <a
                            key={a.id}
                            href={waLink(a.message)}
                            target="_blank"
                            rel="noreferrer"
                            data-testid={`cta-${a.id}`}
                            className="group relative bg-brand-bg p-8 md:p-12 lg:p-14 hover:bg-brand-olive transition-colors duration-500 min-h-[360px] flex flex-col justify-between"
                        >
                            <div className="flex items-start justify-between">
                                <a.icon
                                    size={40}
                                    strokeWidth={1.2}
                                    className="text-brand-olive group-hover:text-brand-bg transition-colors duration-500"
                                />
                                <ArrowUpRight
                                    size={20}
                                    className="text-brand-muted group-hover:text-brand-terracotta transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-terracotta group-hover:text-brand-bg/70 transition-colors duration-500 mb-3">
                                    {a.eyebrow}
                                </p>
                                <h3 className="font-serif text-3xl md:text-4xl text-brand-olive group-hover:text-brand-bg transition-colors duration-500 mb-4 leading-tight">
                                    {a.title}
                                </h3>
                                <p className="text-brand-muted group-hover:text-brand-bg/80 transition-colors duration-500 text-sm md:text-base leading-relaxed font-light max-w-md mb-6">
                                    {a.copy}
                                </p>
                                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand-olive group-hover:text-brand-terracotta transition-colors duration-500 border-b border-brand-olive/40 group-hover:border-brand-terracotta pb-1">
                                    {a.cta} →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
