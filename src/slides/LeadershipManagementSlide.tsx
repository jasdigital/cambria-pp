import React from "react";

const LeadershipManagementSlide: React.FC = () => (
  <div className="space-y-4">
    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
      {/* Agile Marketing */}
      <div className="bg-white/10 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-white/20">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase mb-2">
              'Mostly' Agile Marketing
            </h3>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed mb-2">
              Implementing sprint-based workflows, rapid testing cycles, and iterative campaign optimisation for faster time-to-market and improved performance
            </p>
          </div>
        </div>
        <ul className="space-y-2 text-xs md:text-sm ml-13">
          <li className="flex gap-2 items-start">
            <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
            <span>2-week sprint cycles for campaign delivery</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
            <span>Cross-functional squad collaboration</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
            <span>Daily standups for alignment and blockers</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
            <span>Retrospectives for continuous improvement</span>
          </li>
        </ul>
      </div>

      {/* Project Management */}
      <div className="bg-white/10 backdrop-blur-sm p-4 md:p-5 rounded-lg border border-white/20">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold uppercase mb-2">
              Project Management Tools
            </h3>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              Structured campaign planning and activation frameworks using modern PM tools for transparency, accountability, and efficiency
            </p>
          </div>
        </div>
        <ul className="space-y-2 text-xs md:text-sm ml-13">
          <li className="flex gap-2 items-start">
            <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
            <span>Campaign roadmaps with Gantt views</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
            <span>Resource allocation and capacity planning</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
            <span>Kanban boards for activation tracking</span>
          </li>
          <li className="flex gap-2 items-start">
            <span className="mt-1 h-1 w-1 rounded-full bg-white flex-shrink-0" />
            <span>Automated workflows and dependencies</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Mercedes-Benz Leadership Experience */}
    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm p-5 md:p-6 rounded-lg border border-white/30">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold uppercase mb-2">
            Managing Change & Complexity
          </h3>
          <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4">
            Drawing from <span className="font-semibold">Mercedes-Benz Leadership Accelerator</span>, a management programme designed for senior managers navigating organisational transformation and strategic complexity
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/20 backdrop-blur-sm p-3 rounded border border-white/20">
              <h4 className="font-semibold text-sm mb-2 text-white">Strategic Vision</h4>
              <ul className="space-y-1 text-xs text-white/80">
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Clarity in uncertain environments</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Long-term thinking with short-term agility</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Aligning stakeholders across functions</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm p-3 rounded border border-white/20">
              <h4 className="font-semibold text-sm mb-2 text-white">Team Leadership</h4>
              <ul className="space-y-1 text-xs text-white/80">
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Building high-performing teams</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Coaching through transformation</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Fostering psychological safety</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/20 backdrop-blur-sm p-3 rounded border border-white/20">
              <h4 className="font-semibold text-sm mb-2 text-white">Change Management</h4>
              <ul className="space-y-1 text-xs text-white/80">
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Overcoming resistance to change</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Creating urgency and momentum</span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="mt-1 h-0.5 w-0.5 rounded-full bg-white flex-shrink-0" />
                  <span>Embedding new ways of working</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
);

export default LeadershipManagementSlide;
