import React from "react";

const InvictaSectionSlideContent: React.FC = () => (
  <div className="h-full flex flex-col justify-center items-center gap-6 md:gap-8">
    <img 
      src="/images/logos/invicta.svg" 
      alt="Invicta Motors"
      className="h-20 md:h-28 w-auto object-contain"
    />
    <div className="w-24 h-1 bg-gray-800"></div>
  </div>
);

export default InvictaSectionSlideContent;
