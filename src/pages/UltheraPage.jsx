import React from 'react';
import MenuSection from '../components/MenuSection';

const ultheraData = {
  sections: [
    {
      title: "울쎄라 리프팅",
      description: "FDA 승인 받은 정품 울쎄라로 시술\n탄력있는 얼굴 라인을 만들어드립니다",
      items: [
        {
          name: "울쎄라 300샷",
          description: "관자놀이, 볼, 턱라인 등 시술 가능",
          originalPrice: "1,500,000",
          salePrices: "990,000"
        },
        {
          name: "울쎄라 500샷",
          description: "전체 페이스 시술 가능",
          originalPrice: "2,500,000",
          salePrices: "1,590,000"
        }
      ]
    }
  ]
};

const UltheraPage = () => (
  <>
    {ultheraData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default UltheraPage;