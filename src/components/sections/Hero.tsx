import { ArrowDown, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="section-container relative z-10 text-center py-20">
        <div className="max-w-3xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Open to Opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            Aishwarya Gupta
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-accent font-medium mb-6 animate-fade-in-up delay-100">
           Marketing Associate
          </p>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
            I’m a B2B marketer focused on turning customer and market insights into effective go-to-market execution. My experience spans research, campaigns, Partnership, Digital Marketing, content, Influencer Marketing, and performance analysis, working across the funnel from awareness to conversion to drive measurable growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <Mail size={20} />
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://www.linkedin.com/in/aishwarya-gupta-381500250/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Experience Badge */}
          <div className="mt-16 inline-flex items-center gap-6 text-muted-foreground animate-fade-in-up delay-400">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-foreground">11+</span>
              <span className="text-sm">Months Experience</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-foreground">4</span>
              <span className="text-sm">Companies</span>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-foreground">10+</span>
              <span className="text-sm">Tools Mastered</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
