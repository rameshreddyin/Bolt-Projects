import React, { useState } from 'react';
import { QrCode, Camera, Download, Share2 } from 'lucide-react';

const QRScreen = () => {
  const [showQR, setShowQR] = useState(true);

  return (
    <div className="min-h-screen pt-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-2">Mess QR Code</h1>
          <p className="text-gray-400 text-sm">Scan this code to access mess services</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center mb-6">
          {showQR ? (
            <div>
              <div className="bg-white w-64 h-64 mx-auto rounded-2xl flex items-center justify-center mb-4">
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 ${
                        Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-white font-semibold text-lg mb-1">Room B-204</h3>
                <p className="text-gray-400 text-sm">Raj Kumar • ID: RK2024</p>
              </div>
            </div>
          ) : (
            <div className="w-64 h-64 mx-auto bg-gray-800 rounded-2xl flex items-center justify-center">
              <QrCode className="text-gray-500" size={64} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <button className="bg-gray-800 text-white p-4 rounded-xl text-center hover:bg-gray-700 transition-all">
            <Download className="mx-auto mb-2" size={20} />
            <span className="text-sm">Download</span>
          </button>
          <button className="bg-gray-800 text-white p-4 rounded-xl text-center hover:bg-gray-700 transition-all">
            <Share2 className="mx-auto mb-2" size={20} />
            <span className="text-sm">Share</span>
          </button>
          <button className="bg-gray-800 text-white p-4 rounded-xl text-center hover:bg-gray-700 transition-all">
            <Camera className="mx-auto mb-2" size={20} />
            <span className="text-sm">Scan</span>
          </button>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-3">Mess Schedule</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-300 text-sm">
              <span>Breakfast</span>
              <span>7:00 AM - 10:00 AM</span>
            </div>
            <div className="flex justify-between text-gray-300 text-sm">
              <span>Lunch</span>
              <span>12:00 PM - 3:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-300 text-sm">
              <span>Snacks</span>
              <span>5:00 PM - 7:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-300 text-sm">
              <span>Dinner</span>
              <span>7:30 PM - 10:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRScreen;