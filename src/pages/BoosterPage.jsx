import React from 'react';
import MenuSection from '../components/MenuSection';

const boosterData = {
  sections: [
    {
      title: "물광주사",
      description: "피부 건조, 잔주름, 좁쌀 여드름 개선, 노화 예방",
      items: [
        {
          name: "물광주사 2.5cc",
          originalPrice: "157,000",
          salePrices: "79,000"
        }
      ]
    },
    {
      title: "톡톡광채 톡신",
      description: "강한 보습력으로 촉촉하게!",
      items: [
        {
          name: "물광 2.5cc + 모공톡신 2.5cc (국산)",
          originalPrice: "297,000",
          salePrices: "149,000"
        }
      ]
    },
    {
      title: "프리미엄 물광주사 릴리이드",
      description: "기존 물광주사와 차별화, 빠른 엠보싱 흡수",
      items: [
        {
          name: "릴리이드 물광주사 5cc",
          description: "연어에서 추출한 DNA 성분 PN을\n엄격하게 정제 뛰어난 흡수력과 적은 엠보",
          originalPrice: "357,000",
          salePrices: "179,000"
        }
      ]
    },
    {
      title: "액체 실리프팅 울트라콜",
      description: "울트라V실 1400개를 한방에!, 액체형 PDO 실리프팅",
      items: [
        {
          name: "울트라콜 100 2cc",
          description: "울트라V 실 1400개를 한방에!",
          originalPrice: "299,000",
          salePrices: "150,000"
        },
        {
          name: "울트라콜 200 2cc",
          description: "자연스럽고 안전한 볼륨 울트라콜 200\n필러 부작용 걱정된다면 차세대 스컬트라 울트라콜",
          originalPrice: "499,000",
          salePrices: "250,000"
        },
        {
          name: "울트라콜 200 한 보톨 (6cc)",
          description: "6cc 당일 진행 시",
          originalPrice: "1,099,000",
          salePrices: "550,000"
        }
      ]
    },
    {
      title: "쥬베룩 스킨부스터",
      description: "자가 콜라겐 재생 촉진으로 자연스러운 효과",
      items: [
        {
          name: "쥬베룩 스킨부스터 2cc",
          description: "콜라겐 재생 부스터 쥬베룩\n 잔주름, 모공, 흉터 즉각 개선!",
          originalPrice: "399,000",
          salePrices: "200,000"
        },
        {
          name: "쥬베룩 스킨부스터 1cc",
          description: "다른 시술에 추가 진행 시",
          originalPrice: "199,000",
          salePrices: "100,000"
        },
        {
          name: "[스킨부스터 옵션] 하이쿡스 인젝터",
          description: "통증 절반, 일정한 주입량 \n 자동 기계식 피부인젝터!",
          originalPrice: "57,000",
          salePrices: "29,000"
        }
      ]
    },
    {
      title: "쥬베룩 볼륨",
      description: "자연스럽게 오래 지속되는 자가콜라겐 스킨부스터",
      items: [
        {
          name: "4cc",
          description: "PDLLA 성분으로 기존 스컬트라보다 부작용은 줄이고 \n 효과는 더 좋아진 자가 콜라겐 생성 볼륨 부스터 \n 눈밑 고랑 부위 시술 제외",
          originalPrice: "999,000",
          salePrices: "450,000"
        },
        {
          name: "한 보톨 (8cc)",
          description: "8cc 당일 진행 시",
          originalPrice: "1,499,000",
          salePrices: "750,000"
        }
      ]
    },
    {
      title: "ISCE 엑소좀",
      description: "ISCE 인체 표피줄기세포배양액 함유된 스킨부스터 \n 피부 재생, 노화로 인한 피부 탄력을 중점으로 개선",
      items: [
        {
          name: "ISCE 더블엑소좀",
          description: "ISCE 엑소좀 1제+2제 MIX 3cc MTS + 시트팩",
          originalPrice: "357,000",
          salePrices: "179,000"
        },
        {
          name: "ISCE 코어 재생 더블리프팅(ISCE엑소좀 + 버츄RF)",
          description: "버츄 RF + ISCE 엑소좀 1제+2제 MIX 3cc MTS + 시트팩",
          originalPrice: "597,000",
          salePrices: "299,000"
        },
        {
          name: "멜라부스터 더블토닝(ISCE 엑소좀 + 피코슈어토닝) 5회",
          description: "피코슈어토닝 + ISCE 엑소좀 1제+2제 MIX 3cc MTS + 시트팩\n\n 콜라겐 생성 촉진, 항노화 증폭 개선\n MD-EXOSOME 피부항염 및 재생 \n CHA-High+CHA-VEGF(성장인자) 세포재생, 성장촉진",
          originalPrice: "1,979,000",
          salePrices: "990,000"
        }
      ]
    }
  ]
};

const BoosterPage = () => (
  <>
    {boosterData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default BoosterPage;