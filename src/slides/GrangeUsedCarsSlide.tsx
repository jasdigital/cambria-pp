import React, { useState } from "react";

interface Section {
  id: string;
  title: string;
  summary: string[];
  details: {
    issue: string;
    context: string;
    screenshot?: string;
  }[];
}

const GrangeUsedCarsSlideContent: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: "issues",
      title: "Used Cars — Key Issues",
      summary: [
        "Basket/Loved feature underused for retention",
        "Infinite scroll breaks UX depth and SEO signals",
        "URL inconsistencies harm trust and discoverability",
        "Slow LCP on category and vehicle detail pages",
        "Vehicle data and features are less clear"
      ],
      details: [
        {
          issue: "Basket/Loved Feature Underutilized",
          context: "The save/favorite functionality exists but lacks prominence and follow-up automation. Users who save vehicles show high purchase intent but rarely receive tailored reminders or price drop alerts. This is a missed retention opportunity - saved vehicles should trigger automated nurture campaigns with updates on availability, similar vehicles, and personalized outreach from sales teams.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Infinite Scroll Implementation",
          context: "While infinite scroll feels modern, it creates significant problems: users lose their place when using back button, can't bookmark specific result pages, and search engines struggle to index deeper inventory. This hurts both UX and SEO. Consider pagination with lazy loading or 'Load More' buttons that update the URL, allowing users to navigate back and share specific result pages.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "URL Structure Inconsistencies",
          context: "Vehicle detail page URLs vary in structure - some include location, others don't; some use make-model-year, others reference internal IDs. Inconsistent URLs damage SEO crawlability, reduce user trust (unprofessional appearance), and make analytics tracking difficult. Need a unified URL pattern: /used-cars/{make}/{model}/{year}/{unique-id} across all inventory.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Slow Largest Contentful Paint (LCP)",
          context: "Vehicle listing and detail pages show LCP times exceeding 2.5 seconds, particularly on mobile. This is driven by unoptimized hero images, render-blocking resources, and heavy JavaScript bundles loading before content. Core Web Vitals impact both SEO rankings and conversion rates - every 100ms delay costs approximately 1% in sales. Priority fixes: image optimization, critical CSS inlining, and lazy loading below-fold content.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Vehicle Data Clarity",
          context: "Key vehicle information - specifications, features, service history, warranty details - is present but not well-presented. Important details get buried in long lists or hidden in tabs. High-value used cars require detailed, confidence-building information. Restructure to highlight: key specs at-a-glance, comprehensive feature lists with icons, clear service history timeline, warranty/guarantee prominence, and inspection/certification badges.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        }
      ]
    },
    {
      id: "enhancements",
      title: "Used Cars — Enhancements",
      summary: [
        "Improve no-stock messaging and alternatives",
        "Refine header UX for clarity and space",
        "Cleaner specification and options layout",
        "Improve photography standards and consistency",
        "Optimise finance/reserve journey (Codeweavers)"
      ],
      details: [
        {
          issue: "No-Stock Messaging & Alternatives",
          context: "When specific vehicles or models are out of stock, users hit dead ends with generic 'not available' messages. This is a critical conversion point being missed. Instead: show similar available vehicles with clear reasoning ('Similar luxury SUVs'), offer 'Notify me when available' with email capture, suggest alternative models or trims, highlight incoming stock, and provide direct contact options for sourcing. Turn disappointment into an opportunity to capture intent.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Header UX Refinement",
          context: "The vehicle detail page header contains critical information but feels cluttered - price, location, key specs, CTAs all compete for attention. Redesign with clear visual hierarchy: hero image dominant, headline (make/model/year) prominent, price large and clear, primary CTA (Reserve/Enquire) unmissable, secondary information (location, mileage, year) supporting but not overwhelming. More whitespace, better mobile adaptation.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Specifications & Options Layout",
          context: "Current specification lists are dense walls of text that overwhelm rather than inform. Restructure using card-based layouts with: grouped categories (Performance, Comfort, Safety, Technology), icon-based feature highlights for quick scanning, expandable sections for detailed specs, visual indicators for premium features, and comparison tools for multiple vehicles. Make technical information approachable and scannable.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Photography Standards",
          context: "Vehicle photography quality is inconsistent across stock - some vehicles have professional multi-angle shots, others have basic dealer photos with poor lighting or cluttered backgrounds. For premium used cars, photography is critical to building confidence and desire. Establish standards: minimum 20 photos per vehicle, 360° exterior views, detailed interior shots, engine bay, wheels/tires, any imperfections (transparency builds trust). Consider studio-quality or at minimum, consistent dealership photography protocols.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Finance & Reserve Journey Optimization",
          context: "The Codeweavers-powered finance and reservation flow has friction points causing abandonment. Key issues: too many steps before seeing finance options, unclear about deposit requirements, reservation process feels complex, limited payment method options. Streamline to: finance calculator on VDP, one-step reservation with clear terms, flexible deposit options, integrated digital document signing, real-time availability confirmation. Reduce steps from 7-8 down to 3-4 maximum.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        }
      ]
    }
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <>
      {!expandedSection ? (
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => toggleSection(section.id)}
              className="bg-black/20 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-white/10 text-left hover:bg-black/30 hover:border-white/20 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight uppercase">
                  {section.title}
                </h3>
                <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <ul className="space-y-2 text-xs md:text-sm">
                {section.summary.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-xs text-white/50 flex items-center gap-1">
                <span>Click to view details</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2">
          <button
            onClick={() => setExpandedSection(null)}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to overview
          </button>
          
          {sections
            .filter((s) => s.id === expandedSection)
            .map((section) => (
              <div key={section.id}>
                <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                  {section.title}
                </h3>
                
                <div className="space-y-6">
                  {section.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="bg-black/20 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-white/10"
                    >
                      <h4 className="text-base md:text-lg font-semibold mb-2 text-white">
                        {detail.issue}
                      </h4>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed mb-3">
                        {detail.context}
                      </p>
                      {detail.screenshot && (
                        <div className="rounded overflow-hidden border border-white/20 bg-black/40">
                          <img
                            src={detail.screenshot}
                            alt={detail.issue}
                            className="w-full h-32 object-cover opacity-60"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default GrangeUsedCarsSlideContent;
