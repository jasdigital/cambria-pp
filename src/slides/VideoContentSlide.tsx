import React from "react";

const VideoContentSlideContent: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
    <div className="space-y-4 md:space-y-5">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
        Interactive & Video Content
      </h2>
      <p className="text-sm md:text-base text-white/70 max-w-xl">
        Using rich media to tell the story
      </p>
      <ul className="mt-1 space-y-2.5 md:space-y-3 text-sm md:text-base">
        <li className="flex gap-3 items-start">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
          <span>Service walkarounds, sales intros, and CitNow-style content</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
          <span>Create reusable libraries for campaigns and landing pages</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
          <span>Integrate video into key decision points in the journey</span>
        </li>
      </ul>
    </div>
    <div className="relative rounded-2xl overflow-hidden bg-neutral-200 aspect-video shadow-inner">
      <video
        src="/media/example-showroom-video.mp4"
        className="h-full w-full object-cover"
        controls
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
    </div>
  </div>
);

export default VideoContentSlideContent;
