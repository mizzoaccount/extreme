// pages/index.tsx
import Hero from '@/components/Hero';
import Navbar from '@/components/Header';
import FeaturedCollections from '@/components/FeaturedCollections';
import SpecialOffers from '@/components/SpecialOffers';
import DesignerShowcase from '@/components/DesignerShowcase';
import Testimonials from '@/components/Testimonials';
import CelebritySpotlight from '@/components/CelebritySpotlight';
import SocialMediaIntegration from '@/components/SicialMediaIntegration';
import NewsletterSignup from '@/components/NewsLetterSignup';
import FashionBlogSection from '@/components/FashionBlogSection';
import LuxuryFooter from '@/components/LuxuryFooter';
import AboutSection from '@/components/About';
import ContactForm from '@/components/ContactForm';
import ClientReviews from '@/components/ClientReviews';
import SafetyGuidesSection from '@/components/SafetyGuideSection';
import IndustriesServed from '@/components/IndustriesServed';
import CertificationsSection from '@/components/CertificationsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
     
      <main>
        <Navbar />
        <Hero />
        <AboutSection />
        <FeaturedCollections />
        {/*<SpecialOffers />*
        <DesignerShowcase />
        <Testimonials />
        <CelebritySpotlight />
        <SocialMediaIntegration />
        <NewsletterSignup />
        <FashionBlogSection />*/}
        <CertificationsSection />
        <IndustriesServed />
        <SafetyGuidesSection />
        <ClientReviews />
        <ContactForm />
        <LuxuryFooter />
      
      </main>
    
    </div>
  );
}