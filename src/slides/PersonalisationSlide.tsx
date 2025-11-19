import React, { useState } from "react";

const PersonalisationSlide: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const examples = [
    {
      trigger: "MOT Due Date",
      message: "Your MOT is due in 17 days",
      context: "Propensity Model: 73% likely to book within 21 days",
      technique: "Uplift Modelling",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 512 512" fill="currentColor">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
      ),
      color: "from-blue-500/30 to-blue-600/40"
    },
    {
      trigger: "Service Plan Expiry",
      message: "Your Bentley's service plan expires next month",
      context: "NBA: Service plan renewal identified as Next Best Action",
      technique: "Next Best Action",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 512 512" fill="currentColor">
          <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
        </svg>
      ),
      color: "from-green-500/30 to-green-600/40"
    },
    {
      trigger: "Finance Balloon",
      message: "You're 11 months from your balloon payment",
      context: "Churn Prevention: High-value customer retention trigger",
      technique: "Churn Prevention",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 512 512" fill="currentColor">
          <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/>
        </svg>
      ),
      color: "from-amber-500/30 to-amber-600/40"
    },
    {
      trigger: "Stock Match",
      message: "There's a used Land Rover Discovery that matches your saved searches",
      context: "NBO: Personalized offer based on browsing behavior & budget",
      technique: "Next Best Offer",
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 512 512" fill="currentColor">
          <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
        </svg>
      ),
      color: "from-purple-500/30 to-purple-600/40"
    },
  ];

  const customerSegments = [
    {
      name: "Champions",
      description: "High value, high engagement",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 32L192 96h-64L96 128v64l-64 64 64 64v64l32 32h64l64 64 64-64h64l32-32v-64l64-64-64-64v-64l-32-32h-64L256 32zm0 96c70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128 57.3-128 128-128z"/>
          <circle cx="256" cy="256" r="80"/>
        </svg>
      ),
      color: "from-green-500/40 to-emerald-600/40",
      strategy: "VIP treatment, early access, loyalty rewards"
    },
    {
      name: "At Risk",
      description: "Previously active, now declining",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7.2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8.2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0z"/>
        </svg>
      ),
      color: "from-amber-500/40 to-orange-600/40",
      strategy: "Win-back campaigns, special offers, re-engagement"
    },
    {
      name: "Potential",
      description: "Low frequency, high potential value",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm25.5 78L48 212.9 256 448 464 212.9 369.8 111.8l-50.7 70.4c-2.2 3-5.7 4.8-9.4 4.8H202.3c-3.7 0-7.2-1.7-9.4-4.8l-50.7-70.4zM256 144l32 44.5V232c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-43.5L256 144z"/>
        </svg>
      ),
      color: "from-blue-500/40 to-cyan-600/40",
      strategy: "Nurture journeys, educational content, trust building"
    },
    {
      name: "Hibernating",
      description: "Low activity, need reactivation",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zm53-203.8l32 32c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-32-32c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0zm48 11.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l32-32c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-32 32zM160 192h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16zm128 0h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H288c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
        </svg>
      ),
      color: "from-purple-500/40 to-violet-600/40",
      strategy: "Reactivation campaigns, surveys, incentives"
    },
  ];

  const analyticsCapabilities = [
    { 
      label: "Uplift Modelling", 
      description: "Predict campaign impact", 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 48l-176 176c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L232 139.9V456c0 13.3 10.7 24 24 24s24-10.7 24-24V139.9l118.1 118.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L256 48z"/>
        </svg>
      ), 
      color: "bg-blue-500/20" 
    },
    { 
      label: "Churn Prevention", 
      description: "Identify at-risk customers", 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 472c-119.1 0-216-96.9-216-216S136.9 40 256 40s216 96.9 216 216-96.9 216-216 216z"/>
          <path d="M256 128c-13.3 0-24 10.7-24 24v120c0 13.3 10.7 24 24 24s24-10.7 24-24V152c0-13.3-10.7-24-24-24zm0 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/>
        </svg>
      ), 
      color: "bg-red-500/20" 
    },
    { 
      label: "Propensity Scoring", 
      description: "Likelihood to convert", 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 472c-119.1 0-216-96.9-216-216S136.9 40 256 40s216 96.9 216 216-96.9 216-216 216z"/>
          <circle cx="256" cy="256" r="64"/>
          <path d="M256 144c-8.8 0-16 7.2-16 16s7.2 16 16 16c52.9 0 96 43.1 96 96 0 8.8 7.2 16 16 16s16-7.2 16-16c0-70.7-57.3-128-128-128z"/>
        </svg>
      ), 
      color: "bg-green-500/20" 
    },
    { 
      label: "NBA/NBO", 
      description: "Right action, right time", 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"/>
          <path d="M256 120c-13.3 0-24 10.7-24 24v136c0 6.4 2.5 12.5 7 17l96 96c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L280 270.1V144c0-13.3-10.7-24-24-24z"/>
        </svg>
      ), 
      color: "bg-purple-500/20" 
    },
    { 
      label: "Marketing Mix Model", 
      description: "Channel optimisation", 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 512 512" fill="currentColor">
          <path d="M32 32c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32zm16 48h416v352H48V80z"/>
          <path d="M96 368h64v-96H96v96zm96 0h64v-160h-64v160zm96 0h64V208h-64v160zm96 0h64V144h-64v224z"/>
        </svg>
      ), 
      color: "bg-amber-500/20" 
    },
    { 
      label: "Customer Segmentation", 
      description: "4 key groups", 
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 472c-119.1 0-216-96.9-216-216S136.9 40 256 40s216 96.9 216 216-96.9 216-216 216z"/>
          <path d="M256 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 176c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/>
        </svg>
      ), 
      color: "bg-cyan-500/20" 
    },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        Personalisation & Relevance
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Data-driven messaging powered by predictive analytics
      </p>
      
      <div className="grid md:grid-cols-[1fr,2fr] gap-4 overflow-y-auto max-h-[450px] pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) transparent' }}>
        {/* Analytics Capabilities */}
        <div className="space-y-2">
          <h3 className="text-xs md:text-sm font-bold text-white/80 mb-2">ANALYTICS CAPABILITIES</h3>
          {analyticsCapabilities.map((capability, idx) => (
            <div 
              key={idx}
              className={`${capability.color} backdrop-blur-sm border border-white/20 rounded-lg p-2 md:p-3 hover:scale-105 transition-all cursor-pointer group`}
              onClick={() => idx === 5 ? setSelectedSegment(selectedSegment ? null : 'show') : null}
            >
              <div className="flex items-center gap-2">
                <div className="text-white/90">{capability.icon}</div>
                <div className="flex-1">
                  <div className="text-xs md:text-sm font-bold">{capability.label}</div>
                  <div className="text-[10px] md:text-xs text-white/70">{capability.description}</div>
                </div>
                {idx === 5 && (
                  <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors">
                    {selectedSegment ? '▼' : '▶'}
                  </span>
                )}
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
            <div className="flex justify-center mb-4 text-white/90">
              {examples[selectedExample].icon}
            </div>
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-3 md:p-4 mb-3">
              <p className="text-sm md:text-lg font-semibold text-center leading-relaxed">
                "{examples[selectedExample].message}"
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] md:text-xs font-bold">
                {examples[selectedExample].technique}
              </span>
            </div>
            <div className="text-xs md:text-sm text-white/70 text-center">
              {examples[selectedExample].context}
            </div>
          </div>

          {/* Customer Segments Expansion */}
          {selectedSegment && (
            <div className="mt-4 space-y-2">
              <h4 className="text-xs font-bold text-white/90 mb-2">4 KEY CUSTOMER SEGMENTS</h4>
              <div className="grid grid-cols-2 gap-2">
                {customerSegments.map((segment, idx) => (
                  <div 
                    key={idx}
                    className={`bg-gradient-to-br ${segment.color} backdrop-blur-sm border border-white/30 rounded-lg p-3`}
                  >
                    <div className="flex justify-center mb-1 text-white/90">{segment.icon}</div>
                    <div className="text-xs font-bold text-center mb-1">{segment.name}</div>
                    <div className="text-[9px] text-white/70 text-center mb-2">{segment.description}</div>
                    <div className="text-[9px] text-white/80 bg-black/30 rounded p-1.5">
                      {segment.strategy}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-lg p-3">
        <div className="flex items-center justify-between">
          <p className="text-xs md:text-sm font-semibold">
            <span className="text-green-400">Predictive Analytics</span> + <span className="text-blue-400">Customer Intelligence</span> = <span className="text-purple-400">Hyper-Relevant Messaging</span>
          </p>
          <div className="text-[10px] text-white/60">Marketing Mix Modelling optimizes channel spend</div>
        </div>
      </div>
    </>
  );
};

export default PersonalisationSlide;
