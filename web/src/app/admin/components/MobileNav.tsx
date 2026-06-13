import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Star,
  Phone,
  Settings,
  MapPin,
  User,
  LogOut,
  Home,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { label: 'Quotes', icon: FileText, path: '/admin/quotes' },
  { label: 'Projects', icon: FolderOpen, path: '/admin/projects' },
  { label: 'Reviews', icon: Star, path: '/admin/testimonials' },
  { label: 'Contact', icon: Phone, path: '/admin/contact' },
  { label: 'Homepage', icon: Settings, path: '/admin/homepage' },
  { label: 'Areas', icon: MapPin, path: '/admin/service-areas' },
  { label: 'Profile', icon: User, path: '/admin/profile' },
];

export function MobileNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    navigate('/admin/login');
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl">
      {/* Brand strip */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#0B2E6B]">
        <div className="w-5 h-5 bg-[#F4B400] rounded flex items-center justify-center">
          <Home className="w-3 h-3 text-[#0B2E6B]" />
        </div>
        <span className="text-white text-xs font-bold tracking-wide">MAA KAMAKHYA ADMIN</span>
      </div>
      {/* Nav items */}
      <div className="flex items-center overflow-x-auto scrollbar-hide">
        {NAV_ITEMS.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/admin'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-3 py-3 min-w-[60px] flex-1 transition-colors ${
                isActive
                  ? 'text-[#0B2E6B] border-t-2 border-[#0B2E6B]'
                  : 'text-gray-500 border-t-2 border-transparent hover:text-[#0B2E6B]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#0B2E6B]' : 'text-gray-400'}`} />
                <span className="text-[9px] font-semibold">{label}</span>
              </>
            )}
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center gap-1 px-3 py-3 min-w-[60px] flex-1 text-red-500 border-t-2 border-transparent hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-[9px] font-semibold">Logout</span>
        </button>
      </div>
    </nav>
  );
}
