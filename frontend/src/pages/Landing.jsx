import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import AreasMarquee from "@/components/site/AreasMarquee";
import FeaturedProperties from "@/components/site/FeaturedProperties";
import Services from "@/components/site/Services";
import HotAreasGrid from "@/components/site/HotAreasGrid";
import About from "@/components/site/About";
import Team from "@/components/site/Team";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import InsightsPreview from "@/components/site/InsightsPreview";
import ContactCTAs from "@/components/site/ContactForm";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import ScrollProgress from "@/components/site/ScrollProgress";

export default function Landing() {
    return (
        <main data-testid="landing-root" className="min-h-screen bg-brand-bg text-brand-ink overflow-x-hidden">
            <ScrollProgress />
            <Header />
            <Hero />
            <AreasMarquee />
            <FeaturedProperties />
            <Services />
            <HotAreasGrid />
            <About />
            <Team />
            <Testimonials />
            <InsightsPreview />
            <FAQ />
            <ContactCTAs />
            <Footer />
            <WhatsAppFloat />
        </main>
    );
}
