import React from 'react';
import MenuSection from '../components/MenuSection';

const ultheraData = {
  sections: [
    {
      title: "울쎄라 리프팅",
      description: "보이는 초음파, 프리미엄 울쎄라 리프팅",
      items: [
        {
          name: "울쎄라 100샷",
          originalPrice: "595,000",
          salePrices: "298,000"
        },
        {
          name: "울쎄라 300샷",
          originalPrice: "1,699,000",
          salePrices: "850,000"
        },
        {
          name: "울쎄라 600샷",
          originalPrice: "3,179,000",
          salePrices: "1,590,000"
        }
      ]
    },
    {
      title: "울쎄라 + 고주파 붓기케어",
      description: "울쎄라 리프팅 후 붓기 걱정 NO",
      items: [
        {
          name: "울쎄라 300샷 + 고주파관리 2회",
          originalPrice: "1,797,000",
          salePrices: "899,000"
        }
      ]
    },
    {
      title: "울쎄라 + 톤업부스터",
      description: "강력한 초음파 리프팅과 톤업효과를 한번에",
      items: [
        {
          name: "울쎄라 300샷 + 리쥬란 톤업부스터 2cc MTS",
          originalPrice: "1,979,000",
          salePrices: "990,000"
        }
      ]
    },
    {
      title: "울쎄라 + 스킨보톡스",
      description: "강력한 초음파 리프팅과 톤업효과를 한번에",
      items: [
        {
          name: "울쎄라 300샷 + 얼굴전체 스킨보톡스 (제오민)",
          originalPrice: "1,937,000",
          salePrices: "969,000"
        },
        {
          name: "울쎄라 400샷 + 얼굴전체 스킨보톡스 (제오민)",
          originalPrice: "2,497,000",
          salePrices: "1,249,000"
        }
      ]
    },
    {
      title: "울쎄라 + 브이올렛",
      description: "강력한 초음파 리프팅과 톤업효과를 한번에",
      items: [
        {
          name: "울쎄라 300샷 + 브이올렛 1회",
          originalPrice: "2,097,000",
          salePrices: "1,049,000"
        }
      ]
    },
    {
      title: "울쎄라 + 리프테라2",
      description: "다양 초음파 리프팅 SET",
      items: [
        {
          name: "[더블SET] 울쎄라 300샷 + 리프테라2 라인 300샷 or 젠타임 3000샷 2회",
          originalPrice: "1,979,000",
          salePrices: "990,000"
        }
      ]
    },
    {
      title: "울쎄라 + 버츄RF 리프팅",
      description: "완벽한 V라인을 위한 프리미엄 리프팅",
      items: [
        {
          name: "울쎄라 300샷 + 버츄RF V라인 리프팅 1회",
          originalPrice: "2,399,000",
          salePrices: "1,200,000"
        }
      ]
    },
    {
      title: "울쎄라 + 울리지오",
      description: "초음파와 고주파 리프팅의 완벽한 조합",
      items: [
        {
          name: "울쎄라 100샷 + 울리지오 300샷",
          originalPrice: "1,297,000",
          salePrices: "649,000"
        }
      ]
    },
    {
      title: "울쎄라 + 주름",
      description: "강력한 울쎄라와 여러가지 시술들로 주름 개선",
      items: [
        {
          name: "[주름전용] 울쎄라 100샷 + 리쥬란HB 1cc",
          originalPrice: "897,000",
          salePrices: "449,000"
        },
        {
          name: "[주름전용] 울쎄라 300샷 + 스킨보톡스 1부위 (국산)",
          originalPrice: "1,779,000",
          salePrices: "890,000"
        }
      ]
    }
  ]
};

const UltheraPage = () => (
  <>
    {ultheraData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default UltheraPage;