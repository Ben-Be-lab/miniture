import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid,
  Users,
  Package,
  ShoppingBag,
  Mail,
  ChevronDown,
  LogOut
} from 'lucide-react';

function Sidebar({ sidebarOpen }) {
  // Track which folder dropdowns are currently toggled open
  const [openDropdown, setOpenDropdown] = useState({
    dashboard: true, // Keep dashboard sub-links open by default
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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/'; // Redirect to public home
  };

  const menuStructure = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Grid,
      subItems: [
        { path: '/admin/dashboard', label: 'ecommerce' },
        { path: '/admin/dashboard/analytics', label: 'Analytics' },
        { path: '/admin/dashboard/marketing', label: 'Marketing' },
        { path: '/admin/dashboard/logistics', label: 'Logistics' },
      ]
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      subItems: [{ path: '/admin/dashboard/users', label: 'All Users' }]
    },
    {
      id: 'products',
      label: 'Products',
      icon: Package,
      subItems: [{ path: '/admin/dashboard/products', label: 'Inventory List' }]
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: ShoppingBag,
      subItems: [{ path: '/admin/dashboard/orders', label: 'Active Pipeline' }]
    },
    {
      id: 'contacts',
      label: 'Contacts',
      icon: Mail,
      subItems: [{ path: '/admin/dashboard/contacts', label: 'Customer Help Desk' }]
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-[#E2E8F0] text-[#1C2434] transition-transform duration-300 ease-in-out flex flex-col justify-between ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-[#E2E8F0]">
          <div className="w-7 h-7 bg-[#FFAE34] rounded-md flex items-center justify-center text-white font-bold text-base">
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

              return (
                <div key={folder.id} className="flex flex-col">
                  {/* 📂 Folder Trigger Button */}
                  <button
                    onClick={() => toggleDropdown(folder.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-medium text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#1C2434] transition-colors duration-150 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5">
                      <FolderIcon size={18} className="text-[#64748B] group-hover:text-[#1C2434]" />
                      <span>{folder.label}</span>
                    </div>

                    <ChevronDown
                      size={15}
                      className={`text-[#64748B] transition-transform duration-200 ${
                        isFolderOpen ? 'rotate-180 text-[#FFAE34]' : ''
                      }`}
                    />
                  </button>

                  {/* 🔗 Sub-Items Child Links Container */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out pl-10 pr-2 space-y-1 mt-1 ${
                      isFolderOpen ? 'max-h-60 opacity-100 mb-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {folder.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block w-full text-left py-1.5 px-3 rounded-md text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                            isActive
                              ? 'text-[#FFAE34] font-semibold bg-[#FFF8EC]'
                              : 'text-[#64748B] hover:text-black hover:bg-[#FFF8EC]'
                          }`
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer Area with Logout Action */}
      <div className="p-4 border-t border-[#E2E8F0] flex flex-col gap-2">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3.5 px-3 py-2.5 rounded-lg text-[14px] font-medium text-[#D34053] hover:bg-[#FBEAEA] transition-colors duration-150 cursor-pointer text-left"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
        <div className="text-[11px] font-medium text-[#94A3B8] text-center mt-2">
          Workspace System v1.0
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;