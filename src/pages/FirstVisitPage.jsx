import React from 'react';
import MenuSection from '../components/MenuSection';

const firstVisitData = {
  sections: [
    {
      title: "첫 방문 고객 특별 혜택",
      description: "베러미의원의 첫 방문 고객님을 위한 특별한 혜택",
      items: [
        {
          name: "첫 방문 상담",
          description: "전문의 상담 무료\n맞춤 시술 플랜 제공",
          originalPrice: "50,000",
          salePrices: "0"
        },
        {
          name: "첫 방문 웰컴 패키지",
          description: "보톡스 + 리쥬란 + 피부관리\n첫 방문 고객 한정 특가",
          originalPrice: "590,000",
          salePrices: "290,000"
        }
      ]
    }
  ]
};

const FirstVisitPage = () => (
  <>
    {firstVisitData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default FirstVisitPage;