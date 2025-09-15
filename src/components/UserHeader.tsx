import React from 'react';
import { Search, Bell } from 'lucide-react';

const UserHeader = () => {
  return (
    <div className="px-4 pt-12 pb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">RK</span>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">Raj Kumar</h1>
            <p className="text-gray-400 text-sm">rajkumar@example.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all">
            <Bell className="text-white" size={20} />
          </button>
          <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all">
            <Search className="text-white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;