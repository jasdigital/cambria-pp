import React from "react";

const InvictaGooglePlacesSlide: React.FC = () => {
  const keyActions = [
    {
      title: "Profile Completeness",
      icon: "✓",
      items: [
        "Verify all 26 locations have claimed profiles",
        "Complete all business information fields",
        "Add high-quality photos (min 10 per location)",
        "Ensure consistent NAP (Name, Address, Phone)",
      ]
    },
    {
      title: "Review Management",
      icon: "⭐",
      items: [
        "Monitor and respond to all reviews within 24hrs",
        "Request reviews from satisfied customers",
        "Address negative feedback professionally",
        "Maintain 4.5+ star average across locations",
      ]
    },
    {
      title: "Posts & Updates",
      icon: "📢",
      items: [
        "Weekly posts about offers and new stock",
        "Event announcements and showroom news",
        "Vehicle highlights and special deals",
        "Service reminders and seasonal campaigns",
      ]
    },
    {
      title: "Performance Tracking",
      icon: "📊",
      items: [
        "Monitor search appearance and clicks",
        "Track direction requests and calls",
        "Analyze photo views and engagement",
        "Compare performance across locations",
      ]
    },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        Google Business Profile Review
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Key actions to maximize local search visibility across 26 locations
      </p>
      
      <div className="grid md:grid-cols-2 gap-3">
        {keyActions.map((action, idx) => (
          <div 
            key={idx}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center text-xl">
                {action.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold">{action.title}</h3>
            </div>
            
            <ul className="space-y-2">
              {action.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex gap-2 items-start text-xs md:text-sm">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-3 text-center">
        <p className="text-xs md:text-sm text-white/90">
          <span className="font-semibold text-white">Impact:</span> Optimized Google Business Profiles can increase local search visibility by 50%+ and drive significant showroom traffic
        </p>
      </div>
    </>
  );
};

export default InvictaGooglePlacesSlide;
