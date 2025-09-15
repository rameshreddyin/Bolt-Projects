import React from 'react';

interface QuickActionButtonProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
  onClick: () => void;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ icon, title, subtitle, bgColor, textColor, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`${bgColor} ${textColor} p-4 rounded-2xl border border-gray-800 hover:scale-105 transform transition-all duration-200`}
    >
      <div className="text-left">
        <div className="mb-2">{icon}</div>
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs opacity-70">{subtitle}</p>
      </div>
    </button>
  );
};

export default QuickActionButton;