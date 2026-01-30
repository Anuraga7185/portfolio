import { Mail, Linkedin, FileText, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm actively looking for digital marketing, product marketing, or growth marketing 
              roles where I can contribute while continuing to learn and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:aishwarya.gupta@email.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      Email
                    </span>
                    <span className="font-medium text-foreground">
                      Gupta995646@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/aishwaryagupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      LinkedIn
                    </span>
                    <span className="font-medium text-foreground">
                      https://www.linkedin.com/in/aishwarya-gupta-381500250/
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">
                      Location
                    </span>
                    <span className="font-medium text-foreground">
                      India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Resume
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Download my resume for a complete overview of my experience, education, 
                skills, and certifications.
              </p>

              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="#" download>
                  <FileText size={18} />
                  Download Resume (PDF)
                </a>
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Last updated: January 2026
              </p>
            </div>
          </div>

          {/* Target Roles */}
          {/* <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border">
            <h4 className="font-medium text-foreground mb-4 text-center">
              Roles I'm Targeting
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Digital Marketing Executive',
                'Product Marketing Associate',
                'Growth Marketing (Junior)',
                'Marketing Analyst (Entry-level)',
                'Content Marketing Associate',
              ].map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-full bg-background border border-border text-sm text-foreground"
                >
                  {role}
                </span>
              ))}
            </div>
          </div> */}

          {/* Leadership Section */}
          <div className="mt-12 p-8 rounded-2xl bg-background border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Leadership & Volunteering
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <h4 className="font-medium text-foreground">Vice President & Creative Head</h4>
                <p className="text-accent text-sm">Cultural Society • 2023-2025</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Led 20+ members, organized 10+ large-scale events, boosted participation by 30%
                </p>
              </div>
              <div className="text-center p-4">
                <h4 className="font-medium text-foreground">Volunteer Teacher</h4>
                <p className="text-accent text-sm">eVidyaloka • 2023-2024</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Conducted 20+ virtual computer classes for rural students
                </p>
              </div>
          
              
              <div className="text-center p-4">
                <h4 className="font-medium text-foreground">Delegate UNSC Model</h4>
                <p className="text-accent text-sm">United Nations • Chile & Pakistan </p>
                <p className="text-sm text-muted-foreground mt-2">Conducted policy research and represented national positions.
                  Participated in negotiations, debates, and resolution drafting
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
