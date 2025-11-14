import React from "react";

const DataFlowSystemsSlide: React.FC = () => {
  const systems = [
    { 
      name: "DMS", 
      examples: "Pinnacle, Kerridge, CDK, Rev8",
      color: "bg-blue-500/30",
      icon: "🗄️"
    },
    { 
      name: "CRM", 
      examples: "Salesforce, iHS, Lead Management",
      color: "bg-purple-500/30",
      icon: "📋"
    },
    { 
      name: "OEM Systems", 
      examples: "Mercedes Me, Ford API, JLR InControl",
      color: "bg-green-500/30",
      icon: "🏭"
    },
    { 
      name: "Finance", 
      examples: "Settlement dates, Balloon payments",
      color: "bg-amber-500/30",
      icon: "💰"
    },
  ];

  const requirements = [
    "Live leads sync → no delays to sales teams",
    "Service booking sync → workshop → CRM → marketing",
    "Stock & pricing sync → feeds into CRM and marketing",
    "Finance data → settlement dates, renewal triggers",
    "Retention workflows → auto-triggered journeys"
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3">
        Real-Time Data Flow
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Breaking down the fragmented automotive stack
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {systems.map((system, idx) => (
          <div 
            key={idx}
            className={`${system.color} backdrop-blur-sm border border-white/30 rounded-lg p-3 md:p-4 hover:scale-105 transition-transform duration-200`}
          >
            <div className="text-3xl md:text-4xl mb-2">{system.icon}</div>
            <h3 className="text-sm md:text-base font-bold mb-1">{system.name}</h3>
            <p className="text-[10px] md:text-xs text-white/70 leading-tight">{system.examples}</p>
          </div>
        ))}
      </div>

      <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4">
        <h3 className="text-sm md:text-base font-bold mb-3 flex items-center gap-2">
          <span className="text-xl">⚡</span>
          <span>Real-Time Requirements</span>
        </h3>
        <div className="space-y-2">
          {requirements.map((req, idx) => (
            <div 
              key={idx}
              className="flex items-start gap-2 text-xs md:text-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
              <span className="text-white/90">{req}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-white/60">
        Requires stable APIs, correct mapping, timestamped statuses, and error handling
      </div>
    </>
  );
};

export default DataFlowSystemsSlide;
