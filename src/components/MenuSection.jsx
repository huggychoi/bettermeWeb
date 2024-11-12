import React from 'react';
import MenuItem from './MenuItem';

const formatDescription = (text) => {
  return text.split('\\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i !== text.split('\\n').length - 1 && <br />}
    </React.Fragment>
  ));
};

const MenuSection = ({ title, description, items }) => (
  <div className="mb-3 bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="bg-gray-50 p-2 border-b">
      <h2 className="text-sm font-semibold text-gray-900 text-left">{title}</h2>
      {description && (
        <p className="text-xs text-gray-500 text-left whitespace-pre-line">
          {formatDescription(description)}
        </p>
      )}
    </div>
    <div className="p-2.5">
      {items.map((item, idx) => (
        <MenuItem 
          key={idx} 
          {...item} 
          description={item.description ? item.description.replace(/\\n/g, '\n') : null}
        />
      ))}
    </div>
  </div>
);

export default MenuSection;