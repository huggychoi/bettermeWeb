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
      description: "반짝반짝 광채 나는 연예인 필링, 4세대 라라필",
      items: [
        {
          name: "라라필",
          description: "베이직1제 + 울트라2제 + LED + 모델링팩",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "라라샷",
          description: "다른 정비의 도움 없이 약물을 깊숙이\n침투 시켜주는 신개념 솔루션\n*압출유무(+10,000원 추가)",
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
      title: "라라젯",
      description: "물 맛이 다른 모공 케어, 라라젯",
      items: [
        {
          name: "라라젯",
          description: "매우 미세한 고압의 물줄기로 진행되는 프리미엄 피지관리",
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
      title: "연예인 필링, 물톡스",
      description: "PHA 물톡스 필링, 르네상스 필링",
      items: [
        {
          name: "프리미엄 물톡스",
          description: "높은 보습효과와 피부 보호 장벽 개선 효과를 통해 속부터 반짝이는 물광 피부를 만들어 줄 물톡스\n 피부탄력 & 보습효과",
          originalPrice: "137,000",
          salePrices: "69,000"
        }
      ]
    },
    {
      title: "아쿠아필 / 오투덤 산소테라피",
      description: "저자극 모공관리와 프리미엄 스킨케어",
      items: [
        {
          name: "아쿠아필 3단계",
          description: "*압출 유무 20,000원 추가",
          originalPrice: "57,000",
          salePrices: "29,000"
        },      
        {
          name: "2세대 오투덤 산소테라피",
          description: "산소폭탄 휘핑마스크 + 오투덤 활력앰플 \n+ + 산소이온돔 + 모델링팩",
          originalPrice: "97,000",
          salePrices: "49,000"
        },
        {
          name: "여드름 스케일링",
          description: "전체 압출+ 진정 관리",
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
          description: "플래티넘 클라필 + LED + 시트팩\n* LDM 침투모드 추가시 +35,000원\n백금(플래티넘)으로 하는 궁극의 피부 강화 신개념 필링",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "블랙필",
          description: "블랙필 + 세보마스크 + 크라이오 + LED\n자연유래 천연 발효 흑초 베이스\n피지 배출과 염증 완화, 예민한 피부도 가능",
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
      title: "프리미엄 비타민 미백관리",
      description: "빛나는 광채피부 만들기",
      items: [
        {
          name: "프리미엄 비타민 미백관리",
          description: "프리미엄 비타민 앰플 이온토+ \n+ 비타민C 앰플 초음파 + LED + 모델링팩",
          originalPrice: "117,000",
          salePrices: "59,000"
        }
      ]
    },
    {
      title: "스킨케어 패키지 프로그램",
      description: "패키지 프로그램",
      items: [
        {
          name: "프리미엄 스킨케어",
          description: "선택관리(플라필/부스터필/라라필/물톡스/LDM 12분) \n+ + 선택관리(수분/진정/재생/미백)",
          originalPrice: "199,000",
          salePrices: "100,000"
        }
      ]
    },
    {
      title: "LDM 재생/홍조/여드름/물방울",
      description: "저자극 프리미엄 보습 관리, 고밀도 초음파",
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
          name: "LDM 베이직 8분 + 빛타민케어",
          description: "LDM 8분 + 빛타민케어 + LED + 모델링팩",
          originalPrice: "97,000",
          salePrices: "49,000"
        },
        {
          name: "LDM 물방울 리프팅 12분",
          description: "LDM 12분 물방울리프팅 + LED + 모델링팩",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "LDM 물방울 리프팅 20분",
          description: "LDM 20분 물방울리프팅 + LED + 모델링팩",
          originalPrice: "157,000",
          salePrices: "79,000"
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