import React from "react";

const CRMKPIFrameworkSlide: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = React.useState("all");
  const [selectedBrand, setSelectedBrand] = React.useState("all");
  const [selectedModel, setSelectedModel] = React.useState("all");
  const [selectedAgent, setSelectedAgent] = React.useState("all");

  // Generate dynamic KPI data based on filters
  const getKPIData = () => {
    // Base multipliers for different filters
    const locationMultipliers: Record<string, number> = {
      all: 1.0,
      london: 1.15,
      birmingham: 0.95,
      manchester: 1.05,
      leeds: 0.88,
    };

    const brandMultipliers: Record<string, number> = {
      all: 1.0,
      lamborghini: 1.2,
      bentley: 1.15,
      mclaren: 1.1,
      "aston-martin": 1.05,
      "rolls-royce": 1.25,
    };

    const modelMultipliers: Record<string, number> = {
      all: 1.0,
      urus: 1.1,
      huracan: 1.15,
      continental: 1.05,
      "720s": 1.12,
    };

    const agentMultipliers: Record<string, number> = {
      all: 1.0,
      "john-smith": 1.18,
      "sarah-jones": 1.12,
      "mike-brown": 0.95,
      "emma-wilson": 1.08,
      "david-taylor": 0.92,
    };

    const mult = locationMultipliers[selectedLocation] * brandMultipliers[selectedBrand] * modelMultipliers[selectedModel] * agentMultipliers[selectedAgent];

    // Base values
    const baseLeadResponseTime = 5;
    const baseContactRate = 72;
    const baseAppointmentRate = 35;
    const baseShowRate = 65;
    const baseSalesConversion = 14;
    const baseCostPerSale = 580;
    const baseServiceRetention = 68;
    const baseMOTRetention = 59;
    const baseROsPerCustomer = 1.8;
    const baseAmberGreenConv = 28;
    const baseWorkshopCapacity = 79;
    const baseLeadSourceROI = 3.2;
    const baseCampaignAttribution = 78;
    const baseLeadRecycling = 18;

    return {
      leadResponseTime: Math.max(2, Math.round(baseLeadResponseTime / mult * 10) / 10),
      contactRate: Math.min(95, Math.round(baseContactRate * mult)),
      appointmentRate: Math.min(50, Math.round(baseAppointmentRate * mult)),
      showRate: Math.min(85, Math.round(baseShowRate * mult)),
      salesConversion: Math.min(25, Math.round(baseSalesConversion * mult)),
      costPerSale: Math.max(350, Math.round(baseCostPerSale / mult)),
      serviceRetention: Math.min(85, Math.round(baseServiceRetention * mult)),
      motRetention: Math.min(75, Math.round(baseMOTRetention * mult)),
      rosPerCustomer: Math.min(2.5, Math.round(baseROsPerCustomer * mult * 10) / 10),
      amberGreenConv: Math.min(45, Math.round(baseAmberGreenConv * mult)),
      workshopCapacity: Math.min(95, Math.round(baseWorkshopCapacity * mult)),
      leadSourceROI: Math.min(6, Math.round(baseLeadSourceROI * mult * 10) / 10),
      campaignAttribution: Math.min(100, Math.round(baseCampaignAttribution * mult)),
      leadRecycling: Math.min(35, Math.round(baseLeadRecycling * mult)),
      totalLeads: Math.round(12458 * mult),
      conversions: Math.round(1847 * mult),
      revenue: (8.2 * mult).toFixed(1),
    };
  };

  const kpiData = getKPIData();

  const kpiCategories = [
    {
      title: "Sales KPIs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 md:w-8 md:h-8">
          <path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"/>
        </svg>
      ),
      color: "from-blue-500/20 to-blue-600/30",
      metrics: [
        { name: "Lead Response Time", target: "< 3 min", current: `${kpiData.leadResponseTime} min` },
        { name: "Contact Rate", target: "85%", current: `${kpiData.contactRate}%` },
        { name: "Appointment Rate", target: "40%", current: `${kpiData.appointmentRate}%` },
        { name: "Show Rate", target: "70%", current: `${kpiData.showRate}%` },
        { name: "Sales Conversion", target: "18%", current: `${kpiData.salesConversion}%` },
        { name: "Cost per Sale", target: "£250", current: `£${kpiData.costPerSale}` },
      ]
    },
    {
      title: "Aftersales KPIs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 md:w-8 md:h-8">
          <path fill="currentColor" d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"/>
        </svg>
      ),
      color: "from-green-500/20 to-green-600/30",
      metrics: [
        { name: "Service Retention", target: "75%", current: `${kpiData.serviceRetention}%` },
        { name: "MOT Retention", target: "65%", current: `${kpiData.motRetention}%` },
        { name: "ROs per Customer", target: "2.1", current: `${kpiData.rosPerCustomer}` },
        { name: "Amber→Green Conv.", target: "35%", current: `${kpiData.amberGreenConv}%` },
        { name: "Workshop Capacity", target: "88%", current: `${kpiData.workshopCapacity}%` },
      ]
    },
    {
      title: "Marketing KPIs",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 md:w-8 md:h-8">
          <path fill="currentColor" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"/>
        </svg>
      ),
      color: "from-purple-500/20 to-purple-600/30",
      metrics: [
        { name: "Channel Performance", target: "Multi", current: "Tracked" },
        { name: "Lead Source ROI", target: "£5:1", current: `£${kpiData.leadSourceROI}:1` },
        { name: "Campaign Attribution", target: "100%", current: `${kpiData.campaignAttribution}%` },
        { name: "Lead Recycling", target: "25%", current: `${kpiData.leadRecycling}%` },
      ]
    },
  ];

  const getStatusColor = (current: string, target: string) => {
    // Simple heuristic - in real implementation, would parse and compare properly
    if (current.includes('<') || current.includes('Multi') || current.includes('Tracked')) return "text-blue-400";
    return "text-amber-400";
  };

  return (
    <>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
            KPI Framework
          </h2>
          <p className="text-sm md:text-base text-white/80">
            Real-time reporting with single source of truth
          </p>
        </div>
        
        <div className="flex items-center gap-4 px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg">
          <div className="text-xs md:text-sm">
            <span className="text-white/60">Total Leads: </span>
            <span className="font-bold text-white">{kpiData.totalLeads.toLocaleString()}*</span>
          </div>
          <div className="text-xs md:text-sm">
            <span className="text-white/60">Conversions: </span>
            <span className="font-bold text-white">{kpiData.conversions.toLocaleString()}*</span>
          </div>
          <div className="text-xs md:text-sm">
            <span className="text-white/60">Revenue: </span>
            <span className="font-bold text-white">£{kpiData.revenue}M*</span>
          </div>
        </div>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex flex-wrap gap-2 mb-4">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="px-3 py-1.5 rounded-lg text-xs md:text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <option value="all">All Locations</option>
          <option value="london">London</option>
          <option value="birmingham">Birmingham</option>
          <option value="manchester">Manchester</option>
          <option value="leeds">Leeds</option>
        </select>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="px-3 py-1.5 rounded-lg text-xs md:text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <option value="all">All Brands</option>
          <option value="lamborghini">Lamborghini</option>
          <option value="bentley">Bentley</option>
          <option value="mclaren">McLaren</option>
          <option value="aston-martin">Aston Martin</option>
          <option value="rolls-royce">Rolls-Royce</option>
        </select>

        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="px-3 py-1.5 rounded-lg text-xs md:text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <option value="all">All Models</option>
          <option value="urus">Urus</option>
          <option value="huracan">Huracán</option>
          <option value="continental">Continental GT</option>
          <option value="720s">720S</option>
        </select>

        <select
          value={selectedAgent}
          onChange={(e) => setSelectedAgent(e.target.value)}
          className="px-3 py-1.5 rounded-lg text-xs md:text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <option value="all">All Agents</option>
          <option value="john-smith">John Smith</option>
          <option value="sarah-jones">Sarah Jones</option>
          <option value="mike-brown">Mike Brown</option>
          <option value="emma-wilson">Emma Wilson</option>
          <option value="david-taylor">David Taylor</option>
        </select>
      </div>
      
      <div className="grid md:grid-cols-3 gap-3">
        {kpiCategories.map((category, idx) => (
          <div 
            key={idx}
            className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white/80">{category.icon}</span>
              <h3 className="text-sm md:text-base font-bold">{category.title}</h3>
            </div>
            
            <div className="space-y-2">
              {category.metrics.map((metric, midx) => (
                <div 
                  key={midx}
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded p-2"
                >
                  <div className="text-[10px] md:text-xs text-white/80 mb-1 font-medium">
                    {metric.name}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Target: {metric.target}</span>
                    <span className={`text-xs font-bold ${getStatusColor(metric.current, metric.target)}`}>
                      {metric.current}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-3">
        <p className="text-xs md:text-sm text-white/80 text-center mb-1">
          <span className="font-semibold text-white">Critical:</span> Single reporting source prevents conflicted versions and enables data-driven decisions
        </p>
        <p className="text-[10px] md:text-xs text-white/50 text-center">
          * Indicative values for demonstration purposes
        </p>
      </div>
    </>
  );
};

export default CRMKPIFrameworkSlide;
