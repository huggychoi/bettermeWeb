// TabButton.jsx
const TabButton = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-2 py-2 rounded-lg transition-all duration-300 ease-in-out
        flex flex-col items-center justify-center gap-1 group
        ${isActive 
          ? 'bg-[#E5D5C5] text-[#7A6B5B] shadow-sm transform scale-[1.02]' 
          : 'text-[#9B8777] hover:bg-[#EAE0D5] hover:text-[#7A6B5B] hover:transform hover:scale-[1.02]'
        }
      `}
    >
      <div className={`
        transition-colors duration-300 text-base
        ${isActive 
          ? 'text-[#7A6B5B]' 
          : 'text-[#9B8777] group-hover:text-[#7A6B5B]'
        }
      `}>
        {icon}
      </div>
      <span className={`
        text-[9px] tracking-wide transition-all duration-300
        ${isActive ? 'font-bold' : 'font-medium'}
      `}>
        {label}
      </span>
    </button>
  );
};

export default TabButton;