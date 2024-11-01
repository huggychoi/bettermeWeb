import React from 'react';
import MenuSection from '../components/MenuSection';

const liftingData = {
  sections: [
    {
      title: "리프팅/탄력 케어",
      description: "리프팅 / 탄력 개선 효과를 한번에!",
      items: [
        {
          name: "베러미 리프팅/탄력 4주 베이직 케어 프로그램(볼륨유지)",
          description: "[1주] 디자인 리프테라 3000샷 + 인모드 forma 얼굴 전체\n[2주] LDM 12분 리프팅모드 + LED + 모델링\n[3주] 홈리지오300샷 + 디마�쥬링크200샷\n[4주] 클라렌 리프팅케어(1500샷) 관리",
          originalPrice: "1,197,000",
          salePrices: "599,000"
        },
        {
          name: "베러미 리프팅/탄력 4주 케어 베이직 프로그램(볼륨감소)",
          description: "[1주] 디자인 리프테라(300+1500) + 인모드 Fx얼굴 전체\n[2주] LDM 12분 리프팅모드-LED-모델링\n[3주] 홈리지오300샷 + 유니슈링크200샷\n[4주] 고주파 착은 얼굴 찾기케어",
          originalPrice: "1,197,000",
          salePrices: "599,000"
        }
      ]
    },
    {
      title: "슈링크 유니버스 리프팅",
      description: "속도는 UP! 홍충은 DOWN! 슈링크로 늘어난 탄력에 최적화! 아이슈링크 리프팅",
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
          name: "유니 슈링크(젠타임) 100샷",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "유니 슈링크(젠타임) 300샷",
          originalPrice: "313,000",
          salePrices: "157,000"
        }
      ]
    },
    {
      title: "리프테라 리프팅",
      description: "피부 전체의 물라켄 재생 유도 및 주름 개선",
      items: [
        {
          name: "리프테라2 젠타임 1000샷",
          description: "*이마, 눈가, 눈밑, 팔자, 입가, 목주름시술가능",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "리프테라2 젠타임 2000샷",
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
      description: "피부 전체의 물라켄 재생 유도 및 주름 개선",
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
      title: "울리지오 리프팅",
      description: "비침습 RF 고주파 리프팅",
      items: [
        {
          name: "울리지오 300샷",
          originalPrice: "719,000",
          salePrices: "360,000"
        },
        {
          name: "울리지오 400샷",
          originalPrice: "919,000",
          salePrices: "460,000"
        },
        {
          name: "울리지오 300샷 + LDM 물방울 리프팅(12)",
          originalPrice: "797,000",
          salePrices: "399,000"
        }
      ]
    },
    {
      title: "버츄 리프팅",
      description: "모공과 전주름에도 강력한 효과",
      items: [
        {
          name: "버츄 RF 아이 리프팅 1회",
          originalPrice: "457,000",
          salePrices: "229,000"
        },
        {
          name: "버츄 RF 이중턱 리프팅 + 크라이오_1회",
          originalPrice: "517,000",
          salePrices: "259,000"
        },
        {
          name: "버츄 RF 브이라인 리프팅 + 크라이오_1회",
          originalPrice: "797,000",
          salePrices: "399,000"
        }
      ]
    },
    {
      title: "쿨페이스",
      description: "적온 응동, 강력한 고주파 리프팅",
      items: [
        {
          name: "쿨페이스 300샷",
          originalPrice: "979,000",
          salePrices: "490,000"
        },
        {
          name: "쿨페이스 600샷",
          originalPrice: "1,779,000",
          salePrices: "890,000"
        },
        {
          name: "쿨페이스 300샷 + 리프테라2 젠타임 3000샷",
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
