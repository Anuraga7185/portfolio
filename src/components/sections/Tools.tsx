const toolCategories = [
  {
    category: 'Analytics & Data',
    description: 'Tracking, measuring, and visualizing performance',
    tools: [
      { name: 'Google Analytics', level: 'Intermediate' },
      { name: 'Google Search Console', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'Excel', level: 'Advanced' },
      { name: 'Tableau', level: 'Intermediate' },
    ],
  },
  {
    category: 'SEO & Research',
    description: 'Keyword research and market analysis',
    tools: [
      { name: 'Content Gap Analysis', level: 'Basic', url: 'https://docs.google.com/document/d/1pWTxxW3HPbvzJQTkR81G7jVGEbA0srQf/edit?usp=drive_link&ouid=100211897775260305611&rtpof=true&sd=true' },
      { name: 'Keyword Research', level: 'Advanced', url: 'https://docs.google.com/document/d/1Mgb4gCwId8BXUfHQW-UnMKDhOt3uwlaW/edit?usp=drive_link&ouid=100211897775260305611&rtpof=true&sd=true' },
      { name: 'Market Research', level: 'Intermediate', url: 'https://docs.google.com/presentation/d/15XXrn2HtGIXhEIaHgf2dQvbFNjOA4r6g/edit?usp=drive_link&ouid=100211897775260305611&rtpof=true&sd=true' },
    ],
  },
  {
    category: 'Email & CRM',
    description: 'Email campaigns and automation',
    url: '/demo/email-crm.html',
    tools: [
      { name: 'HubSpot', level: 'Intermediate' },
      { name: 'Mailchimp', level: 'Intermediate' },
    ],
  },
  {
    category: 'Paid Advertising',
    description: 'Managing paid campaigns',
    tools: [
      { name: 'Meta Ads Manager', level: 'Basic' },
    ],
  },
  {
    category: 'Creative & Design',
    description: 'Visual content and branding',
    tools: [
      { name: 'Canva', level: 'Advanced' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Adobe InDesign', level: 'Intermediate' },
      { name: 'Adobe Illustrator', level: 'Basic' },
    ],
  },
  {
    category: 'Productivity & Workflow',
    description: 'Project management and collaboration',
    tools: [
      { name: 'Notion', level: 'Intermediate' },
      { name: 'JIRA', level: 'Basic' },
      { name: 'Google Workspace', level: 'Advanced' },
      { name: 'MS Office Suite', level: 'Advanced' },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'bg-accent text-accent-foreground';
    case 'Intermediate':
      return 'bg-accent/20 text-accent';
    case 'Basic':
      return 'bg-muted text-muted-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const Tools = () => {
  return (
    <section id="tools" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tools & Platforms
          </h2>
          <p className="text-lg text-muted-foreground">
            What I track, why it matters, and how I use these tools to improve performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => {
            const cardContent = (
              <div
                className="p-6 rounded-xl bg-card border border-border card-hover h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.category}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>

                <div className="space-y-3">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="flex items-center justify-between">
                      {tool.url ? (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-accent transition-colors"
                          onClick={(e) => e.stopPropagation()} // important if card is clickable
                        >
                          {tool.name}
                        </a>
                      ) : (
                        <span className="text-foreground">{tool.name}</span>
                      )}

                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(
                          tool.level
                        )}`}
                      >
                        {tool.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );

            return category.url ? (
              <a
                key={category.category}
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                {cardContent}
              </a>
            ) : (
              <div key={category.category} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>


        {/* Certifications */}
        <div className="mt-12 p-6 rounded-xl bg-card border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              Marketing Essentials (NPTEL)
            </span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">
              Data Analyst (Udemy)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
