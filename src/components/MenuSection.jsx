import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ title, description, items }) => (
  <div className="mb-3 bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="bg-gray-50 p-2 border-b">
      <h2 className="text-sm font-semibold text-gray-900 text-left">{title}</h2>
      {description && (
        <p className="text-xs text-gray-500 text-left">{description}</p>
      )}
    </div>
    <div className="p-2.5">
      {items.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </div>
  </div>
);

export default MenuSection;