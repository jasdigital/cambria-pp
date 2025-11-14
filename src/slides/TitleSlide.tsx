import React from "react";

const TitleSlideContent: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full">
    {/* Left: Cambria Logo */}
    <div className="flex items-center justify-center">
      <img 
        src="https://motorparksimages.blob.core.windows.net/cgassets/cambriaautomobiles_500.png" 
        alt="Cambria Automobiles"
        className="w-full max-w-md h-auto object-contain"
      />
    </div>
    
    {/* Right: Title Block */}
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <span className="font-bold">Marketing</span> Review
        
      </h1>
      
      <p className="text-xl md:text-2xl text-white/90 font-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <span className="font-bold">Cambria Automobiles</span> · <span className="font-bold">Grange Automotive</span> · <span className="font-bold">Invicta</span>
      </p>
    </div>
  </div>
);

export default TitleSlideContent;
