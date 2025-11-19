import React from "react";

const InvictaSlideContent: React.FC = () => (
  <div className="h-full flex flex-col">
    <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3">
      Invicta — Digital Review
    </h2>
    
    {/* Key Challenges */}
    <div className="grid md:grid-cols-2 gap-3 mb-3">
      <div className="bg-gradient-to-br from-red-500/20 to-red-600/30 backdrop-blur-sm border border-red-500/40 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <h3 className="text-sm md:text-base font-bold">Brand Term Ownership</h3>
        </div>
        <p className="text-xs md:text-sm text-white/90">
          Not ranking #1 for "Invicta" — losing own brand traffic to competitors and directory sites. Must establish authority and reclaim top position.
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-sm border border-purple-500/40 rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
          <h3 className="text-sm md:text-base font-bold">Time to Market & Stock Overlap</h3>
        </div>
        <p className="text-xs md:text-sm text-white/90 mb-2">
          Used car listings compete with Motorparks inventory. Slow photo-to-live workflow impacts visibility and sales velocity across both brands.
        </p>
        <div className="flex flex-wrap gap-1.5 text-[9px] md:text-[10px]">
          <span className="bg-purple-500/20 border border-purple-500/30 px-1.5 py-0.5 rounded">Accelerate imaging workflow</span>
          <span className="bg-purple-500/20 border border-purple-500/30 px-1.5 py-0.5 rounded">AI data enrichment</span>
          <span className="bg-purple-500/20 border border-purple-500/30 px-1.5 py-0.5 rounded">Cross-brand visibility</span>
        </div>
      </div>
    </div>

    {/* UX Improvements vs High-Converting Sites */}
    <div className="flex-1 grid md:grid-cols-2 gap-3">
      {/* Issues */}
      <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/30 backdrop-blur-sm border border-orange-500/40 rounded-lg p-3">
        <h3 className="text-sm md:text-base font-bold mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Current UX Issues
        </h3>
        <ul className="space-y-2 text-xs md:text-sm">
          <li className="flex gap-2 items-start">
            <span className="text-orange-400 flex-shrink-0">•</span>
            <span><strong>Visual hierarchy:</strong> Products compete for attention</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-orange-400 flex-shrink-0">•</span>
            <span><strong>CTA friction:</strong> Reserve/finance redirects break journey</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-orange-400 flex-shrink-0">•</span>
            <span><strong>Photography:</strong> Inconsistent quality reduces trust</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-orange-400 flex-shrink-0">•</span>
            <span><strong>Operational speed:</strong> Slow photo-to-live workflow delays listings</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-orange-400 flex-shrink-0">•</span>
            <span><strong>Content gaps:</strong> Missing local events & partnerships</span>
          </li>
        </ul>
      </div>

      {/* High-Converting Benchmarks */}
      <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm border border-green-500/40 rounded-lg p-3">
        <h3 className="text-sm md:text-base font-bold mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <path d="M22 4L12 14.01l-3-3"/>
          </svg>
          High-Converting Benchmarks
        </h3>
        <ul className="space-y-2 text-xs md:text-sm">
          <li className="flex gap-2 items-start">
            <span className="text-green-400 flex-shrink-0">✓</span>
            <span><strong>Clear focal points:</strong> Hero product + single primary CTA</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-green-400 flex-shrink-0">✓</span>
            <span><strong>Seamless flows:</strong> On-site forms, no external redirects</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-green-400 flex-shrink-0">✓</span>
            <span><strong>Professional imagery:</strong> Consistent lighting & angles</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-green-400 flex-shrink-0">✓</span>
            <span><strong>Fast time-to-market:</strong> AI-powered tagging & enrichment</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="text-green-400 flex-shrink-0">✓</span>
            <span><strong>Local authority:</strong> Events, sponsorships, community</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Quick Wins */}
    <div className="mt-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3">
      <h4 className="text-xs font-bold mb-2 flex items-center gap-2">
        <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        Immediate Actions
      </h4>
      <div className="flex flex-wrap gap-2 text-[10px] md:text-xs">
        <span className="bg-blue-500/20 border border-blue-500/40 px-2 py-1 rounded">SEO: Target "Invicta" brand term</span>
        <span className="bg-blue-500/20 border border-blue-500/40 px-2 py-1 rounded">Accelerate photo-to-live workflow</span>
        <span className="bg-blue-500/20 border border-blue-500/40 px-2 py-1 rounded">AI data enrichment</span>
        <span className="bg-blue-500/20 border border-blue-500/40 px-2 py-1 rounded">Fix redirect issues</span>
        <span className="bg-blue-500/20 border border-blue-500/40 px-2 py-1 rounded">Audit product placement</span>
        <span className="bg-blue-500/20 border border-blue-500/40 px-2 py-1 rounded">Standardize photography</span>
        <span className="bg-blue-500/20 border border-blue-500/40 px-2 py-1 rounded">Cross-brand stock visibility</span>
        <span className="bg-blue-500/20 border border-blue-500/40 px-2 py-1 rounded">Build local content hub</span>
      </div>
    </div>
  </div>
);

export default InvictaSlideContent;
