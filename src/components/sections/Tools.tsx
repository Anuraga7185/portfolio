import {
  BarChart3,
  Search,
  Mail,
  Megaphone,
  Palette,
  Workflow,
  Database,
  Sheet,
  LineChart,
  ExternalLink,
} from "lucide-react";

// ✅ Base URL safe for GitHub Pages
const base = import.meta.env.BASE_URL;

// ✅ Keep data as-is, just ADD optional icon fields
const toolCategories = [
  {
    category: "Analytics & Data",
    description: "Tracking, measuring, and visualizing performance",
    icon: `${base}images/categories/analytics.svg`, // ✅ category image
    tools: [
      { name: "Google Analytics", level: "Intermediate", icon: `${base}images/tools/ga.svg` },
      { name: "Google Search Console", level: "Intermediate", icon: `${base}images/tools/gsc.svg` },
      { name: "SQL", level: "Intermediate", icon: `${base}images/tools/sql.svg` },
      { name: "Excel", level: "Advanced", icon: `${base}images/tools/excel.svg` },
      { name: "Tableau", level: "Intermediate", icon: `${base}images/tools/tableau.svg` },
    ],
  },
  {
    category: "SEO & Research",
    description: "Keyword research and market analysis",
    icon: `${base}images/categories/seo.svg`,
    tools: [
      {
        name: "Content Gap Analysis",
        level: "Basic",
         icon: `${base}images/tools/content.svg`,
        url: "https://docs.google.com/document/d/1pWTxxW3HPbvzJQTkR81G7jVGEbA0srQf/edit?usp=drive_link&ouid=100211897775260305611&rtpof=true&sd=true",
      },
      {
        name: "Keyword Research",
        level: "Advanced",
        icon: `${base}images/tools/keyword.svg`,
        url: "https://docs.google.com/document/d/1Mgb4gCwId8BXUfHQW-UnMKDhOt3uwlaW/edit?usp=drive_link&ouid=100211897775260305611&rtpof=true&sd=true",
      },
      {
        name: "Market Research",
        level: "Intermediate",
        icon: `${base}images/tools/market_research.svg`,
        url: "https://docs.google.com/presentation/d/15XXrn2HtGIXhEIaHgf2dQvbFNjOA4r6g/edit?usp=drive_link&ouid=100211897775260305611&rtpof=true&sd=true",
      },
    ],
  },
  {
    category: "Email & CRM",
    description: "Email campaigns and automation",
    url: `/portfolio/demo/email-crm.html`,
    icon: `${base}images/categories/mail.svg`,
    tools: [
      { name: "HubSpot", level: "Intermediate", icon: `${base}images/tools/hubspot.svg` },
      { name: "Mailchimp", level: "Intermediate", icon: `${base}images/tools/mailchimp.svg` },
    ],
  },
  {
    category: "Paid Advertising",
    description: "Managing paid campaigns",
    icon: `${base}images/categories/advertise.svg`,
    tools: [{ name: "Meta Ads Manager", level: "Basic", icon: `${base}images/tools/meta.svg` }],
  },
  {
    category: "Creative & Design",
    description: "Visual content and branding",
    icon: `${base}images/categories/creative.svg`,
    tools: [
      { name: "Canva", level: "Advanced", icon: `${base}images/tools/canva.svg` },
      { name: "Figma", level: "Intermediate", icon: `${base}images/tools/figma.svg` },
      { name: "Adobe InDesign", level: "Intermediate", icon: `${base}images/tools/indesign.svg` },
      { name: "Adobe Illustrator", level: "Basic", icon: `${base}images/tools/illustrator.svg` },
    ],
  },
  {
    category: "Productivity & Workflow",
    description: "Project management and collaboration",
    icon: `${base}images/categories/workflow.svg`,
    tools: [
      { name: "Notion", level: "Intermediate", icon: `${base}images/tools/notion.svg` },
      { name: "JIRA", level: "Basic", icon: `${base}images/tools/jira.svg` },
      { name: "Google Workspace", level: "Advanced", icon: `${base}images/tools/google.svg` },
      { name: "MS Office Suite", level: "Advanced", icon: `${base}images/tools/office_365.svg` },
    ],
  },
];

// ✅ Category icon fallback (lucide)
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Analytics & Data":
      return BarChart3;
    case "SEO & Research":
      return Search;
    case "Email & CRM":
      return Mail;
    case "Paid Advertising":
      return Megaphone;
    case "Creative & Design":
      return Palette;
    case "Productivity & Workflow":
      return Workflow;
    default:
      return BarChart3;
  }
};

// ✅ Tool icon fallback (lucide)
const getToolIcon = (toolName: string) => {
  const name = toolName.toLowerCase();
  if (name.includes("sql")) return Database;
  if (name.includes("excel") || name.includes("office")) return Sheet;
  if (name.includes("tableau") || name.includes("analytics")) return LineChart;
  return BarChart3;
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
            What I use regularly to track performance, improve campaigns, and make data-driven decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => {
            const CategoryLucide = getCategoryIcon(category.category);

            const cardContent = (
              <div
                className="h-full rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow p-7"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center overflow-hidden">
                    {category.icon ? (
                      <img
                        src={category.icon}
                        alt={category.category}
                        className="h-6 w-6 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <CategoryLucide className="h-5 w-5 text-accent" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-foreground leading-tight">
                      {category.category}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tool list */}
                <div className="mt-6 space-y-4">
                  {category.tools.map((tool) => {
                    const ToolLucide = getToolIcon(tool.name);

                    const ToolName = tool.url ? (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{tool.name}</span>
                        <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                      </a>
                    ) : (
                      <span className="text-foreground">{tool.name}</span>
                    );

                    return (
                      <div key={tool.name} className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-muted/50 flex items-center justify-center overflow-hidden">
                          {tool.icon ? (
                            <img
                              src={tool.icon}
                              alt={tool.name}
                              className="h-5 w-5 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <ToolLucide className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>

                        <div className="text-base font-medium truncate">
                          {ToolName}
                        </div>
                      </div>
                    );
                  })}
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
        <div className="mt-12 rounded-2xl border border-border bg-card shadow-sm p-7">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
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
