import { motion } from "framer-motion";
import { useState } from "react";

interface SearchTerm {
  keyword: string;
  volume: number;
  competition: "Low" | "Medium" | "High";
  competitionIndex: number;
  bidLow: number;
  bidHigh: number;
  category: "brand" | "location" | "generic" | "model";
}

const searchTerms: SearchTerm[] = [
  { keyword: "mazda", volume: 9900, competition: "High", competitionIndex: 82, bidLow: 0.35, bidHigh: 2.14, category: "brand" },
  { keyword: "car dealers near me", volume: 9900, competition: "High", competitionIndex: 88, bidLow: 2.15, bidHigh: 8.42, category: "location" },
  { keyword: "mg", volume: 8100, competition: "Medium", competitionIndex: 65, bidLow: 0.28, bidHigh: 1.89, category: "brand" },
  { keyword: "subaru", volume: 6600, competition: "High", competitionIndex: 79, bidLow: 0.42, bidHigh: 2.56, category: "brand" },
  { keyword: "mazda dealer", volume: 2900, competition: "Medium", competitionIndex: 58, bidLow: 0.89, bidHigh: 3.24, category: "brand" },
  { keyword: "used cars near me", volume: 2400, competition: "High", competitionIndex: 91, bidLow: 1.86, bidHigh: 6.73, category: "location" },
  { keyword: "subaru dealer", volume: 1900, competition: "Medium", competitionIndex: 62, bidLow: 0.94, bidHigh: 3.45, category: "brand" },
  { keyword: "mg dealer", volume: 1600, competition: "Low", competitionIndex: 42, bidLow: 0.67, bidHigh: 2.18, category: "brand" },
  { keyword: "chery", volume: 1300, competition: "Low", competitionIndex: 38, bidLow: 0.15, bidHigh: 0.89, category: "brand" },
  { keyword: "car showroom near me", volume: 880, competition: "Medium", competitionIndex: 71, bidLow: 1.24, bidHigh: 4.56, category: "location" },
  { keyword: "new cars for sale", volume: 720, competition: "High", competitionIndex: 85, bidLow: 1.67, bidHigh: 5.92, category: "generic" },
  { keyword: "omoda", volume: 590, competition: "Low", competitionIndex: 28, bidLow: 0.12, bidHigh: 0.54, category: "brand" },
  { keyword: "mazda cx-5", volume: 480, competition: "Medium", competitionIndex: 68, bidLow: 0.78, bidHigh: 2.89, category: "model" },
  { keyword: "subaru outback", volume: 390, competition: "Medium", competitionIndex: 64, bidLow: 0.84, bidHigh: 3.12, category: "model" },
  { keyword: "jaecoo", volume: 320, competition: "Low", competitionIndex: 18, bidLow: 0.08, bidHigh: 0.32, category: "brand" },
  { keyword: "car dealers", volume: 2200, competition: "High", competitionIndex: 86, bidLow: 1.89, bidHigh: 7.24, category: "generic" },
  { keyword: "mazda showroom", volume: 390, competition: "Medium", competitionIndex: 56, bidLow: 0.74, bidHigh: 2.67, category: "brand" },
  { keyword: "mg zs", volume: 320, competition: "Low", competitionIndex: 48, bidLow: 0.52, bidHigh: 1.98, category: "model" },
  { keyword: "subaru forester", volume: 290, competition: "Medium", competitionIndex: 61, bidLow: 0.76, bidHigh: 2.89, category: "model" },
  { keyword: "new car showroom", volume: 260, competition: "Medium", competitionIndex: 73, bidLow: 1.34, bidHigh: 4.82, category: "generic" },
];

const totalVolume = searchTerms.reduce((sum, term) => sum + term.volume, 0);
const avgCompetition = Math.round(
  searchTerms.reduce((sum, term) => sum + term.competitionIndex, 0) / searchTerms.length
);
const highVolumeCount = searchTerms.filter(t => t.volume >= 2000).length;

type Category = "all" | "brand" | "location" | "generic" | "model";

export default function InvictaTopSearchTermsSlide() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  
  const filteredTerms = selectedCategory === "all" 
    ? searchTerms 
    : searchTerms.filter(term => term.category === selectedCategory);
  
  const categoryStats = {
    all: searchTerms.length,
    brand: searchTerms.filter(t => t.category === "brand").length,
    location: searchTerms.filter(t => t.category === "location").length,
    generic: searchTerms.filter(t => t.category === "generic").length,
    model: searchTerms.filter(t => t.category === "model").length,
  };
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-12">
      <div className="w-full max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-white uppercase mb-4 text-center tracking-tight"
        >
          Top Search Terms Analysis
        </motion.h2>

        {/* Category Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-4"
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "all"
                ? "bg-white text-[#0a64c3] shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            All Terms ({categoryStats.all})
          </button>
          <button
            onClick={() => setSelectedCategory("brand")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "brand"
                ? "bg-white text-[#0a64c3] shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            Brand ({categoryStats.brand})
          </button>
          <button
            onClick={() => setSelectedCategory("location")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "location"
                ? "bg-white text-[#0a64c3] shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            Location ({categoryStats.location})
          </button>
          <button
            onClick={() => setSelectedCategory("model")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "model"
                ? "bg-white text-[#0a64c3] shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            Model ({categoryStats.model})
          </button>
          <button
            onClick={() => setSelectedCategory("generic")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "generic"
                ? "bg-white text-[#0a64c3] shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            Generic ({categoryStats.generic})
          </button>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-4"
        >
          <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-xl">
            <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">Total Monthly Searches</div>
            <div className="text-3xl font-bold text-[#0a64c3]">{totalVolume.toLocaleString()}</div>
          </div>
          <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-xl">
            <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">Avg Competition</div>
            <div className="text-3xl font-bold text-amber-600">{avgCompetition}/100</div>
          </div>
          <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-xl">
            <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">Showing Terms</div>
            <div className="text-3xl font-bold text-emerald-600">{filteredTerms.length}</div>
          </div>
        </motion.div>

        {/* Search Terms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
          {filteredTerms.map((term, index) => {
            const competitionColor = 
              term.competition === "High" ? "bg-red-500" :
              term.competition === "Medium" ? "bg-amber-500" :
              "bg-emerald-500";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="bg-white/95 backdrop-blur rounded-xl p-5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 flex-1 mr-2">{term.keyword}</h3>
                  <span className={`${competitionColor} text-white text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap`}>
                    {term.competition}
                  </span>
                </div>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <div className="text-3xl font-bold text-[#0a64c3]">
                    {term.volume.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">searches/mo</div>
                </div>

                {/* Competition Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Competition Index</span>
                    <span className="font-bold">{term.competitionIndex}/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${term.competitionIndex}%` }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.8 }}
                      className={`h-full ${
                        term.competitionIndex >= 70 ? 'bg-red-500' :
                        term.competitionIndex >= 50 ? 'bg-amber-500' :
                        'bg-emerald-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Bid Range */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Bid Range:</span>
                  <span className="font-bold text-gray-800">
                    £{term.bidLow.toFixed(2)} - £{term.bidHigh.toFixed(2)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center text-white/70 text-sm"
        >
          Data from Google Keyword Planner · UK Market · Monthly Averages
          <div className="mt-2 text-xs text-white/50 italic">
            * Data shown is indicative and may include unverified, estimated, or time-dependent information
          </div>
        </motion.div>
      </div>
    </div>
  );
}
