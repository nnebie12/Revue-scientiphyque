import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, BookCopy, Mail, LogOut } from 'lucide-react';
import authService from '../../services/authService';

const AdminSidebar = () => {
  const menuItems = [
    { path: '/admin/dashboard', icon: <LayoutDashboard />, label: 'Tableau de bord' },
    { path: '/admin/articles', icon: <FileText />, label: 'Articles' },
    { path: '/admin/volumes', icon: <BookCopy />, label: 'Volumes' },
    { path: '/admin/messages', icon: <Mail />, label: 'Messages' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col min-h-screen">
      <div className="p-6 text-xl font-bold border-b border-gray-800">
        ARME Panel
      </div>
      
      <nav className="flex-1 mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-4 px-6 py-3 transition-colors ${
                isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => authService.logout()}
        className="flex items-center gap-4 px-6 py-4 text-red-400 hover:bg-red-900/20 transition-colors border-t border-gray-800"
      >
        <LogOut />
        <span>Déconnexion</span>
      </button>
    </aside>
  );
};

export default AdminSidebar;
