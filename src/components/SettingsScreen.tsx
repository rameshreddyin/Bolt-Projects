import React from 'react';
import { User, Bell, Lock, HelpCircle, LogOut, Edit, Phone, Mail, MapPin, Camera } from 'lucide-react';

const SettingsScreen = () => {
  const menuItems = [
    {
      icon: <User size={20} />,
      title: 'Edit Profile',
      subtitle: 'Update your personal information',
      action: () => {}
    },
    {
      icon: <Bell size={20} />,
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      action: () => {}
    },
    {
      icon: <Lock size={20} />,
      title: 'Privacy & Security',
      subtitle: 'Password and security settings',
      action: () => {}
    },
    {
      icon: <HelpCircle size={20} />,
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      action: () => {}
    }
  ];

  return (
    <div className="min-h-screen pt-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-2">Settings</h1>
          <p className="text-gray-400 text-sm">Manage your account and preferences</p>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">RK</span>
              </div>
              <button className="absolute -bottom-1 -right-1 bg-gray-700 text-white p-1 rounded-full shadow-lg">
                <Camera size={12} />
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg">Raj Kumar</h3>
              <p className="text-gray-300 text-sm">Tenant • Room B-204</p>
              <p className="text-gray-500 text-xs">Member since Sep 2024</p>
            </div>
          </div>

          <div className="space-y-3 border-t border-gray-800 pt-4">
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone size={16} />
              <span className="text-sm">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail size={16} />
              <span className="text-sm">rajkumar@example.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin size={16} />
              <span className="text-sm">Sector 18, Noida, UP</span>
            </div>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center space-x-4 p-3 hover:bg-gray-800 rounded-xl transition-colors"
              >
                <div className="text-gray-300">{item.icon}</div>
                <div className="flex-1 text-left">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.subtitle}</p>
                </div>
                <div className="text-gray-500">
                  <Edit size={16} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Account Actions */}
        <div className="space-y-3">
          <button className="w-full bg-white text-black p-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
          
          <div className="text-center">
            <p className="text-gray-500 text-xs">App Version 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;