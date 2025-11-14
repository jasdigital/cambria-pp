import React from "react";

const TimeToMarketSlideContent: React.FC = () => (
  <>
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
      Time to Market
    </h2>
    <ul className="mt-1 space-y-2.5 md:space-y-3 text-sm md:text-base">
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Accelerate photo → live workflow for used cars</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>AI-driven data enrichment for speed & accuracy</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Better operational visibility across dealerships</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Automated tagging for categories & features</span>
      </li>
    </ul>
  </>
);

export default TimeToMarketSlideContent;
