import React from 'react';
import AnalyticsOverview from '../components/AnalyticsOverview';
import StatisticsChart from '../components/StatisticsChart';
import DemographicsAndOrders from '../components/DemographicsAndOrders';

export default function Ecommerce() {
  return (
    <div className="space-y-6">
      <AnalyticsOverview />
      <StatisticsChart />
      <DemographicsAndOrders />
    </div>
  );
}