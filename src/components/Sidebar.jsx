import React, { useState } from 'react';
import { 
  Grid, 
  Users, 
  Package, 
  ShoppingBag, 
  Mail, 
  ChevronDown 
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen }) {
  // Track which folder dropdowns are currently toggled open
  const [openDropdown, setOpenDropdown] = useState({
    dashboard: true, // Keep dashboard sub-links open by default like the photo
    users: false,
    products: false,
    orders: false,
    contacts: false,
  });

  // Toggle dropdown folders open/closed
  const toggleDropdown = (folderId) => {
    setOpenDropdown(prev => ({
      ...prev,
      [folderId]: !prev[folderId]
    }));
  };

  // 📁 Navigation Menu Definition Schema (Folders with child sub-links)
  const menuStructure = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Grid,
      hasDropdown: true,
      subItems: [
        { id: 'dashboard-analytics', label: 'Analytics Overview' },
        { id: 'dashboard-ecommerce', label: 'E-commerce Metrics' }
      ]
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      hasDropdown: true,
      subItems: [
        { id: 'users-list', label: 'All Users' },
        { id: 'users-roles', label: 'Role Permissions' }
      ]
    },
    {
      id: 'products',
      label: 'Products',
      icon: Package,
      hasDropdown: true,
      subItems: [
        { id: 'products-all', label: 'Inventory List' },
        { id: 'products-add', label: 'Add New Item' }
      ]
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: ShoppingBag,
      hasDropdown: true,
      subItems: [
        { id: 'orders-queue', label: 'Active Pipeline' },
        { id: 'orders-history', label: 'Archived Sales' }
      ]
    },
    {
      id: 'contacts',
      label: 'Contacts',
      icon: Mail,
      hasDropdown: true,
      subItems: [
        { id: 'contacts-inbox', label: 'Customer Help Desk' }
      ]
    },
  ];

  return (
// Ensure your opening <aside> tag line in components/Sidebar.jsx uses this matching class structure:
<aside 
  className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-[#E2E8F0] text-[#1C2434] transition-transform duration-300 ease-in-out flex flex-col justify-between ${
    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-[#E2E8F0]">
          <div className="w-7 h-7 bg-[#3C50E0] rounded-md flex items-center justify-center text-white font-bold text-base">
            T
          </div>
          <span className="text-lg font-bold text-[#1C2434] tracking-tight">TailAdmin</span>
        </div>

        {/* Navigation Core */}
        <div className="px-4 py-6">
          <p className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-4 px-3">
            MENU
          </p>
          <nav className="space-y-1">
            {menuStructure.map((folder) => {
              const FolderIcon = folder.icon;
              const isFolderOpen = openDropdown[folder.id];
              
              // Determine if any sub-item inside this folder is currently selected active tab
              const isChildActive = folder.subItems.some(sub => sub.id === activeTab);

              return (
                <div key={folder.id} className="flex flex-col">
                  {/* 📂 Folder Trigger Button */}
                  <button
                    onClick={() => toggleDropdown(folder.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors duration-150 cursor-pointer group ${
                      isChildActive ? 'bg-[#F8FAFC] text-black' : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#1C2434]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <FolderIcon size={18} className={isChildActive ? 'text-[#3C50E0]' : 'text-[#64748B] group-hover:text-[#1C2434]'} />
                      <span>{folder.label}</span>
                    </div>
                    
                    {/* 🌟 CHEVRON ICON WITH ROTATE TRANSITION */}
                    <ChevronDown 
                      size={15} 
                      className={`text-[#64748B] transition-transform duration-200 ${isFolderOpen ? 'rotate-180 text-[#3C50E0]' : ''}`} 
                    />
                  </button>

                  {/* 🔗 Sub-Items Child Links Container */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out pl-10 pr-2 space-y-1 mt-1 ${
                    isFolderOpen ? 'max-h-40 opacity-100 mb-2' : 'max-h-0 opacity-0'
                  }`}>
                    {folder.subItems.map((subItem) => {
                      const isLinkActive = activeTab === subItem.id;
                      return (
                        <button
                          key={subItem.id}
                          onClick={() => setActiveTab(subItem.id)}
                          className={`w-full text-left py-1.5 px-3 rounded-md text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                            isLinkActive 
                              ? 'text-[#3C50E0] font-semibold' 
                              : 'text-[#64748B] hover:text-black'
                          }`}
                        >
                          {subItem.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-[#E2E8F0] text-[11px] font-medium text-[#94A3B8] text-center">
        Workspace System v1.0
      </div>
    </aside>
  );
}