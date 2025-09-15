import React, { useState } from 'react';
import { Home, QrCode, CreditCard, Settings, ArrowLeft } from 'lucide-react';
import HomeScreen from './components/HomeScreen';
import QRScreen from './components/QRScreen';
import PaymentsScreen from './components/PaymentsScreen';
import SettingsScreen from './components/SettingsScreen';
import OutingScreen from './components/OutingScreen';
import ComplaintScreen from './components/ComplaintScreen';
import MessMenuScreen from './components/MessMenuScreen';
import NoticesScreen from './components/NoticesScreen';

type TabType = 'home' | 'qr' | 'payments' | 'settings' | 'outing' | 'complaint' | 'mess-menu' | 'notices';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const isSubPage = ['outing', 'complaint', 'mess-menu', 'notices'].includes(activeTab);

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen onNavigate={setActiveTab} />;
      case 'qr':
        return <QRScreen />;
      case 'payments':
        return <PaymentsScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'outing':
        return <OutingScreen onBack={() => setActiveTab('home')} />;
      case 'complaint':
        return <ComplaintScreen onBack={() => setActiveTab('home')} />;
      case 'mess-menu':
        return <MessMenuScreen onBack={() => setActiveTab('home')} />;
      case 'notices':
        return <NoticesScreen onBack={() => setActiveTab('home')} />;
      default:
        return <HomeScreen onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {isSubPage && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 px-4 py-4">
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>
        </div>
      )}
      
      <div className={`${isSubPage ? 'pt-16' : ''} ${!isSubPage ? 'pb-20' : ''}`}>
        {renderScreen()}
      </div>
      
      {/* Bottom Navigation */}
      {!isSubPage && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeTab === 'home'
                ? 'text-black bg-gray-100'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Home size={20} />
            <span className="text-xs mt-1 font-medium">Home</span>
          </button>
          
          <button
            onClick={() => setActiveTab('qr')}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeTab === 'qr'
                ? 'text-black bg-gray-100'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <QrCode size={20} />
            <span className="text-xs mt-1 font-medium">Mess QR</span>
          </button>
          
          <button
            onClick={() => setActiveTab('payments')}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeTab === 'payments'
                ? 'text-black bg-gray-100'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <CreditCard size={20} />
            <span className="text-xs mt-1 font-medium">Payments</span>
          </button>
          
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeTab === 'settings'
                ? 'text-black bg-gray-100'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Settings size={20} />
            <span className="text-xs mt-1 font-medium">Settings</span>
          </button>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;