import { TrendingUp, Mail, BarChart3, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Mail,
    title: 'Campaign Execution',
    description: 'Designed email campaigns that boosted engagement and conversions. Experience with cold outreach to CHROs, CEOs, and CFOs.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Analytics',
    description: 'Developed dashboards and reports using SQL, Excel, and Tableau to track campaign performance, product adoption, and ROI.',
  },
  {
    icon: TrendingUp,
    title: 'Content & Branding',
    description: 'Created marketing assets and content to strengthen product positioning using Canva, Figma, Adobe InDesign, and Illustrator.',
  },
  {
    icon: Lightbulb,
    title: 'Cross-Team Collaboration',
    description: 'Collaborated with product, sales, and engineering teams to align marketing goals with business objectives.',
  },
];

const experiences = [
  {
    role: 'Marketing Associate',
    company: 'Current Role',
    period: 'Present',
    highlights: [
      'Collaborating with product, sales, and engineering teams',
      'Developing data-driven dashboards and reports',
      'Creating marketing assets for product positioning',
      'Monitoring market trends and competitor activity',
    ],
  },
  {
    role: 'Marketing Intern',
    company: 'AndPurpose',
    period: 'Dec 2024 - Mar 2025',
    highlights: [
      'Conducted market research on sustainable brands',
      'Explored eco-conscious communities',
    ],
  },
  {
    role: 'Lead Generation Intern',
    company: 'MyWay AI',
    period: 'Aug - Oct 2024',
    highlights: [
      'Optimized outreach strategy using Excel and CRM data',
      'Executed targeted cold emailing/calling campaigns',
      'Designed email campaigns boosting engagement',
    ],
  },
  {
    role: 'Marketing Intern',
    company: 'De Chevalier (France)',
    period: 'Feb - Mar 2024',
    highlights: [
      'Performed social media engagement analysis',
      'Designed marketing materials using Adobe suite',
    ],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tools, Talent & Curiosity
          </h2>
          <p className="text-lg text-muted-foreground">
            My marketing journey began like wandering through a forest of data, ideas, and stories 
            waiting to be told. I navigate campaigns, partnerships, and content with curiosity, 
            turning insights into growth and stories into impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-background border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Experience Journey
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background border border-border card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            How I Got Here
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I stepped into marketing like stepping into a forest of ideas, chasing patterns and 
            stories hidden in data. Through my internships at AndPurpose, MyWay AI, and De Chevalier, 
            I learned to craft content and build partnerships that spark engagement. At AndPurpose, 
            I explored sustainable brands and crafted content that connected with audiences. At MyWay AI, 
            I designed campaigns and messaging that sparked engagement. At De Chevalier, creativity 
            met analytics, shaping marketing assets that spoke and converted.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Today, as a Product Marketing Associate, I turn campaigns, analytics, and creativity 
            into ripples of measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};
