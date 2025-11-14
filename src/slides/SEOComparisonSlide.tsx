import React from "react";

const SEOComparisonSlide: React.FC = () => {
  const seoData = [
    {
      term: "used cars london",
      volume: "12,100",
      grange: 8,
      competitors: [
        { name: "AutoTrader", position: 1 },
        { name: "Cinch", position: 2 },
        { name: "Motors.co.uk", position: 4 },
      ]
    },
    {
      term: "mercedes dealer london",
      volume: "8,900",
      grange: 3,
      competitors: [
        { name: "Mercedes-Benz", position: 1 },
        { name: "Stratstone", position: 2 },
      ]
    },
    {
      term: "bmw approved used",
      volume: "6,400",
      grange: 12,
      competitors: [
        { name: "BMW UK", position: 1 },
        { name: "Lookers", position: 5 },
        { name: "Sytner", position: 7 },
      ]
    },
    {
      term: "porsche dealer",
      volume: "5,200",
      grange: 15,
      competitors: [
        { name: "Porsche Centre", position: 1 },
        { name: "Dick Lovett", position: 6 },
        { name: "Jardine", position: 9 },
      ]
    },
    {
      term: "premium car dealership",
      volume: "3,800",
      grange: 6,
      competitors: [
        { name: "HR Owen", position: 3 },
        { name: "Marshall", position: 4 },
        { name: "Stratstone", position: 5 },
      ]
    },
  ];

  const getPositionColor = (position: number) => {
    if (position <= 3) return "text-green-400";
    if (position <= 10) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3 md:mb-4">
        SEO Performance Analysis
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
        Top search terms by volume with current positions vs. competitors
      </p>
      
      <div className="space-y-3">
        {seoData.map((item, idx) => (
          <div 
            key={idx}
            className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-3 md:p-4"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-2">
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-semibold">
                  {item.term}
                </h3>
                <p className="text-xs text-white/60">
                  Monthly Volume: {item.volume}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/60">Grange:</span>
                <span className={`text-lg md:text-xl font-bold ${getPositionColor(item.grange)}`}>
                  #{item.grange}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
              {item.competitors.map((competitor, cidx) => (
                <div 
                  key={cidx}
                  className="flex items-center gap-2 bg-white/5 rounded px-2 py-1 text-xs"
                >
                  <span className="text-white/70">{competitor.name}</span>
                  <span className={`font-semibold ${getPositionColor(competitor.position)}`}>
                    #{competitor.position}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-xs justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <span className="text-white/70">Top 3</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <span className="text-white/70">Top 10</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <span className="text-white/70">11+</span>
        </div>
      </div>
    </>
  );
};

export default SEOComparisonSlide;
