// MenuSection.jsx
import React from 'react';
import MenuItem from './MenuItem';

const formatDescription = (text) => {
  if (!text) return null;
  return text.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i !== text.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));
};

const MenuSection = ({ title, description, items }) => (
  <div className="mb-5">
    {/* 섹션 헤더 */}
    <div className="mb-3">
      <h2 className="text-[#4A4039] text-lg font-bold text-center">{title}</h2>
      {description && (
        <p className="text-[#7A6B5B] text-sm mt-2 text-center leading-relaxed">
          {formatDescription(description)}
        </p>
      )}
    </div>
    
    {/* 메뉴 아이템 그리드 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </div>
  </div>
);

export default MenuSection;