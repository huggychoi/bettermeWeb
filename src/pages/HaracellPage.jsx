import React from 'react';
import MenuSection from '../components/MenuSection';

const virizenData = {
  sections: [
    {
      title: "아쿠아 블루 라인",
      description: "아줄렌 성분이 들어가 있는 하라셀 제품",
      items: [
        {
          name: "워터 실크 폼 (250ml)",
          description: "코코넛에서 추출한 계면 활성제 성분, 실크 타입의 약산성 폼클렌저",
          salePrices: "45,000"
        },
        {
          name: "수딩 아줄렌 토너 (250ml)",
          description: "진정 보습 성분으로, 보습감을 높이고 피부 진정에 탁월한 무알콜 토너",
          salePrices: "44,000"
        },
        {
          name: "워터 커버 토너(100ml)",
          description: "피부 속 수분과 영양을 동시에 공급, 유수분 밸런스 조절",
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