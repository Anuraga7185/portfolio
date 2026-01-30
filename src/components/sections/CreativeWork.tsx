import { FileText, Globe, Search, Megaphone, Share2, Mail } from 'lucide-react';

const workCategories = [
  {
    icon: FileText,
    title: 'Blog Posts & Articles',
    description: 'Research-driven content on industry topics and thought leadership.',
    items: [
      'Industry trend analysis articles',
      'How-to guides and tutorials',
      'Brand storytelling content',
      'Sustainable marketing insights',
    ],
  },
  {
    icon: Globe,
    title: 'Website Content',
    description: 'Landing pages, product copy, and conversion-focused web content.',
    items: [
      'Website content for hired60.com',
      'Product landing pages',
      'Feature description copy',
      'Company about pages',
    ],
  },
  {
    icon: Search,
    title: 'SEO Projects',
    description: 'Keyword research, on-page optimization, and content strategy.',
    items: [
      'SEO mock project & audits',
      'Keyword research and mapping',
      'Meta optimization',
      'Content gap analysis',
    ],
  },
  {
    icon: Megaphone,
    title: 'Campaign Assets',
    description: 'Marketing materials for launches, promotions, and awareness.',
    items: [
      'Campaign mock projects',
      'Ad campaign mock designs',
      'Concept notes (AndPurpose)',
      'Javin Portfolio (PPT)',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Platform-specific content, visuals, and engagement strategy.',
    items: [
      'Social media posts (Canva/Adobe)',
      'Caption and hashtag strategy',
      'Content calendar planning',
      'Engagement analysis',
    ],
  },
  {
    icon: Mail,
    title: 'Email & Newsletters',
    description: 'Email campaigns, drip sequences, and subscriber communications.',
    items: [
      'Email newsletter templates',
      'Cold outreach sequences',
      'Nurture campaign content',
      'Campaign performance reports',
    ],
  },
];

export const CreativeWork = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Content & Creative Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A range of content types created across internships and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-xl bg-card border border-border card-hover"
            >
              <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <category.icon size={24} />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note about samples */}
        <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border text-center">
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">Work Samples Available:</span>{' '}
            Detailed case studies, campaign examples, and creative samples available upon request. 
            Some materials under NDA.
          </p>
        </div>
      </div>
    </section>
  );
};
