import React from "react";

const LifecycleAutomationSlide: React.FC = () => {
  const salesJourney = [
    { step: "Lead", time: "1-3 min", action: "Fast first response" },
    { step: "Test Drive", time: "24 hrs", action: "Booking confirmation" },
    { step: "Appointment", time: "2 hrs before", action: "Reminder sent" },
    { step: "Follow-up", time: "Same day", action: "Post-appointment" },
    { step: "Finance", time: "11 months", action: "PCP/HP balloon reminder" },
    { step: "Stock Match", time: "Real-time", action: "Used car alerts" },
  ];

  const aftersalesJourney = [
    { step: "Service", time: "Annual", action: "Reminder with opcodes" },
    { step: "MOT", time: "30 days", action: "Booking prompt" },
    { step: "Seasonal", time: "Quarterly", action: "Safety checks" },
    { step: "Declined Work", time: "7 days", action: "Amber/red follow-up" },
    { step: "No-show", time: "24 hrs", action: "Rebooking journey" },
    { step: "Welcome", time: "New owner", action: "Retention start" },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3">
        Lifecycle Automation
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        High-performing journeys for sales & aftersales
      </p>
      
      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
        {/* Sales Journey */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4">
          <h3 className="text-base md:text-lg font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🚗</span>
            <span>Sales Journey</span>
          </h3>
          <div className="space-y-2">
            {salesJourney.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-2 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs md:text-sm font-semibold">{item.step}</span>
                  <span className="text-[10px] md:text-xs text-green-400 font-mono">{item.time}</span>
                </div>
                <p className="text-[10px] md:text-xs text-white/70">{item.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Aftersales Journey */}
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4">
          <h3 className="text-base md:text-lg font-bold mb-3 flex items-center gap-2">
            <span className="text-xl">🔧</span>
            <span>Aftersales Journey</span>
          </h3>
          <div className="space-y-2">
            {aftersalesJourney.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-2 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs md:text-sm font-semibold">{item.step}</span>
                  <span className="text-[10px] md:text-xs text-blue-400 font-mono">{item.time}</span>
                </div>
                <p className="text-[10px] md:text-xs text-white/70">{item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-center">
        <p className="text-xs md:text-sm text-white/90">
          <span className="font-semibold">Result:</span> More cars sold, higher service retention, increased workshop efficiency
        </p>
      </div>
    </>
  );
};

export default LifecycleAutomationSlide;
