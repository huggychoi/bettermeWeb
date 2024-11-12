import React from 'react';

const TabButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-2 py-2 mb-1 rounded-lg
        flex flex-col items-center justify-center gap-1.5
        transition-all duration-200
        ${isActive 
          ? 'bg-pink-100/50 text-pink-500 font-medium' 
          : 'text-pink-400 hover:bg-pink-50/50 hover:text-pink-500'
        }
      `}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="text-[11px] text-center leading-tight px-1 break-keep whitespace-normal">
        {label}
      </span>
    </button>
  );
};

export default TabButton;