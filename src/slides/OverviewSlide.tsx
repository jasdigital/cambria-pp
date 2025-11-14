import React from "react";

const OverviewSlideContent: React.FC = () => {
  const sections = [
    {
      title: "Grange",
      subtitle: "Website Review",
      summary: "UX improvements, used car journey optimization, and local search performance",
      color: "from-neutral-700/20 to-neutral-800/30"
    },
    {
      title: "Data & CRM",
      subtitle: "Customer Lifecycle",
      summary: "Single customer view, automation frameworks, and real-time KPI tracking",
      color: "from-blue-500/20 to-blue-600/30"
    },
    {
      title: "Social",
      subtitle: "Content Strategy",
      summary: "Management tools, video content, and YouTube Shorts optimization",
      color: "from-purple-500/20 to-purple-600/30"
    },
    {
      title: "Invicta",
      subtitle: "Digital Presence",
      summary: "Local SEO across 26 locations, search term analysis, and Google Business profiles",
      color: "from-blue-400/20 to-blue-500/30"
    }
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase mb-4">
        Overview
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section, idx) => (
          <div 
            key={idx}
            className={`bg-gradient-to-br ${section.color} backdrop-blur-sm border border-white/20 p-4`}
          >
            <div className="mb-2">
              <h3 className="text-xl md:text-2xl font-bold">{section.title}</h3>
              <p className="text-xs md:text-sm text-white/70 uppercase tracking-wide">{section.subtitle}</p>
            </div>
            <p className="text-xs md:text-sm text-white/90 leading-relaxed">
              {section.summary}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-white/10 backdrop-blur-sm border border-white/20 p-3 text-center">
        <p className="text-xs md:text-sm text-white/90">
          <span className="font-semibold">Focus:</span> Strategic digital review across UX, performance marketing, data enrichment, and retention
        </p>
      </div>
    </>
  );
};

export default OverviewSlideContent;
