import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Plus, CheckCircle, XCircle, Clock3 } from 'lucide-react';

interface OutingScreenProps {
  onBack: () => void;
}

const OutingScreen: React.FC<OutingScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'apply' | 'history'>('apply');
  const [formData, setFormData] = useState({
    destination: '',
    purpose: '',
    outDate: '',
    outTime: '',
    returnDate: '',
    returnTime: '',
    emergencyContact: ''
  });

  const outingHistory = [
    {
      id: 1,
      destination: 'Delhi',
      purpose: 'Family Visit',
      outDate: '2024-12-20',
      returnDate: '2024-12-22',
      status: 'approved',
      appliedOn: '2024-12-15'
    },
    {
      id: 2,
      destination: 'Gurgaon',
      purpose: 'Job Interview',
      outDate: '2024-12-10',
      returnDate: '2024-12-10',
      status: 'completed',
      appliedOn: '2024-12-08'
    },
    {
      id: 3,
      destination: 'Mumbai',
      purpose: 'Conference',
      outDate: '2024-11-25',
      returnDate: '2024-11-27',
      status: 'rejected',
      appliedOn: '2024-11-20'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Outing application submitted:', formData);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-white text-black';
      case 'rejected':
        return 'bg-gray-700 text-white';
      case 'completed':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle size={16} />;
      case 'rejected':
        return <XCircle size={16} />;
      case 'completed':
        return <CheckCircle size={16} />;
      default:
        return <Clock3 size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 pb-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-2">Outing Management</h1>
          <p className="text-gray-400 text-sm">Apply for outings and track your requests</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-gray-900 rounded-xl p-1 mb-6">
          <button
            onClick={() => setActiveTab('apply')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'apply'
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Apply Outing
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'history'
                ? 'bg-white text-black'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            History
          </button>
        </div>

        {activeTab === 'apply' ? (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  <MapPin size={16} className="inline mr-2" />
                  Destination
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  placeholder="Where are you going?"
                  required
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Purpose of Visit
                </label>
                <textarea
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors h-24 resize-none"
                  placeholder="Reason for outing..."
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Out Date
                  </label>
                  <input
                    type="date"
                    value={formData.outDate}
                    onChange={(e) => setFormData({ ...formData, outDate: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <Clock size={16} className="inline mr-2" />
                    Out Time
                  </label>
                  <input
                    type="time"
                    value={formData.outTime}
                    onChange={(e) => setFormData({ ...formData, outTime: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Return Time
                  </label>
                  <input
                    type="time"
                    value={formData.returnTime}
                    onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  <User size={16} className="inline mr-2" />
                  Emergency Contact
                </label>
                <input
                  type="tel"
                  value={formData.emergencyContact}
                  onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Plus size={20} />
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            {outingHistory.map((outing) => (
              <div key={outing.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{outing.destination}</h3>
                    <p className="text-gray-400 text-sm">{outing.purpose}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(outing.status)}`}>
                    {getStatusIcon(outing.status)}
                    <span className="capitalize">{outing.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Out Date</p>
                    <p className="text-white font-medium">{new Date(outing.outDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Return Date</p>
                    <p className="text-white font-medium">{new Date(outing.returnDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-gray-400 text-xs">Applied on {new Date(outing.appliedOn).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OutingScreen;