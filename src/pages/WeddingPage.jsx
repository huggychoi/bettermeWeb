import React from 'react';
import MenuSection from '../components/MenuSection';

const weddingData = {
  sections: [
    {
      title: "웨딩 패키지",
      description: "완벽한 웨딩을 위한 맞춤 프로그램",
      items: [
        {
          name: "웨딩 베이직",
          description: "기본 관리 4회\n+ 리쥬란 1회\n+ 울쎄라 300샷",
          originalPrice: "2,500,000",
          salePrices: "1,250,000"
        },
        {
          name: "웨딩 프리미엄",
          description: "프리미엄 관리 6회\n+ 리쥬란 2회\n+ 울쎄라 500샷\n+ 브라이덜 케어",
          originalPrice: "4,000,000",
          salePrices: "2,000,000"
        }
      ]
    },
    {
      title: "신랑 패키지",
      description: "신랑을 위한 맞춤 프로그램",
      items: [
        {
          name: "신랑 케어",
          description: "피부 관리 3회\n+ 보톡스\n+ 리쥬란",
          originalPrice: "1,500,000",
          salePrices: "750,000"
        }
      ]
    }
  ]
};

const WeddingPage = () => (
  <>
    {weddingData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default WeddingPage;