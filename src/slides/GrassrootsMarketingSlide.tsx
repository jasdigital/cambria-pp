import { motion } from "framer-motion";
import { useState } from "react";
import { getVideoUrl } from "../utils/videoUrl";

export default function GrassrootsMarketingSlide() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'events' | 'partnerships' | 'community'>('all');

  const opportunities = [
    {
      id: 1,
      category: 'events',
      title: 'Manchester Football Events',
      location: 'Etihad & Old Trafford',
      brand: 'Chery • Omoda',
      impact: 'High visibility',
      description: 'Match day activations, VIP transport, branded vehicle displays',
    },
    {
      id: 2,
      category: 'partnerships',
      title: 'Northern Quarter Pop-Ups',
      location: 'Independent Venues',
      brand: 'Omoda • Jaecoo',
      impact: 'Young demographic',
      description: 'Lifestyle brand collaborations, café partnerships, boutique displays',
    },
    {
      id: 3,
      category: 'community',
      title: 'University Partnerships',
      location: 'MMU & UoM',
      brand: 'MG • Chery',
      impact: 'Student reach',
      description: 'Campus events, graduate schemes, test drive days',
    },
    {
      id: 4,
      category: 'events',
      title: 'VIP Showroom Events',
      location: 'Manchester Dealerships',
      brand: 'All Brands',
      impact: 'High-conversion sales',
      description: 'VIP sales events via Rhino, The Whole Caboodle — Opportunity to build Invicta/Motorparks owned digital platform',
    },
    {
      id: 5,
      category: 'events',
      title: 'Music Festivals',
      location: 'Parklife, Warehouse Project',
      brand: 'Omoda • Jaecoo',
      impact: '50K+ attendance',
      description: 'VIP shuttle service, backstage access, artist partnerships',
    },
    {
      id: 6,
      category: 'partnerships',
      title: 'Gym & Fitness Chains',
      location: 'City-wide locations',
      brand: 'Subaru • MG',
      impact: 'Active lifestyle',
      description: 'Branded parking bays, wellness partnerships, instructor vehicles',
    },
    {
      id: 7,
      category: 'community',
      title: 'Local Business Networks',
      location: 'Bolton, Bury, Oldham',
      brand: 'All Brands',
      impact: 'B2B opportunity',
      image: '/images/webp/website_ux/FinanceCalculator.webp',
      description: 'Chamber of Commerce, business clubs, fleet partnerships',
    },
    {
      id: 8,
      category: 'partnerships',
      title: 'SME Fleet Programs',
      location: 'Greater Manchester',
      brand: 'MG • Chery • Subaru',
      impact: 'Volume sales',
      description: 'Small business fleet deals, bulk purchase incentives, corporate partnerships',
    },
    {
      id: 9,
      category: 'partnerships',
      title: 'Salary Sacrifice Schemes',
      location: 'Major Employers',
      brand: 'All EV & Hybrid',
      impact: 'Tax-efficient',
      description: 'Employee benefit programs, workplace partnerships, EV salary sacrifice via Tusker/Octopus',
    },
  ];

  const strategies = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 640 512" fill="currentColor">
          <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
        </svg>
      ),
      title: 'Community Integration',
      tactics: ['Local sponsorships', 'Charity partnerships', 'Community events'],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" viewBox="0 0 576 512" fill="currentColor">
          <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
        </svg>
      ),
      title: 'Content Creation',
      tactics: ['User-generated content', 'Local influencers', 'Behind-the-scenes'],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" viewBox="0 0 640 512" fill="currentColor">
          <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/>
        </svg>
      ),
      title: 'Product Placement',
      tactics: ['Lifestyle venues', 'High-traffic locations', 'Brand experiences'],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 384 512" fill="currentColor">
          <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/>
        </svg>
      ),
      title: 'B2B & Corporate',
      tactics: ['SME fleet programs', 'Salary sacrifice', 'Employee benefits'],
    },
  ];

  const videoSlots = [
    { src: getVideoUrl('/video/DK Aston Martin Valkyrie ASMR.mp4'), label: 'Event Activation' },
    { src: getVideoUrl('/video/HM - Jaguar E-type Red - Reel.mp4'), label: 'Community Partner' },
    { src: getVideoUrl('/video/HM - Anglesey Sprint - 04-05052024 - Reel.mp4'), label: 'Local Showcase' },
  ];

  const filteredOpportunities = selectedCategory === 'all' 
    ? opportunities 
    : opportunities.filter(o => o.category === selectedCategory);

  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase mb-0 p-0">
        Invicta — Digital Review & Grassroots Marketing
      </h2>
      <p className="text-sm md:text-base text-gray-700 mb-0 p-0">
        Key challenges & hyper-local strategies for emerging brands in Manchester
      </p>
      
      <div className="flex-1 overflow-y-auto pr-2 max-h-[calc(100vh-200px)]" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.3) transparent' }}>
        <div className="max-w-[95%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-4"
        >
          
          {/* Invicta Overview - Brand Term Only */}
          <div className="grid md:grid-cols-3 gap-3 mb-4 text-left">
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/30 backdrop-blur-sm border border-red-500/40 rounded-lg p-3">
              <h3 className="text-sm font-bold mb-1 flex items-center gap-1.5">
                <svg className="w-5 h-5 text-red-500" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
                </svg>
                Brand Term Ownership
              </h3>
              <p className="text-xs">
                Not ranking #1 for "Invicta" — losing brand traffic to competitors. Must reclaim top position.
              </p>
            </div>

            {/* Google Business Profile - Condensed - 2/3 width */}
            <div className="md:col-span-2 bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm border border-blue-400/40 rounded-lg p-3 text-left">
              <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
                Google Business Profile — 26 Locations
              </h3>
              <div className="grid md:grid-cols-4 gap-2 text-xs">
                <div className="flex items-start gap-1.5">
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                  </svg>
                  <span><strong>Complete:</strong> Verify all profiles, photos, NAP consistency</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" viewBox="0 0 576 512" fill="currentColor">
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                  </svg>
                  <span><strong>Reviews:</strong> 24hr response, maintain 4.5+ stars</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/>
                  </svg>
                  <span><strong>Posts:</strong> Weekly offers, events, stock highlights</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                  </svg>
                  <span><strong>Track:</strong> Clicks, directions, calls, photo views</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight text-left">
            Grassroots Marketing Strategy
          </h3>
          <p className="text-gray-700 text-sm mb-4 text-left">
            Hyper-local strategies for emerging brands in Manchester & Greater Manchester
          </p>
          
          {/* Category Filters */}
          <div className="flex justify-start gap-3 mb-6">
            {[
              { 
                id: 'all', 
                label: 'All Opportunities',
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
                  </svg>
                )
              },
              { 
                id: 'events', 
                label: 'Events',
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
                  </svg>
                )
              },
              { 
                id: 'partnerships', 
                label: 'Partnerships',
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 640 512" fill="currentColor">
                    <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/>
                  </svg>
                )
              },
              { 
                id: 'community', 
                label: 'Community',
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 640 512" fill="currentColor">
                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                  </svg>
                )
              },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/80 text-gray-900 hover:bg-white'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Opportunities Grid */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 384 512" fill="currentColor">
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
              </svg>
              Local Opportunities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {filteredOpportunities.map((opp, index) => (
                <motion.div
                  key={opp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/95 backdrop-blur rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
                >
                  {/* Image */}
                  
                  
                  {/* Content */}
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{opp.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{opp.location}</span>
                    </div>
                    <p className="text-xs text-gray-700 mb-3">{opp.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-blue-600">{opp.brand}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        opp.category === 'events' ? 'bg-purple-100 text-purple-700' :
                        opp.category === 'partnerships' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {opp.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Strategy Sidebar */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 512 512" fill="currentColor">
                <path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
              </svg>
              Strategy Pillars
            </h3>
            
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-white/90 to-white/80 backdrop-blur rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">
                    {strategy.icon}
                  </div>
                  <h4 className="font-bold text-gray-900">{strategy.title}</h4>
                </div>
                <ul className="space-y-1.5">
                  {strategy.tactics.map((tactic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            
          </div>
        </div>

       
        </div>
      </div>
    </>
  );
}
