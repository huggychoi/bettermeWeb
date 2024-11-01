import React from 'react';
import MenuSection from '../components/MenuSection';

const bodyData = {
  sections: [
    {
      title: "체형 관리",
      description: "부위별 맞춤 바디 컨투어링",
      items: [
        {
          name: "울핏 바디",
          description: "지방 분해 + 피부 리프팅\n부위: 복부/팔뚝/허벅지 선택",
          originalPrice: "990,000",
          salePrices: "490,000"
        },
        {
          name: "써마지 바디",
          description: "바디 탄력 개선 + 타이트닝\n부위별 시술",
          originalPrice: "800,000",
          salePrices: "400,000"
        }
      ]
    },
    {
      title: "바디 슬리밍",
      description: "체지방 감소, 바디라인 개선",
      items: [
        {
          name: "베러미 슬리밍 프로그램",
          description: "슬리밍 + 타이트닝 + 관리\n4주 프로그램",
          originalPrice: "1,200,000",
          salePrices: "690,000"
        }
      ]
    }
  ]
};

const BodyPage = () => (
  <>
    {bodyData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default BodyPage;