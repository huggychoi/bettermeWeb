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
      description: "강력한 초음파 리프팅과 잔주름 개선, 탱글탱글한 피부탄력을 한번에",
      items: [
        {
          name: "울쎄라 300샷 + 얼굴전체 스킨보톡스(제오민)",
          originalPrice: "1,937,000",
          salePrices: "969,000"
        },
        {
          name: "울쎄라 400샷 + 얼굴전체 스킨보톡스(제오민)",
          originalPrice: "2,497,000",
          salePrices: "1,249,000"
        }
      ]
    },
    {
      title: "울쎄라 + 인모드",
      description: "리프팅 후 더욱 쫀쫀해진 피부로",
      items: [
        {
          name: "울쎄라 300샷 + 인모드 Fx or Forma (얼굴전체)",
          originalPrice: "1,877,000",
          salePrices: "939,000"
        },
        {
          name: "울쎄라 400샷 + 인모드 Fx or Forma (얼굴전체)",
          originalPrice: "2,437,000",
          salePrices: "1,219,000"
        }
      ]
    },
    {
      title: "울쎄라 + 브이올렛",
      description: "완벽한 V라인을 위한 프리미엄 리프팅",
      items: [
        {
          name: "울쎄라 300샷 + 브이올렛 1회",
          originalPrice: "2,097,000",
          salePrices: "1,049,000"
        },
        {
          name: "울쎄라 300샷 + 브이올렛 3회",
          originalPrice: "2,779,000",
          salePrices: "1,390,000"
        }
      ]
    },
    {
      title: "울쎄라 + 리프테라2",
      description: "더블 초음파 리프팅 SET",
      items: [
        {
          name: "[더블SET] 울쎄라 300샷 + 리프테라2 라인 300샷 or 펜타임 3000샷 2회",
          originalPrice: "1,979,000",
          salePrices: "990,000"
        },
        {
          name: "[더블SET] 울쎄라 600샷 + 리프테라2 라인 300샷 or 펜타임 3000샷 2회",
          originalPrice: "3,379,000",
          salePrices: "1,690,000"
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
        },
        {
          name: "울쎄라 300샷 + 버츄RF V라인 리프팅 3회",
          originalPrice: "3,779,000",
          salePrices: "1,890,000"
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
        },
        {
          name: "울쎄라 100샷 + 울리지오 600샷",
          originalPrice: "1,897,000",
          salePrices: "949,000"
        },
        {
          name: "울쎄라 200샷 + 울리지오 300샷",
          originalPrice: "1,857,000",
          salePrices: "929,000"
        },
        {
          name: "울쎄라 200샷 + 울리지오 600샷",
          originalPrice: "2,459,000",
          salePrices: "1,230,000"
        },
        {
          name: "울쎄라 300샷 + 울리지오 300샷",
          originalPrice: "2,379,000",
          salePrices: "1,190,000"
        },
        {
          name: "울쎄라 300샷 + 울리지오 600샷",
          originalPrice: "2,979,000",
          salePrices: "1,490,000"
        },
        {
          name: "울쎄라 400샷 + 울리지오 300샷",
          originalPrice: "2,979,000",
          salePrices: "1,490,000"
        },
        {
          name: "울쎄라 400샷 + 울리지오 600샷",
          originalPrice: "3,579,000",
          salePrices: "1,790,000"
        },
        {
          name: "울쎄라 600샷 + 울리지오 300샷",
          originalPrice: "3,799,000",
          salePrices: "1,900,000"
        },
        {
          name: "울쎄라 600샷 + 울리지오 600샷",
          originalPrice: "4,399,000",
          salePrices: "2,200,000"
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
          name: "[주름전용] 울쎄라 100샷 + 리쥬란HB 2cc",
          originalPrice: "1,217,000",
          salePrices: "609,000"
        },
        {
          name: "[주름전용] 울쎄라 100샷 + 스킨보톡스 1부위 (국산)",
          originalPrice: "697,000",
          salePrices: "349,000"
        },
        {
          name: "[주름전용] 울쎄라 100샷 + 리쥬비엘 주름필러 1cc",
          originalPrice: "837,000",
          salePrices: "419,000"
        },
        {
          name: "[주름전용] 울쎄라 100샷 + 벨로테로 소프트 주름필러 1cc",
          originalPrice: "1,037,000",
          salePrices: "519,000"
        },
        {
          name: "[주름전용] 울쎄라 300샷 + 리쥬란HB 1cc",
          originalPrice: "1,997,000",
          salePrices: "999,000"
        },
        {
          name: "[주름전용] 울쎄라 300샷 + 리쥬란HB 2cc",
          originalPrice: "2,299,000",
          salePrices: "1,150,000"
        },
        {
          name: "[주름전용] 울쎄라 300샷 + 스킨보톡스 1부위 (국산)",
          originalPrice: "1,779,000",
          salePrices: "890,000"
        },
        {
          name: "[주름전용] 울쎄라 300샷 + 리쥬비엘 주름필러 1cc",
          originalPrice: "1,937,000",
          salePrices: "969,000"
        },
        {
          name: "[주름전용] 울쎄라 300샷 + 벨로테로 소프트 주름필러 1cc",
          originalPrice: "2,179,000",
          salePrices: "1,090,000"
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