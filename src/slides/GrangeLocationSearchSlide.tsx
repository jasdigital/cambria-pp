import { motion } from "framer-motion";
import { useState } from "react";

interface SearchTerm {
  keyword: string;
  volume: number;
  competition: "Low" | "Medium" | "High";
  competitionIndex: number;
  bidLow: number;
  bidHigh: number;
  category: "premium" | "luxury" | "specialist" | "service";
}

const searchTerms: SearchTerm[] = [
  { keyword: "Land Rover Hatfield", volume: 252, competition: "High", competitionIndex: 78, bidLow: 1.24, bidHigh: 4.89, category: "premium" },
  { keyword: "INEOS Midlands", volume: 42, competition: "Medium", competitionIndex: 52, bidLow: 0.67, bidHigh: 2.34, category: "specialist" },
  { keyword: "Grange Brentwood", volume: 39, competition: "Medium", competitionIndex: 58, bidLow: 0.89, bidHigh: 3.12, category: "premium" },
  { keyword: "Aston Martin Edinburgh", volume: 26, competition: "High", competitionIndex: 72, bidLow: 1.45, bidHigh: 5.67, category: "luxury" },
  { keyword: "Aston Martin Birmingham", volume: 22, competition: "High", competitionIndex: 74, bidLow: 1.38, bidHigh: 5.34, category: "luxury" },
  { keyword: "Aston Martin Brentwood", volume: 21, competition: "High", competitionIndex: 71, bidLow: 1.42, bidHigh: 5.45, category: "luxury" },
  { keyword: "Grange Hatfield - Jaguar Approved", volume: 19, competition: "Medium", competitionIndex: 62, bidLow: 0.94, bidHigh: 3.56, category: "premium" },
  { keyword: "Grange Barnet - Jaguar Authorised Service", volume: 17, competition: "Low", competitionIndex: 45, bidLow: 0.78, bidHigh: 2.89, category: "service" },
  { keyword: "Grange Barnet - Land Rover Authorised Service", volume: 17, competition: "Low", competitionIndex: 48, bidLow: 0.82, bidHigh: 2.98, category: "service" },
  { keyword: "Bentley Tunbridge Wells", volume: 15, competition: "High", competitionIndex: 76, bidLow: 1.56, bidHigh: 6.12, category: "luxury" },
  { keyword: "Bentley Chelmsford", volume: 13, competition: "High", competitionIndex: 75, bidLow: 1.52, bidHigh: 5.98, category: "luxury" },
  { keyword: "INEOS Edinburgh", volume: 10, competition: "Medium", competitionIndex: 48, bidLow: 0.58, bidHigh: 2.12, category: "specialist" },
  { keyword: "Aston Martin Hatfield", volume: 9, competition: "High", competitionIndex: 73, bidLow: 1.39, bidHigh: 5.42, category: "luxury" },
  { keyword: "Lamborghini Chelmsford", volume: 8, competition: "High", competitionIndex: 81, bidLow: 1.89, bidHigh: 7.34, category: "luxury" },
  { keyword: "Lamborghini Tunbridge Wells", volume: 7, competition: "High", competitionIndex: 80, bidLow: 1.84, bidHigh: 7.18, category: "luxury" },
  { keyword: "McLaren Hatfield", volume: 6, competition: "High", competitionIndex: 82, bidLow: 1.92, bidHigh: 7.56, category: "luxury" },
  { keyword: "Alpine Edinburgh", volume: 3, competition: "Low", competitionIndex: 35, bidLow: 0.42, bidHigh: 1.67, category: "specialist" },
  { keyword: "Rolls-Royce Motor Cars Edinburgh", volume: 3, competition: "High", competitionIndex: 79, bidLow: 1.78, bidHigh: 6.89, category: "luxury" },
  { keyword: "Corvette Birmingham", volume: 2, competition: "Low", competitionIndex: 38, bidLow: 0.48, bidHigh: 1.89, category: "specialist" },
];

const totalVolume = searchTerms.reduce((sum, term) => sum + term.volume, 0);
const avgCompetition = Math.round(
  searchTerms.reduce((sum, term) => sum + term.competitionIndex, 0) / searchTerms.length
);

type Category = "all" | "premium" | "luxury" | "specialist" | "service";

export default function GrangeLocationSearchSlide() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  
  const filteredTerms = selectedCategory === "all" 
    ? searchTerms 
    : searchTerms.filter(term => term.category === selectedCategory);
  
  const categoryStats = {
    all: searchTerms.length,
    premium: searchTerms.filter(t => t.category === "premium").length,
    luxury: searchTerms.filter(t => t.category === "luxury").length,
    specialist: searchTerms.filter(t => t.category === "specialist").length,
    service: searchTerms.filter(t => t.category === "service").length,
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-12">
      <div className="w-full max-w-7xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-white uppercase mb-4 text-center tracking-tight"
        >
          Grange Location Search Analysis
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
                ? "bg-white text-black shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            All Locations ({categoryStats.all})
          </button>
          <button
            onClick={() => setSelectedCategory("premium")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "premium"
                ? "bg-white text-black shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            Premium ({categoryStats.premium})
          </button>
          <button
            onClick={() => setSelectedCategory("luxury")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "luxury"
                ? "bg-white text-black shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            Luxury ({categoryStats.luxury})
          </button>
          <button
            onClick={() => setSelectedCategory("specialist")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "specialist"
                ? "bg-white text-black shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            Specialist ({categoryStats.specialist})
          </button>
          <button
            onClick={() => setSelectedCategory("service")}
            className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
              selectedCategory === "service"
                ? "bg-white text-black shadow-2xl scale-105"
                : "bg-white/40 text-white hover:bg-white/60"
            }`}
          >
            Service ({categoryStats.service})
          </button>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-4"
        >
          <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-xl">
            <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">Total Monthly Searches</div>
            <div className="text-3xl font-bold text-black">{totalVolume.toLocaleString()}</div>
          </div>
          <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-xl">
            <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">Avg Competition</div>
            <div className="text-3xl font-bold text-amber-600">{avgCompetition}/100</div>
          </div>
          <div className="bg-white/95 backdrop-blur rounded-xl p-4 text-center shadow-xl">
            <div className="text-sm text-gray-600 uppercase tracking-wide mb-1">Showing Locations</div>
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
            
            const categoryColor = 
              term.category === "luxury" ? "text-purple-600" :
              term.category === "premium" ? "text-blue-600" :
              term.category === "specialist" ? "text-teal-600" :
              "text-gray-600";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="bg-white/95 backdrop-blur rounded-xl p-5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-base font-bold ${categoryColor} flex-1 mr-2`}>{term.keyword}</h3>
                  <span className={`${competitionColor} text-white text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap`}>
                    {term.competition}
                  </span>
                </div>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <div className="text-3xl font-bold text-black">
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
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.8 }}
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
        </motion.div>
      </div>
    </div>
  );
}
