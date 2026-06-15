import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
import { ADDRESS, EMAIL, PHONE_DISPLAY, WHATSAPP_DISPLAY, waLink } from "@/lib/data";

export default function Footer() {
    return (
        <footer
            id="contact"
            data-testid="site-footer"
            className="relative bg-brand-olive text-brand-bg pt-20 md:pt-28 pb-10 overflow-hidden"
        >
            <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
                {/* Big CTA */}
                <div className="border-b border-brand-bg/15 pb-16 md:pb-24">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-brand-bg/60 mb-6">
                        Let&apos;s talk
                    </p>
                    <a
                        data-testid="footer-big-cta"
                        href={waLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="group block"
                    >
                        <h2 className="font-serif font-light leading-[0.95] tracking-tight text-[14vw] lg:text-[10vw]">
                            <span className="block group-hover:text-brand-terracotta transition-colors duration-500">
                                Find your Bali.
                            </span>
                            <span className="italic block text-brand-bg/85 group-hover:text-brand-bg transition-colors duration-500 inline-flex items-baseline gap-4">
                                Begin here
                                <ArrowUpRight
                                    className="inline-block w-[8vw] h-[8vw] lg:w-[6vw] lg:h-[6vw] transition-transform duration-500 group-hover:translate-x-3 group-hover:-translate-y-3"
                                    strokeWidth={1}
                                />
                            </span>
                        </h2>
                    </a>
                </div>

                {/* Lower grid */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16">
                    <div className="lg:col-span-5">
                        <p className="font-serif text-3xl leading-tight mb-6">
                            Jaya Carita Bali Property
                        </p>
                        <p className="text-brand-bg/70 font-light text-base leading-relaxed max-w-md">
                            Your truly Bali property consultant. Villas, land, legal & visa —
                            all under one trusted name.
                        </p>
                    </div>

                    <div className="lg:col-span-4 space-y-5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-bg/55 mb-2">
                            Visit & Reach
                        </p>
                        <ContactRow icon={MapPin} text={ADDRESS} href="https://maps.app.goo.gl/umG3aRvZ4qjTqKXq6" testid="footer-address" />
                        <ContactRow icon={Phone} text={PHONE_DISPLAY} href="tel:+623613616151" testid="footer-phone" />
                        <ContactRow
                            icon={Phone}
                            text={`WhatsApp ${WHATSAPP_DISPLAY}`}
                            href={waLink()}
                            testid="footer-whatsapp"
                            highlight
                        />
                        <ContactRow icon={Mail} text={EMAIL} href={`mailto:${EMAIL}`} testid="footer-email" />
                    </div>

                    <div className="lg:col-span-3 space-y-5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-bg/55 mb-2">
                            Explore
                        </p>
                        <FooterLink href="#properties" testid="footer-nav-properties">Properties</FooterLink>
                        <FooterLink href="#services" testid="footer-nav-services">Services</FooterLink>
                        <FooterLink href="#areas" testid="footer-nav-areas">Areas</FooterLink>
                        <FooterLink href="#about" testid="footer-nav-about">About</FooterLink>
                        <FooterLink href="#faq" testid="footer-nav-faq">FAQ</FooterLink>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-6 border-t border-brand-bg/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-brand-bg/55">
                    <p data-testid="footer-copy">© {new Date().getFullYear()} Jaya Carita Bali Property</p>
                    <div className="flex items-center gap-5">
                        <a href="#" data-testid="social-instagram" aria-label="Instagram" className="hover:text-brand-terracotta transition-colors"><Instagram size={16} /></a>
                        <a href="#" data-testid="social-facebook" aria-label="Facebook" className="hover:text-brand-terracotta transition-colors"><Facebook size={16} /></a>
                        <a href="#" data-testid="social-youtube" aria-label="YouTube" className="hover:text-brand-terracotta transition-colors"><Youtube size={16} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function ContactRow({ icon: Icon, text, href, testid, highlight }) {
    return (
        <a
            data-testid={testid}
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className={`flex items-start gap-3 group ${
                highlight ? "text-brand-bg" : "text-brand-bg/80"
            } hover:text-brand-terracotta transition-colors duration-300`}
        >
            <Icon size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
            <span className="text-sm font-light leading-relaxed">{text}</span>
        </a>
    );
}

function FooterLink({ href, children, testid }) {
    return (
        <a
            data-testid={testid}
            href={href}
            className="block text-sm text-brand-bg/80 hover:text-brand-terracotta transition-colors duration-300 font-light"
        >
            {children}
        </a>
    );
}
