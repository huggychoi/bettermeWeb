import React from 'react';
import MenuSection from '../components/MenuSection';

const newData = {
  sections: [
    {
      title: "신규 런칭 이벤트",
      description: "베러미의원의 새로운 시술과 특별 프로모션",
      items: [
        {
          name: "NEW 리쥬란힐러 2.0",
          description: "업그레이드된 리쥬란힐러 런칭 특가\n강화된 재생과 탄력 효과",
          originalPrice: "390,000",
          salePrices: "190,000"
        }
      ]
    }
  ]
};

const NewPage = () => (
  <>
    {newData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default NewPage;