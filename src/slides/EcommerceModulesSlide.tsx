import React from "react";

const EcommerceModulesSlideContent: React.FC = () => {
  const modules = [
    {
      title: "Engage",
      description: "Showcase vehicles and convert interest.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 md:w-16 md:h-16">
          <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-336c-70.7 0-128 57.31-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 208c-44.2 0-80-35.82-80-80 0-44.18 35.8-80 80-80s80 35.82 80 80c0 44.2-35.8 80-80 80z"/>
        </svg>
      )
    },
    {
      title: "Offer",
      description: "Dynamic offers with real-time accuracy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 md:w-16 md:h-16">
          <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"/>
        </svg>
      )
    },
    {
      title: "Personalise",
      description: "Let customers easily build their perfect deal online.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 md:w-16 md:h-16">
          <path fill="currentColor" d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6.3-24.5-6.8-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6 4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2 5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8 8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z"/>
        </svg>
      )
    },
    {
      title: "Capture",
      description: "Turn engagement into action.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 md:w-16 md:h-16">
          <path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>
        </svg>
      )
    },
    {
      title: "Assist",
      description: "Support customers and teams in real time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 md:w-16 md:h-16">
          <path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <div className="mb-6 md:mb-8">
        <p className="text-sm md:text-base text-white/60 mb-2 uppercase tracking-wider">
         Fully Integrated eCommerce modules
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Clear route to buy online
        </h2>
        <p className="text-base md:text-lg text-white/80 max-w-3xl">
          Current Codeweavers-powered finance and reservation flow has friction points causing abandonment. Fully integrated eCommerce offers could provide a high-performance eCommerce engine powered by a 
          modular suite of components that you can turn on and tailor as needed.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {modules.map((module, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-5 md:p-6 hover:border-white/30 hover:scale-105 transition-all duration-300 flex flex-col items-start group"
          >
            <div className="text-white/80 mb-4 group-hover:scale-110 group-hover:text-white transition-all">
              {module.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
              {module.title}
            </h3>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              {module.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm md:text-base text-white/60">
          Integrated seamlessly into vehicle detail pages for a unified customer experience
        </p>
      </div>
    </>
  );
};

export default EcommerceModulesSlideContent;
