import React from 'react';
import MenuSection from '../components/MenuSection';

const liftingData = {
  sections: [
  
    {
      title: "슈링크 유니버스 리프팅",
      description: "속도는 UP! 통증은 DOWN!, 슈링크2 \n 눈가 탄력에 최적화 아이 슈링크 리프팅",
      items: [
        {
          name: "라인/부스터 100샷",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "라인/부스터 300샷",
          originalPrice: "313,000",
          salePrices: "157,000"
        },
        {
          name: "라인/부스터 600샷",
          originalPrice: "477,000",
          salePrices: "239,000"
        },
        {
          name: "라인 200 + 부스터 200 + 오로라 앰플",
          originalPrice: "397,000",
          salePrices: "199,000"
        },
        {
          name: "라인 300 + 부스터 300 + 오로라 앰플",
          originalPrice: "597,000",
          salePrices: "299,000"
        },
        {
          name: "아이 슈링크 100샷",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "아이 슈링크 300샷",
          originalPrice: "357,000",
          salePrices: "179,000"
        }
      ]
    },
    {
      title: "리프테라2",
      description: "통증을 줄인 리프팅에 초점을 둔 인기 리프팅\n 이마, 눈가, 눈밑, 팔자, 입가, 목주름 시술 가능",
      items: [
        {
          name: "라인 100샷/ 펜타입 1000샷",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "라인 200샷/ 펜타입 2000샷",
          originalPrice: "177,000",
          salePrices: "89,000"
        },
        {
          name: "라인 300샷/ 펜타입 3000샷",
          originalPrice: "237,000",
          salePrices: "119,000"
        },
        {
          name: "라인 400샷/ 펜타입 4000샷",
          originalPrice: "297,000",
          salePrices: "149,000"
        },
        {
          name: "라인 300샷/ 펜타입 4000샷",
          originalPrice: "297,000",
          salePrices: "149,000"
        }
      ]
    },
    {
      title: "인모드 리프팅",
      description: "피부 전체의 콜라겐 재생 유도 및 주름 개선\n 불필요한 피하 볼륨 감소",
      items: [
        {
          name: "인모드 FX 1부위 1회",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "인모드 FX 1부위 3회",
          originalPrice: "317,000",
          salePrices: "159,000"
        },
        {
          name: "인모드 FX 얼굴전체 1회",
          originalPrice: "217,000",
          salePrices: "109,000"
        },
        {
          name: "인모드 FX 얼굴전체 3회",
          originalPrice: "597,000",
          salePrices: "299,000"
        },
        {
          name: "인모드 FORMA 1회",
          originalPrice: "217,000",
          salePrices: "109,000"
        },
        {
          name: "인모드 FORMA 3회",
          originalPrice: "657,000",
          salePrices: "329,000"
        },
        {
          name: "인모드 Fx + FORMA 1회",
          originalPrice: "437,000",
          salePrices: "219,000"
        },
        {
          name: "인모드 Fx + FORMA 3회",
          originalPrice: "1,197,000",
          salePrices: "599,000"
        }
      ]
    },
    {
      title: "올리지오 리프팅",
      description: "비침습적 고주파(RF) 리프팅",
      items: [
        {
          name: "올리지오 300샷",
          originalPrice: "779,000",
          salePrices: "390,000"
        },
        {
          name: "올리지오 300샷 진행시 100샷 당",
          originalPrice: "199,000",
          salePrices: "100,000"
        },
        {
          name: "올리지오 300샷 + LDM 물방울 리프팅(12)",
          originalPrice: "877,000",
          salePrices: "439,000"
        },
        {
          name: "올리지오 600샷 + LDM 물방울 리프팅(12)",
          originalPrice: "1,437,000",
          salePrices: "719,000"
        }
      ]
    },
    {
      title: "버츄RF 리프팅",
      description: "모공과 잔주름에도 강력한 효과",
      items: [
        {
          name: "버츄RF 아이 리프팅 1회",
          originalPrice: "457,000",
          salePrices: "229,000"
        },
        {
          name: "버츄RF 아이 리프팅 3회",
          originalPrice: "1,197,000",
          salePrices: "599,000"
        },
        {
          name: "버츄RF 브이라인 리프팅 + 크라이오 1회",
          originalPrice: "797,000",
          salePrices: "399,000"
        },
        {
          name: "버츄RF 브이라인 리프팅 + 크라이오 3회",
          originalPrice: "1,979,000",
          salePrices: "990,000"
        }
      ]
    },
    {
      title: "쿨페이즈",
      description: "적은 통증, 강력한 고주파 리프팅, 아프지 않은 써마지",
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
        },
        {
          name: "쿨페이즈 300샷 + 리프테라2 펜타입 5000샷",
          originalPrice: "1,299,000",
          salePrices: "650,000"
        },
        {
          name: "쿨페이즈 300샷 + 슈링크 300샷",
          originalPrice: "1,197,000",
          salePrices: "599,000"
        },
        {
          name: "쿨페이즈 300샷 + 울쎄라 300샷",
          originalPrice: "2,579,000",
          salePrices: "1,290,000"
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
