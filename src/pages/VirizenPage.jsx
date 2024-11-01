import React from 'react';
import MenuSection from '../components/MenuSection';

const virizenData = {
  sections: [
    {
      title: "바이리즌",
      description: "프리미엄 레이저 시술로 피부 고민 해결",
      items: [
        {
          name: "바이리즌 토탈케어",
          description: "레이저 토닝 + 재생관리\n색소+탄력+모공 복합 개선",
          originalPrice: "450,000",
          salePrices: "250,000"
        },
        {
          name: "바이리즌 프리미엄",
          description: "고강도 레이저 시술\n피부 리모델링 프로그램",
          originalPrice: "800,000",
          salePrices: ["399,000", "999,000"]
        }
      ]
    }
  ]
};

const VirizenPage = () => (
  <>
    {virizenData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default VirizenPage;