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
            <p className="text-xs text-gray-600 whitespace-pre-line tracking-wide">
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
            {/* 제목과 가격을 한 줄에 표시 */}
            <div className="flex justify-between items-center gap-4 mb-2">
              <div className="flex-1">
                <h3 className="font-medium text-pink-700 tracking-wide">
                  {item.name}
                </h3>
              </div>
              <div className="flex flex-col items-end shrink-0">
                {item.originalPrice && (
                  <span className="text-pink-300 line-through text-xs">
                    ￦{item.originalPrice}
                  </span>
                )}
                {item.salePrices && (
                  <span className="text-pink-500 font-bold">
                    ￦{item.salePrices}
                  </span>
                )}
              </div>
            </div>
            {/* 설명은 아래에 배치 */}
            {item.description && (
              <p className="text-xs text-gray-600 whitespace-pre-line tracking-wide leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;