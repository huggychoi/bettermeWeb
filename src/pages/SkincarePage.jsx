import React from 'react';
import MenuSection from '../components/MenuSection';

const skincareData = {
  sections: [
    {
      title: "베이직 스킨 케어",
      description: "저자극 스킨케어",
      items: [
        {
          name: "베이직 스킨 케어 관리",
          description: "수분/재생/진정/미백 중 선택1",
          originalPrice: "49,000",
          salePrices: "25,000"
        }
      ]
    },
    {
      title: "고주파 관리",
      description: "피부, 탄력, 붓기, 안면 혈액 순환 개선에 도움을 주는 스킨 케어",
      items: [
        {
          name: "고주파 작은 얼굴 붓기 케어",
          description: "고주파 관리(7분)+LED+상온수딩팩\n얼굴붓기& 림프순환 작은 얼굴 만들기",
          originalPrice: "97,000",
          salePrices: "49,000"
        }
      ]
    },
    {
      title: "4세대 LHA 필링",
      description: "반복만 하게 되는 연예인 필링, 4세대 라라필",
      items: [
        {
          name: "라라필",
          description: "베이직 1회 + 홈트라 2배 + LED + 모델링팩",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "라라샷",
          description: "다른 정비의 도움 없이 약물을 깊숙이\n필뜸 시켜주는 신개념 홈케션\n*입출유무(+10,000원 추가)",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "라라샷 + LDM 베이직 8분",
          description: "라라샷 + LDM 8분 + LED + 마스크팩",
          originalPrice: "197,000",
          salePrices: "99,000"
        }
      ]
    },
    {
      title: "라라겟",
      description: "흉 많이 다른 모공 케어, 화이겟",
      items: [
        {
          name: "라라겟",
          description: "매우 미세한 고압의 플루기로 진행되는 프리미엄 피지관리",
          originalPrice: "157,000",
          salePrices: "79,000"
        }
      ]
    },
    {
      title: "콜라겐 리프팅케어",
      description: "마이크로 초음파로 리프팅과 콜라겐 관리를 동시에!",
      items: [
        {
          name: "콜라겐 리프팅케어",
          description: "플로리스 리프팅 1500샷 + 콜라겐앰플\n+ LDM 관리 6분 + 마스크팩",
          originalPrice: "117,000",
          salePrices: "59,000"
        }
      ]
    },
    {
      title: "프리미엄 필링 관리",
      description: "건강하고 탄력있는 피부 개선",
      items: [
        {
          name: "플래티넘 클라필",
          description: "플래티넘 클라필 + LED + 시트팩\n* LDM 첨두 무료 추가시 +35,000원\n백금(플래티넘)으로 하는 궁극의 피부 강화 신개념 필링",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "블랙필",
          description: "블랙필 + 세보마스크 + 크라이오 + LED\n자연유래 천연 탄보 특효 베이스\n피지 배출과 염증 완화, 예민한 피부도 가능",
          originalPrice: "77,000",
          salePrices: "39,000"
        },
        {
          name: "IBPS 부스터필",
          description: "피부 수분 장벽 강화\n피부 탄력, 톤업, 미백 강화\n저자극 광채 필링",
          originalPrice: "157,000",
          salePrices: "79,000"
        }
      ]
    },
    {
      title: "스킨케어 패키지 프로그램",
      description: "패키지 프로그램",
      items: [
        {
          name: "프리미엄 스킨케어",
          description: "선택관리(클라필/부스터필/라라필/물톡스/LDM 12분)\n+ 선택관리(수분/진정/재생/미백)",
          originalPrice: "199,000",
          salePrices: "100,000"
        }
      ]
    },
    {
      title: "LDM 재생/홍조/여드름/물방울",
      description: "저자극 프리미엄 보습 관리, 고편포 초음파",
      items: [
        {
          name: "LDM 베이직 8분",
          description: "LDM 8분 + LED + 마스크팩",
          originalPrice: "77,000",
          salePrices: "39,000"
        },
        {
          name: "LDM 홍조/여드름",
          originalPrice: "89,000",
          salePrices: "45,000"
        },
        {
          name: "LDM 물방울 리프팅 12분",
          description: "LDM 12분 물방울리프팅 + LED + 모델링팩",
          originalPrice: "117,000",
          salePrices: "59,000"
        }
      ]
    }
  ]
};

const SkincarePage = () => (
  <>
    {skincareData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default SkincarePage;