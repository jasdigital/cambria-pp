import React from "react";

const GrangeSectionSlideContent: React.FC = () => {
  const brandLogos = [
    { src: "/images/logos/alpine-logo.svg", alt: "Alpine" },
    { src: "/images/logos/aston-martin-logo.svg", alt: "Aston Martin" },
    { src: "/images/logos/bentley-logo.svg", alt: "Bentley" },
    { src: "/images/logos/corvette-logo.svg", alt: "Corvette" },
    { src: "/images/webp/logos/lamborghini-logo.webp", alt: "Lamborghini" },
    { src: "/images/logos/land-rover-logo.svg", alt: "Land Rover" },
    { src: "/images/logos/mclaren-logo.svg", alt: "McLaren" },
    { src: "/images/logos/ineos-logo.svg", alt: "INEOS" },
    { src: "/images/logos/rolls-royce-logo.svg", alt: "Rolls-Royce" },
    { src: "/images/logos/triumph-logo.svg", alt: "Triumph" },
  ];

  return (
    <div className="h-full flex flex-col justify-center items-start gap-4 md:gap-6 max-w-2xl">
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight uppercase text-left leading-tight" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <span className="font-bold">Grange</span> Motors
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight uppercase text-left leading-tight mt-2 text-white/80" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Website Review
        </h2>
      </div>
      
      {/* Crosshair Separator */}
      <div className="flex items-center">
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style type="text/css">
              {`.crosshair-svg-1 { fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1.15px; } .crosshair-svg-2 { filter: url(#luminosity-noclip-grange); } .crosshair-svg-3 { mask: url(#crosshair-mask-grange); }`}
            </style>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="19.26" id="luminosity-noclip-grange" width="19.26" x=".37" y=".37">
              <feFlood floodColor="#fff" result="bg"></feFlood>
              <feBlend in="SourceGraphic" in2="bg"></feBlend>
            </filter>
            <mask height="19.26" id="crosshair-mask-grange" maskUnits="userSpaceOnUse" width="19.26" x=".37" y=".37">
              <g className="crosshair-svg-2">
                <rect height="12.84" transform="translate(-4.14 10) rotate(-45)" width="12.84" x="3.58" y="3.58"></rect>
              </g>
            </mask>
          </defs>
          <g className="crosshair-svg-3">
            <g>
              <line className="crosshair-svg-1" x1="19.23" x2=".77" y1=".77" y2="19.23"></line>
              <line className="crosshair-svg-1" x1=".77" x2="19.23" y1=".77" y2="19.23"></line>
            </g>
          </g>
        </svg>
      </div>

      {/* OEM Partnership Logos */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6 max-w-lg">
        {brandLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img 
              src={logo.src} 
              alt={logo.alt}
              className="h-6 md:h-8 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrangeSectionSlideContent;
