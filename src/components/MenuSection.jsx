// MenuSection.jsx
import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ title, description, items }) => {
  const formatDescription = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i !== text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="mt-16 first:mt-0 last:mt-8"> {/* first:mt-0 추가 */}
      {/* 섹션 헤더 */}
      <div className="bg-[#EAE4DE] py-5 mb-6 w-full">
        <div className="text-center">
          <h2 className="text-[#4A4039] text-lg font-bold mb-1">{title}</h2>
          {description && (
            <p className="text-[#665A52] text-xs leading-relaxed">
              {formatDescription(description)}
            </p>
          )}
        </div>
      </div>
      
      {/* 메뉴 아이템 리스트 */}
      <div className="divide-y divide-[#F8F0ED]">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;