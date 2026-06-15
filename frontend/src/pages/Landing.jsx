import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import AreasMarquee from "@/components/site/AreasMarquee";
import FeaturedProperties from "@/components/site/FeaturedProperties";
import Services from "@/components/site/Services";
import HotAreasGrid from "@/components/site/HotAreasGrid";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import ContactCTAs from "@/components/site/ContactForm";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

export default function Landing() {
    return (
        <main data-testid="landing-root" className="min-h-screen bg-brand-bg text-brand-ink overflow-x-hidden">
            <Header />
            <Hero />
            <AreasMarquee />
            <FeaturedProperties />
            <Services />
            <HotAreasGrid />
            <About />
            <Testimonials />
            <FAQ />
            <ContactCTAs />
            <Footer />
            <WhatsAppFloat />
        </main>
    );
}
