import React from 'react';
import { Truck, Wallet, Headphones, CreditCard } from 'lucide-react';

export default function FeaturesBannerSection() {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      desc: "Free Shipping for orders",
      icon: <Truck size={22} className="text-black stroke-[1.5]" />
    },
    {
      id: 2,
      title: "Money Guarantee.",
      desc: "Within 30 days",
      icon: <Wallet size={22} className="text-black stroke-[1.5]" />
    },
    {
      id: 3,
      title: "Online Support",
      desc: "24 hours a day, 7 days a week",
      icon: <Headphones size={22} className="text-black stroke-[1.5]" />
    },
    {
      id: 4,
      title: "Flexible Payment",
      desc: "Pay with Multiple Credit Cards",
      icon: <CreditCard size={22} className="text-black stroke-[1.5]" />
    }
  ];

  return (
    /* Keeps alignment perfectly standard with the rest of your home page layout containers */
    <section className="w-full px-4 md:px-10 py-12 bg-white select-none">
      <div className="w-full  mx-auto">
        
        {/* Responsive Flex / Grid Columns row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {features.map((item) => (
            <div key={item.id} className="flex items-center gap-4 pl-2 lg:pl-4">
              
              {/* Thin Outlined Circular Icon Frame */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center bg-transparent">
                {item.icon}
              </div>

              {/* Text Description Block */}
              <div className="flex flex-col">
                <h4 className="text-[24px] font-200px text-black tracking-tight leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-[13px] font-normal text-gray-400 leading-normal">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}