import React from "react";

const ShowroomBrandSlideContent: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
    <div className="space-y-4 md:space-y-5">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
        Showroom & Brand Experience
      </h2>
      <p className="text-sm md:text-base text-white/70 max-w-xl">
        Use physical experience as a key digital asset
      </p>
      <ul className="mt-1 space-y-2.5 md:space-y-3 text-sm md:text-base">
        <li className="flex gap-3 items-start">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
          <span>Hero imagery should showcase the showroom experience</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
          <span>Blend lifestyle-led photography with vehicle packshots</span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
          <span>Align onsite visuals with OEM and group-level brand</span>
        </li>
      </ul>
    </div>
    <div className="relative rounded-2xl overflow-hidden bg-neutral-200 aspect-video shadow-inner">
      <img
        src="/images/grange-showroom-placeholder.jpg"
        alt="Grange showroom imagery"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/10 via-transparent to-white/0" />
    </div>
  </div>
);

export default ShowroomBrandSlideContent;
