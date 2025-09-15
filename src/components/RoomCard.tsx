import React from 'react';
import { MapPin, Users, Calendar, Clock, Wifi, Car } from 'lucide-react';

const RoomCard = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Room B-204</h2>
          <p className="text-gray-400 text-sm flex items-center">
            <MapPin size={14} className="mr-1" />
            Sector 18, Noida
          </p>
        </div>
        <div className="bg-white px-3 py-1 rounded-full">
          <span className="text-black text-sm font-medium">Active</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-800 rounded-xl">
          <Users className="text-white mx-auto mb-2" size={20} />
          <p className="text-gray-400 text-xs">Room Type</p>
          <p className="text-white font-semibold">Double Sharing</p>
        </div>
        <div className="text-center p-3 bg-gray-800 rounded-xl">
          <Calendar className="text-white mx-auto mb-2" size={20} />
          <p className="text-gray-400 text-xs">Next Payment</p>
          <p className="text-white font-semibold">Jan 5, 2025</p>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-4">
        <h3 className="text-gray-300 font-semibold mb-3">Amenities</h3>
        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center space-x-1">
            <Wifi size={16} />
            <span className="text-sm">WiFi</span>
          </div>
          <div className="flex items-center space-x-1">
            <Car size={16} />
            <span className="text-sm">Parking</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={16} />
            <span className="text-sm">24/7 Power</span>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-white rounded-xl">
        <div className="flex items-center justify-between text-black">
          <div>
            <p className="text-gray-600 text-sm">Monthly Rent</p>
            <p className="text-2xl font-bold">₹12,500</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;