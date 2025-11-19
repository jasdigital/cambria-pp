import React from "react";

const SingleCustomerViewSlide: React.FC = () => {
  const touchpoints = [
    { 
      label: "Sales Enquiries", 
      detail: "New & Used", 
      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
    },
    { 
      label: "Aftersales", 
      detail: "Service, MOT, Warranty", 
      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 512 512"><path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
    },
    { 
      label: "Finance", 
      detail: "Applications & Renewals", 
      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"/></svg>
    },
    { 
      label: "Digital", 
      detail: "Website, Chat, Valuations", 
      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 640 512"><path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
    },
    { 
      label: "Marketing", 
      detail: "Email, SMS, WhatsApp", 
      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
    },
    { 
      label: "OEM Data", 
      detail: "Connected Car, Telematics", 
      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 640 512"><path d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
    },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-3">
        Single Customer View
      </h2>
      <p className="text-sm md:text-base text-white/80 mb-4">
        A unified profile connecting all customer touchpoints
      </p>
      
      <div className="flex gap-4">
        {/* Left: Diagram */}
        <div className="flex-[2.5] relative flex items-center justify-center" style={{ minHeight: '450px' }}>
        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-500/40 to-purple-600/40 backdrop-blur-md border-2 border-white/40 rounded-full flex items-center justify-center shadow-2xl z-20">
          <div className="text-center">
            <svg className="w-10 h-10 md:w-12 md:h-12 mb-2 mx-auto" fill="currentColor" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            <div className="text-sm md:text-base font-bold">Customer</div>
            <div className="text-xs text-white/70">360° View</div>
          </div>
        </div>

        {/* Touchpoint Nodes in Circle */}
        {touchpoints.map((point, idx) => {
          const angle = (idx * 60) - 90; // 60 degrees apart, starting from top
          const radius = 240; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius * 0.7; // Compress vertically
          
          return (
            <div 
              key={idx}
              className="absolute bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 hover:bg-black/60 hover:border-white/40 transition-all duration-200 overflow-hidden group w-40 md:w-48 z-10"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}
            >
              {/* Connecting Line Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <div className="relative">
                <div className="mb-2">{point.icon}</div>
                <h3 className="text-xs md:text-sm font-bold mb-1">{point.label}</h3>
                <p className="text-[10px] md:text-xs text-white/70">{point.detail}</p>
              </div>
            </div>
          );
        })}
        </div>

        {/* Right: Data Flow Requirements */}
        <div className="w-64 space-y-3">
          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.9l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.9l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
              <span>Real-Time Requirements</span>
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                <span className="text-white/90">Live leads sync → no delays to sales teams</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                <span className="text-white/90">Service booking sync → workshop → CRM → marketing</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                <span className="text-white/90">Stock & pricing sync → feeds into CRM and marketing</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                <span className="text-white/90">Finance data → settlement dates, renewal triggers</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                <span className="text-white/90">Retention workflows → auto-triggered journeys</span>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <h3 className="text-sm font-bold mb-3">Key Systems</h3>
            <div className="space-y-2 text-xs text-white/80">
              <div><span className="font-semibold text-white">DMS:</span> Pinnacle, Kerridge, CDK, Rev8</div>
              <div><span className="font-semibold text-white">CRM:</span> Salesforce, iHS, Lead Mgmt</div>
              <div><span className="font-semibold text-white">OEM:</span> Mercedes Me, Ford API, JLR</div>
              <div><span className="font-semibold text-white">Finance:</span> Settlement, Balloon payments</div>
            </div>
          </div>
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
