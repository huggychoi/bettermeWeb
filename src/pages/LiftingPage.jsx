import React from 'react';
import MenuSection from '../components/MenuSection';

const liftingData = {
  sections: [
  
    {
      title: "슈링크 유니버스 리프팅",
      description: "속도는 UP! 통증은 DOWN! 늘어난 탄력에 최적화! 아이슈링크 리프팅",
      items: [
        {
          name: "유니 슈링크(라인) 100샷",
          description: "빠른 시술시간!! 적아진 통증!! 더 강력해진 효과!!",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "유니 슈링크(라인) 300샷",
          originalPrice: "313,000",
          salePrices: "157,000"
        },
        {
          name: "유니 슈링크(라인) 600샷",
          originalPrice: "477,000",
          salePrices: "239,000"
        },
        {
          name: "유니 슈링크(펜타입) 100샷",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "유니 슈링크(펜타입) 300샷",
          originalPrice: "313,000",
          salePrices: "157,000"
        }
      ]
    },
    {
      title: "리프테라 리프팅",
      description: "피부 전체의 콜라겐 재생 유도 및 주름 개선",
      items: [
        {
          name: "리프테라2 펜타임 1000샷",
          description: "*이마, 눈가, 눈밑, 팔자, 입가, 목주름 시술가능",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "리프테라2 펜타임 2000샷",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "리프테라2 라인 100샷",
          originalPrice: "97,000",
          salePrices: "49,000"
        }
      ]
    },
    {
      title: "인모드 리프팅",
      description: "피부 전체의 콜라겐 재생 유도 및 주름 개선",
      items: [
        {
          name: "인모드 FX 1부위 1회",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "인모드 FX 얼굴전체 1회",
          originalPrice: "217,000",
          salePrices: "109,000"
        },
        {
          name: "인모드 FORMA 1회",
          originalPrice: "217,000",
          salePrices: "109,000"
        }
      ]
    },
    {
      title: "올리지오 리프팅",
      description: "비침습적 고주파(RF) 리프팅",
      items: [
        {
          name: "올리지오 300샷",
          originalPrice: "719,000",
          salePrices: "360,000"
        },
        {
          name: "올리지오 400샷",
          originalPrice: "919,000",
          salePrices: "460,000"
        },
        {
          name: "올리지오 300샷 + LDM 물방울 리프팅(12)",
          originalPrice: "797,000",
          salePrices: "399,000"
        }
      ]
    },
    {
      title: "버츄 리프팅",
      description: "모공과 잔주름에도 강력한 효과",
      items: [
        {
          name: "버츄 RF 아이 리프팅 1회",
          originalPrice: "457,000",
          salePrices: "229,000"
        },
        {
          name: "버츄 RF 이중턱 리프팅 + 크라이오 1회",
          originalPrice: "517,000",
          salePrices: "259,000"
        },
        {
          name: "버츄 RF 브이라인 리프팅 + 크라이오 1회",
          originalPrice: "797,000",
          salePrices: "399,000"
        }
      ]
    },
    {
      title: "쿨페이즈",
      description: "적은 통증, 강력한 고주파 리프팅",
      items: [
        {
          name: "쿨페이즈 300샷",
          originalPrice: "979,000",
          salePrices: "490,000"
        },
        {
          name: "쿨페이즈 600샷",
          originalPrice: "1,779,000",
          salePrices: "890,000"
        },
        {
          name: "쿨페이즈 300샷 + 리프테라2 펜타입 3000샷",
          originalPrice: "1,177,000",
          salePrices: "589,000"
        }
      ]
    }
  ]
};

const LiftingPage = () => (
  <>
    {liftingData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default LiftingPage;
