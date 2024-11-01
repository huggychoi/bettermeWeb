import React from 'react';
import MenuSection from '../components/MenuSection';

const virizenData = {
  sections: [
    {
      title: "바이리즌 스킨부스터",
      description: "높은 흡광의 히알루론산 프리미엄 스킨부스터",
      items: [
        {
          name: "바이리즌",
          originalPrice: "397,000",
          salePrices: "199,000"
        },
        {
          name: "바이리즌 1cc + 스킨보톡스",
          description: "풀페이스 or 목주름 택1",
          originalPrice: "517,000",
          salePrices: "259,000"
        },
        {
          name: "바이리즌 2cc + 스킨보톡스",
          description: "풀페이스 or 목주름 택1",
          originalPrice: "997,000",
          salePrices: "499,000"
        },
        {
          name: "바이리즌 재생 물광톡신 4cc",
          originalPrice: "597,000",
          salePrices: "299,000"
        },
        {
          name: "리쥬란 2cc + 바이리즌 1cc + LDM 재생",
          originalPrice: "797,000",
          salePrices: "399,000"
        },
        {
          name: "리쥬란 2cc + 바이리즌 1cc + 스킨보톡스 + LDM 재생",
          description: "풀페이스 or 목주름 택1",
          originalPrice: "897,000",
          salePrices: "449,000"
        },
        {
          name: "리프테라2 2000샷 + 바이리즌1cc + 스킨보톡스",
          description: "제오민으로 진행시 5만원 추가",
          originalPrice: "657,000",
          salePrices: "329,000"
        },
        {
          name: "울쎄라 100샷 + 바이리즌 1cc + 스킨보톡스",
          description: "제오민으로 진행시 5만원 추가",
          originalPrice: "1,097,000",
          salePrices: "549,000"
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