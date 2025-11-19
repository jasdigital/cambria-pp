import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface CSVKeyword {
  keyword: string;
  position: number;
  volume: number;
  competition: number;
  traffic: number;
  url: string;
}

interface KeywordOpportunity {
  keyword: string;
  volume: number;
  competition: number;
  opportunityScore: number;
  type: "quick-win" | "high-value" | "long-tail" | "competitive";
  position: number;
  traffic: number;
}

type ViewMode = "opportunities" | "detailed";

export default function GrangeLocationSearchSlide() {
  const [csvData, setCsvData] = useState<CSVKeyword[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>("opportunities");
  const [loading, setLoading] = useState(true);

  // Load CSV data
  useEffect(() => {
    fetch('/keywords/grange.co.uk-organic.Positions-uk-20251113-2025-11-14T22_14_52Z.csv')
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
              position: parseInt(cols[1]) || 999,
              volume: parseInt(cols[3]) || 0,
              competition: parseInt(cols[4]) || 0,
              traffic: parseInt(cols[7]) || 0,
              url: cols[6]?.trim() || ''
            };
          })
          .filter(item => 
            item.volume > 0 && 
            item.keyword && 
            item.volume >= 1300 &&
            !item.keyword.toLowerCase().includes('vauxhall')
          );
        
        setCsvData(parsed);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading CSV:', err);
        setLoading(false);
      });
  }, []);

  // Calculate opportunity scores
  const calculateOpportunities = (): KeywordOpportunity[] => {
    return csvData.map(term => {
      const opportunityScore = (term.volume / 10) * ((100 - term.competition) / 100);
      
      let type: KeywordOpportunity['type'];
      if (term.competition < 50 && term.volume > 1500) {
        type = "quick-win";
      } else if (term.volume > 500) {
        type = "high-value";
      } else if (term.volume < 2000 && term.competition < 60) {
        type = "long-tail";
      } else {
        type = "competitive";
      }
      
      return {
        keyword: term.keyword,
        volume: term.volume,
        competition: term.competition,
        opportunityScore,
        type,
        position: term.position,
        traffic: term.traffic
      };
    }).sort((a, b) => b.opportunityScore - a.opportunityScore);
  };

  const opportunities = calculateOpportunities();
  const totalSearchVolume = csvData.reduce((sum, item) => sum + item.volume, 0);
  const avgPosition = Math.round(csvData.reduce((sum, item) => sum + item.position, 0) / csvData.length);
  const quickWins = opportunities.filter(o => o.type === 'quick-win');
  const highValue = opportunities.filter(o => o.type === 'high-value');
  const longTail = opportunities.filter(o => o.type === 'long-tail');

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-white text-2xl">Loading keyword data...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-2 md:p-4 overflow-hidden">
      <div className="w-full max-w-[95%] h-full flex flex-col overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
            SEO Keyword Analysis
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("opportunities")}
              className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
                viewMode === "opportunities" ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Opportunities
            </button>
            <button
              onClick={() => setViewMode("detailed")}
              className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
                viewMode === "detailed" ? "bg-white text-black" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              Detailed
            </button>
          </div>
        </motion.div>

        {/* Scrollable Content Area */}
        <div 
          className="flex-1 overflow-y-auto pr-2"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.3) transparent'
          }}
        >
          {/* Opportunities View */}
          {viewMode === 'opportunities' && (
            <div className="overflow-y-auto max-h-[600px]">
              <div className="space-y-6">
              
              {/* Overview Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Performance Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Keywords:</span>
                      <span className="text-white font-bold">{csvData.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Total Search Volume:</span>
                      <span className="text-white font-bold">{totalSearchVolume.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Avg Position:</span>
                      <span className="text-white font-bold">{avgPosition}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <h3 className="text-lg font-bold text-green-400 mb-3">Wins Available</h3>
                  <p className="text-gray-300 mb-2 text-xs">Low competition + decent volume:</p>
                  <div className="text-3xl font-bold text-green-400">
                    {quickWins.length}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Opportunities ready to capture</p>
                </div>

                <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <h3 className="text-lg font-bold text-yellow-400 mb-3">Top Opportunities</h3>
                  <div className="space-y-1.5 max-h-[120px] overflow-y-auto">
                    {opportunities.slice(0, 5).map((opp, idx) => (
                      <div key={idx} className="bg-white/5 rounded p-2">
                        <div className="text-white font-medium text-xs mb-0.5">{opp.keyword}</div>
                        <div className="flex gap-3 text-[10px] text-gray-400">
                          <span>Vol: {opp.volume.toLocaleString()}</span>
                          <span className="text-yellow-400">Score: {opp.opportunityScore.toFixed(1)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Opportunity */}
              <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <h3 className="text-xl font-bold text-green-400 mb-3">
                Opportunity ({quickWins.length})
              </h3>
              <p className="text-gray-300 mb-3 text-sm">Low competition + decent volume = easy ranking gains</p>
              <div className="grid grid-cols-3 gap-3">
                {quickWins.slice(0, 12).map((opp, idx) => (
                  <div key={idx} className="bg-white/5 rounded p-3">
                    <div className="text-white font-medium text-sm mb-2">{opp.keyword}</div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Vol: {opp.volume.toLocaleString()}</span>
                      <span className="text-green-400">Comp: {opp.competition}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

              {/* High Value */}
              <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">
                High Value ({highValue.length})
              </h3>
              <p className="text-gray-300 mb-3 text-sm">Keywords with volume exceeding 500 searches/month</p>
              <div className="grid grid-cols-3 gap-3">
                {highValue.slice(0, 12).map((opp, idx) => (
                  <div key={idx} className="bg-white/5 rounded p-3">
                    <div className="text-white font-medium text-sm mb-2">{opp.keyword}</div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span className="text-yellow-400">Vol: {opp.volume.toLocaleString()}</span>
                      <span>Comp: {opp.competition}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

              {/* Long Tail */}
              <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                Long Tail
              </h3>
              <p className="text-gray-300 mb-3 text-sm">Low volume but highly targeted and easy to rank</p>
              <div className="grid grid-cols-4 gap-2">
                {longTail.slice(0, 16).map((opp, idx) => (
                  <div key={idx} className="bg-white/5 rounded p-2 text-center">
                    <div className="text-white text-xs mb-1 truncate">{opp.keyword}</div>
                    <div className="text-xs text-blue-400">Vol: {opp.volume}</div>
                  </div>
                ))}
              </div>
            </div>

              {/* Content Expansion Opportunities */}
              <div className="grid grid-cols-2 gap-6">
                {/* Question-Based Keywords */}
                <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">
                    Question-Based Keywords
                  </h3>
                  <p className="text-gray-300 mb-3 text-sm">Create content answering these searches</p>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">How much does a Bentley cost?</div>
                      <div className="text-xs text-gray-400">Search Intent: Price Research · Create: Model Price Guide</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">What is the best luxury car?</div>
                      <div className="text-xs text-gray-400">Search Intent: Comparison · Create: Buyer's Guide</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">Where can I buy a Lamborghini?</div>
                      <div className="text-xs text-gray-400">Search Intent: Dealer Location · Create: Showroom Locator Content</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">How to finance a luxury car?</div>
                      <div className="text-xs text-gray-400">Search Intent: Finance Options · Create: Finance Guide</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">Are Rolls Royce reliable?</div>
                      <div className="text-xs text-gray-400">Search Intent: Ownership Research · Create: Reliability & Ownership Guides</div>
                    </div>
                  </div>
                </div>

                {/* Location-Based Long Tail */}
                <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                  <h3 className="text-xl font-bold text-teal-400 mb-3">
                    Location + Intent Keywords
                  </h3>
                  <p className="text-gray-300 mb-3 text-sm">High-intent local searches targeting Grange locations</p>
                  <div className="space-y-2">
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">Bentley dealer Swindon</div>
                      <div className="text-xs text-purple-400">Vol: ~320/mo · Low Comp · Optimize: Swindon Showroom Page</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">Lamborghini showroom Hatfield</div>
                      <div className="text-xs text-purple-400">Vol: ~280/mo · Medium Comp · Create: Hatfield Location Content</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">Aston Martin dealer Barnet</div>
                      <div className="text-xs text-purple-400">Vol: ~410/mo · Low Comp · Optimize: Barnet Showroom Pages</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">Rolls Royce service Brentford</div>
                      <div className="text-xs text-purple-400">Vol: ~190/mo · Low Comp · Create: Brentford Service Hub</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">McLaren dealer Hatfield Hertfordshire</div>
                      <div className="text-xs text-purple-400">Vol: ~340/mo · Medium Comp · Create: Hertfordshire Landing Page</div>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <div className="text-white font-medium text-sm mb-1">Luxury car dealership near Welwyn Garden City</div>
                      <div className="text-xs text-purple-400">Vol: ~220/mo · Low Comp · Optimize: Local SEO & Maps Listing</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Gap Analysis */}
              <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <h3 className="text-xl font-bold text-orange-400 mb-3">
                  Content Gap Analysis
                </h3>
                <p className="text-gray-300 mb-3 text-sm">Topics competitors rank for that Grange doesn't</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="text-white font-semibold text-sm mb-2">Model Comparisons</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Bentley vs Rolls Royce comparison</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Best supercar for daily driving</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Lamborghini Urus vs Bentley Bentayga</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">McLaren 720S vs Ferrari F8</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white font-semibold text-sm mb-2">Ownership Guides</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Cost of owning a Lamborghini</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Bentley maintenance schedule</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Supercar insurance costs UK</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Luxury car depreciation guide</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white font-semibold text-sm mb-2">Buying Guides</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">First time supercar buyer guide</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">What to look for buying used Bentley</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Best time to buy a luxury car</div>
                    <div className="bg-white/5 rounded p-2 text-xs text-white/80">Luxury car finance explained</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          )}

          {/* Detailed View */}
          {viewMode === 'detailed' && (
            <div className="rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <div className="overflow-x-auto max-h-[600px]">
                <table className="w-full text-left">
                  <thead className="bg-white/10 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-white font-semibold">Keyword</th>
                      <th className="px-4 py-3 text-white font-semibold">Position</th>
                      <th className="px-4 py-3 text-white font-semibold">Trend</th>
                      <th className="px-4 py-3 text-white font-semibold">Volume</th>
                      <th className="px-4 py-3 text-white font-semibold">Competition</th>
                      <th className="px-4 py-3 text-white font-semibold">Traffic</th>
                      <th className="px-4 py-3 text-white font-semibold">Opp Score</th>
                      <th className="px-4 py-3 text-white font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {opportunities.map((opp, index) => (
                      <motion.tr
                        key={opp.keyword}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.02 }}
                        className="border-b border-white/10 hover:bg-white/5"
                      >
                        <td className="px-4 py-3 text-white">{opp.keyword}</td>
                        <td className="px-4 py-3 text-white/80">{opp.position}</td>
                        <td className="px-4 py-3">
                          {opp.position <= 3 ? (
                            <span className="text-green-400 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              Strong
                            </span>
                          ) : opp.position <= 10 ? (
                            <span className="text-blue-400 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                              Good
                            </span>
                          ) : opp.position <= 20 ? (
                            <span className="text-yellow-400 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                              </svg>
                              Page 2
                            </span>
                          ) : (
                            <span className="text-red-400 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                              </svg>
                              Needs Work
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-white/80">{opp.volume.toLocaleString()}</td>
                        <td className="px-4 py-3 text-white/80">{opp.competition}%</td>
                        <td className="px-4 py-3 text-white/80">{opp.traffic}</td>
                        <td className="px-4 py-3 text-yellow-400 font-semibold">
                          {Math.round(opp.opportunityScore)}
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs ${
                            opp.type === 'quick-win' ? 'bg-green-500/20 text-green-400' :
                            opp.type === 'high-value' ? 'bg-yellow-500/20 text-yellow-400' :
                            opp.type === 'long-tail' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {opp.type === 'quick-win' ? 'opportunity' : opp.type.replace('-', ' ')}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}          {/* Footer */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-white/70 text-sm"
        >
          Live data from Semrush · UK Market · Updated {new Date().toLocaleDateString()}
          <div className="mt-2 text-xs text-white/50 italic">
            * Data shown is indicative and may include unverified, estimated, or time-dependent information
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

