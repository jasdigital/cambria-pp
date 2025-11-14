import React from "react";

const SingleCustomerViewSlide: React.FC = () => {
  const touchpoints = [
    { label: "Sales Enquiries", detail: "New & Used", icon: "🚗" },
    { label: "Aftersales", detail: "Service, MOT, Warranty", icon: "🔧" },
    { label: "Finance", detail: "Applications & Renewals", icon: "💳" },
    { label: "Digital", detail: "Website, Chat, Valuations", icon: "💻" },
    { label: "Marketing", detail: "Email, SMS, WhatsApp", icon: "📱" },
    { label: "OEM Data", detail: "Connected Car, Telematics", icon: "🔌" },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3">
        Single Customer View
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        A unified profile connecting all customer touchpoints
      </p>
      
      <div className="relative">
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500/40 to-purple-600/40 backdrop-blur-md border-2 border-white/40 rounded-full flex items-center justify-center z-10 shadow-2xl">
          <div className="text-center">
            <div className="text-3xl md:text-4xl mb-2">👤</div>
            <div className="text-sm md:text-base font-bold">Customer</div>
            <div className="text-xs text-white/70">360° View</div>
          </div>
        </div>

        {/* Touchpoint Nodes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {touchpoints.map((point, idx) => (
            <div 
              key={idx}
              className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 hover:bg-black/60 hover:border-white/40 transition-all duration-200 relative overflow-hidden group"
            >
              {/* Connecting Line Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative">
                <div className="text-2xl md:text-3xl mb-2">{point.icon}</div>
                <h3 className="text-xs md:text-sm font-bold mb-1">{point.label}</h3>
                <p className="text-[10px] md:text-xs text-white/70">{point.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4">
        <p className="text-xs md:text-sm text-white/90 leading-relaxed">
          <span className="font-semibold text-white">Why it matters:</span> Dealerships traditionally operate in silos. 
          A Single Customer View removes fragmentation and is the foundation for meaningful lifecycle messaging, 
          personalisation, and retention.
        </p>
      </div>
    </>
  );
};

export default SingleCustomerViewSlide;
