import React from 'react';
import MenuSection from '../components/MenuSection';

const botoxData = {
  sections: [
    {
      title: "주름 & 사각턱 보톡스",
      description: "주름, 사각턱 고민 한번에 해결하기",
      items: [
        {
          name: "주름 보톡스 1부위 [국산]",
          description: "부위: 눈가, 눈썹, 미간, 이마, 자갈턱,콧볼,입꼬리 등 선택",
          originalPrice: "29,000",
          salePrices: ["15,000"]
        },
        {
          name: "주름 보톡스 3부위 [국산]",
          originalPrice: "77,000",
          salePrices: ["39,000"]
        }
      ]
    },
    {
      title: "광대 & 관자 & 침샘 보톡스",
      description: "특수부위 보톡스",
      items: [
        {
          name: "광대 보톡스 [국산]",
          originalPrice: "59,000",
          salePrices: ["30,000"]
        },
        {
          name: "측두근 보톡스 50u [국산]",
          originalPrice: "137,000",
          salePrices: ["69,000"]
        }
      ]
    }
  ]
};

const BotoxPage = () => (
  <>
    {botoxData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default BotoxPage;
