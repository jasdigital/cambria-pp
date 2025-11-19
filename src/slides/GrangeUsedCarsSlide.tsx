import React, { useState, useEffect } from "react";

interface Section {
  id: string;
  title: string;
  summary: string[];
  details: {
    issue: string;
    context: string;
    screenshot?: string;
    screenshots?: string[];
    screenshotLayout?: "stack" | "grid-2";
  }[];
}

const GrangeUsedCarsSlideContent: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [currentDetailIndex, setCurrentDetailIndex] = useState<number>(0);

  const sections: Section[] = [
    {
      id: "issues",
      title: "Technical",
      summary: [
        "Infinite scroll breaks UX depth and SEO signals",
        "URL inconsistencies harm trust and discoverability",
        "Slow LCP on category and vehicle detail pages",
        "No vehicles found journey friction points",
      ],
      details: [
        
      ]
    },
    {
      id: "enhancements",
      title: "Visual Enhancements",
      summary: [
        "Improve no-stock messaging and alternatives",
        "Refine header UX for clarity and space",
        "Cleaner specification and options layout",
        "Improve photography standards and consistency",
        "Optimise finance/reserve journey (Codeweavers or Bespoke)"
      ],
      details: [
        
        
        {
          issue: "Specification & Options ",
          context: "Current specification lists are dense walls of text that overwhelm rather than inform. Restructure using card-based layouts with: grouped categories (Performance, Comfort, Safety, Technology), icon-based feature highlights for quick scanning, expandable sections for detailed specs, visual indicators for premium features, and comparison tools for multiple vehicles. Make technical information approachable and scannable.",
          screenshots: ["/images/website_ux/used_detail1.png","/images/website_ux/used_detail2.png","/images/website_ux/hr_owen_specification.png","/images/website_ux/used_detail2.png"]
        }
       
        
      ]
    }
  ];

  const toggleSection = (id: string) => {
    // Don't allow expanding sections with no details
    const section = sections.find(s => s.id === id);
    if (section && section.details.length === 0) return;
    
    setExpandedSection(expandedSection === id ? null : id);
    setCurrentDetailIndex(0);
  };

  // Handle keyboard navigation - open first section on arrow right
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If no section is expanded, open the first section with details
      if (!expandedSection) {
        if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
          e.preventDefault();
          e.stopPropagation();
          // Find first section with details
          const firstSectionWithDetails = sections.find(s => s.details.length > 0);
          if (firstSectionWithDetails) {
            setExpandedSection(firstSectionWithDetails.id);
            setCurrentDetailIndex(0);
          }
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
        // If at last detail and not at last section, go to next section with details
        else if (currentSectionIndex < sections.length - 1) {
          e.preventDefault();
          e.stopPropagation();
          // Find next section with details
          const nextSectionWithDetails = sections.slice(currentSectionIndex + 1).find(s => s.details.length > 0);
          if (nextSectionWithDetails) {
            setExpandedSection(nextSectionWithDetails.id);
            setCurrentDetailIndex(0);
          }
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
        // If at first detail and not at first section, go to last detail of previous section with details
        else if (currentSectionIndex > 0) {
          // Find previous section with details (searching backwards)
          const prevSectionsReversed = sections.slice(0, currentSectionIndex).reverse();
          const prevSectionWithDetails = prevSectionsReversed.find(s => s.details.length > 0);
          if (prevSectionWithDetails) {
            setExpandedSection(prevSectionWithDetails.id);
            setCurrentDetailIndex(prevSectionWithDetails.details.length - 1);
          } else {
            // No previous section with details, close the expanded view
            setExpandedSection(null);
            setCurrentDetailIndex(0);
          }
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
    <>
      {!expandedSection ? (
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {sections.map((section) => {
            const hasDetails = section.details.length > 0;
            return (
            <button
              key={section.id}
              onClick={() => hasDetails && toggleSection(section.id)}
              disabled={!hasDetails}
              className={`bg-black/20 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-white/10 text-left transition-all group ${
                hasDetails 
                  ? 'hover:bg-black/30 hover:border-white/20 cursor-pointer' 
                  : 'cursor-not-allowed opacity-50'
              }`}
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight uppercase">
                  {section.title}
                </h3>
                {hasDetails ? (
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white/30 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                )}
              </div>
              <ul className="space-y-2 text-xs md:text-sm">
                {section.summary.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              {hasDetails ? (
                <div className="mt-3 text-xs text-white/50 flex items-center gap-1">
                  <span>Click to view details</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              ) : (
                <div className="mt-3 text-xs text-white/30 italic">
                  No details available
                </div>
              )}
            </button>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-2">
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
                        
                        {detail.screenshots && detail.screenshots.length > 0 && (
                          <div className={`grid gap-3 ${
                            detail.screenshotLayout === "grid-2" 
                              ? "grid-cols-2" 
                              : "grid-cols-1"
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
                        
                        {detail.screenshot && !detail.screenshots && (
                          <div className="rounded overflow-hidden border border-white/20 bg-black/40">
                            <img
                              src={detail.screenshot}
                              alt={detail.issue}
                              className="w-full h-48 md:h-64 object-cover opacity-60"
                            />
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
                          // Find previous section with details (searching backwards)
                          const prevSectionsReversed = sections.slice(0, currentSectionIndex).reverse();
                          const prevSectionWithDetails = prevSectionsReversed.find(s => s.details.length > 0);
                          if (prevSectionWithDetails) {
                            setExpandedSection(prevSectionWithDetails.id);
                            setCurrentDetailIndex(prevSectionWithDetails.details.length - 1);
                          } else {
                            setExpandedSection(null);
                            setCurrentDetailIndex(0);
                          }
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
                      Use ← → arrows to navigate through all sections
                    </div>
                    
                    <button
                      onClick={() => {
                        const currentSectionIndex = sections.findIndex(s => s.id === expandedSection);
                        if (currentDetailIndex < section.details.length - 1) {
                          setCurrentDetailIndex(prev => prev + 1);
                        } else if (currentSectionIndex < sections.length - 1) {
                          // Find next section with details
                          const nextSectionWithDetails = sections.slice(currentSectionIndex + 1).find(s => s.details.length > 0);
                          if (nextSectionWithDetails) {
                            setExpandedSection(nextSectionWithDetails.id);
                            setCurrentDetailIndex(0);
                          }
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
    </>
  );
};

export default GrangeUsedCarsSlideContent;
