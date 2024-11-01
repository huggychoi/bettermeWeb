import React from 'react';
import MenuSection from '../components/MenuSection';

const boosterData = {
  sections: [
    {
      title: "물광주사",
      description: "피부 진정, 진주름, 물광 어드븐 개선, 노화 예방",
      items: [
        {
          name: "물광주사 2.5cc",
          description: "",
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
          description: "",
          originalPrice: "297,000",
          salePrices: "149,000"
        }
      ]
    },
    {
      title: "프리미엄 물광주사 릴리이드",
      description: "기존 물광주사와 차별화, 빠른 엘보싱 흡수",
      items: [
        {
          name: "릴리이드 물광주사 5cc",
          description: "연어에서 추출한 DNA 성분 PN을\n엄격하게 정제 뒤어난 흡수력과 직은 엘보",
          originalPrice: "357,000",
          salePrices: "179,000"
        }
      ]
    },
    {
      title: "엑제 실리프팅 울트라콜",
      description: "울트라V실 1400개를 한방에!, 엑체형 PDO 실리프팅",
      items: [
        {
          name: "울트라콜 100 2cc",
          description: "울트라V 실 1400개를 한방에!",
          originalPrice: "299,000",
          salePrices: "150,000"
        },
        {
          name: "울트라콜 200 2cc",
          description: "자연스럽고 안전한 볼륨 울트라콜 200\n필러 부작용이 걱정된다면 차세대 스킨트라 울트라콜",
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
          description: "콜라겐 재생 부스터 쥬베룩\n진주름, 모공, 흉터 즉각 개선!",
          originalPrice: "299,000",
          salePrices: "200,000"
        },
        {
          name: "쥬베룩 스킨부스터 1cc",
          description: "다른 시술에 추가 진행 시",
          originalPrice: "199,000",
          salePrices: "100,000"
        }
      ]
    },
    {
      title: "쥬베룩 볼륨",
      description: "자연스럽게 오래 지속되는 자가콜라겐 스킨부스터",
      items: [
        {
          name: "4cc",
          description: "PDLLA 성분으로 기존 스킬트러보다 부작용은 줄이고\n효과는 더 좋아진 자가 콜라겐 생성 볼륨 부스터\n눈밑 고랑 부위 시술 제외",
          originalPrice: "899,000",
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
      description: "ISCE 인체표피줄기세포배양액 함유된 스킨부스터\n피부 재생, 노화로 인한 피부 탄력을 증점으로 개선",
      items: [
        {
          name: "ISCE 더블엑소좀",
          description: "ISCE 엑소좀 1차+2차 MIX 3cc MTS + 시트팩",
          originalPrice: "357,000",
          salePrices: "179,000"
        },
        {
          name: "ISCE 코어 재생 더블리프팅(ISCE+비쥬RF)",
          description: "비쥬RF + ISCE 엑소좀 1차+2차 MIX 3cc MTS + 시트팩",
          originalPrice: "597,000",
          salePrices: "299,000"
        },
        {
          name: "멜라부스터 더블토닝(ISCE+피코슈어토닝) 5회",
          description: "피코슈어토닝 + ISCE 엑소좀 1차+2차 MIX 3cc MTS + 시트팩\n\nEPC-CM 콜라겐 생성 촉진, 항노화 증폭개선\nMD-EXOSOME 피부항영 및 재생, 항산산소 제거\nCHA-High+CHA-VEGF (성장인자) 세포 재생, 성장 촉진",
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