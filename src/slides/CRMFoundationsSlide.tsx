import React from "react";

const CRMFoundationsSlide: React.FC = () => {
  const foundations = [
    {
      number: "01",
      title: "Single Customer View",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4"/>
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        </svg>
      ),
      description: "Unified profile across all touchpoints",
      color: "from-blue-500/20 to-blue-600/30"
    },
    {
      number: "02",
      title: "Real-Time Data Flow",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
          <path d="M21 3v5h-5"/>
        </svg>
      ),
      description: "Live sync between DMS, CRM & OEM systems",
      color: "from-purple-500/20 to-purple-600/30"
    },
    {
      number: "03",
      title: "Data Governance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      description: "Quality, hygiene & GDPR compliance",
      color: "from-green-500/20 to-green-600/30"
    },
    {
      number: "04",
      title: "Lifecycle Automation",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      description: "Smart journeys for sales & aftersales",
      color: "from-amber-500/20 to-amber-600/30"
    },
    {
      number: "05",
      title: "KPI Framework",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M8 12h8M12 8v8"/>
        </svg>
      ),
      description: "Real-time reporting & insights",
      color: "from-red-500/20 to-red-600/30"
    },
    {
      number: "06",
      title: "Personalisation",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>
        </svg>
      ),
      description: "Relevant messaging based on behavior",
      color: "from-pink-500/20 to-pink-600/30"
    },
    {
      number: "07",
      title: "Omni-Channel",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      description: "Seamless cross-channel continuity",
      color: "from-indigo-500/20 to-indigo-600/30"
    },
    {
      number: "08",
      title: "Retention Focus",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 2l4 4-4 4"/>
          <path d="M3 11v-1a4 4 0 0 1 4-4h14"/>
          <path d="M7 22l-4-4 4-4"/>
          <path d="M21 13v1a4 4 0 0 1-4 4H3"/>
        </svg>
      ),
      description: "Long-term customer value",
      color: "from-cyan-500/20 to-cyan-600/30"
    },
    {
      number: "09",
      title: "OEM Alignment",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="8.5" cy="7" r="4"/>
          <path d="M17 11l2 2 4-4"/>
        </svg>
      ),
      description: "Compliance meets conversion",
      color: "from-teal-500/20 to-teal-600/30"
    },
    {
      number: "10",
      title: "Team Enablement",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      description: "Process, training & workflows",
      color: "from-orange-500/20 to-orange-600/30"
    }
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        CRM & Data Strategy
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Core Foundations
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3">
        {foundations.map((item, idx) => (
          <div 
            key={idx}
            className={`relative bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/20 rounded-lg p-3 hover:scale-105 transition-transform duration-200 cursor-pointer group`}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 mb-1 text-white/90 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="text-[10px] md:text-xs text-white/60 font-bold mb-1">
              {item.number}
            </div>
            <h3 className="text-xs md:text-sm font-bold mb-1 leading-tight">
              {item.title}
            </h3>
            <p className="text-[9px] md:text-xs text-white/70 leading-tight">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-white/60">
          Click through for detailed breakdown of each foundation
        </p>
      </div>
    </>
  );
};

export default CRMFoundationsSlide;
