import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/data";

const NAV = [
    { label: "Properties", href: "#properties" },
    { label: "Services", href: "#services" },
    { label: "Areas", href: "#areas" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-header"
            className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-brand-bg/85 border-b border-brand-line"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 flex items-center justify-between h-20">
                <a
                    href="#top"
                    data-testid="logo-link"
                    className="flex items-baseline gap-2 group"
                >
                    <span className="font-serif text-2xl md:text-[28px] tracking-tight text-brand-olive leading-none">
                        Jaya Carita
                    </span>
                    <span className="hidden sm:inline text-[10px] uppercase tracking-[0.28em] text-brand-terracotta font-medium translate-y-[-2px]">
                        Bali
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-10">
                    {NAV.map((item) => (
                        <a
                            key={item.href}
                            data-testid={`nav-${item.label.toLowerCase()}`}
                            href={item.href}
                            className="text-[13px] uppercase tracking-[0.18em] text-brand-ink/80 hover:text-brand-terracotta transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <a
                        data-testid="header-whatsapp-cta"
                        href={waLink("Hi Jaya Carita, I'd like to talk.")}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-5 py-3 border border-brand-olive text-brand-olive text-[11px] uppercase tracking-[0.22em] hover:bg-brand-olive hover:text-brand-bg transition-colors duration-300"
                    >
                        <span className="size-1.5 bg-brand-terracotta rounded-full animate-pulse" />
                        {WHATSAPP_DISPLAY}
                    </a>
                </div>

                <button
                    data-testid="mobile-menu-toggle"
                    onClick={() => setOpen((v) => !v)}
                    className="lg:hidden text-brand-olive"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="lg:hidden bg-brand-bg border-t border-brand-line px-6 py-6 flex flex-col gap-5"
                >
                    {NAV.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-base uppercase tracking-[0.18em] text-brand-ink/80"
                            data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href={waLink()}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="mobile-whatsapp-cta"
                        className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-brand-olive text-brand-bg text-[11px] uppercase tracking-[0.22em]"
                    >
                        WhatsApp Us
                    </a>
                </div>
            )}
        </header>
    );
}
