import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import FeaturesSection from '../components/FeaturesSection';
import ReliabilitySection from '../components/ReliabilitySection';
import HowToStartSection from '../components/HowToStartSection';
import SupportSection from '../components/SupportSection'; 
import WaterQualitySection from '../components/WaterQualitySection'; 
import ContactForm from '../components/ContactForm';
import ServiceProducts from '../components/ServiceProducts';
import ArticlesSection from '../components/ArticlesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <ReliabilitySection />
      <HowToStartSection />
      <SupportSection />      
      <WaterQualitySection /> 
      <ContactForm />
      <ServiceProducts />
      <ArticlesSection />
    </>
  );
}