import React, { useState } from "react";

const GrangeBeforeAfterSlide: React.FC = () => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4 md:mb-6">
        Homepage Transformation
      </h2>
      
      <div className="flex flex-col gap-4">
        {/* Toggle Button */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setShowAfter(false)}
            className={`px-6 py-2 rounded-md font-semibold text-sm uppercase tracking-wide transition-all ${
              !showAfter
                ? "bg-white text-black"
                : "bg-white/20 text-white/60 hover:bg-white/30"
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`px-6 py-2 rounded-md font-semibold text-sm uppercase tracking-wide transition-all ${
              showAfter
                ? "bg-white text-black"
                : "bg-white/20 text-white/60 hover:bg-white/30"
            }`}
          >
            After
          </button>
        </div>

        {/* Image Container */}
        <div className="relative w-full aspect-video bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
          {!showAfter ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-lg md:text-xl font-semibold mb-4">Current Homepage</p>
                <ul className="text-sm md:text-base space-y-2 text-left max-w-md mx-auto">
                  <li>• Dense navigation structure</li>
                  <li>• Limited whitespace</li>
                  <li>• Generic hero imagery</li>
                  <li>• Unclear journey priorities</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-lg md:text-xl font-semibold mb-4">Proposed Homepage</p>
                <ul className="text-sm md:text-base space-y-2 text-left max-w-md mx-auto">
                  <li>• Simplified, premium navigation</li>
                  <li>• Generous whitespace and breathing room</li>
                  <li>• Luxury dealership photography</li>
                  <li>• Clear Used, New, Aftersales paths</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-xs md:text-sm text-white/80 text-center">
          Toggle between current and proposed designs to see the transformation
        </p>
      </div>
    </>
  );
};

export default GrangeBeforeAfterSlide;
