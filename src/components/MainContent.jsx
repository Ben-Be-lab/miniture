import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function MainContent({ activeTab }) {
  return (
    <main className="flex-1 px-6 lg:p-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-black capitalize">{activeTab} Panel</h2>
      </div>


      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-sm border border-[#E2E8F0] shadow-xs flex justify-between items-end">
              <div>
                <p className="text-sm font-medium text-[#64748B] mb-1">Total Customers</p>
                <h3 className="text-2xl font-bold text-black">3,782</h3>
              </div>
              <span className="text-xs font-semibold text-[#10B981] bg-[#E6F4EA] px-2.5 py-1 rounded-full flex items-center gap-1">
                <TrendingUp size={12} /> 11.01%
              </span>
            </div>
            <div className="bg-white p-6 rounded-sm border border-[#E2E8F0] shadow-xs flex justify-between items-end">
              <div>
                <p className="text-sm font-medium text-[#64748B] mb-1">Total Orders</p>
                <h3 className="text-2xl font-bold text-black">5,359</h3>
              </div>
              <span className="text-xs font-semibold text-[#D34053] bg-[#FBEAEA] px-2.5 py-1 rounded-full flex items-center gap-1">
                <TrendingDown size={12} /> 9.05%
              </span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm border border-[#E2E8F0] shadow-xs min-h-[300px] flex items-center justify-center text-gray-400 font-medium">
            Main Analytic Chart Metrics Workspace Content Goes Here
          </div>
        </div>
      )}

      {/* 👥 VIEW 2: USERS SECTION */}
      {activeTab === 'users' && (
        <div className="bg-white p-8 rounded-sm border border-[#E2E8F0] shadow-xs">
          <h3 className="text-lg font-bold mb-2">User Management System</h3>
          <p className="text-sm text-[#64748B]">Manage your system roles, consumer accounts, and profiles.</p>
        </div>
      )}

      {/* 📦 VIEW 3: PRODUCTS SECTION */}
      {activeTab === 'products' && (
        <div className="bg-white p-8 rounded-sm border border-[#E2E8F0] shadow-xs">
          <h3 className="text-lg font-bold mb-2">Product Catalog System</h3>
          <p className="text-sm text-[#64748B]">Create, edit, and control your e-commerce inventory items.</p>
        </div>
      )}

      {/* 🛍️ VIEW 4: ORDERS SECTION */}
      {activeTab === 'orders' && (
        <div className="bg-white p-8 rounded-sm border border-[#E2E8F0] shadow-xs">
          <h3 className="text-lg font-bold mb-2">Order Fulfillment Queue</h3>
          <p className="text-sm text-[#64748B]">Monitor checkouts, shipments, and customer invoicing pipelines.</p>
        </div>
      )}

      {/* 📬 VIEW 5: CONTACTS SECTION */}
      {activeTab === 'contacts' && (
        <div className="bg-white p-8 rounded-sm border border-[#E2E8F0] shadow-xs">
          <h3 className="text-lg font-bold mb-2">Contact Form Inquiries</h3>
          <p className="text-sm text-[#64748B]">Read and reply to direct help desk customer support feedback.</p>
        </div>
      )}
    </main>
  );
}