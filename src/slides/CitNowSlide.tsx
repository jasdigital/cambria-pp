import React from "react";

const CitNowSlideContent: React.FC = () => (
  <>
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
      CitNow & Media Standards
    </h2>
    <ul className="mt-1 space-y-2.5 md:space-y-3 text-sm md:text-base">
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Apply consistent media guidelines across brands</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Improve minimum quality thresholds for photos & video</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Integrate CitNow content into CRM and UVD pages</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Use rich media in outbound comms and remarketing</span>
      </li>
    </ul>
  </>
);

export default CitNowSlideContent;
