import React from 'react';

const TabButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-1.5 py-1.5 mb-0.5 rounded-lg
        flex flex-col items-center justify-center gap-1
        transition-all duration-200
        ${isActive 
          ? 'bg-pink-50/50 text-black font-medium' 
          : 'text-black/70 hover:bg-pink-50/30'
        }
      `}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="text-[9px] text-center leading-tight break-keep whitespace-normal">
        {label}
      </span>
    </button>
  );
};

export default TabButton;