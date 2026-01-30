import { Mail, Target, Users, FlaskConical, TrendingUp } from 'lucide-react';

const campaigns = [
  {
    title: 'Lead Generation Cold Outreach Campaign',
    company: 'MyWay AI',
    objective: 'Reach decision-makers (CHROs, CEOs, CFOs) to generate qualified leads for AI HR solutions.',
    audience: 'C-suite executives at mid-to-large enterprises looking for AI-powered HR solutions',
    subjectLine: 'Personalized approach: Problem-focused subject lines highlighting pain points in HR processes',
    ctaStrategy: 'Clear, low-commitment CTA offering a brief demo or consultation call',
    abTesting: 'Tested subject line personalization levels, send times, and CTA copy variations',
    metrics: ['Response Rate', 'Meeting Bookings', 'Email Open Rate', 'Click-Through Rate'],
    learnings: 'Highly personalized subject lines mentioning company-specific challenges improved response rates. Morning sends (9-10 AM) outperformed afternoon outreach.',
  },
  {
    title: 'Product Announcement Email Sequence',
    company: 'Current Role',
    objective: 'Announce new product features to existing users and drive feature adoption.',
    audience: 'Active users segmented by engagement level and feature usage patterns',
    subjectLine: 'Benefit-focused headlines highlighting specific value improvements',
    ctaStrategy: 'Single, prominent CTA leading to feature walkthrough with supporting documentation links',
    abTesting: 'Tested email length (concise vs. detailed), visual layouts, and CTA button placement',
    metrics: ['Open Rate', 'Click-Through Rate', 'Feature Adoption Rate', 'Support Ticket Volume'],
    learnings: 'Shorter emails with clear benefit statements performed better. Including a GIF preview of the feature increased clicks by improving comprehension.',
  },
  {
    title: 'Engagement & Nurture Campaign',
    company: 'De Chevalier (Fashion)',
    objective: 'Build brand awareness and nurture potential customers through content-driven email series.',
    audience: 'Fashion-conscious subscribers interested in sustainable French fashion',
    subjectLine: 'Story-driven approach: Behind-the-scenes content and brand values messaging',
    ctaStrategy: 'Soft CTAs encouraging content consumption and social media follows before hard sales asks',
    abTesting: 'Tested content types (lookbook vs. story-based), image-to-text ratios, and frequency',
    metrics: ['Open Rate', 'Social Media Follows', 'Website Traffic', 'Engagement Duration'],
    learnings: 'Story-based content about craftsmanship resonated more than promotional lookbooks. Weekly frequency maintained engagement without fatigue.',
  },
];

export const EmailCampaigns = () => {
  return (
    <section id="campaigns" className="py-24 bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Email Marketing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Campaign Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Real campaigns I worked on, focusing on strategy, A/B testing methodology, 
            and learnings from the data.
          </p>
        </div>

        <div className="space-y-8">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign.title}
              className="p-8 rounded-2xl bg-background border border-border card-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-sm text-accent font-medium">{campaign.company}</span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {campaign.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {campaign.objective}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users size={18} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground block">
                        Target Audience
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {campaign.audience}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target size={18} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground block">
                        Subject Line Approach
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {campaign.subjectLine}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp size={18} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground block">
                        CTA Strategy
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {campaign.ctaStrategy}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FlaskConical size={18} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-foreground block">
                        A/B Testing
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {campaign.abTesting}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-foreground block mb-2">
                      Metrics Tracked
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {campaign.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
                <span className="text-sm font-medium text-accent block mb-1">
                  Key Learnings
                </span>
                <p className="text-sm text-muted-foreground">
                  {campaign.learnings}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
