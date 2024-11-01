import React from 'react';
import MenuSection from '../components/MenuSection';

const fillerData = {
  sections: [
    {
      title: "필러",
      description: "부위별 맞춤 필러 시술",
      items: [
        {
          name: "이마 필러",
          description: "이마 볼륨 회복\n1cc 기준",
          originalPrice: "490,000",
          salePrices: "250,000"
        },
        {
          name: "볼/팔자 필러",
          description: "볼륨감 회복 + 리프팅\n1cc 기준",
          originalPrice: "490,000",
          salePrices: "250,000"
        },
        {
          name: "코 필러",
          description: "코 높이 + 라인 교정\n1cc 기준",
          originalPrice: "490,000",
          salePrices: "250,000"
        }
      ]
    },
    {
      title: "실리프팅",
      description: "프리미엄 실리프팅 시술",
      items: [
        {
          name: "면실",
          description: "리프팅 + 타이트닝\n한쪽 기준",
          originalPrice: "300,000",
          salePrices: "150,000"
        },
        {
          name: "프리미엄 실리프팅",
          description: "프리미엄 심부볼륨 + 리프팅\n양쪽 시술",
          originalPrice: "1,500,000",
          salePrices: "750,000"
        }
      ]
    }
  ]
};

const FillerPage = () => (
  <>
    {fillerData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default FillerPage;