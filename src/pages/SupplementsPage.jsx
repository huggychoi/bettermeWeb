import React from 'react';
import MenuSection from '../components/MenuSection';

const whiteningData = {
  sections: [
    {
      title: "프로바이오틱스",
      description: "장 건강을 책임지는 유산균",
      items: [
        {
          name: "프로바이오틱스 컴플리트 프리미엄 [2개월분]",
          description: "(컴플리트 캡슐 리뉴얼 제품) \n 미국 병원의 건강기능식품코너 전용 유산균! \n 생균 100억마리 보장!",
          salePrices: "68,000"
        }    
      ]
    },
    {
      title: "리포좀 테라피",
      description: "피부 건강을 책임지는 흡수율/체내 잔존율 리포좀 특허공법 원료",
      items: [
        {
          name: "리포좀 글루타치온 [1개월분]",
          description: "프리미엄 고순도 리포좀 글루타치온 100% 미국산 \n 국내 최대 고함량 1포당 순수L-글루타치온 함량 300mg",
          salePrices: "55,000"
        },
        {
          name: "리포좀비타민C 1000[1개월분]",
          description: "필수 영양소 비타민 C \n 미국산 리포좀 제형 기술 적용하여 체내 흡수율 UP!",
          salePrices: "40,000"
        }
      ]
    },
    {
      title: "아르기닌",
      description: "건강한 29종 원료의 활력 부스터",
      items: [
        {
          name: "수퍼 아르기닌 6000 [1개월분]",
          description: "1포당 L-아르기닌 6000mg! \n 기존 자사 제품 대비 함량 UP \n 고함량 아르기닌과 건강한 \n 29종 원료로 활력을 더하세요",
          salePrices: "68,000"
        }        
      ]
    },
    {
      title: "클리마젠",
      description: "갱년기 여성을 위한 종합 RNT",
      items: [        
        {
          name: "클리마젠 플러스 [1개월분]",
          description: "갱년기 여성건강에 도움 피크노제놀 함유! \n 대두이소플라본, 비타민B6, 나이아신, 비타민D ",
          salePrices: "80,000"
        }
      ]
    }
  ]
};

const WhiteningPage = () => (
  <>
    {whiteningData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default WhiteningPage;