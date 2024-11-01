import React from 'react';
import MenuSection from '../components/MenuSection';

const firstVisitData = {
  sections: [
    {
      title: "행운이 가득한 첫 방문 이벤트",
      description: "베러미 법어점을 처음 찾아 주시는\n고객님들을 위한 특별 웰컴 선물",
      items: [
        {
          name: "백옥주사",
          description: "채내 대사활동을 촉진하고 활성산소를 제거하여\n면역력 강화, 피로회복, 피부톤개선",
          salePrices: "10,000"
        },
        {
          name: "비타민주사",
          description: "부족한 비타민 보충\n면역력 강화, 피로회복, 피부톤 개선",
          salePrices: "10,000"
        },
        {
          name: "베이직스킨케어",
          description: "수분/재생/진정/미백 중 선택1",
          salePrices: "10,000"
        },
        {
          name: "아이스아쿠아필",
          description: "아쿠아필1,2,3단계 + 크라이오 +LED + 모델링팩",
          salePrices: "20,000"
        },
        {
          name: "LDM 재생관리",
          salePrices: "30,000"
        },
        {
          name: "겨드랑이 제모(여성)",
          salePrices: "15,000"
        },
        {
          name: "턱+인중 제모(남성)",
          salePrices: "20,000"
        },
        {
          name: "힐리우드 토닝",
          salePrices: "30,000"
        },
        {
          name: "피코슈어 토닝",
          salePrices: "40,000"
        },
        {
          name: "엑셀V 제네시스",
          salePrices: "50,000"
        },
        {
          name: "인모드FX 1부위",
          salePrices: "30,000"
        },
        {
          name: "슈링크 유니버스 100샷",
          salePrices: "40,000"
        },
        {
          name: "리프테라2 2000샷",
          description: "세상한 부위 콜라 리프팅\n통증 최소화!",
          salePrices: "40,000"
        },
        {
          name: "울리지오 100샷",
          description: "한국형 써마지 울리지오!",
          salePrices: "100,000"
        },
        {
          name: "주름보톡스 1부위(국산)",
          salePrices: "10,000"
        },
        {
          name: "아큐주사 3cc",
          salePrices: "10,000"
        },
        {
          name: "턱 보톡스 50U + 주름보톡스 1부위(국산)",
          salePrices: "20,000"
        },
        {
          name: "입술 필러 1cc(아띠에르)",
          salePrices: "70,000"
        },
        {
          name: "네오빔 1회(압출미포함)",
          description: "*압출추가시 20,000 원",
          salePrices: "60,000"
        }
      ]
    }
  ]
};

const FirstVisitPage = () => (
  <>
    {firstVisitData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default FirstVisitPage;