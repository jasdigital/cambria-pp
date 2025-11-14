import React from "react";

const NextStepsSlideContent: React.FC = () => (
  <>
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
      Next Steps
    </h2>
    <ul className="mt-1 space-y-2.5 md:space-y-3 text-sm md:text-base">
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>0–30 days: Quick Wins in UX, copy & journeys</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>30–90 days: Platform and performance improvements</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Q2–Q3: AI & data enrichment across stock & journeys</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Longer term: Full digital transformation roadmap</span>
      </li>
    </ul>
  </>
);

export default NextStepsSlideContent;
