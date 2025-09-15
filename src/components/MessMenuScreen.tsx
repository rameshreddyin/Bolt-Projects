import React, { useState } from 'react';
import { Calendar, Clock, ChefHat, Coffee, Utensils, Moon } from 'lucide-react';

interface MessMenuScreenProps {
  onBack: () => void;
}

const MessMenuScreen: React.FC<MessMenuScreenProps> = ({ onBack }) => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const weekDays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];

  const messMenu = {
    0: { // Sunday
      breakfast: ['Poha', 'Samosa', 'Tea/Coffee', 'Banana'],
      lunch: ['Rajma Rice', 'Roti', 'Mixed Veg', 'Raita', 'Pickle'],
      snacks: ['Pakora', 'Chutney', 'Tea'],
      dinner: ['Paneer Curry', 'Rice', 'Dal', 'Roti', 'Salad']
    },
    1: { // Monday
      breakfast: ['Aloo Paratha', 'Curd', 'Pickle', 'Tea/Coffee'],
      lunch: ['Dal Rice', 'Sabzi', 'Roti', 'Papad', 'Buttermilk'],
      snacks: ['Bread Pakora', 'Sauce', 'Tea'],
      dinner: ['Chicken Curry', 'Rice', 'Roti', 'Dal', 'Onion']
    },
    2: { // Tuesday
      breakfast: ['Upma', 'Coconut Chutney', 'Sambar', 'Coffee'],
      lunch: ['Chole Rice', 'Roti', 'Aloo Sabzi', 'Raita'],
      snacks: ['Samosa', 'Chutney', 'Tea'],
      dinner: ['Fish Curry', 'Rice', 'Dal', 'Roti', 'Pickle']
    },
    3: { // Wednesday
      breakfast: ['Paratha', 'Aloo Sabzi', 'Curd', 'Tea'],
      lunch: ['Biryani', 'Raita', 'Boiled Egg', 'Pickle'],
      snacks: ['Bhel Puri', 'Tea'],
      dinner: ['Mutton Curry', 'Rice', 'Roti', 'Dal', 'Salad']
    },
    4: { // Thursday
      breakfast: ['Dosa', 'Sambar', 'Coconut Chutney', 'Coffee'],
      lunch: ['Kadhi Rice', 'Roti', 'Bhindi', 'Papad'],
      snacks: ['Vada Pav', 'Chutney', 'Tea'],
      dinner: ['Paneer Butter Masala', 'Rice', 'Naan', 'Dal']
    },
    5: { // Friday
      breakfast: ['Puri Sabzi', 'Halwa', 'Tea/Coffee'],
      lunch: ['Pulao', 'Raita', 'Paneer Curry', 'Pickle'],
      snacks: ['Dhokla', 'Chutney', 'Tea'],
      dinner: ['Chicken Biryani', 'Raita', 'Boiled Egg', 'Pickle']
    },
    6: { // Saturday
      breakfast: ['Idli', 'Sambar', 'Coconut Chutney', 'Coffee'],
      lunch: ['Rajma Rice', 'Roti', 'Aloo Gobi', 'Curd'],
      snacks: ['Pav Bhaji', 'Tea'],
      dinner: ['Dal Makhani', 'Rice', 'Roti', 'Mixed Veg', 'Salad']
    }
  };

  const mealTimes = [
    { name: 'Breakfast', time: '7:00 AM - 10:00 AM', icon: <Coffee size={20} /> },
    { name: 'Lunch', time: '12:00 PM - 3:00 PM', icon: <Utensils size={20} /> },
    { name: 'Snacks', time: '5:00 PM - 7:00 PM', icon: <ChefHat size={20} /> },
    { name: 'Dinner', time: '7:30 PM - 10:30 PM', icon: <Moon size={20} /> }
  ];

  const getMealItems = (mealType: string) => {
    const dayMenu = messMenu[selectedDay as keyof typeof messMenu];
    return dayMenu[mealType.toLowerCase() as keyof typeof dayMenu] || [];
  };

  const isToday = (dayIndex: number) => {
    return dayIndex === new Date().getDay();
  };

  return (
    <div className="min-h-screen bg-black px-4 pb-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-2">Mess Menu</h1>
          <p className="text-gray-400 text-sm">Weekly meal schedule and timings</p>
        </div>

        {/* Day Selector */}
        <div className="mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {weekDays.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedDay === index
                    ? 'bg-white text-black'
                    : isToday(index)
                    ? 'bg-gray-700 text-white border border-gray-600'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {day}
                {isToday(index) && (
                  <span className="block text-xs opacity-70">Today</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Current Day Header */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-center space-x-2">
            <Calendar className="text-white" size={20} />
            <h2 className="text-white text-lg font-semibold">
              {weekDays[selectedDay]}
              {isToday(selectedDay) && <span className="text-gray-400 text-sm ml-2">(Today)</span>}
            </h2>
          </div>
        </div>

        {/* Meal Schedule */}
        <div className="space-y-4">
          {mealTimes.map((meal, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-white">{meal.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{meal.name}</h3>
                    <p className="text-gray-400 text-sm flex items-center">
                      <Clock size={14} className="mr-1" />
                      {meal.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {getMealItems(meal.name).map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-800 px-3 py-2 rounded-lg text-center"
                  >
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {getMealItems(meal.name).length === 0 && (
                <div className="text-center py-4">
                  <span className="text-gray-500 text-sm">No items available</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-6 bg-gray-900 border border-gray-800 rounded-2xl p-4">
          <h3 className="text-white font-semibold mb-3">Important Notes</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>• Menu items may vary based on availability</p>
            <p>• Special meals on festivals and occasions</p>
            <p>• Inform mess staff about dietary restrictions</p>
            <p>• Late meal requests subject to availability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessMenuScreen;