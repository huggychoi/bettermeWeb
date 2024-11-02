const TabButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-4 py-3 mb-1 rounded-lg
        flex items-center gap-3
        transition-all duration-200
        ${isActive 
          ? 'bg-rose-50 text-rose-600 font-medium' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }
      `}
    >
      <span className="flex-shrink-0">
        {icon}
      </span>
      <span className="text-sm">
        {label}
      </span>
    </button>
  );
};

export default TabButton;