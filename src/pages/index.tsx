import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Tools } from '@/components/sections/Tools';
import { EmailCampaigns } from '@/components/sections/EmailCampaigns';
import { Analytics } from '@/components/sections/Analytics';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { CreativeWork } from '@/components/sections/CreativeWork';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Tools />
        <EmailCampaigns />
        <Analytics />
        <CaseStudies />
        <CreativeWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
