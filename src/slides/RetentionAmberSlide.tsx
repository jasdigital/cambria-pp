import React from "react";

const RetentionAmberSlideContent: React.FC = () => (
  <>
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
      Retention & Amber Work
    </h2>
    <ul className="mt-1 space-y-2.5 md:space-y-3 text-sm md:text-base">
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Automated MOT & WIP reminders</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Personalised, multi-channel messaging</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>WhatsApp and SMS layered with email</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Better post-service follow-up journeys</span>
      </li>
    </ul>
  </>
);

export default RetentionAmberSlideContent;
