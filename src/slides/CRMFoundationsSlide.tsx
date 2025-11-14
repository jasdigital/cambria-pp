import React from "react";

const CRMFoundationsSlide: React.FC = () => {
  const foundations = [
    {
      number: "01",
      title: "Single Customer View",
      icon: "👤",
      description: "Unified profile across all touchpoints",
      color: "from-blue-500/20 to-blue-600/30"
    },
    {
      number: "02",
      title: "Real-Time Data Flow",
      icon: "🔄",
      description: "Live sync between DMS, CRM & OEM systems",
      color: "from-purple-500/20 to-purple-600/30"
    },
    {
      number: "03",
      title: "Data Governance",
      icon: "🛡️",
      description: "Quality, hygiene & GDPR compliance",
      color: "from-green-500/20 to-green-600/30"
    },
    {
      number: "04",
      title: "Lifecycle Automation",
      icon: "⚡",
      description: "Smart journeys for sales & aftersales",
      color: "from-amber-500/20 to-amber-600/30"
    },
    {
      number: "05",
      title: "KPI Framework",
      icon: "📊",
      description: "Real-time reporting & insights",
      color: "from-red-500/20 to-red-600/30"
    },
    {
      number: "06",
      title: "Personalisation",
      icon: "🎯",
      description: "Relevant messaging based on behavior",
      color: "from-pink-500/20 to-pink-600/30"
    },
    {
      number: "07",
      title: "Omni-Channel",
      icon: "💬",
      description: "Seamless cross-channel continuity",
      color: "from-indigo-500/20 to-indigo-600/30"
    },
    {
      number: "08",
      title: "Retention Focus",
      icon: "🔁",
      description: "Long-term customer value",
      color: "from-cyan-500/20 to-cyan-600/30"
    },
    {
      number: "09",
      title: "OEM Alignment",
      icon: "🤝",
      description: "Compliance meets conversion",
      color: "from-teal-500/20 to-teal-600/30"
    },
    {
      number: "10",
      title: "Team Enablement",
      icon: "👥",
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
            <div className="text-2xl md:text-3xl mb-1 group-hover:scale-110 transition-transform">
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
