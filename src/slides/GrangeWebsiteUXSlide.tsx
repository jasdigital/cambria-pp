import React, { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
  summary: string[];
  details: {
    issue: string;
    context: string;
    screenshots?: string[];
    screenshotLayout?: "stack" | "grid-2";
    videos?: string[];
  }[];
}

const GrangeWebsiteUXSlideContent: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [currentDetailIndex, setCurrentDetailIndex] = useState<number>(0);

  // Communicate expanded section and detail index to App for video control
  useEffect(() => {
    (window as any).uxExpandedSection = expandedSection;
    (window as any).uxDetailIndex = currentDetailIndex;
  }, [expandedSection, currentDetailIndex]);

  const sections: Section[] = [
    {
      id: "experience",
      title: "Experience",
      summary: [
        "Premium brand basis",
        "Enhance luxury storytelling",
        "Typography hierarchy",
        "Extended iconography system",
      ],
      details: [
        {
          issue: "Hero Media & Showroom Experience",
          context: "Use dealership video/imagery showcasing showroom experience, blend lifestyle photography with vehicle packshots, and align all visuals with OEM and group brand standards.",
          /*screenshots: ["/images/webp/website_ux/Home_CTA.webp"]*/
          /*
          videos: [
            "/video/HM - Aston Martin Vantage Spitfire - 24102024 - Main Reel.mp4",
            "/video/DK Aston Martin Valkyrie ASMR.mp4",
            "/video/HM - Anglesey Sprint - 04-05052024 - Reel.mp4"
          ]
            */
        },
        
        {
          issue: "Hierarchy & Iconography",
          context: "Headlines compete with body copy - difficult to scan. Need stronger typographic scale with clear font sizes, weights, and spacing to guide attention.",
          screenshots: ["/images/webp/website_ux/grange_homepage_typography_hierarchy.webp","/images/webp/website_ux/Clearer_HierarchyInformation_Iconography.webp","/images/webp/website_ux/grange_hierarchy_positive.webp"]
        },
        
      ]
    },
    {
      id: "navigation",
      title: "Navigation",
      summary: [
        "Clarify priority journeys: Used, New, Aftersales",
        "Size and utility of sticky menu",
        "Information architecture",
        "Introduce an extended iconography system",
        "Breadcrumbs across journeys",
      ],
      details: [
        {
          issue: "Sticky Menu",
          context: "The main navigation contains too many options at the top level. Always-visible quick actions will embrace simplicity - fewer, more intentional navigation choices that guide users confidently.",
          screenshots: [
            "/images/webp/website_ux/hr_owen_header.webp",
            "/images/webp/website_ux/lookers_landrover_header-seach-cta-actions.webp"
          ]
        },

        {
          issue: "Book a Service Journey - 5 Steps to Primary Action",
          context: "Users must navigate through 5 separate screens to book a service. This multi-level journey can create friction and abandonment. Service booking should be simplified.",
          screenshots: [
            "/images/webp/book_service/service1.webp",
            "/images/webp/book_service/service2.webp",
            "/images/webp/book_service/service3.webp",
            "/images/webp/book_service/service4.webp",
            "/images/webp/book_service/service5.webp"
          ],
          screenshotLayout: "stack"
        },
        
        {
          issue: "Clear Pathways",
          context: "Primary journeys (Used Cars, New Models, Service) lack clear visual hierarchy. Need distinct entry points with obvious labels and icons that guide users confidently without confusion.",
          screenshots: ["/images/webp/website_ux/Home_CTA.webp","/images/webp/website_ux/clearer_pathways.webp","/images/webp/website_ux/image_hierarchy_actionable_elements.webp","/images/webp/website_ux/breadcrumbs.webp","/images/webp/website_ux/grange_breadcrumbs.webp"]
        },
        
      ]
    },
    {
      id: "conversion",
      title: "Conversion",
      summary: [
        "Improve CTA placement and hierarchy",
        "Add clear value propositions",
        "Form friction in enquiry process",
        "Trust signals",
      ],
      details: [
        {
          issue: "CTA Placement & Prominence",
          context: "Primary calls-to-action don't stand out sufficiently on key pages. 'Enquire', 'Reserve', and 'Book Service' buttons need stronger visual hierarchy and strategic placement at natural decision points in the user journey.",
          screenshots: ["/images/webp/website_ux/UsedListing_CTA.webp"]
        },
        {
          issue: "Form Friction",
          context: "Lead capture forms ask for too much information upfront, creating abandonment. Reduce initial fields to essentials (name, phone/email, interest), then progressively capture additional details. Multi-step forms with progress indicators perform better for complex enquiries.",
          screenshots: ["/images/webp/website_ux/FinanceCalculator.webp"]
        },
        {
          issue: "Trust Signals Missing",
          context: "Limited use of customer testimonials, reviews, ratings, industry awards, and certifications. Premium buyers need reassurance - showcase Google Reviews scores, customer success stories, manufacturer partnerships, and quality guarantees prominently.",
          screenshots: ["/images/webp/website_ux/trust_signal.webp"]
        }
       
      ]
    }
    
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
    setCurrentDetailIndex(0);
  };

  // Handle keyboard navigation - open first section on arrow right
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If no section is expanded, open the first section
      if (!expandedSection) {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
          e.preventDefault();
          e.stopPropagation();
          setExpandedSection(sections[0].id);
          setCurrentDetailIndex(0);
        }
        return;
      }

      const currentSection = sections.find(s => s.id === expandedSection);
      if (!currentSection) return;

      const totalDetails = currentSection.details.length;
      const currentSectionIndex = sections.findIndex(s => s.id === expandedSection);

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        // If not at the last detail, go to next detail
        if (currentDetailIndex < totalDetails - 1) {
          e.preventDefault();
          e.stopPropagation();
          setCurrentDetailIndex(prev => prev + 1);
        }
        // If at last detail and not at last section, go to next section
        else if (currentSectionIndex < sections.length - 1) {
          e.preventDefault();
          e.stopPropagation();
          setExpandedSection(sections[currentSectionIndex + 1].id);
          setCurrentDetailIndex(0);
        }
        // If at last detail of last section, allow default behavior (go to next slide)
        // Don't preventDefault or stopPropagation - let it bubble up to App
      }
      
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        e.stopPropagation();
        
        // If not at the first detail, go to previous detail
        if (currentDetailIndex > 0) {
          setCurrentDetailIndex(prev => prev - 1);
        }
        // If at first detail and not at first section, go to last detail of previous section
        else if (currentSectionIndex > 0) {
          const prevSection = sections[currentSectionIndex - 1];
          setExpandedSection(prevSection.id);
          setCurrentDetailIndex(prevSection.details.length - 1);
        }
        // If at first detail of first section, close the expanded view
        else {
          setExpandedSection(null);
          setCurrentDetailIndex(0);
        }
      }

      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        setExpandedSection(null);
        setCurrentDetailIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [expandedSection, currentDetailIndex, sections]);

  return (
    <div className="h-full flex flex-col">
      {!expandedSection ? (
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
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
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => {
                setExpandedSection(null);
                setCurrentDetailIndex(0);
              }}
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to overview
            </button>
            
            {sections
              .filter((s) => s.id === expandedSection)
              .map((section) => (
                <div key="pagination" className="text-xs text-white/60">
                  {currentDetailIndex + 1} / {section.details.length}
                </div>
              ))}
          </div>
          
          {sections
            .filter((s) => s.id === expandedSection)
            .map((section) => {
              const detail = section.details[currentDetailIndex];
              if (!detail) return null;
              
              return (
                <div key={section.id} className="flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                    {section.title}
                  </h3>
                  
                  <div 
                    className="overflow-y-auto pr-2 max-h-[calc(100vh-300px)]"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'rgba(255,255,255,0.3) transparent'
                    }}
                  >
                    <div className="w-full max-w-7xl mx-auto">
                      <div className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10">
                        <h4 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                          {detail.issue}
                        </h4>
                        <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
                          {detail.context}
                        </p>
                        
                        {detail.videos && detail.videos.length > 0 && (
                          <div className="grid grid-cols-3 gap-3 mb-4">
                            {detail.videos.map((video, idx) => (
                              <div key={idx} className="rounded overflow-hidden border border-white/20 bg-black/40">
                                <video
                                  src={video}
                                  className="w-full h-48 object-cover"
                                  controls
                                  muted
                                  playsInline
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {detail.screenshots && detail.screenshots.length > 0 && (
                          <div className={`grid gap-3 ${
                            detail.screenshotLayout === "grid-2" 
                              ? 'grid-cols-2' 
                              : 'grid-cols-1'
                          }`}>
                            {detail.screenshots.map((screenshot, idx) => (
                              <div key={idx} className="rounded overflow-hidden border border-white/20 bg-black/40">
                                <img
                                  src={screenshot}
                                  alt={`${detail.issue} - ${idx + 1}`}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 gap-4">
                    <button
                      onClick={() => {
                        const currentSectionIndex = sections.findIndex(s => s.id === expandedSection);
                        if (currentDetailIndex > 0) {
                          setCurrentDetailIndex(prev => prev - 1);
                        } else if (currentSectionIndex > 0) {
                          const prevSection = sections[currentSectionIndex - 1];
                          setExpandedSection(prevSection.id);
                          setCurrentDetailIndex(prevSection.details.length - 1);
                        } else {
                          setExpandedSection(null);
                          setCurrentDetailIndex(0);
                        }
                      }}
                      disabled={false}
                      className="flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-all text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </button>
                    
                    <div className="text-xs text-white/50">
                      Use ← → arrows to navigate • Scroll for more images
                    </div>
                    
                    <button
                      onClick={() => {
                        const currentSectionIndex = sections.findIndex(s => s.id === expandedSection);
                        if (currentDetailIndex < section.details.length - 1) {
                          setCurrentDetailIndex(prev => prev + 1);
                        } else if (currentSectionIndex < sections.length - 1) {
                          setExpandedSection(sections[currentSectionIndex + 1].id);
                          setCurrentDetailIndex(0);
                        }
                      }}
                      disabled={currentDetailIndex === section.details.length - 1 && sections.findIndex(s => s.id === expandedSection) === sections.length - 1}
                      className="flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
                    >
                      Next
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default GrangeWebsiteUXSlideContent;
