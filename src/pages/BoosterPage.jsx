import React from 'react';
import MenuSection from '../components/MenuSection';

const rejuranData = {
  sections: [
    {
      title: "리쥬란 힐러",
      description: "피부재생, 탄력생성, 피부복원",
      items: [
        {
          name: "리쥬란 아이힐러",
          originalPrice: "217,000",
          salePrices: "109,000"
        },
        {
          name: "리쥬란 아이힐러 + 국산 눈가보톡스",
          originalPrice: "237,000",
          salePrices: "119,000"
        },
        {
          name: "풀페이스 리쥬란",
          description: "리쥬란힐러 2cc + 아이리쥬란 1cc",
          originalPrice: "597,000",
          salePrices: "299,000"
        }
      ]
    },
    {
      title: "리쥬란 HB plus [무통리쥬란]",
      description: "통증 최소화, 붓짐 성유 함께!",
      items: [
        {
          name: "무통리쥬란 1cc + 크라이오",
          description: "리쥬란 HB plus (무통리쥬란) 1cc + 히알루론산(HA) + 리드카인 수분강화효과 보강! 눈가, 볼, 목소 부위",
          originalPrice: "397,000",
          salePrices: "199,000"
        },
        {
          name: "풀페이스 리쥬란HB",
          description: "리쥬란HB 2cc + 아이리쥬란 1cc",
          originalPrice: "797,000",
          salePrices: "399,000"
        },
        {
          name: "나비존 리쥬란HB 1cc + 리쥬란 스킨부스터 or 톤업부스터 + LDM 재생관리",
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
          name: "아기주사(베네브) MTS",
          originalPrice: "197,000",
          salePrices: "99,000"
        }
      ]
    },
    {
      title: "리쥬란 SET",
      description: "리쥬란과 여러 스킨부스터들의 만남",
      items: [
        {
          name: "연어리쥬란힐러",
          description: "리쥬란힐러 2cc + 아이리쥬란 1cc",
          originalPrice: "397,000",
          salePrices: "199,000"
        },
        {
          name: "연어주사 + 물광주사 4cc + 크라이오",
          description: "하이록스 사용",
          originalPrice: "337,000",
          salePrices: "169,000"
        },
        {
          name: "리쥬란힐러 + 물광주사 4cc + 크라이오",
          description: "하이록스 사용",
          originalPrice: "517,000",
          salePrices: "259,000"
        }
      ]
    },
    {
      title: "리쥬란 스킨부스터/톤업부스터",
      description: "피부재생, 탄력생성, 피부복원",
      items: [
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + LDM 약물침투모드 1회",
          originalPrice: "317,000",
          salePrices: "159,000"
        },
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + 베이직 스킨케어 1회",
          originalPrice: "297,000",
          salePrices: "149,000"
        },
        {
          name: "리쥬란 스킨부스터 or 톤업부스터 + MTS + 피코슈어토닝 1",
          originalPrice: "437,000",
          salePrices: "219,000"
        }
      ]
    },
    {
      title: "리쥬란 프로그램",
      description: "피부재생, 탄력생성, 피부복원",
      items: [
        {
          name: "리쥬란 미백-재생-리프팅 케어 (4주)",
          description: "[1주] 리쥬란 스킨부스터 or 톤업부스터 + LDM 재생관리 + 백옥주사 원커\n[2주] 클라렌 리프팅 케어\n[3주] 리쥬란힐러 2cc + 크라이오 관리\n[4주] LDM 물방울리프팅 12분",
          originalPrice: "997,000",
          salePrices: "499,000"
        },
        {
          name: "리쥬란 부스터 미백-재생-리프팅 케어 (4주)",
          description: "[1주] IBPS 부스터필 + 리쥬란 스킨부스터 or 톤업부스터 MTS\n[2주] 리쥬란 스킨부스터 or 톤업부스터 MTS + LDM 약물침투 + 백옥주사 원커\n[3주] LDM 물방울리프팅 12분\n[4주] 리쥬란 스킨부스터 or 톤업부스터 + 비타민 미백관리 + 비타민C 원커",
          originalPrice: "797,000",
          salePrices: "399,000"
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
