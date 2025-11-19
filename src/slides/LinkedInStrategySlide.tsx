import React, { useState } from "react";

const LinkedInStrategySlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'company'>('personal');

  const personalStrategy = {
    title: "Personal Brand Building",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    pillars: [
      {
        title: "Leadership Voices",
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"/>
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
          </svg>
        ),
        color: "from-blue-500/20 to-blue-600/30",
        actions: [
          "Executive team sharing industry insights",
          "Sales managers celebrating team wins",
          "Service advisors showcasing expertise",
          "Finance specialists explaining options"
        ]
      },
      {
        title: "Employee Advocacy",
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        ),
        color: "from-green-500/20 to-green-600/30",
        actions: [
          "Team members sharing company content",
          "Behind-the-scenes showroom life",
          "Career progression stories",
          "Training and development highlights"
        ]
      },
      {
        title: "Customer Success Stories",
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        ),
        color: "from-purple-500/20 to-purple-600/30",
        actions: [
          "Customer testimonials and reviews",
          "Delivery day celebrations",
          "Long-term relationships showcased",
          "VIP customer experiences"
        ]
      }
    ]
  };

  const companyStrategy = {
    title: "Company Page Strategy",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
    pillars: [
      {
        title: "Brand Authority",
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        ),
        color: "from-amber-500/20 to-amber-600/30",
        actions: [
          "Industry trends and market insights",
          "Partnership announcements",
          "Awards and accreditations",
          "Community involvement"
        ]
      },
      {
        title: "Product Showcase",
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        ),
        color: "from-red-500/20 to-red-600/30",
        actions: [
          "New model launches and arrivals",
          "Feature highlights and technology",
          "Event coverage and exclusives",
          "Stock updates and offers"
        ]
      },
      {
        title: "Recruitment & Culture",
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
          </svg>
        ),
        color: "from-cyan-500/20 to-cyan-600/30",
        actions: [
          "Job opportunities across locations",
          "Team culture and values",
          "Employee spotlights",
          "Growth and development programs"
        ]
      }
    ]
  };

  const currentStrategy = activeTab === 'personal' ? personalStrategy : companyStrategy;

  const collaborationAreas = [
    { 
      team: "Sales", 
      contribution: "Deal stories, customer wins, market insights", 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.65 2C7.21 2 3.6 5.61 3.6 10.04c0 1.4.36 2.71.99 3.85L3 19l5.32-1.47c1.07.58 2.3.91 3.61.91 4.44 0 8.04-3.6 8.04-8.04 0-2.15-.84-4.17-2.35-5.69C16.11 2.84 14.09 2 11.65 2zm4.55 11.5c-.2.56-1.17 1.08-1.61 1.14-.44.05-.43.34-2.77-.58-2.34-.92-3.83-3.25-3.95-3.4-.11-.15-.95-1.26-.95-2.41 0-1.15.6-1.72.81-1.95.21-.24.46-.3.61-.3.15 0 .31 0 .44.01.14.01.33-.05.52.4.19.44.65 1.58.71 1.7.05.11.09.25.02.4-.07.15-.11.24-.21.37-.11.13-.23.28-.33.38-.11.11-.22.22-.09.44.12.21.55.91 1.18 1.48.81.73 1.49.96 1.7 1.07.21.11.33.09.46-.05.12-.15.52-.61.66-.81.14-.21.28-.18.46-.11.19.07 1.17.55 1.37.65.21.11.34.16.39.25.06.09.06.52-.14 1.08z"/>
        </svg>
      )
    },
    { 
      team: "Aftersales", 
      contribution: "Technical expertise, service tips, workshop showcases", 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      )
    },
    { 
      team: "Marketing", 
      contribution: "Campaign launches, content creation, brand stories", 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      )
    },
    { 
      team: "HR", 
      contribution: "Team culture, recruitment, employee success stories", 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    { 
      team: "Leadership", 
      contribution: "Industry commentary, business updates, vision sharing", 
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        LinkedIn Strategy
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Personal brands and team collaboration to tell our story
      </p>

      <div className="flex-1 overflow-y-auto pr-2 max-h-[calc(100vh-200px)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) transparent' }}>
      {/* Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('personal')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'personal'
              ? 'bg-white text-black'
              : 'bg-white/10 text-white/70 hover:bg-white/20'
          }`}
        >
          {personalStrategy.icon}
          Personal Branding
        </button>
        <button
          onClick={() => setActiveTab('company')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'company'
              ? 'bg-white text-black'
              : 'bg-white/10 text-white/70 hover:bg-white/20'
          }`}
        >
          {companyStrategy.icon}
          Company Pages
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mb-3">
        {currentStrategy.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${pillar.color} backdrop-blur-sm border border-white/20 rounded-lg p-4`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="text-white">{pillar.icon}</div>
              <h3 className="text-sm font-bold">{pillar.title}</h3>
            </div>
            <ul className="space-y-2">
              {pillar.actions.map((action, actionIdx) => (
                <li key={actionIdx} className="flex items-start gap-2 text-xs">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0"></span>
                  <span className="text-white/90">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Cross-Team Collaboration */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-lg p-4">
        <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          Cross-Team Collaboration Required
        </h3>
        <div className="grid grid-cols-5 gap-2">
          {collaborationAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-2 hover:bg-black/40 transition-colors"
            >
              <div className="text-white text-center mb-1">{area.icon}</div>
              <div className="text-xs font-bold text-center mb-1">{area.team}</div>
              <div className="text-[9px] text-white/70 text-left leading-tight">
                {area.contribution}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 grid md:grid-cols-2 gap-3">
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h4 className="text-xs font-bold mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Key Success Factors
          </h4>
          <ul className="space-y-1 text-[10px] text-white/80">
            <li>• Active engagement from leadership and team members</li>
            <li>• Consistent posting cadence (3-5x per week per profile)</li>
            <li>• Authentic, personal stories over corporate messaging</li>
            <li>• Strategic use of connections and network effects</li>
          </ul>
        </div>

        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h4 className="text-xs font-bold mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            Content Guidelines
          </h4>
          <ul className="space-y-1 text-[10px] text-white/80">
            <li>• Share successes, not just sales pitches</li>
            <li>• Tag team members, partners, and brands</li>
            <li>• Use rich media: images, videos, documents</li>
            <li>• Encourage commenting and meaningful conversations</li>
          </ul>
        </div>
      </div>

      {/* Platform Examples */}
      <div className="mt-4">
        <h3 className="text-sm font-bold mb-3">LinkedIn Presence Examples</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
            <h4 className="text-xs font-bold mb-2 text-center">LinkedIn Content Example 1</h4>
            <img 
              src="/images/webp/social/Linked_1.webp" 
              alt="LinkedIn Content Example 1"
              className="w-full h-auto rounded border border-white/10"
            />
          </div>
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
            <h4 className="text-xs font-bold mb-2 text-center">LinkedIn Content Example 2</h4>
            <img 
              src="/images/webp/social/Linked_2.webp" 
              alt="LinkedIn Content Example 2"
              className="w-full h-auto rounded border border-white/10"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default LinkedInStrategySlide;
