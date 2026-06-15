import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import { ARTICLES } from "@/lib/articles";
import { waLink } from "@/lib/data";

export default function ArticleDetail() {
    const { slug } = useParams();
    const article = ARTICLES.find((a) => a.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    if (!article) return <Navigate to="/insights" replace />;

    const next = ARTICLES.find((a) => a.slug !== slug);

    return (
        <main
            data-testid={`article-${slug}`}
            className="min-h-screen bg-brand-bg text-brand-ink overflow-x-hidden"
        >
            <Header />

            <section className="pt-32 md:pt-36 pb-12 bg-brand-bg">
                <div className="mx-auto max-w-[900px] px-6 md:px-10">
                    <Link
                        to="/insights"
                        data-testid="article-back-link"
                        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-brand-muted hover:text-brand-terracotta transition-colors duration-300 mb-10"
                    >
                        <ArrowLeft size={14} /> All guides
                    </Link>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-brand-terracotta mb-5">
                        {article.category} · {article.date} · {article.readTime}
                    </p>
                    <h1
                        data-testid="article-title"
                        className="font-serif font-light text-brand-olive text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] tracking-[-0.02em]"
                    >
                        {article.title}
                    </h1>
                    <p className="mt-8 text-brand-muted text-lg leading-relaxed font-light italic">
                        {article.excerpt}
                    </p>
                </div>
            </section>

            <section className="pb-12 bg-brand-bg">
                <div className="mx-auto max-w-[1100px] px-6 md:px-10">
                    <div className="relative aspect-[16/9] overflow-hidden bg-brand-sand">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-brand-bg">
                <div className="mx-auto max-w-[760px] px-6 md:px-10 space-y-10">
                    {article.sections.map((s, i) => (
                        <div key={i} data-testid={`article-section-${i}`}>
                            <h2 className="font-serif text-2xl md:text-3xl text-brand-olive mb-4 leading-snug">
                                {s.heading}
                            </h2>
                            <p className="text-brand-ink/85 text-base md:text-lg leading-[1.8] font-light">
                                {s.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA strip */}
            <section className="bg-brand-sand border-y border-brand-line py-16 md:py-20">
                <div className="mx-auto max-w-[1100px] px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-3">
                            Have questions?
                        </p>
                        <h3 className="font-serif text-3xl md:text-4xl text-brand-olive leading-tight">
                            Speak with our advisors directly.
                        </h3>
                    </div>
                    <a
                        data-testid="article-cta-whatsapp"
                        href={waLink(`Hi Jaya Carita, I just read your guide on "${article.title}" and have a question.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 bg-brand-olive text-brand-bg px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-brand-olive-hover transition-colors duration-500 shrink-0"
                    >
                        Chat on WhatsApp
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </section>

            {next && (
                <section className="bg-brand-bg py-20 md:py-28">
                    <div className="mx-auto max-w-[1100px] px-6 md:px-10">
                        <Link
                            to={`/insights/${next.slug}`}
                            data-testid="article-next-link"
                            className="group block border-t border-brand-line pt-10"
                        >
                            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-terracotta mb-4">
                                Read next
                            </p>
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                                <h3 className="font-serif font-light text-brand-olive text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] max-w-3xl group-hover:text-brand-terracotta transition-colors duration-500">
                                    <span className="italic">{next.title}</span>
                                </h3>
                                <ArrowUpRight
                                    size={20}
                                    className="text-brand-olive group-hover:text-brand-terracotta transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            <Footer />
            <WhatsAppFloat />
        </main>
    );
}
