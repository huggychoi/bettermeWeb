const TabButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-1.5 py-1.5 mb-0.5 rounded-lg
        flex flex-col items-center justify-center gap-1
        transition-all duration-200
        ${isActive 
          ? 'bg-pink-100/60 text-pink-600 font-medium' // 더 부드러운 핑크 계열
          : 'text-gray-600 hover:bg-rose-50/40 hover:text-pink-500'
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