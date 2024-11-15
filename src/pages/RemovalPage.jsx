import React from 'react';
import MenuSection from '../components/MenuSection';

const removalData = {
  sections: [
    {
      title: "아포지 플러스 제모 [남성]",
      description: "공중타격/쿨링요법 레이저 제모",
      items: [
        {
          name: "얼굴 부위(턱/인중/볼/구렛나루/앞목) 중 선택",
          description: "*권장 주기: 2-3주 간격",
          originalPrice: "57,000",
          salePrices: "29,000"
        },
        {
          name: "턱 + 인중",
          originalPrice: "77,000",
          salePrices: "39,000"
        },
        {
          name: "풀페이스 (턱+인중+턱라인+구렛나루)",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "겨드랑이",
          originalPrice: "39,000",
          salePrices: "20,000"
        },
        {
          name: "이마/눈썹 위/눈두덩이/미간 중 선택",
          originalPrice: "57,000",
          salePrices: "29,000"
        },
        {
          name: "뒷목 + 헤어라인",
          originalPrice: "97,000",
          salePrices: "49,000"
        },
        {
          name: "팔 상완",
          originalPrice: "79,000",
          salePrices: "40,000"
        },
        {
          name: "팔 하완 + 손등+ 손가락",
          originalPrice: "97,000",
          salePrices: "49,000"
        },
        {
          name: "팔 전체 + 손등 + 손가락",
          originalPrice: "177,000",
          salePrices: "89,000"
        },
        {
          name: "가슴/배/등 상부/등 하부",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "등 전체",
          originalPrice: "297,000",
          salePrices: "149,000"
        },
        {
          name: "종아리 + 무릎",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "허벅지",
          originalPrice: "179,000",
          salePrices: "90,000"
        },
        {
          name: "다리 전체 + 발등 + 발가락",
          originalPrice: "337,000",
          salePrices: "169,000"
        },
        {
          name: "손등 + 손가락 / 발등 + 발가락",
          originalPrice: "39,000",
          salePrices: "20,000"
        }
      ]
    },
    {
      title: "아포지 플러스 제모 [여성]",
      description: "공중타격/쿨링요법 레이저 제모",
      items: [
        {
          name: "겨드랑이",
          description: "*권장 주기: 2-3주 간격",
          originalPrice: "23,000",
          salePrices: "12,000"
        },
        {
          name: "인중",
          originalPrice: "23,000",
          salePrices: "12,000"
        },
        {
          name: "얼굴전체",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "3자 이마",
          originalPrice: "37,000",
          salePrices: "19,000"
        },
        {
          name: "눈썹 위/눈두덩이/미간",
          originalPrice: "57,000",
          salePrices: "29,000"
        },
        {
          name: "이마/볼 or 구렛나루",
          originalPrice: "57,000",
          salePrices: "29,000"
        },
        {
          name: "목 or 뒷목/턱수염",
          originalPrice: "57,000",
          salePrices: "29,000"
        },
        {
          name: "팔 하완 + 손등+ 손가락",
          originalPrice: "77,000",
          salePrices: "39,000"
        },
        {
          name: "팔 전체 + 손등 + 손가락",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "종아리 + 무릎",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "다리 전체 + 발등 + 발가락",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "가슴/배/등 상부 or 등 하부",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "허벅지",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "손등+손가락/발등+발가락",
          originalPrice: "37,000",
          salePrices: "19,000"
        }
      ]
    }
  ]
};

const RemovalPage = () => (
  <>
    {removalData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default RemovalPage;