import React from "react";

const InvictaSlideContent: React.FC = () => (
  <>
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
      Invicta — Digital Review
    </h2>
    <ul className="mt-1 space-y-2.5 md:space-y-3 text-sm md:text-base">
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Improve product placement visual hierarchy</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Leverage local events & partnerships for content</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Enhance social photography quality and consistency</span>
      </li>
      <li className="flex gap-3 items-start">
        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
        <span>Fix reservation & finance redirect issues</span>
      </li>
    </ul>
  </>
);

export default InvictaSlideContent;
