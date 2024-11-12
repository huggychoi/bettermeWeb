import React from 'react';
import MenuSection from '../components/MenuSection';

const antiagingData = {
  sections: [
    {
      title: "항노화주사",
      description: "Anti-aging Treatment",
      items: [
        {
          name: "백옥주사",
          description: "체내 대사활동을 촉진하고 활성산소를 제거하여\n면역력강화, 피로회복, 피부톤 개선",
          originalPrice: "57,000",
          salePrices: "29,000",
          additionalPrices: [
            { price: "79,000" },
            { price: "250,000" }
          ]
        },
        {
          name: "더블 백옥주사",
          description: "글루타치온 함량 2배",
          originalPrice: "97,000",
          salePrices: "49,000",
          additionalPrices: [
            { price: "129,000" },
            { price: "399,000" }
          ]
        },
        {
          name: "비타민C 주사",
          description: "면역력 강화, 피로회복, 피부톤 개선",
          originalPrice: "57,000",
          salePrices: "29,000",
          additionalPrices: [
            { price: "79,000" },
            { price: "250,000" }
          ]
        },
        {
          name: "태반주사",
          description: "샷 타입으로 피하에 주사\n피로회복! FDA 승인 영양주사",
          originalPrice: "97,000",
          salePrices: "49,000",
          additionalPrices: [
            { price: "129,000" },
            { price: "399,000" }
          ]
        },
        {
          name: "마늘주사",
          description: "피로회복과 체력 증강, 스트레스 회복,\n피부미용, 노화예방",
          originalPrice: "97,000",
          salePrices: "49,000",
          additionalPrices: [
            { price: "129,000" },
            { price: "399,000" }
          ]
        },
        {
          name: "신데렐라주사",
          description: "체내 활성산소를 제거하여\n면역력 강화, 피로회복, 피부톤 개선과\n체지방 감소",
          originalPrice: "77,000",
          salePrices: "39,000",
          additionalPrices: [
            { price: "99,000" },
            { price: "299,000" }
          ]
        },
        {
          name: "감초주사",
          description: "항알러지/항염작용, 간기능 개선, 콜라겐 생성 보조 역할",
          originalPrice: "97,000",
          salePrices: "49,000",
          additionalPrices: [
            { price: "129,000" },
            { price: "399,000" }
          ]
        },
        {
          name: "내맘대로 안티 에이징 주사 (패키지 상품)",
          description: "백옥, 신데렐라, 비타민C, 마늘, 감초,\n태반주사 중 선택 5회\n*패키지 상품입니다",
          originalPrice: "299,000",
          salePrices: "150,000"
        }
      ]
    }
  ]
};


const AntiagingPage = () => (
  <>
    {antiagingData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default AntiagingPage;