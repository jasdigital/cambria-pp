import React from "react";

const SocialManagementToolsSlide: React.FC = () => {
  const tools = [
    {
      name: "Hootsuite",
      logo: "🦉",
      color: "from-purple-500/20 to-purple-600/30",
      features: [
        "Unified dashboard for all platforms",
        "Advanced scheduling & automation",
        "Team collaboration & approval workflows",
        "Comprehensive analytics & reporting",
      ],
      bestFor: "Enterprise-level management"
    },
    {
      name: "Buffer",
      logo: "📊",
      color: "from-blue-500/20 to-blue-600/30",
      features: [
        "Simple, intuitive interface",
        "Optimal posting time suggestions",
        "Landing page & link tracking",
        "Content calendar planning",
      ],
      bestFor: "Streamlined multi-platform posting"
    },
    {
      name: "Sprout Social",
      logo: "🌱",
      color: "from-green-500/20 to-green-600/30",
      features: [
        "Deep social listening & monitoring",
        "Customer relationship management",
        "Competitive benchmarking",
        "Advanced sentiment analysis",
      ],
      bestFor: "Data-driven social strategy"
    },
    {
      name: "Later",
      logo: "📸",
      color: "from-pink-500/20 to-pink-600/30",
      features: [
        "Visual content planning",
        "Instagram-first approach",
        "User-generated content management",
        "Link in bio optimization",
      ],
      bestFor: "Visual storytelling & Instagram"
    },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        Social Media Management Tools
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Automation platforms for efficient multi-location social presence
      </p>
      
      <div className="grid md:grid-cols-2 gap-3">
        {tools.map((tool, idx) => (
          <div 
            key={idx}
            className={`bg-gradient-to-br ${tool.color} backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                {tool.logo}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold">{tool.name}</h3>
                <p className="text-[10px] md:text-xs text-white/70">{tool.bestFor}</p>
              </div>
            </div>
            
            <ul className="space-y-1.5">
              {tool.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex gap-2 items-start text-xs md:text-sm">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-3 grid md:grid-cols-2 gap-3">
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h4 className="text-xs md:text-sm font-semibold mb-2">Key Benefits</h4>
          <ul className="space-y-1 text-[10px] md:text-xs text-white/80">
            <li>• Centralized management across 26+ locations</li>
            <li>• Consistent brand voice and messaging</li>
            <li>• Time-saving bulk scheduling</li>
            <li>• Real-time performance insights</li>
          </ul>
        </div>
        
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h4 className="text-xs md:text-sm font-semibold mb-2">Implementation Focus</h4>
          <ul className="space-y-1 text-[10px] md:text-xs text-white/80">
            <li>• Define approval workflows for content</li>
            <li>• Create location-specific templates</li>
            <li>• Set up automated reporting</li>
            <li>• Train teams on platform usage</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SocialManagementToolsSlide;
