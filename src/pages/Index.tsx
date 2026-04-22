import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import FeaturedWorkSection from "@/components/portfolio/FeaturedWorkSection";
import GallerySection from "@/components/portfolio/GallerySection";
import TrailerSection from "@/components/portfolio/TrailerSection";
import VisionSection from "@/components/portfolio/VisionSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FeaturedWorkSection />
      <GallerySection />
      <TrailerSection />
      <VisionSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
