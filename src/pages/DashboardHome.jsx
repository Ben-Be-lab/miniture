import React from 'react';
import AnalyticsOverview from '../components/AnalyticsOverview';

 function DashboardHome() {
  return (
    <div className="space-y-6">
      
      {/* 🚀 HERO SECTION: Your Analytics Grid Panels */}
      <AnalyticsOverview />
      
      {/* ─── NEXT SECTIONS WILL GO DIRECTLY BELOW HERE ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* We can put your upcoming table lists, maps, or data feeds here */}
      </div>

    </div>
  );
}
export default  AnalyticsOverview