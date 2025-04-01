// pages/index.tsx
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
     
      <main>
        <Navbar />
        <Hero />
        <FeaturedCollections />
        <SpecialOffers />
        <DesignerShowcase />
        <Testimonials />
        <CelebritySpotlight />
        <SocialMediaIntegration />
        <NewsletterSignup />
        <FashionBlogSection />
        <LuxuryFooter />
      
      </main>
    
    </div>
  );
}