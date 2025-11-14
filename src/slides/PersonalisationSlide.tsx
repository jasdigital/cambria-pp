import React, { useState } from "react";

const PersonalisationSlide: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      trigger: "MOT Due Date",
      message: "Your MOT is due in 17 days",
      context: "Based on: Vehicle age & registration date",
      icon: "🔍",
      color: "from-blue-500/30 to-blue-600/40"
    },
    {
      trigger: "Service Plan Expiry",
      message: "Your GLC's service plan expires next month",
      context: "Based on: Service history & plan details",
      icon: "📅",
      color: "from-green-500/30 to-green-600/40"
    },
    {
      trigger: "Finance Balloon",
      message: "You're 11 months from your balloon payment",
      context: "Based on: Finance agreement timeline",
      icon: "💰",
      color: "from-amber-500/30 to-amber-600/40"
    },
    {
      trigger: "Stock Match",
      message: "There's a used E-Class AMG Line that matches your saved searches",
      context: "Based on: Website behavior & preferences",
      icon: "🚗",
      color: "from-purple-500/30 to-purple-600/40"
    },
  ];

  const dataPoints = [
    { label: "Vehicle Age & Mileage", icon: "📏" },
    { label: "Finance Agreement Details", icon: "📋" },
    { label: "Workshop History", icon: "🔧" },
    { label: "Brand Behaviour", icon: "🎯" },
    { label: "Preferences & Complaints", icon: "⭐" },
    { label: "Driving Patterns", icon: "🗺️" },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        Personalisation & Relevance
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Using customer data to deliver highly relevant messaging
      </p>
      
      <div className="grid md:grid-cols-[1fr,2fr] gap-4">
        {/* Data Points */}
        <div className="space-y-2">
          <h3 className="text-xs md:text-sm font-bold text-white/80 mb-2">DATA SOURCES</h3>
          {dataPoints.map((point, idx) => (
            <div 
              key={idx}
              className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-2 md:p-3 hover:bg-black/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl">{point.icon}</span>
                <span className="text-xs md:text-sm font-medium">{point.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Examples */}
        <div>
          <h3 className="text-xs md:text-sm font-bold text-white/80 mb-2">MESSAGE EXAMPLES</h3>
          
          {/* Selector Buttons */}
          <div className="flex gap-2 mb-3 overflow-x-auto">
            {examples.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedExample(idx)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  selectedExample === idx
                    ? "bg-white text-black"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {ex.trigger}
              </button>
            ))}
          </div>

          {/* Selected Example Display */}
          <div className={`bg-gradient-to-br ${examples[selectedExample].color} backdrop-blur-sm border-2 border-white/30 rounded-lg p-4 md:p-6 min-h-[200px] flex flex-col justify-center`}>
            <div className="text-4xl md:text-5xl mb-4 text-center">
              {examples[selectedExample].icon}
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-3 md:p-4 mb-3">
              <p className="text-sm md:text-lg font-semibold text-center leading-relaxed">
                "{examples[selectedExample].message}"
              </p>
            </div>
            <div className="text-xs md:text-sm text-white/70 text-center">
              {examples[selectedExample].context}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-center">
        <p className="text-xs md:text-sm font-semibold">
          Relevance = Engagement = Retention
        </p>
      </div>
    </>
  );
};

export default PersonalisationSlide;
