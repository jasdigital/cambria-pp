import React from "react";

const YouTubeShortsSlide: React.FC = () => {
  const shortsExamples = [
    {
      title: "30-Second Showroom Tour",
      thumbnail: "🏢",
      views: "12.5K",
      engagement: "8.2%",
      description: "Quick walkthroughs of premium dealerships"
    },
    {
      title: "New Arrival Reveals",
      thumbnail: "🚗",
      views: "25.3K",
      engagement: "12.1%",
      description: "First look at new stock arrivals"
    },
    {
      title: "Feature Highlights",
      thumbnail: "⭐",
      views: "18.7K",
      engagement: "9.8%",
      description: "Quick demos of luxury vehicle features"
    },
    {
      title: "Customer Reviews",
      thumbnail: "💬",
      views: "8.9K",
      engagement: "15.3%",
      description: "Authentic testimonials and experiences"
    },
    {
      title: "Behind the Scenes",
      thumbnail: "🎬",
      views: "14.2K",
      engagement: "11.4%",
      description: "Workshop, prep, and team insights"
    },
    {
      title: "Sound & Performance",
      thumbnail: "🔊",
      views: "32.1K",
      engagement: "16.7%",
      description: "Engine notes and performance clips"
    }
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        YouTube Shorts Strategy
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Vertical video content optimized for discovery and engagement
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {shortsExamples.map((short, idx) => (
          <div 
            key={idx}
            className="bg-gradient-to-br from-red-500/20 to-red-600/30 backdrop-blur-sm border border-white/20 rounded-lg p-3 hover:scale-105 transition-transform cursor-pointer"
          >
            <div className="aspect-[9/16] bg-black/40 rounded-lg mb-2 flex items-center justify-center text-4xl">
              {short.thumbnail}
            </div>
            
            <h3 className="text-xs md:text-sm font-bold mb-1 line-clamp-1">
              {short.title}
            </h3>
            
            <p className="text-[10px] md:text-xs text-white/70 mb-2 line-clamp-2">
              {short.description}
            </p>
            
            <div className="flex justify-between items-center text-[10px] md:text-xs">
              <span className="text-white/60">👁️ {short.views}</span>
              <span className="text-green-400 font-semibold">{short.engagement}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 grid md:grid-cols-2 gap-3">
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h4 className="text-xs md:text-sm font-semibold mb-2 flex items-center gap-2">
            <span className="text-red-500">📱</span> Content Guidelines
          </h4>
          <ul className="space-y-1 text-[10px] md:text-xs text-white/80">
            <li>• 15-60 seconds, vertical 9:16 format</li>
            <li>• Hook viewers in first 3 seconds</li>
            <li>• Add captions for sound-off viewing</li>
            <li>• Use trending sounds and hashtags</li>
          </ul>
        </div>
        
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h4 className="text-xs md:text-sm font-semibold mb-2 flex items-center gap-2">
            <span className="text-red-500">🎯</span> Performance Focus
          </h4>
          <ul className="space-y-1 text-[10px] md:text-xs text-white/80">
            <li>• Algorithm favors watch time & completion</li>
            <li>• Post 3-5x per week for consistency</li>
            <li>• Cross-promote to Instagram Reels</li>
            <li>• Track CTR to website/contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default YouTubeShortsSlide;
