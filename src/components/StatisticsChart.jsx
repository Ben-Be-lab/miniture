import React from 'react';
import { Line } from 'react-chartjs-2';
import { Calendar } from 'lucide-react';
import 'chart.js/auto';

export default function StatisticsChart() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [180, 190, 170, 160, 175, 165, 170, 200, 230, 210, 240, 235],
        borderColor: '#FFAE34',
        backgroundColor: 'rgba(255, 174, 52, 0.08)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#FFAE34',
        pointBorderWidth: 2,
        pointHoverBorderColor: '#000000',
        pointHoverBackgroundColor: '#000000',
      },
      {
        label: 'Total Sales',
        data: [40, 30, 50, 40, 55, 40, 70, 100, 115, 120, 150, 140],
        borderColor: '#1C2434',
        backgroundColor: 'rgba(28, 36, 52, 0.04)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#1C2434',
        pointBorderWidth: 2,
        pointHoverBorderColor: '#FFAE34',
        pointHoverBackgroundColor: '#FFAE34',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1C2434',
        titleColor: '#FFAE34',
        bodyColor: '#fff',
        padding: 10,
        cornerRadius: 8,
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#64748B' } },
      y: { min: 0, max: 255, ticks: { stepSize: 50, color: '#64748B' } }
    }
  };

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-sm p-6 w-full mt-6 hover:border-[#FFAE34] transition-colors duration-200">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h4 className="text-lg font-bold text-[#1C2434]">Statistics</h4>
          <p className="text-xs text-[#64748B] mt-0.5">Revenue & sales overview per month</p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          {/* Legend */}
          <div className="hidden sm:flex items-center gap-4 mr-2">
            <span className="flex items-center gap-1.5 text-xs font-medium text-[#64748B]">
              <span className="w-3 h-1.5 rounded-full bg-[#FFAE34] inline-block"></span> Revenue
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-[#64748B]">
              <span className="w-3 h-1.5 rounded-full bg-[#1C2434] inline-block"></span> Sales
            </span>
          </div>

          <div className="bg-[#F1F5F9] p-1 rounded-md flex items-center gap-1">
            <button className="text-xs font-semibold px-3 py-1.5 rounded bg-[#FFAE34] text-white shadow-sm cursor-pointer hover:bg-black transition-colors">
              Monthly
            </button>
            <button className="text-xs font-medium px-3 py-1.5 text-[#64748B] hover:text-black cursor-pointer transition-colors">
              Quarterly
            </button>
            <button className="text-xs font-medium px-3 py-1.5 text-[#64748B] hover:text-black cursor-pointer transition-colors">
              Annually
            </button>
          </div>

          <div className="border border-[#E2E8F0] rounded-md px-3 py-2 flex items-center gap-2 text-[#64748B] text-xs font-medium cursor-pointer hover:bg-[#FFF8EC] hover:text-[#FFAE34] hover:border-[#FFAE34] transition-all duration-200">
            <Calendar size={14} />
            <span>Jun 12 to Jun 18</span>
          </div>
        </div>
      </div>

      <div className="h-80 relative">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}