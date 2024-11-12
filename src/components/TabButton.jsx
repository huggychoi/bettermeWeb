const TabButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-16 px-1 py-2 mb-0.5
        flex flex-col items-center justify-center gap-1
        transition-all duration-200
        ${isActive 
          ? 'bg-pink-50 text-pink-400 font-medium' 
          : 'text-gray-600 hover:bg-pink-50/50 hover:text-pink-400'
        }
      `}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <span className="text-[10px] text-center leading-tight">
        {label}
      </span>
    </button>
  );
};

export default TabButton;