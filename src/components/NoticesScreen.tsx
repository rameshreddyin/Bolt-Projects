import React from 'react';
import { Bell, Calendar, AlertTriangle, Info, CheckCircle, Pin } from 'lucide-react';

interface NoticesScreenProps {
  onBack: () => void;
}

const NoticesScreen: React.FC<NoticesScreenProps> = ({ onBack }) => {
  const notices = [
    {
      id: 1,
      title: 'Maintenance Work - Water Supply',
      content: 'Water supply will be interrupted on December 25th from 10 AM to 2 PM for maintenance work in the main pipeline. Please store water accordingly.',
      type: 'important',
      date: '2024-12-23',
      isPinned: true,
      author: 'PG Management'
    },
    {
      id: 2,
      title: 'New Year Celebration',
      content: 'Join us for New Year celebration on December 31st at 8 PM in the common area. Snacks and refreshments will be provided.',
      type: 'event',
      date: '2024-12-22',
      isPinned: false,
      author: 'PG Management'
    },
    {
      id: 3,
      title: 'Rent Payment Reminder',
      content: 'Monthly rent for January 2025 is due on January 5th. Please make the payment on time to avoid late fees.',
      type: 'reminder',
      date: '2024-12-20',
      isPinned: true,
      author: 'Accounts Department'
    },
    {
      id: 4,
      title: 'WiFi Password Updated',
      content: 'WiFi password has been updated for security reasons. New password: PG2024@Secure. Please update your devices.',
      type: 'info',
      date: '2024-12-18',
      isPinned: false,
      author: 'IT Support'
    },
    {
      id: 5,
      title: 'Mess Menu Changes',
      content: 'Due to festival season, special meals will be served from December 24th to December 26th. Regular menu will resume from December 27th.',
      type: 'info',
      date: '2024-12-17',
      isPinned: false,
      author: 'Mess Committee'
    },
    {
      id: 6,
      title: 'Security Guidelines',
      content: 'Please ensure to carry your ID cards at all times. Visitors must be registered at the reception. Gate timings: 6 AM to 11 PM.',
      type: 'important',
      date: '2024-12-15',
      isPinned: false,
      author: 'Security Department'
    }
  ];

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertTriangle size={20} className="text-red-400" />;
      case 'event':
        return <Calendar size={20} className="text-blue-400" />;
      case 'reminder':
        return <Bell size={20} className="text-yellow-400" />;
      case 'info':
        return <Info size={20} className="text-green-400" />;
      default:
        return <Bell size={20} className="text-gray-400" />;
    }
  };

  const getNoticeTypeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'bg-red-900 text-red-300 border-red-800';
      case 'event':
        return 'bg-blue-900 text-blue-300 border-blue-800';
      case 'reminder':
        return 'bg-yellow-900 text-yellow-300 border-yellow-800';
      case 'info':
        return 'bg-green-900 text-green-300 border-green-800';
      default:
        return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Yesterday';
    if (diffDays === 0) return 'Today';
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  // Sort notices: pinned first, then by date
  const sortedNotices = [...notices].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="min-h-screen bg-black px-4 pb-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-2">Notices</h1>
          <p className="text-gray-400 text-sm">Important announcements and updates</p>
        </div>

        {/* Notice Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="text-white text-xl font-bold">{notices.length}</div>
            <div className="text-gray-400 text-xs">Total</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="text-white text-xl font-bold">{notices.filter(n => n.isPinned).length}</div>
            <div className="text-gray-400 text-xs">Pinned</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
            <div className="text-white text-xl font-bold">{notices.filter(n => n.type === 'important').length}</div>
            <div className="text-gray-400 text-xs">Important</div>
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {sortedNotices.map((notice) => (
            <div
              key={notice.id}
              className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 relative ${
                notice.isPinned ? 'ring-1 ring-white ring-opacity-20' : ''
              }`}
            >
              {notice.isPinned && (
                <div className="absolute top-4 right-4">
                  <Pin size={16} className="text-white" />
                </div>
              )}

              <div className="flex items-start space-x-3 mb-3">
                {getNoticeIcon(notice.type)}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-white font-semibold text-lg">{notice.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getNoticeTypeColor(notice.type)}`}>
                      {notice.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {notice.content}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs border-t border-gray-800 pt-3">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">By {notice.author}</span>
                </div>
                <span className="text-gray-500">{formatDate(notice.date)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {notices.length === 0 && (
          <div className="text-center py-12">
            <Bell size={48} className="text-gray-600 mx-auto mb-4" />
            <h3 className="text-gray-400 text-lg font-medium mb-2">No notices yet</h3>
            <p className="text-gray-500 text-sm">New announcements will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticesScreen;