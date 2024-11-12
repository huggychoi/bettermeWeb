import React from 'react';

const TabButton = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center w-16 py-3 px-1 transition-colors
      ${isActive 
        ? 'bg-white text-rose-500 border-r-2 border-rose-500' 
        : 'text-gray-500 hover:bg-gray-100'}`}
  >
    {React.cloneElement(icon, { size: 20 })}
    <span className="mt-1 text-[10px] font-medium text-center whitespace-nowrap">
      {label}
    </span>
  </button>
);

export default TabButton;