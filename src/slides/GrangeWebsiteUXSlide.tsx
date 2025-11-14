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

const GrangeWebsiteUXSlideContent: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: "experience",
      title: "Website Experience",
      summary: [
        "Premium brand basis but inconsistent identity",
        "Hero media lacks luxury storytelling",
        "Typography hierarchy needs strengthening",
        "More aspirational visuals required"
      ],
      details: [
        {
          issue: "Inconsistent Brand Identity",
          context: "While Grange has established premium credentials, the website doesn't consistently reflect the luxury positioning across all touchpoints. Some pages feel corporate while others lack the sophistication expected from brands like Bentley and Lamborghini.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Hero Media Lacks Storytelling",
          context: "Current hero sections use generic stock imagery that doesn't convey the emotional narrative of luxury automotive ownership. Need lifestyle photography showing the experience, not just the vehicles.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Typography Hierarchy",
          context: "Font sizes, weights, and spacing lack clear hierarchy. Headlines compete with body copy, making it difficult for users to scan content effectively. Need stronger typographic scale to guide attention.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        }
      ]
    },
    {
      id: "navigation",
      title: "Navigation & UX",
      summary: [
        "Menu too dense for a premium feel",
        "Sticky header intrusive on scroll",
        "Inconsistent breadcrumbs across journeys",
        "Mobile spacing and tap targets too tight",
        "Information architecture needs simplifying"
      ],
      details: [
        {
          issue: "Dense Navigation Menu",
          context: "The main navigation contains too many options at the top level, creating visual clutter. Premium brands typically embrace simplicity - fewer, more intentional navigation choices that guide users confidently.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Intrusive Sticky Header",
          context: "The persistent header takes up significant screen real estate on scroll, particularly problematic on mobile devices where screen space is precious. Consider a minimal sticky header or auto-hide behavior.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Mobile Touch Targets",
          context: "Button and link touch targets fall below the 44x44px accessibility standard in many areas. This creates frustration on mobile devices and doesn't reflect the premium, frictionless experience expected.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        }
      ]
    },
    {
      id: "visual",
      title: "Visual Identity & Design",
      summary: [
        "Increase whitespace for a luxury tone",
        "Use more lifestyle and dealership photography",
        "Refine CTA and button styling for consistency",
        "Unify brand colours across templates",
        "Introduce a simple iconography system"
      ],
      details: [
        {
          issue: "Insufficient Whitespace",
          context: "Luxury brands use generous whitespace to create breathing room and elevate content. Current design feels cramped in places. More padding, larger margins, and strategic emptiness would enhance the premium perception.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Photography Style",
          context: "Need more curated lifestyle photography showing the Grange experience - showrooms, customer interactions, delivery moments. Current imagery is too product-focused without emotional context.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Button & CTA Consistency",
          context: "Multiple button styles appear across the site - different borders, fills, shadows, and hover states. Establish a clear primary/secondary/tertiary button system with consistent styling and interaction patterns.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Brand Color Unification",
          context: "Color usage varies across templates and sections. Define and enforce a strict color palette with clear usage guidelines - primary brand colors, supporting neutrals, accent colors for CTAs, and semantic colors for states.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        }
      ]
    },
    {
      id: "homepage",
      title: "Homepage Review",
      summary: [
        "Clarify priority journeys: Used, New, Aftersales",
        "Use more premium dealership imagery in hero",
        "Add clear value propositions for the group",
        "Improve CTA placement and hierarchy",
        "Hero should deliver more emotional impact"
      ],
      details: [
        {
          issue: "Journey Prioritization",
          context: "The homepage tries to serve all audiences equally, diluting focus. Need clear priority given to the highest-value journeys: Used Car buyers (highest volume), New Car prospects, and Service/Aftersales customers. Each should have a prominent, dedicated path.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Hero Section Impact",
          context: "The hero area should immediately communicate Grange's unique positioning in luxury automotive retail. Currently lacks the emotional punch needed to differentiate from competitors. Consider full-bleed cinematic photography or video showcasing the dealership experience.",
          screenshot: "https://cdn.grange.co.uk/assets/homepage/grange-homepage-tablet.webp"
        },
        {
          issue: "Value Propositions",
          context: "What makes Grange different? The homepage doesn't clearly articulate unique selling points - nationwide coverage, premium brands portfolio, white-glove service, expert knowledge. These differentiators should be visible above the fold.",
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

export default GrangeWebsiteUXSlideContent;
