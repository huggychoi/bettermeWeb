import React from 'react';

const MenuSection = ({ title, description, items }) => {
  return (
    <div className="mb-8">
      {(title || description) && (
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 mb-4">
          {title && (
            <h2 className="text-base font-bold text-pink-600 tracking-wide mb-1">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-xs text-pink-500/90 whitespace-pre-line tracking-wide">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-4">
        {items?.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white/80 transition-colors duration-200"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-pink-700 tracking-wide">
                {item.name}
              </h3>
              <div className="text-right">
                {item.originalPrice && (
                  <div className="text-pink-300 line-through text-xs">
                    ￦{item.originalPrice}
                  </div>
                )}
                {item.salePrices && (
                  <div className="text-pink-500 font-bold">
                    ￦{item.salePrices}
                  </div>
                )}
              </div>
            </div>
            {item.description && (
              <p className="text-xs text-pink-500/80 whitespace-pre-line tracking-wide">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// 컴포넌트 내보내기 추가
export default MenuSection;