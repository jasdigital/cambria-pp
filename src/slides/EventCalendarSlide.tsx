import React, { useState } from "react";

const EventCalendarSlide: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 10, 15)); // November 15, 2025
  const [filterType, setFilterType] = useState<'all' | 'events' | 'social'>('all');

  // Calendar data structure - all events
  const allEvents = [
    // Live Events
    { date: new Date(2025, 10, 3), category: 'events', type: 'new-arrival', title: 'New Model Launch - Bentley Flying Spur', platform: 'In-person', color: 'bg-blue-500', icon: '🚗' },
    { date: new Date(2025, 10, 6), category: 'events', type: 'important-date', title: 'Finance Settlement Deadline', platform: 'Finance', color: 'bg-amber-500', icon: '💰' },
    { date: new Date(2025, 10, 8), category: 'events', type: 'vip-event', title: 'VIP Customer Appreciation Evening', platform: 'In-person', color: 'bg-purple-500', icon: '👑' },
    { date: new Date(2025, 10, 12), category: 'events', type: 'test-drive', title: 'Premium Test Drive Day', platform: 'In-person', color: 'bg-green-500', icon: '🏁' },
    { date: new Date(2025, 10, 14), category: 'events', type: 'golf-event', title: 'Grange Golf Day - Wentworth', platform: 'In-person', color: 'bg-emerald-500', icon: '⛳' },
    { date: new Date(2025, 10, 16), category: 'events', type: 'new-arrival', title: 'Used Car Stock - 15 Premium Arrivals', platform: 'Showroom', color: 'bg-blue-500', icon: '🚗' },
    { date: new Date(2025, 10, 19), category: 'events', type: 'test-drive', title: 'McLaren Track Experience', platform: 'In-person', color: 'bg-green-500', icon: '🏁' },
    { date: new Date(2025, 10, 21), category: 'events', type: 'sales-event', title: 'Weekend Sales Event - Extended Hours', platform: 'Showroom', color: 'bg-red-500', icon: '🎯' },
    { date: new Date(2025, 10, 26), category: 'events', type: 'vip-event', title: 'Private Viewing - Rare Collection', platform: 'In-person', color: 'bg-purple-500', icon: '👑' },
    { date: new Date(2025, 10, 28), category: 'events', type: 'sales-event', title: 'Black Friday Sales Event', platform: 'Multi-channel', color: 'bg-red-500', icon: '🎯' },
    
    // Social Content aligned with events
    { date: new Date(2025, 10, 2), category: 'social', type: 'social', title: 'Instagram Stories - Bentley Teaser', platform: 'Instagram', color: 'bg-pink-400', icon: '📱', linkedEvent: 'New Model Launch' },
    { date: new Date(2025, 10, 5), category: 'social', type: 'social', title: 'Instagram Reel - Service Tips', platform: 'Instagram', color: 'bg-pink-400', icon: '📱' },
    { date: new Date(2025, 10, 7), category: 'social', type: 'social', title: 'LinkedIn Post - VIP Event Invite', platform: 'LinkedIn', color: 'bg-blue-700', icon: '📱', linkedEvent: 'VIP Event' },
    { date: new Date(2025, 10, 10), category: 'social', type: 'social', title: 'YouTube Short - New Arrivals Preview', platform: 'YouTube', color: 'bg-red-400', icon: '📱' },
    { date: new Date(2025, 10, 11), category: 'social', type: 'social', title: 'Facebook Post - Test Drive Reminder', platform: 'Facebook', color: 'bg-blue-600', icon: '📱', linkedEvent: 'Test Drive Day' },
    { date: new Date(2025, 10, 13), category: 'social', type: 'social', title: 'Instagram Stories - Golf Day Countdown', platform: 'Instagram', color: 'bg-pink-400', icon: '📱', linkedEvent: 'Golf Event' },
    { date: new Date(2025, 10, 15), category: 'social', type: 'social', title: 'Facebook Live - Showroom Tour', platform: 'Facebook', color: 'bg-blue-600', icon: '📱' },
    { date: new Date(2025, 10, 17), category: 'social', type: 'social', title: 'TikTok - Behind the Scenes', platform: 'TikTok', color: 'bg-cyan-400', icon: '📱' },
    { date: new Date(2025, 10, 18), category: 'social', type: 'social', title: 'Instagram Reel - Track Day Highlights', platform: 'Instagram', color: 'bg-pink-400', icon: '📱', linkedEvent: 'Track Experience' },
    { date: new Date(2025, 10, 20), category: 'social', type: 'social', title: 'Email Campaign - Weekend Event', platform: 'Email', color: 'bg-green-400', icon: '📱', linkedEvent: 'Sales Event' },
    { date: new Date(2025, 10, 22), category: 'social', type: 'social', title: 'LinkedIn Post - Team Feature', platform: 'LinkedIn', color: 'bg-blue-700', icon: '📱' },
    { date: new Date(2025, 10, 24), category: 'social', type: 'social', title: 'SMS Campaign - Service Offers', platform: 'SMS', color: 'bg-green-400', icon: '📱' },
    { date: new Date(2025, 10, 25), category: 'social', type: 'social', title: 'Instagram Post - VIP Preview Teaser', platform: 'Instagram', color: 'bg-pink-400', icon: '📱', linkedEvent: 'Private Viewing' },
    { date: new Date(2025, 10, 27), category: 'social', type: 'social', title: 'Multi-channel - Black Friday Launch', platform: 'Multi-channel', color: 'bg-orange-400', icon: '📱', linkedEvent: 'Black Friday' },
    { date: new Date(2025, 10, 29), category: 'social', type: 'social', title: 'Instagram Stories - Black Friday Highlights', platform: 'Instagram', color: 'bg-pink-400', icon: '📱' },
  ];

  // Filter events based on selected category
  const events = filterType === 'all' 
    ? allEvents 
    : allEvents.filter(e => e.category === filterType);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(selectedDate);
  const monthName = selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const eventTypes = {
    events: [
      { type: 'new-arrival', label: 'New Arrivals', icon: '🚗', color: 'bg-blue-500' },
      { type: 'important-date', label: 'Important Dates', icon: '�', color: 'bg-amber-500' },
      { type: 'test-drive', label: 'Test Drive Days', icon: '🏁', color: 'bg-green-500' },
      { type: 'golf-event', label: 'Golf Events', icon: '⛳', color: 'bg-emerald-500' },
      { type: 'vip-event', label: 'VIP Events', icon: '�', color: 'bg-purple-500' },
      { type: 'sales-event', label: 'Sales Events', icon: '�', color: 'bg-red-500' },
    ],
    social: [
      { type: 'social', label: 'Social Content', icon: '�', color: 'bg-pink-400' },
    ]
  };

  const renderCalendar = () => {
    const days = [];
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Week day headers
    weekDays.forEach((day, idx) => {
      days.push(
        <div key={`header-${idx}`} className="text-center text-[10px] font-bold text-white/80 py-1">
          {day}
        </div>
      );
    });

    // Empty cells before first day
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="bg-white/5 rounded"></div>);
    }

    // Calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
      const dayEvents = getEventsForDate(currentDate);
      const isToday = day === 15; // November 15
      const isSelected = selectedDate.getDate() === day;

      days.push(
        <div
          key={`day-${day}`}
          className={`relative bg-black/40 backdrop-blur-sm border rounded p-1 min-h-[60px] hover:bg-black/60 transition-colors cursor-pointer ${
            isToday ? 'border-white/40 ring-2 ring-white/30' : 'border-white/10'
          } ${isSelected ? 'bg-white/10' : ''}`}
          onClick={() => setSelectedDate(currentDate)}
        >
          <div className={`text-[10px] font-semibold mb-1 ${isToday ? 'text-white' : 'text-white/80'}`}>
            {day}
          </div>
          <div className="space-y-0.5">
            {dayEvents.slice(0, 2).map((event, idx) => (
              <div
                key={idx}
                className={`${event.color} text-[8px] text-white px-1 py-0.5 rounded truncate`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-[8px] text-white/60 px-1">+{dayEvents.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const selectedDateEvents = getEventsForDate(selectedDate);

  return (
    <>
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-2">
            Event & Social Media Calendar
          </h2>
          <p className="text-sm md:text-base text-white/80">
            Integrated planning for events, campaigns, and social content
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
              filterType === 'all' ? 'bg-white text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('events')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
              filterType === 'events' ? 'bg-white text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Live Events
          </button>
          <button
            onClick={() => setFilterType('social')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
              filterType === 'social' ? 'bg-white text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Social Content
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Calendar */}
        <div className="flex-[2]">
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}
                className="text-white/80 hover:text-white text-xl px-2"
              >
                ←
              </button>
              <h3 className="text-base font-bold">{monthName}</h3>
              <button
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}
                className="text-white/80 hover:text-white text-xl px-2"
              >
                →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-3 flex gap-2 flex-wrap">
            {(filterType === 'events' ? eventTypes.events : filterType === 'social' ? eventTypes.social : [...eventTypes.events, ...eventTypes.social]).map((type, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs">
                <div className={`w-3 h-3 ${type.color} rounded`}></div>
                <span className="text-white/80">{type.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Date Details */}
        <div className="w-72 space-y-3">
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <h4 className="text-sm font-bold mb-3">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </h4>
            
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-2">
                {selectedDateEvents.map((event, idx) => (
                  <div key={idx} className={`${event.color} rounded-lg p-3`}>
                    <div className="flex items-start gap-2">
                      <span className="text-lg">{event.icon}</span>
                      <div className="flex-1">
                        <div className="text-xs font-bold mb-1">{event.title}</div>
                        <div className="text-[10px] text-white/80">{event.platform}</div>
                        {event.linkedEvent && (
                          <div className="text-[9px] text-white/60 mt-1">🔗 Linked to: {event.linkedEvent}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-white/60 text-center py-4">
                No events scheduled for this date
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <h4 className="text-sm font-bold mb-3">This Month</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-white/70">Total Events</span>
                <span className="font-bold">{events.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Live Events</span>
                <span className="font-bold">{allEvents.filter(e => e.category === 'events').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Social Posts</span>
                <span className="font-bold">{allEvents.filter(e => e.category === 'social').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">VIP Events</span>
                <span className="font-bold">{allEvents.filter(e => e.type === 'vip-event').length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Test Drive Days</span>
                <span className="font-bold">{allEvents.filter(e => e.type === 'test-drive').length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-lg p-3">
        <p className="text-xs md:text-sm text-center">
          <span className="font-semibold">Integrated Planning:</span> Align product launches, customer events, and social content for maximum impact
        </p>
      </div>
    </>
  );
};

export default EventCalendarSlide;
