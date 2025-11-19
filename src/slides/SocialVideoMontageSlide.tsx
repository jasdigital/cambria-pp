import React, { useRef, useEffect, useState } from "react";
import { getVideoUrl } from "../utils/videoUrl";

interface SocialVideoMontageSlideProps {
  onReplayVideos?: () => void;
}

const SocialVideoMontageSlide: React.FC<SocialVideoMontageSlideProps> = ({ onReplayVideos }) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [videosPlaying, setVideosPlaying] = useState(false);

  useEffect(() => {
    // Don't autoplay - wait for user action

    // Expose play and replay functions to parent
    if (onReplayVideos) {
      (window as any).replayMontageVideos = () => {
        videoRefs.current.forEach(video => {
          if (video) {
            video.currentTime = 0;
            video.play().catch(err => console.log("Video play failed:", err));
          }
        });
        setVideosPlaying(true);
      };
    }

    // Play function
    (window as any).playMontageVideos = () => {
      videoRefs.current.forEach(video => {
        if (video) {
          video.play().catch(err => console.log("Video play failed:", err));
        }
      });
      setVideosPlaying(true);
    };

    return () => {
      delete (window as any).replayMontageVideos;
      delete (window as any).playMontageVideos;
    };
  }, [onReplayVideos]);

  const handlePlayVideos = () => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(err => console.log("Video play failed:", err));
      }
    });
    setVideosPlaying(true);
  };

  const handleTimeUpdate = (idx: number) => {
    const video = videoRefs.current[idx];
    if (video && video.duration) {
      // Stop video 10 seconds before the end
      if (video.currentTime >= video.duration - 10) {
        video.pause();
      }
    }
  };

  const videos = [
    { src: getVideoUrl("/video/DK Aston Martin Valkyrie ASMR.mp4"), span: "row-span-2" },
    { src: getVideoUrl("/video/HM - Jaguar E-type Red - Reel.mp4"), span: "" },
    { src: getVideoUrl("/video/DK - Aston Martin DBS - Reel.mp4"), span: "" },
    { src: getVideoUrl("/video/HM - Aston Martin Vantage Spitfire - 24102024 - Main Reel.mp4"), span: "col-span-2 row-span-2" },
    { src: getVideoUrl("/video/HM - Anglesey Sprint - 04-05052024 - Reel.mp4"), span: "" },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        Hero Content
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Premium video content for social media engagement
      </p>
      
      <div className="relative">
        <div className="grid grid-cols-3 auto-rows-[150px] gap-2 md:gap-3 h-[500px]">
          {videos.map((video, idx) => (
            <div 
              key={idx}
              className={`relative rounded-lg overflow-hidden group ${video.span}`}
            >
              <video
                ref={el => videoRefs.current[idx] = el}
                muted
                playsInline
                onTimeUpdate={() => handleTimeUpdate(idx)}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Play indicator */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-center">
        <p className="text-xs md:text-sm text-white/90">
          <span className="font-semibold text-white">Strategy:</span> Leverage premium video content across Instagram Reels, TikTok, YouTube Shorts, and Facebook for maximum engagement
        </p>
      </div>
    </>
  );
};

export default SocialVideoMontageSlide;
