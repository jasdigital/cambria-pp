import React, { useRef, useEffect } from "react";
import { getVideoUrl } from "../utils/videoUrl";

const YouTubeShortsSlide: React.FC = () => {
  const [playing, setPlaying] = React.useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Expose play/replay functions globally for keyboard shortcut
    (window as any).playShortsVideos = () => {
      setPlaying(true);
      videoRefs.current.forEach(video => {
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      });
    };

    (window as any).replayShortsVideos = () => {
      setPlaying(false);
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
      setTimeout(() => {
        setPlaying(true);
        videoRefs.current.forEach(video => {
          if (video) video.play();
        });
      }, 100);
    };

    return () => {
      delete (window as any).playShortsVideos;
      delete (window as any).replayShortsVideos;
    };
  }, []);

  const shortsExamples = [
    {
      title: "30-Second Showroom Tour",
      views: "12.5K",
      engagement: "8.2%",
      videoUrl: getVideoUrl("/video/Screen Recording 2025-11-14 at 17.05.51.mov"),
      description: "Quick walkthroughs of premium dealerships"
    },
    {
      title: "New Arrival Reveals",
            videoUrl: getVideoUrl("/video/Screen Recording 2025-11-14 at 17.04.32.mov"),

      views: "25.3K",
      engagement: "12.1%",
      description: "First look at new stock arrivals"
    },
    {
      title: "Feature Highlights",
      views: "18.7K",
       videoUrl: getVideoUrl("/video/Screen Recording 2025-11-14 at 17.03.39.mov"),

      engagement: "9.8%",
      description: "Quick demos of luxury vehicle features"
    },
    {
      title: "Events Reels",
            videoUrl: getVideoUrl("/video/Screen Recording 2025-11-14 at 16.26.41.mov"),

      views: "8.9K",
      engagement: "15.3%",
      description: "Exclusive customer experiences"
    },
    {
      title: "Behind the Scenes",
      views: "14.2K",
                  videoUrl: getVideoUrl("/video/Screen Recording 2025-11-14 at 17.02.37.mov"),

      engagement: "11.4%",
      description: "Workshop, prep, and team insights"
    },
    {
      title: "Sound & Performance",
      views: "32.1K",
      engagement: "16.7%",
      description: "Engine notes and performance clips",
                   videoUrl: getVideoUrl("/video/Screen Recording 2025-11-14 at 16.30.44.mov"),


    }
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-0 p-0">
        YouTube Shorts Strategy
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-0 p-0">
        Vertical video content optimized for discovery and engagement.
      </p>
      
      <div className="flex-1 overflow-y-auto pr-2 max-h-[calc(100vh-200px)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.3) transparent' }}>
      <div className="flex gap-4">
        {/* Video Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 pr-2">
          {shortsExamples.map((short, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-red-500/20 to-red-600/30 backdrop-blur-sm border border-white/20 rounded-lg p-3 hover:scale-105 transition-transform"
            >
              <div className="aspect-[9/16] bg-black/40 rounded-lg mb-2 overflow-hidden relative group">
                <video 
                  ref={(el) => { videoRefs.current[idx] = el; }}
                  src={short.videoUrl}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                />
                {!playing && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-white/90 text-4xl">▶</div>
                  </div>
                )}
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

        {/* Guidelines Panel */}
        <div className="w-64 space-y-3">
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
            <h4 className="text-xs md:text-sm font-semibold mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-red-500" viewBox="0 0 512 512" fill="currentColor">
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM176 352h-64V160h64V352zM336 352H272V160h64V352z"/>
              </svg>
              Content Guidelines
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
              <svg className="w-4 h-4 text-red-500" viewBox="0 0 512 512" fill="currentColor">
                <path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
              </svg>
              Performance Focus
            </h4>
            <ul className="space-y-1 text-[10px] md:text-xs text-white/80">
              <li>• Algorithm favors watch time & completion</li>
              <li>• Post 3-5x per week for consistency</li>
              <li>• Cross-promote to Instagram Reels</li>
              <li>• Track CTR to website/contact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Platform Examples */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h4 className="text-sm md:text-base font-semibold mb-2 text-white">TikTok Presence</h4>
          <img 
            src="/images/webp/social/lamborghini_tiktok.webp" 
            alt="Lamborghini TikTok" 
            className="w-full h-auto rounded border border-white/10"
          />
        </div>
        <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
          <h4 className="text-sm md:text-base font-semibold mb-2 text-white">YouTube Channel</h4>
          <img 
            src="/images/webp/social/youtube_channel.webp" 
            alt="YouTube Channel" 
            className="w-full h-auto rounded border border-white/10"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default YouTubeShortsSlide;
