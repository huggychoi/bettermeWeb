import React from 'react';
import MenuSection from '../components/MenuSection';

const rejuranData = {
  sections: [
    {
      title: "리쥬란 힐러",
      description: "피부재생, 탄력생성, 피부복원",
      items: [
        {
          name: "리쥬란 힐러 2cc",
          originalPrice: "417,000",
          salePrices: "209,000"
        },
        {
          name: "아이 리쥬란 1cc",
          originalPrice: "277,000",
          salePrices: "139,000"
        },
        {
          name: "아이 리쥬란 1cc + 눈가보톡스[국산]",
          originalPrice: "277,000",
          salePrices: "159,000"
        },
        {
          name: "풀페이스 리쥬란",
          description: "리쥬란 힐러 2cc + 아이 리쥬란 1cc",
          originalPrice: "657,000",
          salePrices: "329,000"
        }
      ]
    },
    {
      title: "리쥬란 HB plus [무통리쥬란]",
      description: "통증 최소화, 물광 성분 함유!",
      items: [
        {
          name: "무통리쥬란 1cc",
          description: "수분 강화 효과 보강! 눈가, 목, 국소 부위",
          originalPrice: "357,000",
          salePrices: "179,000"
        },
        {
          name: "풀페이스 리쥬란 HB",
          description: "리쥬란HB 2cc + 아이 리쥬란 1cc",
          originalPrice: "957,000",
          salePrices: "479,000"
        },
        {
          name: "나비존 리쥬란 HB 1cc + 리쥬란 스킨부스터 or 톤업부스터 + LDM 재생관리",
          originalPrice: "657,000",
          salePrices: "329,000"
        }
      ]
    },
    {
      title: "연어주사/아기주사",
      description: "피부재생, 탄력생성, 피부복원",
      items: [
        {
          name: "연어주사 2cc",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "연어주사 0.1cc",
          description: "다른 시술에 추가 진행시",
          originalPrice: "19,000",
          salePrices: "10,000"
        },
        {
          name: "아기주사 MTS",
          originalPrice: "197,000",
          salePrices: "99,000"
        }
      ]
    },
    {
      title: "리쥬란 스킨부스터/톤업부스터",
      description: "피부재생, 탄력생성, 피부복원",
      items: [
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + LDM 약물침투모드",
          originalPrice: "317,000",
          salePrices: "159,000"
        },
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + 베이직 스킨케어",
          originalPrice: "297,000",
          salePrices: "149,000"
        },
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + MTS + 피코슈어토닝",
          originalPrice: "437,000",
          salePrices: "219,000"
        },
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + MTS + LDM 약물침투모드",
          originalPrice: "397,000",
          salePrices: "199,000"
        },
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + MTS + 베이직 스킨케어",
          originalPrice: "377,000",
          salePrices: "189,000"
        },
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + MTS + 헐리우드토닝",
          originalPrice: "417,000",
          salePrices: "209,000"
        },
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + MTS + 엑셀V 제네시스",
          originalPrice: "457,000",
          salePrices: "229,000"
        }
      ]
    },
    {
      title: "리쥬란 프로그램",
      description: "피부재생, 탄력생성, 피부복원",
      items: [
        {
          name: "리쥬란 미백-재생-리프팅 케어 (4주)",
          description: "[1주] 리쥬란 스킨부스터 or 톤업부스터 + LDM 재생관리 + 백옥주사 링거\n[2주] 콜라겐 리프팅 케어\n[3주] 리쥬란힐러 2cc + 크라이오 관리\n[4주] LDM 물방울리프팅 12분",
          originalPrice: "997,000",
          salePrices: "499,000"
        },
        {
          name: "리쥬란 부스터 미백-재생-리프팅 케어 (4주)",
          description: "[1주] IBPS 부스터필 + 리쥬란 스킨부스터 or 톤업부스터 MTS\n[2주] 리쥬란 스킨부스터 or 톤업부스터 MTS + LDM 약물침투 + 백옥주사 링거\n[3주] LDM 물방울리프팅 12분\n[4주] 리쥬란 스킨부스터 or 톤업부스터 + 비타민 미백관리 + 비타민C 링거",
          originalPrice: "797,000",
          salePrices: "399,000"
        },
        {
          name: "리쥬란 HB 미백-재생-리프팅 케어 (4주)",
          description: "[1주] 리쥬란 스킨부스터 or 톤업부스터 + LDM 약물 침투 + 백옥주사 링거\n[2주] 콜라겐 리프팅 케어\n[3주] 리쥬란 HB 2cc + 크라이오 관리\n[4주] LDM 물방울리프팅 12분",
          originalPrice: "1,197,000",
          salePrices: "599,000"
        }
      ]
    }
  ]
};

const RejuranPage = () => (
  <>
    {rejuranData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default RejuranPage;
