import React from 'react';

const MenuItem = ({ name, description, originalPrice, salePrices }) => (
  <div className="border-b border-gray-100 last:border-0 py-2">
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900 text-left">{name}</h3>
        {description && (
          <p className="text-xs text-gray-500 mt-0.5 text-left">{description}</p>
        )}
      </div>
      <div className="text-right min-w-[90px] ml-3">
        {originalPrice && (
          <p className="text-xs text-gray-400 line-through">{originalPrice}원</p>
        )}
        {Array.isArray(salePrices) ? (
          <div className="space-y-0.5">
            {salePrices.map((price, idx) => (
              <p key={idx} className="text-base font-semibold text-rose-500">{price}원</p>
            ))}
          </div>
        ) : (
          <p className="text-base font-semibold text-rose-500">{salePrices}원</p>
        )}
      </div>
    </div>
  </div>
);

export default MenuItem;