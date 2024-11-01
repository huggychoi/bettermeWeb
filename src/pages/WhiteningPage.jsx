import React from 'react';
import MenuSection from '../components/MenuSection';

const whiteningData = {
  sections: [
    {
      title: "헐리우드 토닝",
      description: "기미, 주근깨, 잡티 등 효과적인 색소치료",
      items: [
        {
          name: "헐리우드 토닝",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "헐리우드 토닝 + 선택관리",
          description: "선택관리: 수분/진정/재생/미백관리 중 택1",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "헐리우드 듀얼토닝",
          description: "헐리우드 토닝 + 헐리우드 제네시스",
          originalPrice: "177,000",
          salePrices: "89,000"
        }
      ]
    },
    {
      title: "피코슈어 토닝",
      description: "빠른 조사속도, 더 얇은 진피층 거미까지!",
      items: [
        {
          name: "피코슈어 토닝 1회",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "피코슈어 토닝 + 선택관리",
          description: "선택관리: 수분/진정/재생/미백관리 중 택1",
          originalPrice: "177,000",
          salePrices: "89,000"
        }
      ]
    },
    {
      title: "엑셀V 레이저",
      description: "색소 잡착, 혈관 병변, 모공, 노화 등의 피부 품질 개선",
      items: [
        {
          name: "엑셀V 제네시스",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "엑셀V 홍조 나비존",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "엑셀V 홍조 얼굴전체",
          originalPrice: "177,000",
          salePrices: "89,000"
        }
      ]
    },
    {
      title: "문신 제거",
      description: "피코슈어로 흔적 없이 깨끗하게",
      items: [
        {
          name: "500원 사이즈",
          originalPrice: "99,000",
          salePrices: "50,000"
        },
        {
          name: "문신 명함크기",
          originalPrice: "239,000",
          salePrices: "120,000"
        },
        {
          name: "눈썹 문신 제거",
          originalPrice: "139,000",
          salePrices: "70,000"
        }
      ]
    },
    {
      title: "홍조 케어 프로그램",
      description: "홍조 제거에 필요한 최적의 치료",
      items: [
        {
          name: "베리미 홍조 베이직 프로그램(3주)",
          description: "[1주]엑셀V홍조 + LDM홍조 + LED + 모델링팩\n[2주]헐리우드 제네시스 + 엑셀V홍조 + 진정관리 + LED + 모델링팩\n[3주]엑셀V홍조 + 엑셀V제네시스 + LED + 모델링팩",
          originalPrice: "797,000",
          salePrices: "399,000"
        }
      ]
    },
    {
      title: "피코슈어토닝 미백 프로그램",
      description: "미백레이저로 색소개선하고 깨끗한 피부 만들기",
      items: [
        {
          name: "베리미 프리미엄 미백 프로그램 (10주)",
          description: "[1주] 헐리우드 듀얼토닝 + 홍옻수 + 진정관리 + 모델링팩\n[2주] 피코슈어토닝 + 프리미엄 미백관리 + 시트팩\n...[10주] 피코슈어토닝 + LDM재생관리 + LED + 모델링팩",
          originalPrice: "1,997,000",
          salePrices: "999,000"
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