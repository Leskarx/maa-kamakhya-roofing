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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { label: 'Quote Requests', icon: FileText, path: '/admin/quotes' },
  { label: 'Projects', icon: FolderOpen, path: '/admin/projects' },
  { label: 'Testimonials', icon: Star, path: '/admin/testimonials' },
  { label: 'Contact Info', icon: Phone, path: '/admin/contact' },
  { label: 'Homepage', icon: Settings, path: '/admin/homepage' },
  { label: 'Service Areas', icon: MapPin, path: '/admin/service-areas' },
  { label: 'Profile', icon: User, path: '/admin/profile' },
];

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    navigate('/admin/login');
  };

  return (
    <aside
      className={`hidden lg:flex flex-col h-screen sticky top-0 bg-[#0B2E6B] transition-all duration-300 ease-in-out shrink-0 ${
        collapsed ? 'w-[72px]' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-white/10 ${collapsed ? 'justify-center' : ''}`}>
        <div className="w-9 h-9 bg-[#F4B400] rounded-xl flex items-center justify-center shrink-0">
          <Home className="w-5 h-5 text-[#0B2E6B]" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="font-bold text-white text-sm leading-tight font-['Poppins',sans-serif] whitespace-nowrap">
              Maa Kamakhya
            </p>
            <p className="text-[10px] text-[#F4B400] font-semibold tracking-wider uppercase whitespace-nowrap">
              Admin Panel
            </p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {NAV_ITEMS.map(({ label, icon: Icon, path }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/admin'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group relative ${
                isActive
                  ? 'bg-white/15 text-white'
                  : 'text-blue-200 hover:bg-white/10 hover:text-white'
              } ${collapsed ? 'justify-center' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#F4B400] rounded-r-full" />
                )}
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : ''}`} />
                {!collapsed && (
                  <span className="text-sm font-semibold whitespace-nowrap">{label}</span>
                )}
                {collapsed && (
                  <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                    {label}
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-white/10 p-2 space-y-1">
        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-colors group relative ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!collapsed && <span className="text-sm font-semibold">Logout</span>}
          {collapsed && (
            <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
              Logout
            </div>
          )}
        </button>

        {/* Collapse toggle */}
        <button
          onClick={onToggle}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-blue-300 hover:bg-white/10 hover:text-white transition-colors ${
            collapsed ? 'justify-center' : 'justify-between'
          }`}
        >
          {!collapsed && <span className="text-xs font-medium">Collapse</span>}
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>
    </aside>
  );
}
