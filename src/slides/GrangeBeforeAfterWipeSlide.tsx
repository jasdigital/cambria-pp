import React, { useState, useRef, useEffect } from "react";

const GrangeBeforeAfterWipeSlide: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeView, setActiveView] = useState<'interior' | 'external'>('interior');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleEnd = () => setIsDragging(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <>
      <h2 className="text-2xl md:text-4xl uppercase mb-4 md:mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <span className="font-bold">Used Car</span> <span className="font-light">Imagery</span>
      </h2>
      
      <div className="flex flex-col gap-4">
        {/* Toggle Buttons */}
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setActiveView('interior')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeView === 'interior'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Interior Shots
          </button>
          <button
            onClick={() => setActiveView('external')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeView === 'external'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            External Shots
          </button>
        </div>
        {/* Comparison Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-video bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden cursor-pointer select-none"
          onClick={handleClick}
        >
          {activeView === 'interior' ? (
            <>
              {/* Before (Right side) - Interior */}
              <div className="absolute inset-0">
                <img 
                  src="https://eu.cdn.autosonshow.tv/2645/dslr/DH74REV/e13.jpg?c1415c1a65ead7d2ce7cf343f547a2d4"
                  alt="Before - Interior photography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-lg md:text-xl font-semibold mb-2">Current Approach</p>
                  <ul className="text-xs md:text-sm space-y-1">
                    <li>• Inconsistent lighting</li>
                    <li>• Variable backgrounds</li>
                    <li>• Mixed photo quality</li>
                  </ul>
                </div>
              </div>

              {/* After (Left side - overlays Before) - Interior */}
              <div 
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="/lamborghini_2.jpg"
                  alt="After - Interior photography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-lg md:text-xl font-semibold mb-2">Premium Standard</p>
                  <ul className="text-xs md:text-sm space-y-1">
                    <li>• Professional DSLR photography</li>
                    <li>• Studio-quality lighting</li>
                    <li>• Consistent luxury presentation</li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Before (Right side) - External */}
              <div className="absolute inset-0">
                <img 
                  src="https://eu.cdn.autosonshow.tv/2645/dslr/DH74REV/e04.jpg?c1415c1a65ead7d2ce7cf343f547a2d4"
                  alt="Before - External photography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-lg md:text-xl font-semibold mb-2">Current Approach</p>
                  <ul className="text-xs md:text-sm space-y-1">
                    <li>• Inconsistent angles</li>
                    <li>• Variable alignment</li>
                    <li>• Mixed perspective quality</li>
                  </ul>
                </div>
              </div>

              {/* After (Left side - overlays Before) - External */}
              <div 
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="/lamborghini_1.jpg"
                  alt="After - External photography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-lg md:text-xl font-semibold mb-2">Premium Standard</p>
                  <ul className="text-xs md:text-sm space-y-1">
                    <li>• Perfect alignment & framing</li>
                    <li>• Consistent 3/4 perspective</li>
                    <li>• Professional composition</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* Handle Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-black" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <div 
            className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide"
            style={{ opacity: sliderPosition > 20 ? 1 : 0, transition: 'opacity 0.2s' }}
          >
            After
          </div>
          <div 
            className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide"
            style={{ opacity: sliderPosition < 80 ? 1 : 0, transition: 'opacity 0.2s' }}
          >
            Before
          </div>
        </div>

        {/* Instructions */}
        <p className="text-xs md:text-sm text-white/80 text-center">
          Click anywhere or drag the slider to compare before and after
        </p>
      </div>
    </>
  );
};

export default GrangeBeforeAfterWipeSlide;
