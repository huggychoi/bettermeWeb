import React from 'react';
import MenuSection from '../components/MenuSection';

const acneData = {
  sections: [
    {
      title: "여드름 관리",
      description: "여드름 진정 및 재발 방지 프로그램",
      items: [
        {
          name: "여드름 케어 프로그램",
          description: "염증 진정 + 항생 관리\n1회 기준",
          originalPrice: "150,000",
          salePrices: "79,000"
        },
        {
          name: "악건성 여드름 프로그램",
          description: "심한 여드름 + 재생관리\n4주 프로그램",
          originalPrice: "600,000",
          salePrices: "299,000"
        }
      ]
    },
    {
      title: "모공 관리",
      description: "모공 축소와 피부결 개선",
      items: [
        {
          name: "모공 타이트닝",
          description: "모공 축소 + 탄력 개선\n1회 기준",
          originalPrice: "300,000",
          salePrices: "150,000"
        },
        {
          name: "프리미엄 모공 패키지",
          description: "모공 + 흉터 + 재생관리\n3회 패키지",
          originalPrice: "900,000",
          salePrices: "450,000"
        }
      ]
    }
  ]
};

const AcnePage = () => (
  <>
    {acneData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default AcnePage;