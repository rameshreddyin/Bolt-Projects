import React from 'react';
import { Calendar, CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const PaymentsScreen = () => {
  const paymentHistory = [
    {
      id: 1,
      month: 'December 2024',
      amount: 12500,
      date: '2024-12-05',
      status: 'paid',
      type: 'Monthly Rent'
    },
    {
      id: 2,
      month: 'November 2024',
      amount: 12500,
      date: '2024-11-05',
      status: 'paid',
      type: 'Monthly Rent'
    },
    {
      id: 3,
      month: 'October 2024',
      amount: 12500,
      date: '2024-10-05',
      status: 'paid',
      type: 'Monthly Rent'
    },
    {
      id: 4,
      month: 'September 2024',
      amount: 12500,
      date: '2024-09-05',
      status: 'paid',
      type: 'Monthly Rent'
    }
  ];

  return (
    <div className="min-h-screen pt-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-2">Payments</h1>
          <p className="text-gray-400 text-sm">Manage your payment history</p>
        </div>

        {/* Next Payment Due */}
        <div className="bg-white rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between text-black">
            <div>
              <h3 className="text-lg font-semibold mb-1">Next Payment Due</h3>
              <p className="text-gray-600 text-sm mb-3">January 2025 Rent</p>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span className="text-sm">Due: Jan 5, 2025</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">₹12,500</p>
              <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
          <h3 className="text-white font-semibold mb-4">Payment Summary</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="text-black" size={20} />
              </div>
              <p className="text-gray-400 text-xs">Total Paid</p>
              <p className="text-white font-bold">₹50,000</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-700 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="text-white" size={20} />
              </div>
              <p className="text-gray-400 text-xs">Pending</p>
              <p className="text-white font-bold">₹12,500</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Calendar className="text-black" size={20} />
              </div>
              <p className="text-gray-400 text-xs">Months</p>
              <p className="text-white font-bold">4</p>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Payment History</h3>
          <div className="space-y-4">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                    <CreditCard className="text-black" size={16} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{payment.month}</p>
                    <p className="text-gray-400 text-xs">{payment.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">₹{payment.amount.toLocaleString()}</p>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="text-white" size={12} />
                    <span className="text-gray-300 text-xs">Paid</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsScreen;