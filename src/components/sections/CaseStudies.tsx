import { Lightbulb, Target, Users, BarChart3, FlaskConical, BookOpen } from 'lucide-react';

const caseStudies = [
  {
    title: 'AI HR Solution Lead Generation Campaign',
    subtitle: 'Multi-channel outreach campaign targeting enterprise decision-makers',
    company: 'MyWay AI',
    overview: 'Developed and executed a targeted lead generation campaign to reach C-suite executives (CHROs, CEOs, CFOs) at mid-to-large enterprises, generating qualified leads for AI-powered HR solutions.',
    objective: 'Generate qualified meetings with enterprise decision-makers through personalized cold outreach and follow-up sequences.',
    audience: 'C-suite executives at companies with 500+ employees experiencing HR efficiency challenges, particularly in recruitment, onboarding, and employee management.',
    platforms: ['Email (Cold Outreach)', 'LinkedIn', 'CRM (Lead Tracking)', 'Excel (Data Analysis)'],
    funnel: {
      awareness: 'Personalized cold emails highlighting industry-specific HR pain points and AI solution benefits',
      consideration: 'Follow-up sequences with case studies, ROI calculators, and social proof from similar companies',
      conversion: 'Demo booking CTAs with flexible scheduling and clear value propositions for each stakeholder type',
    },
    metrics: [
      'Email response rates by segment',
      'Meeting booking conversion rate',
      'Lead quality scoring',
      'Sales pipeline contribution',
    ],
    abTesting: 'Tested personalization depth (company-specific vs. industry-specific), email length, send timing, and follow-up cadence',
    learnings: [
      'Company-specific personalization significantly outperformed generic industry messaging',
      'CHROs responded best to efficiency metrics; CFOs to ROI projections',
      'Morning sends (9-10 AM local time) had 40% higher response rates',
      'Three-touch sequences performed better than aggressive five-touch approaches',
    ],
  },
  {
    title: 'Sustainable Fashion Brand Awareness Campaign',
    subtitle: 'Content-driven engagement strategy for French luxury brand',
    company: 'De Chevalier',
    overview: 'Created and analyzed a content marketing strategy focused on building brand awareness and engagement for a sustainable French fashion brand, combining storytelling with performance analytics.',
    objective: 'Build brand awareness among eco-conscious fashion consumers and increase social media engagement through authentic storytelling.',
    audience: 'Fashion-forward consumers aged 25-45 interested in sustainable luxury, French craftsmanship, and conscious consumption.',
    platforms: ['Social Media (Instagram, Pinterest)', 'Email Newsletter', 'Adobe Suite (Creative)', 'Analytics Tools'],
    funnel: {
      awareness: 'Behind-the-scenes content showcasing French craftsmanship, sustainable materials, and brand heritage stories',
      consideration: 'Style guides, sustainability impact reports, and customer testimonials building trust and desire',
      conversion: 'Limited collection announcements and exclusive subscriber offers driving purchase intent',
    },
    metrics: [
      'Social media engagement rates',
      'Follower growth and quality',
      'Email newsletter signups',
      'Website traffic from social',
    ],
    abTesting: 'Tested content formats (carousels vs. single images vs. Reels), posting times, hashtag strategies, and caption lengths',
    learnings: [
      'Craftsmanship story content generated 3x more engagement than product-focused posts',
      'Carousel posts explaining sustainability practices had highest save rates',
      'User-generated content reposts built community trust more effectively',
      'Consistent visual aesthetic increased brand recognition and follower loyalty',
    ],
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Project Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Campaign Case Studies
          </h2>
          <p className="text-lg text-muted-foreground">
            Detailed breakdowns of marketing projects showing my approach to strategy, 
            funnel thinking, execution, and learning from results.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="p-8 md:p-10 rounded-2xl bg-background border border-border"
            >
              <div className="mb-8">
                <span className="text-accent text-sm font-medium uppercase tracking-wider">
                  {study.company}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-2">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mt-1">{study.subtitle}</p>
              </div>

              <div className="prose prose-muted max-w-none mb-8">
                <p className="text-muted-foreground">{study.overview}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Target size={20} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground block mb-1">
                        Objective
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {study.objective}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users size={20} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground block mb-1">
                        Target Audience
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {study.audience}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="font-medium text-foreground block mb-2">
                      Platforms Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {study.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <BarChart3 size={20} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground block mb-2">
                        Metrics Tracked
                      </span>
                      <ul className="space-y-1">
                        {study.metrics.map((metric) => (
                          <li
                            key={metric}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FlaskConical size={20} className="text-accent mt-1 shrink-0" />
                    <div>
                      <span className="font-medium text-foreground block mb-1">
                        A/B Testing
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {study.abTesting}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Funnel Thinking */}
              <div className="mb-8">
                <h4 className="font-medium text-foreground mb-4">
                  Funnel Approach
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      Awareness
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">
                      {study.funnel.awareness}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      Consideration
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">
                      {study.funnel.consideration}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      Conversion
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">
                      {study.funnel.conversion}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Learnings */}
              <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={20} className="text-accent" />
                  <span className="font-medium text-foreground">
                    Key Learnings
                  </span>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {study.learnings.map((learning, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <Lightbulb size={14} className="text-accent mt-1 shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
