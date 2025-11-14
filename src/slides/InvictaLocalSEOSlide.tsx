import { motion } from "framer-motion";

interface LocationData {
  name: string;
  volume: number;
  x: number; // Percentage position on map
  y: number; // Percentage position on map
  brand: 'invicta' | 'motorparks' | 'county';
}

const locations: LocationData[] = [
  { name: "County Motorparks Chelmsford", volume: 98, x: 72, y: 58, brand: 'county' },
  { name: "Invicta Chery Barnet", volume: 22, x: 68, y: 52, brand: 'invicta' },
  { name: "Invicta Chery Bury", volume: 27, x: 58, y: 35, brand: 'invicta' },
  { name: "Invicta Chery Chelmsford", volume: 53, x: 72, y: 58, brand: 'invicta' },
  { name: "Invicta Chery Oldham", volume: 27, x: 56, y: 32, brand: 'invicta' },
  { name: "Invicta Chery Warrington", volume: 2, x: 54, y: 32, brand: 'invicta' },
  { name: "Invicta Horsham", volume: 37, x: 65, y: 65, brand: 'invicta' },
  { name: "Invicta Jaecoo Bolton", volume: 1, x: 55, y: 33, brand: 'invicta' },
  { name: "Invicta Mazda Bolton", volume: 37, x: 55, y: 33, brand: 'invicta' },
  { name: "Invicta Mazda Croydon", volume: 21, x: 68, y: 58, brand: 'invicta' },
  { name: "Invicta Mazda Maidstone", volume: 32, x: 72, y: 62, brand: 'invicta' },
  { name: "Invicta Mazda Northampton", volume: 28, x: 63, y: 50, brand: 'invicta' },
  { name: "Invicta MG Canterbury", volume: 18, x: 76, y: 62, brand: 'invicta' },
  { name: "Invicta MG Croydon", volume: 28, x: 68, y: 58, brand: 'invicta' },
  { name: "Invicta MG Maidstone", volume: 25, x: 72, y: 62, brand: 'invicta' },
  { name: "Invicta Omoda Ashford", volume: 39, x: 74, y: 64, brand: 'invicta' },
  { name: "Invicta Omoda Barnet", volume: 1, x: 68, y: 52, brand: 'invicta' },
  { name: "Invicta Omoda Bolton", volume: 2, x: 55, y: 33, brand: 'invicta' },
  { name: "Invicta Omoda Preston", volume: 5, x: 54, y: 28, brand: 'invicta' },
  { name: "Invicta Omoda Ramsgate", volume: 35, x: 78, y: 62, brand: 'invicta' },
  { name: "Invicta Subaru Crawley", volume: 34, x: 67, y: 62, brand: 'invicta' },
  { name: "Motorparks Bury", volume: 25, x: 58, y: 35, brand: 'motorparks' },
  { name: "Motorparks Canterbury", volume: 73, x: 76, y: 62, brand: 'motorparks' },
  { name: "Motorparks Oldham", volume: 33, x: 56, y: 32, brand: 'motorparks' },
  { name: "Motorparks Preston", volume: 134, x: 54, y: 28, brand: 'motorparks' },
  { name: "Motorparks Warrington", volume: 61, x: 54, y: 32, brand: 'motorparks' },
];

// Group by volume tiers
const highVolume = locations.filter(l => l.volume >= 50);
const mediumVolume = locations.filter(l => l.volume >= 25 && l.volume < 50);
const lowVolume = locations.filter(l => l.volume < 25);

export default function InvictaLocalSEOSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-16">
      <div className="w-full max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white uppercase mb-8 text-center tracking-tight"
        >
          Local SEO Audit
        </motion.h2>

        <div className="grid md:grid-cols-[1.5fr,1fr] gap-6">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-white/95 backdrop-blur rounded-xl p-6 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Geographic Distribution</h3>
            
            {/* Simplified UK Map */}
            <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
              {/* UK Outline - Simplified */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 120">
                <path
                  d="M 50 10 L 60 15 L 65 25 L 70 30 L 75 40 L 78 50 L 78 60 L 75 70 L 72 80 L 68 90 L 65 95 L 60 100 L 55 102 L 50 103 L 45 102 L 40 100 L 35 95 L 32 90 L 28 80 L 25 70 L 22 60 L 22 50 L 25 40 L 30 30 L 35 25 L 40 20 L 45 15 Z"
                  fill="rgba(148, 163, 184, 0.3)"
                  stroke="rgba(100, 116, 139, 0.5)"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Location Pins */}
              {locations.map((location, index) => {
                const size = location.volume >= 50 ? 12 : location.volume >= 25 ? 9 : 6;
                const color = 
                  location.brand === 'county' ? '#10b981' : 
                  location.brand === 'motorparks' ? '#f59e0b' : 
                  '#0a64c3';
                
                return (
                  <motion.g
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.02 }}
                  >
                    <circle
                      cx={location.x}
                      cy={location.y}
                      r={size / 2}
                      fill={color}
                      opacity={0.8}
                      className="cursor-pointer hover:opacity-100"
                    >
                      <title>{`${location.name}: ${location.volume} searches/month`}</title>
                    </circle>
                    {/* Pulse animation for high volume */}
                    {location.volume >= 50 && (
                      <circle
                        cx={location.x}
                        cy={location.y}
                        r={size / 2}
                        fill="none"
                        stroke={color}
                        strokeWidth="1.5"
                        opacity={0.6}
                      >
                        <animate
                          attributeName="r"
                          from={size / 2}
                          to={size * 1.5}
                          dur="2s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.6"
                          to="0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </motion.g>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#0a64c3]"></div>
                <span className="text-gray-700">Invicta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                <span className="text-gray-700">Motorparks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                <span className="text-gray-700">County</span>
              </div>
            </div>
          </motion.div>

          {/* Volume Stats */}
          <div className="flex flex-col gap-4">
            {/* High Volume */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-5 shadow-xl"
            >
              <h4 className="text-white font-bold text-lg mb-3">High Volume (50+)</h4>
              <div className="space-y-2">
                {highVolume.sort((a, b) => b.volume - a.volume).map((loc, i) => (
                  <div key={i} className="flex justify-between items-center text-white/90 text-sm">
                    <span className="font-medium">{loc.name.split(' ').slice(-1)}</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded font-bold">{loc.volume}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Medium Volume */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-5 shadow-xl"
            >
              <h4 className="text-white font-bold text-lg mb-3">Medium Volume (25-49)</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {mediumVolume.sort((a, b) => b.volume - a.volume).map((loc, i) => (
                  <div key={i} className="flex justify-between items-center text-white/90 bg-white/10 rounded px-2 py-1">
                    <span className="truncate">{loc.name.split(' ').slice(-1)}</span>
                    <span className="font-bold ml-1">{loc.volume}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Low Volume */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl p-5 shadow-xl"
            >
              <h4 className="text-white font-bold text-lg mb-2">Low Volume (&lt;25)</h4>
              <div className="flex flex-wrap gap-1 text-xs">
                {lowVolume.map((loc, i) => (
                  <span key={i} className="bg-white/20 text-white px-2 py-1 rounded">
                    {loc.name.split(' ').slice(-1)} ({loc.volume})
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Total Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/95 backdrop-blur rounded-xl p-5 shadow-xl"
            >
              <h4 className="text-gray-800 font-bold text-lg mb-2">Total Monthly Searches</h4>
              <div className="text-4xl font-bold text-[#0a64c3]">
                {locations.reduce((sum, loc) => sum + loc.volume, 0).toLocaleString()}
              </div>
              <p className="text-sm text-gray-600 mt-1">across {locations.length} locations</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
