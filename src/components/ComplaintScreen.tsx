import React, { useState } from 'react';
import { MessageCircle, Camera, Send, AlertTriangle, CheckCircle, Clock, User } from 'lucide-react';

interface ComplaintScreenProps {
  onBack: () => void;
}

const ComplaintScreen: React.FC<ComplaintScreenProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    category: '',
    subject: '',
    description: '',
    priority: 'medium'
  });

  const [complaints] = useState([
    {
      id: 1,
      subject: 'AC not working',
      category: 'Maintenance',
      description: 'The air conditioner in room B-204 has stopped working since yesterday.',
      status: 'resolved',
      priority: 'high',
      createdAt: '2024-12-20',
      resolvedAt: '2024-12-21'
    },
    {
      id: 2,
      subject: 'WiFi connectivity issues',
      category: 'Internet',
      description: 'Internet connection is very slow and keeps disconnecting frequently.',
      status: 'in-progress',
      priority: 'medium',
      createdAt: '2024-12-18'
    },
    {
      id: 3,
      subject: 'Water leakage in bathroom',
      category: 'Plumbing',
      description: 'There is water leakage from the bathroom ceiling.',
      status: 'pending',
      priority: 'high',
      createdAt: '2024-12-15'
    }
  ]);

  const categories = [
    'Maintenance',
    'Plumbing',
    'Electrical',
    'Internet',
    'Cleaning',
    'Security',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Complaint submitted:', formData);
    // Reset form
    setFormData({
      category: '',
      subject: '',
      description: '',
      priority: 'medium'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-white text-black';
      case 'in-progress':
        return 'bg-gray-700 text-white';
      case 'pending':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle size={16} />;
      case 'in-progress':
        return <Clock size={16} />;
      case 'pending':
        return <AlertTriangle size={16} />;
      default:
        return <Clock size={16} />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black px-4 pb-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-2">Complaints</h1>
          <p className="text-gray-400 text-sm">Report issues and track their resolution</p>
        </div>

        {/* New Complaint Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
          <h2 className="text-white text-lg font-semibold mb-4 flex items-center">
            <MessageCircle size={20} className="mr-2" />
            New Complaint
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                required
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                placeholder="Brief description of the issue"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors h-24 resize-none"
                placeholder="Detailed description of the problem..."
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Priority</label>
              <div className="flex space-x-3">
                {['low', 'medium', 'high'].map((priority) => (
                  <button
                    key={priority}
                    type="button"
                    onClick={() => setFormData({ ...formData, priority })}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      formData.priority === priority
                        ? 'bg-white text-black'
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors"
              >
                <Camera size={20} />
              </button>
              <button
                type="submit"
                className="flex-1 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Submit Complaint</span>
              </button>
            </div>
          </form>
        </div>

        {/* Complaint History */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Your Complaints</h2>
          <div className="space-y-4">
            {complaints.map((complaint) => (
              <div key={complaint.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{complaint.subject}</h3>
                    <p className="text-gray-400 text-sm">{complaint.category}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(complaint.status)}`}>
                    {getStatusIcon(complaint.status)}
                    <span className="capitalize">{complaint.status.replace('-', ' ')}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4">{complaint.description}</p>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      Created: {new Date(complaint.createdAt).toLocaleDateString()}
                    </span>
                    <span className={`font-medium ${getPriorityColor(complaint.priority)}`}>
                      {complaint.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                  {complaint.resolvedAt && (
                    <span className="text-gray-400">
                      Resolved: {new Date(complaint.resolvedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintScreen;