import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';

const analyticsTools = [
  {
    tool: 'Google Analytics',
    icon: LineChart,
    metrics: [
      'User Sessions & Bounce Rate',
      'Traffic Sources & Channels',
      'User Behavior Flow',
      'Goal Completions & Conversions',
    ],
    whyItMatters: 'Understanding where users come from and how they interact with content helps identify what drives engagement and what needs improvement.',
    improvements: 'Used traffic source data to optimize content distribution. Identified high-bounce pages and improved content structure to increase engagement.',
  },
  {
    tool: 'Google Search Console',
    icon: BarChart3,
    metrics: [
      'Search Queries & Impressions',
      'Click-Through Rates by Query',
      'Average Position Tracking',
      'Index Coverage & Issues',
    ],
    whyItMatters: 'Reveals exactly what searches bring users to our content, helping identify content gaps and optimization opportunities.',
    improvements: 'Discovered pages with high impressions but low CTR. Optimized meta descriptions and titles to improve search click rates.',
  },
  {
    tool: 'HubSpot / Mailchimp Analytics',
    icon: PieChart,
    metrics: [
      'Email Open & Click Rates',
      'List Growth & Churn',
      'Engagement by Segment',
      'Campaign Performance Over Time',
    ],
    whyItMatters: 'Email metrics reveal which content resonates with subscribers and help optimize send times, subject lines, and content strategy.',
    improvements: 'Analyzed open rate patterns to optimize send times. Segmented lists based on engagement data to improve relevance and reduce unsubscribes.',
  },
  {
    tool: 'SQL + Excel + Tableau',
    icon: TrendingUp,
    metrics: [
      'Campaign ROI & Attribution',
      'Product Adoption Rates',
      'Custom KPI Dashboards',
      'Performance Trend Analysis',
    ],
    whyItMatters: 'Connecting marketing activities to business outcomes demonstrates value and enables data-driven budget and strategy decisions.',
    improvements: 'Built dashboards tracking campaign performance and product adoption. Used data visualization to communicate insights to stakeholders and inform roadmap decisions.',
  },
];

export const Analytics = () => {
  return (
    <section id="analytics" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
            Performance Tracking
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Marketing Analytics Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            What I tracked, why it mattered, and how I used data to improve performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {analyticsTools.map((item, index) => (
            <div
              key={item.tool}
              className="p-6 rounded-xl bg-card border border-border card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.tool}
                </h3>
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-foreground block mb-2">
                  Metrics Tracked
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {item.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-foreground block mb-1">
                  Why It Matters
                </span>
                <p className="text-sm text-muted-foreground">
                  {item.whyItMatters}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
                <span className="text-sm font-medium text-accent block mb-1">
                  How I Used This
                </span>
                <p className="text-sm text-muted-foreground">
                  {item.improvements}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
