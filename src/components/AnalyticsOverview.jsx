import React from 'react';
import { Users, Eye, MoreVertical, ArrowUp, ArrowDown } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function AnalyticsOverview() {

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [170, 380, 200, 290, 185, 190, 280, 110, 210, 385, 270, 110],
        backgroundColor: '#FFAE34',
        hoverBackgroundColor: '#000000',
        borderRadius: 6,
        barThickness: 16,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#64748B', font: { size: 12 } }
      },
      y: {
        min: 0,
        max: 400,
        grid: { color: '#E2E8F0' },
        ticks: { stepSize: 100, color: '#64748B', font: { size: 12 } }
      }
    },
  };

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">

        {/* LEFT COLUMN */}
        <div className="xl:col-span-2 space-y-6">

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Card 1: Customers */}
            <div className="bg-white border border-[#E2E8F0] rounded-sm p-6 flex flex-col justify-between h-[150px] group hover:border-[#FFAE34] transition-colors duration-200">
              <div className="w-11 h-11 bg-[#FFF8EC] rounded-md flex items-center justify-center text-[#FFAE34] group-hover:bg-[#FFAE34] group-hover:text-white transition-all duration-200">
                <Users size={20} />
              </div>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <p className="text-xs font-medium text-[#64748B]">Customers</p>
                  <h3 className="text-[28px] font-bold text-[#1C2434] leading-tight mt-0.5">3,782</h3>
                </div>
                <span className="text-[12px] font-semibold text-[#10B981] bg-[#E6F4EA] px-2 py-0.5 rounded-full flex items-center gap-0.5 mb-1">
                  <ArrowUp size={12} className="inline" /> 11.59%
                </span>
              </div>
            </div>

            {/* Card 2: Views */}
            <div className="bg-white border border-[#E2E8F0] rounded-sm p-6 flex flex-col justify-between h-[150px] group hover:border-[#FFAE34] transition-colors duration-200">
              <div className="w-11 h-11 bg-[#FFF8EC] rounded-md flex items-center justify-center text-[#FFAE34] group-hover:bg-[#FFAE34] group-hover:text-white transition-all duration-200">
                <Eye size={20} />
              </div>
              <div className="flex items-end justify-between mt-4">
                <div>
                  <p className="text-xs font-medium text-[#64748B]">Views</p>
                  <h3 className="text-[28px] font-bold text-[#1C2434] leading-tight mt-0.5">5,359</h3>
                </div>
                <span className="text-[12px] font-semibold text-[#D34053] bg-[#FBEAEA] px-2 py-0.5 rounded-full flex items-center gap-0.5 mb-1">
                  <ArrowDown size={12} className="inline" /> 3.51%
                </span>
              </div>
            </div>

          </div>

          {/* Monthly Sales Chart */}
          <div className="bg-white border border-[#E2E8F0] rounded-sm p-6 hover:border-[#FFAE34] transition-colors duration-200">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-bold text-[#1C2434]">Monthly Sales</h4>
              <button className="text-[#64748B] hover:text-black cursor-pointer transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
            <div className="h-64 relative">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Monthly Target Gauge */}
        <div className="bg-white border border-[#E2E8F0] rounded-sm flex flex-col justify-between h-full min-h-[465px] hover:border-[#FFAE34] transition-colors duration-200">

          <div className="p-6 pb-0 flex items-center justify-between">
            <div>
              <h4 className="text-lg font-bold text-[#1C2434]">Monthly Target</h4>
              <p className="text-xs text-[#64748B] mt-0.5">Target you've set for each month</p>
            </div>
            <button className="text-[#64748B] hover:text-black cursor-pointer transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center p-6 relative">
            {/* SVG Semi-circle gauge — fills left to right */}
            <div className="w-full flex justify-center">
              <svg viewBox="0 0 200 110" className="w-52">
                {/* Track arc */}
                <path
                  d="M 16 100 A 84 84 0 0 1 184 100"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                {/* Progress arc — 75.55% of semi-circle length (≈263.9 total) */}
                <path
                  d="M 16 100 A 84 84 0 0 1 184 100"
                  fill="none"
                  stroke="#FFAE34"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${0.7555 * 263.9} 263.9`}
                  strokeDashoffset={0}
                />
              </svg>
            </div>

            <div className="text-center -mt-4">
              <h2 className="text-[32px] font-bold text-[#1C2434] leading-none">75.55%</h2>
              <span className="text-[11px] font-bold text-[#FFAE34] bg-[#FFF8EC] px-2 py-0.5 rounded-full inline-block mt-2">
                +10% this month
              </span>
            </div>

            <p className="text-xs font-medium text-[#64748B] text-center max-w-[240px] mt-6 leading-relaxed">
              You earn <span className="text-[#1C2434] font-semibold">$3,287</span> today, it's higher than last month. Keep up your good work!
            </p>
          </div>


          <div className="border-t border-[#E2E8F0] bg-[#FFFBF4] grid grid-cols-3 divide-x divide-[#E2E8F0] p-4 text-center">
            <div>
              <p className="text-[11px] font-medium text-[#64748B]">Target</p>
              <h5 className="text-[13px] font-bold text-[#1C2434] flex items-center justify-center gap-0.5 mt-0.5">
                $20K <span className="text-[#D34053] text-[10px]">↓</span>
              </h5>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#64748B]">Revenue</p>
              <h5 className="text-[13px] font-bold text-[#1C2434] flex items-center justify-center gap-0.5 mt-0.5">
                $20K <span className="text-[#10B981] text-[10px]">↑</span>
              </h5>
            </div>
            <div>
              <p className="text-[11px] font-medium text-[#64748B]">Today</p>
              <h5 className="text-[13px] font-bold text-[#1C2434] flex items-center justify-center gap-0.5 mt-0.5">
                $20K <span className="text-[#10B981] text-[10px]">↑</span>
              </h5>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsOverview;