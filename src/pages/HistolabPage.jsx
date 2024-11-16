import React from 'react';
import MenuSection from '../components/MenuSection';

const histolabData = {
  sections: [
    {
      title: "앰플",
      description: "병의원에서 구매 가능한 히스토랩 기능성 앰플",
      items: [
        {
          name: "아줄렌 컴플렉스 앰플 72 (80ml)",
          description: "아줄렌 컴플렉스 72%를 함유한 피부 진정 앰플/블루 카밍 아줄렌 에너지로 완성하는 건강한 피부 컨디션",
          salePrices: "64,000"
        },
        {
          name: "비타 씨 컴플렉스 앰플 47 (80ml)",
          description: "비타 C 컴플렉스 50% 를 함유한 미백 기능성 앰플/ 단 하나의 미백관리 앰플!",
          salePrices: "56,000"
        },
        {
          name: "히알루론 컴플렉스 앰플 62 (80ml)",
          description: "히알루론 컴플렉스 50%를 함유한 수분 충전 앰플/단 하나의 수분 농축 앰플!",
          salePrices: "56,000"
        },
        {
          name: "이지에프 컴플렉스 앰플 63 (80ml)",
          description: "EGF 컴플렉스 63% 를 함유한 피부 활력 앰플/ 단 하나의 주름 개선 앰플!",
          salePrices: "64,000"
        },
        {
          name: "페룰릭 부스팅 앰플 (80ml)",
          description: "숙면한 듯 생기있게, 피부 피로를 풀다/ 활성 산소로 부터 피부를 보호, 항산화 효과 높이는 앰플!",
          salePrices: "66,000"
        }
      ]
    },
    {
      title: "폼클렌저",
      description: "병의원에서 구매 가능한 히스토랩 폼 클렌저",
      items: [
        {
          name: "워터맥스 폼 클렌저 (200ml)",
          description: "젤타입의 폼 클렌저, 당김없이 촉촉하고 편안한 아쿠아 폼 클렌저",
          salePrices: "48,000"
        }        
      ]
    },
    {
      title: "진정, 보호 기능성 제품",
      description: "병의원에서 구매 가능한 진정, 보호 기능성 제품",
      items: [
        {
          name: "포스트 케어 히스토 셀 크림 (12ml)",
          description: "외부자극으로부터 예민해진 피부를 보호하는 크림",
          salePrices: "12,000"
        },
        {
          name: "워터맥스 인퓨전 미스트 (200ml)",
          description: "미스트 겸용 토너, 외부로부터 피부를 보호해주며 신속한 수분 공급으로 유수분 밸런스를 유지",
          salePrices: "40,000"
        }           
      ]
    },
    {
      title: "히스토랩 세트",
      description: "고객의 피부 타입에 걸맞는 세트",
      items: [
        {
          name: "아크넥스 사이언스 세트",
          description: "유분기가 많은 피부관리를 위한 히스토랩 피부전문과학 세트",
          originalPrice: "200,000",
          salePrices: "120,000"
        },
        {
          name: "워터맥스 아쿠아 사이언스 세트",
          description: "메마른 피부에 고보습이 필요할 때 쓰는 히스토랩 피부전문과학 세트",
          originalPrice: "232,000",
          salePrices: "130,000"
        }, 
        {
          name: "프리미엄 에이지 사이언스 세트",
          description: "풍부한 영양공급을 위한 히스토랩 피부전문과학 세트",
          originalPrice: "200,000",
          salePrices: "120,000"
        }      
      ]
    },
    {
      title: "자외선 차단 기능성 제품",
      description: "병의원에서 구매 가능한 히스토랩 자외선 차단 제품",
      items: [
        {
          name: "포스트 케어 썬 블럭 365 플러스(50g)",
          description: "자외선으로 부터 365일 피부를 안전하게 보호, 유분이 많은 피부도 사용 가능한 크림 타입의 썬 블럭",
          salePrices: "38,000"
        },
        {
          name: "선 샤인 블레미쉬 밤(50g)",
          description: "붉고 예민한 피부를 자외선으로부터 보호해주면서, 화사함과 촉촉함을 동시에 느낄 수 있는 제품",
          salePrices: "48,000"
        }        
      ]
    },
    {
      title: "리셀바이 SUN 라인",
      description: "병의원에서 구매 가능한 리셀바이 자외선 차단 제품",
      items: [
        {
          name: "리셀바이 포스트 레이 선크림",
          description: "SPF50+PA+++ \n 바르는 순간 투명한 수분감의 텍스처로 끈적임과 밀림 현상 없이 바르는 혼합 자차 선크림",
          salePrices: "44,000"
        }             
      ]
    }
  ]
};

const HistolabPage = () => (
  <>
    {histolabData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default HistolabPage;