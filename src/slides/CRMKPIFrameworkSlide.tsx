import React from "react";

const CRMKPIFrameworkSlide: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = React.useState("all");
  const [selectedBrand, setSelectedBrand] = React.useState("all");
  const [selectedModel, setSelectedModel] = React.useState("all");

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

    const mult = locationMultipliers[selectedLocation] * brandMultipliers[selectedBrand] * modelMultipliers[selectedModel];

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
      icon: "💼",
      color: "from-blue-500/20 to-blue-600/30",
      metrics: [
        { name: "Lead Response Time", target: "< 3 min", current: `${kpiData.leadResponseTime} min` },
        { name: "Contact Rate", target: "85%", current: `${kpiData.contactRate}%` },
        { name: "Appointment Rate", target: "40%", current: `${kpiData.appointmentRate}%` },
        { name: "Show Rate", target: "70%", current: `${kpiData.showRate}%` },
        { name: "Sales Conversion", target: "18%", current: `${kpiData.salesConversion}%` },
        { name: "Cost per Sale", target: "£450", current: `£${kpiData.costPerSale}` },
      ]
    },
    {
      title: "Aftersales KPIs",
      icon: "🔧",
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
      icon: "📊",
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
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
        KPI Framework*
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        Real-time reporting with single source of truth
      </p>

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

        <div className="ml-auto flex items-center gap-4 px-3 py-1.5 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg">
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
      
      <div className="grid md:grid-cols-3 gap-3">
        {kpiCategories.map((category, idx) => (
          <div 
            key={idx}
            className={`bg-gradient-to-br ${category.color} backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{category.icon}</span>
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
