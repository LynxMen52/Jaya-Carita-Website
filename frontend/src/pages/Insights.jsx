import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import { ARTICLE_INDEX } from "@/lib/articles";

export default function Insights() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <main
            data-testid="insights-page"
            className="min-h-screen bg-brand-bg text-brand-ink overflow-x-hidden"
        >
            <Header />

            <section className="pt-32 md:pt-36 pb-12 bg-brand-bg">
                <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                    <Link
                        to="/"
                        data-testid="insights-back-link"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand-muted hover:text-brand-terracotta transition-colors duration-300 mb-10"
                    >
                        <ArrowLeft size={14} /> Back to home
                    </Link>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-brand-terracotta mb-6">
                        Investment Guide & News
                    </p>
                    <h1 className="font-serif font-light text-brand-olive text-5xl sm:text-6xl lg:text-[80px] leading-[0.98] tracking-[-0.02em] max-w-4xl">
                        Everything you should know{" "}
                        <span className="italic text-brand-terracotta">before investing</span> in Bali.
                    </h1>
                    <p className="mt-8 max-w-2xl text-brand-muted text-base md:text-lg leading-relaxed font-light">
                        Original guides from our legal, visa, and acquisition teams — written for foreign
                        buyers making their first (or fifth) move in Bali.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-brand-bg">
                <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                        {ARTICLE_INDEX.map((a) => (
                            <Link
                                key={a.slug}
                                to={`/insights/${a.slug}`}
                                data-testid={`article-card-${a.slug}`}
                                className="group block"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-brand-sand mb-5">
                                    <img
                                        src={a.image}
                                        alt={a.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                                    />
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.28em] text-brand-terracotta mb-3">
                                    {a.category} · {a.date}
                                </p>
                                <h3 className="font-serif text-2xl text-brand-olive leading-tight mb-3 group-hover:text-brand-terracotta transition-colors duration-300">
                                    {a.title}
                                </h3>
                                <p className="text-brand-muted text-sm font-light leading-relaxed mb-4">
                                    {a.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand-olive group-hover:text-brand-terracotta transition-colors duration-300">
                                    {a.readTime}
                                    <ArrowUpRight size={14} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppFloat />
        </main>
    );
}
