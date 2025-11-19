import React from "react";

const SocialManagementToolsSlide: React.FC = () => {
  const challenges = [
    {
      category: "Governance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      ),
      color: "from-red-500/20 to-red-600/30",
      borderColor: "border-red-500/40",
      points: [
        "Brand consistency (26+ locations)",
        "Approval workflows",
        "Compliance (FCA, GDPR)"
      ]
    },
    {
      category: "Efficiency",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      color: "from-blue-500/20 to-blue-600/30",
      borderColor: "border-blue-500/40",
      points: [
        "Multi-brand management",
        "Bulk scheduling",
        "Content localization"
      ]
    },
    {
      category: "Measurement",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18 17V9M13 17v-6M8 17v-3"/>
        </svg>
      ),
      color: "from-green-500/20 to-green-600/30",
      borderColor: "border-green-500/40",
      points: [
        "Unified analytics",
        "ROI per location",
        "Performance benchmarks"
      ]
    },
    {
      category: "Engagement",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01"/>
        </svg>
      ),
      color: "from-purple-500/20 to-purple-600/30",
      borderColor: "border-purple-500/40",
      points: [
        "Unified inbox",
        "Response time SLAs",
        "Sentiment monitoring"
      ]
    }
  ];

  const platforms = [
    { 
      name: "Hootsuite", 
      strengths: ["Enterprise scale", "Approval workflows", "Multi-brand"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      )
    },
    { 
      name: "Sprout Social", 
      strengths: ["Social listening", "CRM integration", "Analytics"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v6m0 4v10"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    { 
      name: "Buffer", 
      strengths: ["Simplicity", "Optimal timing", "Cost-effective"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18M9 3v18"/>
        </svg>
      )
    },
  ];

  const implementation = [
    { step: "1", priority: "Critical", action: "Approval workflows", color: "text-red-400" },
    { step: "2", priority: "High", action: "Brand templates", color: "text-orange-400" },
    { step: "3", priority: "High", action: "Unified analytics", color: "text-amber-400" },
    { step: "4", priority: "Medium", action: "Team training", color: "text-green-400" },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        Multi-Site Social Media Setup
      </h2>
      <p className="text-sm text-white/70 mb-4">
        Managing 26+ locations across multiple prestige brands
      </p>

      {/* Key Challenges - Condensed Grid */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {challenges.map((challenge, idx) => (
          <div 
            key={idx}
            className={`bg-gradient-to-br ${challenge.color} backdrop-blur-sm border ${challenge.borderColor} rounded-lg p-3`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 text-white/90">
                {challenge.icon}
              </div>
              <h3 className="text-sm font-bold">{challenge.category}</h3>
            </div>
            <ul className="space-y-1">
              {challenge.points.map((point, i) => (
                <li key={i} className="text-[10px] text-white/80 flex items-start gap-1">
                  <span className="text-white/60">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Platform Options & Implementation - Side by Side */}
      <div className="grid grid-cols-2 gap-3">
        {/* Platform Comparison */}
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            Platform Comparison
          </h3>
          <div className="space-y-2">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-2 flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 text-white/80">
                  {platform.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-white/90 mb-1">{platform.name}</div>
                  <div className="flex flex-wrap gap-1">
                    {platform.strengths.map((strength, i) => (
                      <span key={i} className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/70">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-gradient-to-br from-slate-500/20 to-slate-600/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            Implementation Roadmap
          </h3>
          <div className="space-y-2">
            {implementation.map((item, idx) => (
              <div key={idx} className="bg-black/20 rounded-lg p-2 flex items-center gap-3">
                <div className={`text-xl font-bold ${item.color} flex-shrink-0`}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-white/90">{item.action}</div>
                  <div className="text-[9px] text-white/60">{item.priority} Priority</div>
                </div>
                <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialManagementToolsSlide;
