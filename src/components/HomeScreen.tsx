import React from 'react';
import { Search, MapPin, Calendar, Clock, FileText, MessageCircle, QrCode, History, LogOut, Bell } from 'lucide-react';
import UserHeader from './UserHeader';
import RoomCard from './RoomCard';
import QuickActionButton from './QuickActionButton';

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      <UserHeader />
      
      {/* Room Information Card */}
      <div className="px-4 -mt-8">
        <RoomCard />
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-6">
        <h2 className="text-white text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickActionButton
            icon={<LogOut size={20} />}
            title="Apply Outing"
            subtitle="Request permission"
            bgColor="bg-white"
            textColor="text-black"
            onClick={() => onNavigate('outing')}
          />
          <QuickActionButton
            icon={<MessageCircle size={20} />}
            title="Complaint"
            subtitle="Report issues"
            bgColor="bg-gray-800"
            textColor="text-white"
            onClick={() => onNavigate('complaint')}
          />
          <QuickActionButton
            icon={<FileText size={20} />}
            title="Mess Menu"
            subtitle="Today's menu"
            bgColor="bg-white"
            textColor="text-black"
            onClick={() => onNavigate('mess-menu')}
          />
          <QuickActionButton
            icon={<QrCode size={20} />}
            title="Mess QR"
            subtitle="Scan for meals"
            bgColor="bg-gray-800"
            textColor="text-white"
            onClick={() => onNavigate('qr')}
          />
          <QuickActionButton
            icon={<History size={20} />}
            title="Fee History"
            subtitle="Past payments"
            bgColor="bg-white"
            textColor="text-black"
            onClick={() => onNavigate('payments')}
          />
          <QuickActionButton
            icon={<Bell size={20} />}
            title="Notices"
            subtitle="PG announcements"
            bgColor="bg-gray-800"
            textColor="text-white"
            onClick={() => onNavigate('notices')}
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 mt-8">
        <h2 className="text-white text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 py-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-gray-300 text-sm">Payment completed for December</span>
              <span className="text-gray-500 text-xs ml-auto">2 days ago</span>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-gray-300 text-sm">Outing request approved</span>
              <span className="text-gray-500 text-xs ml-auto">5 days ago</span>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-gray-300 text-sm">Maintenance complaint resolved</span>
              <span className="text-gray-500 text-xs ml-auto">1 week ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;