import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { ARTICLE_INDEX } from "@/lib/articles";

export default function InsightsPreview() {
    const featured = ARTICLE_INDEX.slice(0, 3);
    return (
        <section
            id="insights"
            data-testid="insights-preview"
            className="bg-brand-bg py-24 md:py-32"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-5 flex items-center gap-3">
                            <span className="inline-block w-10 h-px bg-brand-terracotta" />
                            Investment Guide
                        </p>
                        <h2 className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                            Learn before
                            <br />
                            <span className="italic">you invest.</span>
                        </h2>
                    </div>
                    <Link 
                        to="/insights" 
                        data-testid="insights-view-all" 
                        className="inline-flex items-center gap-3 border-b border-brand-olive text-brand-olive pb-1 text-[11px] uppercase tracking-[0.24em] hover:text-brand-terracotta hover:border-brand-terracotta transition-colors duration-500" > 
                        Read all guides 
                        <ArrowRight size={14} /> 
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {featured.map((a) => (
                        <Link
                            key={a.slug}
                            to={`/insights/${a.slug}`}
                            data-testid={`insight-card-${a.slug}`}
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
                            <h3 className="font-serif text-2xl md:text-[26px] text-brand-olive leading-tight mb-3 group-hover:text-brand-terracotta transition-colors duration-300">
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
    );
}
