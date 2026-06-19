import React from 'react';
import { MoreVertical } from 'lucide-react';

export default function DemographicsAndOrders() {
  const recentOrders = [
    {
      name: 'Macintosh Pro M1',
      category: 'Laptop',
      price: '$2399.00',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=60&q=80'
    },
    {
      name: 'Apple Watch Series 7',
      category: 'Watch',
      price: '$399.00',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=60&q=80'
    },
    {
      name: 'iPhone 13 Pro Max',
      category: 'Smartphone',
      price: '$1099.00',
      status: 'Cancelled',
      image: 'https://images.unsplash.com/photo-1632661676897-cdd013702291?auto=format&fit=crop&w=60&q=80'
    },
    {
      name: 'iPad Pro 12.9 Inch',
      category: 'Tablet',
      price: '$999.00',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=60&q=80'
    }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

      {/* 🗺️ CUSTOMER DEMOGRAPHICS CARD */}
      <div className="bg-white border border-[#E2E8F0] rounded-sm p-6 flex flex-col justify-between min-h-[420px] hover:border-[#FFAE34] transition-colors duration-200">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-lg font-bold text-[#1C2434]">Customers Demographics</h4>
              <p className="text-xs text-[#64748B] mt-0.5">Number of customers based on country</p>
            </div>
            <button className="text-[#64748B] hover:text-black cursor-pointer transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>

          {/* Stylized SVG Map */}
          <div className="w-full h-44 flex items-center justify-center my-4 relative">
            <svg viewBox="0 0 1000 480" className="w-full h-full fill-current opacity-80">
              <path d="M150,150 Q180,100 250,120 T350,150 T450,130 T600,100 T750,120 T850,150 T950,130 L950,350 Q900,420 800,400 T600,380 T400,420 T200,380 Z" fill="#F1F5F9" />
              {/* North America */}
              <path d="M180,130 Q220,120 250,160 T200,240 T150,280 Z" fill="#FFF8EC" stroke="#FFAE34" strokeWidth="1.5" className="hover:fill-[#FFAE34] transition-colors cursor-pointer opacity-90" />
              {/* Europe */}
              <path d="M480,120 Q540,110 560,150 T520,200 T460,160 Z" fill="#FFF8EC" stroke="#FFAE34" strokeWidth="1.5" className="hover:fill-[#FFAE34] transition-colors cursor-pointer opacity-90" />
              {/* South America */}
              <path d="M260,280 Q320,320 300,380 T260,450 T220,350 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" className="hover:fill-[#FFAE34] transition-colors cursor-pointer opacity-80" />
              {/* Africa */}
              <path d="M480,220 Q550,240 560,320 T500,380 T440,280 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" className="hover:fill-[#FFAE34] transition-colors cursor-pointer opacity-80" />
              {/* Asia */}
              <path d="M650,120 Q780,130 820,200 T750,300 T680,280 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" className="hover:fill-[#FFAE34] transition-colors cursor-pointer opacity-80" />
              <path d="M780,340 Q840,360 820,420 T740,400 Z" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" className="hover:fill-[#FFAE34] transition-colors cursor-pointer opacity-80" />

              {/* Orange pins - USA */}
              <circle cx="210" cy="180" r="10" fill="#FFAE34" opacity="0.3" className="animate-ping" />
              <circle cx="210" cy="180" r="6" fill="#FFAE34" />

              {/* Dark pin - Europe */}
              <circle cx="510" cy="140" r="8" fill="#1C2434" opacity="0.3" className="animate-ping" />
              <circle cx="510" cy="140" r="5" fill="#1C2434" />
            </svg>
          </div>
        </div>

        {/* Country bars */}
        <div className="space-y-3 mt-4">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-[#1C2434] mb-1.5">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FFAE34]"></span> USA
              </span>
              <span>70%</span>
            </div>
            <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden">
              <div className="bg-[#FFAE34] h-full rounded-full transition-all duration-500" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-[#1C2434] mb-1.5">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#1C2434]"></span> France
              </span>
              <span>30%</span>
            </div>
            <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden">
              <div className="bg-[#1C2434] h-full rounded-full transition-all duration-500" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 🛒 RECENT ORDERS TABLE */}
      <div className="bg-white border border-[#E2E8F0] rounded-sm p-6 xl:col-span-2 hover:border-[#FFAE34] transition-colors duration-200">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-bold text-[#1C2434]">Recent Orders</h4>
          <div className="flex items-center gap-2">
            <button className="text-xs font-semibold border border-[#E2E8F0] px-3 py-1.5 rounded-md text-[#64748B] hover:bg-[#FFAE34] hover:text-white hover:border-[#FFAE34] cursor-pointer transition-all duration-200">
              Filter
            </button>
            <button className="text-xs font-semibold border border-[#E2E8F0] px-3 py-1.5 rounded-md text-[#64748B] hover:bg-black hover:text-white hover:border-black cursor-pointer transition-all duration-200">
              View All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#E2E8F0] text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                <th className="pb-4">Products</th>
                <th className="pb-4">Category</th>
                <th className="pb-4">Price</th>
                <th className="pb-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]">
              {recentOrders.map((order, i) => (
                <tr key={i} className="hover:bg-[#FFF8EC] transition-colors group cursor-pointer">
                  <td className="py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100 flex-shrink-0 ring-1 ring-transparent group-hover:ring-[#FFAE34] transition-all duration-200">
                      <img src={order.image} alt={order.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                    </div>
                    <span className="text-sm font-semibold text-[#1C2434] group-hover:text-[#FFAE34] transition-colors duration-200">{order.name}</span>
                  </td>
                  <td className="py-4 text-sm text-[#64748B]">{order.category}</td>
                  <td className="py-4 text-sm font-bold text-[#1C2434]">{order.price}</td>
                  <td className="py-4 text-right">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'Delivered'
                        ? 'bg-[#E6F4EA] text-[#10B981]'
                        : order.status === 'Pending'
                        ? 'bg-[#FFF8EC] text-[#FFAE34]'
                        : 'bg-[#FBEAEA] text-[#D34053]'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
