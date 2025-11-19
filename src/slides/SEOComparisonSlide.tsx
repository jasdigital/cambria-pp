import React, { useState, useEffect } from "react";

interface CompetitorKeyword {
  keyword: string;
  volume: number;
  grangePosition: number;
  hrowenPosition: number;
  difficulty: number;
  grangePage: string;
  hrowenPage: string;
}

const SEOComparisonSlide: React.FC = () => {
  const [csvData, setCsvData] = useState<CompetitorKeyword[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/keywords/gap.keywords_2025-11-14T22_39_54.818Z.csv')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n').slice(1); // Skip header
        const parsed = lines
          .filter(line => line.trim())
          .map(line => {
            // Parse CSV with proper handling of quoted fields
            const cols: string[] = [];
            let current = '';
            let inQuotes = false;
            
            for (let i = 0; i < line.length; i++) {
              const char = line[i];
              if (char === '"') {
                inQuotes = !inQuotes;
              } else if (char === ',' && !inQuotes) {
                cols.push(current);
                current = '';
              } else {
                current += char;
              }
            }
            cols.push(current);

            return {
              keyword: cols[0]?.trim() || '',
              volume: parseInt(cols[2]) || 0,
              difficulty: parseInt(cols[3]) || 0,
              grangePosition: parseInt(cols[6]) || 999,
              hrowenPosition: parseInt(cols[7]) || 999,
              grangePage: cols[8]?.trim() || '',
              hrowenPage: cols[9]?.trim() || ''
            };
          })
          .filter(item => item.volume > 0 && item.keyword);
        
        setCsvData(parsed);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading CSV:', err);
        setLoading(false);
      });
  }, []);

  // Get top keywords by volume
  const topKeywords = csvData
    .sort((a, b) => b.volume - a.volume)
    .slice(0, 10);

  const getPositionColor = (position: number) => {
    if (position <= 3) return "text-green-400";
    if (position <= 10) return "text-yellow-400";
    if (position <= 30) return "text-orange-400";
    return "text-red-400";
  };

  const getComparisonIcon = (grange: number, competitor: number) => {
    if (grange < competitor) {
      return (
        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 576 512" fill="currentColor">
          <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
        </svg>
      );
    }
    if (grange === competitor) {
      return (
        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 640 512" fill="currentColor">
          <path d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32z"/>
        </svg>
      );
    }
    return (
      <svg className="w-5 h-5 text-red-400" viewBox="0 0 448 512" fill="currentColor">
        <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/>
      </svg>
    );
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-white text-2xl">Loading competitor data...</div>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3 md:mb-4">
        Competitor Keyword Gap Analysis
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
        Top luxury automotive keywords: Grange vs HR Owen
      </p>
      
      <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
        {topKeywords.map((item, idx) => (
          <div 
            key={idx}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-2 md:p-3 hover:bg-black/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 mb-2">
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-semibold">
                  {item.keyword}
                </h3>
                <p className="text-xs text-white/60">
                  Volume: {item.volume.toLocaleString()} | Difficulty: {item.difficulty}%
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/60">Grange:</span>
                  <span className={`text-lg md:text-xl font-bold ${getPositionColor(item.grangePosition)}`}>
                    #{item.grangePosition}
                  </span>
                </div>
                {getComparisonIcon(item.grangePosition, item.hrowenPosition)}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/60">HR Owen:</span>
                  <span className={`text-lg md:text-xl font-bold ${getPositionColor(item.hrowenPosition)}`}>
                    #{item.hrowenPosition}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-xs justify-center flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <span className="text-white/70">Top 3</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <span className="text-white/70">Top 10</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
          <span className="text-white/70">Top 30</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <span className="text-white/70">31+</span>
        </div>
        <div className="mx-4 border-l border-white/20"></div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 576 512" fill="currentColor">
            <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
          </svg>
          <span className="text-white/70">Grange Winning</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-red-400" viewBox="0 0 448 512" fill="currentColor">
            <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/>
          </svg>
          <span className="text-white/70">Opportunity</span>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-white/50 text-center italic">
        * Data shown is indicative and may include unverified, estimated, or time-dependent information
      </div>
    </>
  );
};

export default SEOComparisonSlide;
