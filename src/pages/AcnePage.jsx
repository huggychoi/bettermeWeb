import React from 'react';
import MenuSection from '../components/MenuSection';

const acneData = {
  sections: [
    {
      title: "프락셀",
      description: "저통증 저자극 모공 여드름, 흉터 재생, 피부 탄력개선",
      items: [
        {
          name: "헐리우드 프락셀 (나비존) + 크라이오 + 모델링팩",
          description: "다운타임 적은 저통증 프락셀",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "헐리우드 프락셀 (전체) + 크라이오 + 모델링팩",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "피코 프락셀(나비존) + 크라이오 + 모델링팩",
          description: "다운타임 적은 저통증 프락셀",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "피코 프락셀(전체) + 크라이오 + 모델링팩",
          originalPrice: "177,000",
          salePrices: "89,000"
        }
      ]
    },
    {
      title: "네오빔",
      description: "효과적이고 안전한 여드름, 피지샘 과활성화 치료 레이저",
      items: [
        {
          name: "압출 미포함",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "압출 포함",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "압출 미포함 + 약처방 + 염증주사 얼굴전체",
          originalPrice: "797,000",
          salePrices: "399,000"
        },
        {
          name: "압출 포함 + 약처방 + 염증주사 얼굴전체",
          originalPrice: "997,000",
          salePrices: "499,000"
        },
        {
          name: "라라빔(라라샷 + 네오빔 - 압출미포함)",
          description: "네오빔과 라라샷의 콤보로 피지샘을 강하게 열어, 염증완화!! 4세대 PTT!\n* 압출유무(+10,000원 추가)",
          originalPrice: "255,000",
          salePrices: "128,000"
        }
      ]
    },
    {
      title: "버츄RF",
      description: "모공, 여드름 흉터 재생, 피부 탄력개선",
      items: [
        {
          name: "버츄RF(나비존) + 크라이오 진정관리",
          originalPrice: "257,000",
          salePrices: "129,000"
        },
        {
          name: "버츄RF(얼굴전체) + 크라이오 진정관리",
          originalPrice: "457,000",
          salePrices: "179,000"
        }
      ]
    },
    {
      title: "골드 PTT",
      description: "깊숙히 침투하는 골드 입자, 강력한 레이저로 피지샘 파괴, 여드름 치료",
      items: [
        {
          name: "골드 PTT 여드름/주름/미백 치료",
          description: "스크럽 + 골드 PTT 도포 + 초음파 5분\n+ 엑셀V 듀얼모드 + 시트팩 + LED",
          originalPrice: "397,000",
          salePrices: "199,000"
        }
      ]
    },
    {
      title: "여드름 케어 프로그램",
      description: "베러미만의 여드름 케어 프로그램",
      items: [
        {
          name: "베러미 여드름 케어 프로그램 (4주)",
          description: "[1주] 아쿠아필(압출 포함) + 네오빔 + 크라이오 + LED + 모델링팩 + 염증주사 or 여드름약처방\n[2주] 라라샷 + 수분침투관리 + 엑셀V제네시스 + 진정팩\n[3주] 네오빔(압출포함) + 크라이오 + LED + 모델링팩\n[4주] 라라샷 + 수분침투관리 + 엑셀V제네시스 + 진정팩 (염증 주사 시술 가능)",
          originalPrice: "797,000",
          salePrices: "399,000"
        }
      ]
    },
    {
      title: "모공 쫀쫀 프로그램",
      description: "모공 살균, 콜라겐 재생, 모공 수축, 피부결 개선",
      items: [
        {
          name: "베러미 모공 베이직 프로그램 (4주)",
          description: "[1주] 아쿠아필 + 스펙트라필 + 크라이오 + LED + 모델링팩\n[2주] 피코슈어 프락셀 + 모공주사 + 크라이오 + LED + 모델링팩\n[3주] 버츄RF 얼굴전체 + 재생관리 + LED + 모델링팩\n[4주] 피코슈어 프락셀 + 아기주사 + 크라이오 + LED + 모델링팩",
          originalPrice: "797,000",
          salePrices: "399,000"
        }
      ]
    },
    {
      title: "아기 모공 프로그램",
      description: "늘어진 모공에 대한 고민을 위한 아기 모공 프로그램",
      items: [
        {
          name: "베러미 여드름 흉터 프로그램 (5주)",
          description: "[1주] 아쿠아필 + 피코프락셀 + PDRN재생주사 + 크라이오 + LED + 모델링\n[2주] 버츄RF 얼굴 전체 + 아기주사 + 초음파관리 + LED + 모델링\n[3주] 쥬베룩 모공주사 2cc + LDM재생관리 + 진정팩\n[4주] 헐리우드 프락셀 + 아기주사 + 크라이오 + LED + 모델링팩\n[5주] 아쿠아필 + 피코프락셀 + PDRN재생주사 + 크라이오 + LED + 모델링팩",
          originalPrice: "997,000",
          salePrices: "499,000"
        }
      ]
    },
    {
      title: "여드름 흉터 프로그램",
      description: "여드름 흉터, 프락셀과 버츄RF로 관리",
      items: [
        {
          name: "베리미 모공 프리미엄 프로그램 (8주)",
          description: "[1주] 아쿠아필 + 스펙트라필 + 크라이오 + LED + 모델링팩\n[2주] 쥬베룩물광4cc + LDM재생관리+LED + 모델링팩\n[3주] 피코슈어 프락셀 + 모공주사 + 크라이오 + LED + 모델링팩\n[4주] 버츄RF 얼굴전체 + 아기주사 + 크라이오 + LED + 모델링팩\n[5주] 라라필 + 엑셀V제네시스 + LDM재생관리 + LED + 모델링팩\n[6주] 헐리우드프락셀 + 아기주사 + 크라이오+ LED + 모델링팩\n[7주] 쥬베룩물광4cc + LDM재생관리 + LED + 모델링팩\n[8주] 버츄RF 얼굴전체 + 아기주사 + 크라이오 + LED + 모델링팩",
          originalPrice: "1,997,000",
          salePrices: "999,000"
        }
      ]
    },
    {
      title: "여드름 자국/흉터 프로그램",
      description: "여드름 자국/흉터를 한번에 해결하는 올인원 패키지",
      items: [
        {
          name: "베러미 여드름 자국/흉터 프리미엄 프로그램 (10주)",
          description: "[1주] 스펙트라필 + 피코프락셀 + PDRN재생주사 + 크라이오 + LED + 모델링\n[2주] 엑셀V제네시스 + 엑셀V레드스카 + 진정관리 + LED + 모델링\n[3주] 버츄RF 얼굴전체 + 아기주사 + 초음파관리 + LED + 모델링\n[4주] 헐리우드 듀얼토닝 + LDM 홍조 + LED + 모델링\n[5주] 쥬베룩모공주사4cc + LDM재생관리 + 진정팩\n[6주] 스펙트라필 + 엑셀V 홍조/레드스카 + 크라이오 + LED + 모델링\n[7주] 피코프락셀 + PDRN재생주사 + LDM재생관리 + 진정팩\n[8주] 버츄RF 얼굴전체 + ISCE 엑소좀 + 초음파관리 + LED + 모델링\n[9주] 헐리우드 듀얼토닝 + LDM 홍조+ LED + 모델링\n[10주] 피코슈어토닝 + 엑셀V제네시스 + 수분관리 + LED + 모델링팩",
          originalPrice: "2,597,000",
          salePrices: "1,299,000"
        }
      ]
    }
  ]
};

const AcnePage = () => (
  <>
    {acneData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default AcnePage;
