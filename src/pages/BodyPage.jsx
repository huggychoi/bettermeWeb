import React from 'react';
import MenuSection from '../components/MenuSection';

const bodyData = {
  sections: [
    {
      title: "바디 골드 XV주사",
      description: "무스테로이드 프리미엄 지방세포 파괴 주사",
      items: [
        {
          name: "골드XV주사 1부위",
          description: "무스테로이드 프리미엄 고농축 지방세포 파괴 주사 \n *100cc: 100cc x 1회 \n *150cc: 50cc x 3회",
          originalPrice: "237,000",
          salePrices: "119,000"
        },
        {
          name: "골드XV주사 100cc ",
          description: "*100cc: 100cc x 1회",
          salePrices: "199,000"
        },
        {
          name: "골드XV주사 150cc ",
          description: "*150cc: 50cc x 3회",
          salePrices: "279,000"
        }
      ]
    },
    {
      title: "바디보톡스",
      description: "간단한 시술로 완성하는 바디라인",
      items: [
        {
          name: "바디보톡스\n [국산]",
          description: "승모근/팔뚝/허벅지/종아리 중 택 1",
          originalPrice: "97,000",
          salePrices: "49,000"
        },
        {
          name: "바디보톡스 \n [나보타]",
          description: "정품정량/눈앞소분",
          originalPrice: "177,000",
          salePrices: "119,000"
        }
      ]
    },
    {
      title: "바디 윤곽주사",
      description: "간편한 바디 라인 정리",
      items: [
        {
          name: "바디 윤곽주사 1부위",
          description: "겨살/뒷목/발목 중 선택",
          originalPrice: "77,000",
          salePrices: "39,000"
        }
      ]
    },
    {
      title: "바디 리프팅",
      description: "마이크로 초음파 시스템으로 세밀한 리프팅",
      items: [
        {
          name: "바디 플로리스 2000샷",
          description: "바디 슈링크! HIFU를 이용하여 처진\n살들을 안으로 당겨주는 시술!\n처짐 방지와 탄력관리에 효과적!",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "바디 플로리스 3000샷",          
          salePrices: "140,000"
        },
        {
          name: "바디 플로리스 4000샷",          
          salePrices: "179,000"
        }
      ]
    },
    {
      title: "바디 인모드",
      description: "2배 커진 핸드피스 크기\n 2배 강해진 에너지의 바디 인모드",
      items: [
        {
          name: "바디인모드 FX 1부위",
          description: "양손바닥 크기 1부위\n 종아리(FX 2부위)\n 허벅지(FX 6부위)",
          originalPrice: "297,000",
          salePrices: "149,000"
        }
      ]
    },
    {
      title: "바디 고주파관리",
      description: "지방 흡입 후 바이오본드 관리, 셀룰라이트 관리",
      items: [
        {
          name: "노블쉐이프 20분 2부위",
          description: "의료용 레이저-고주파 + 저주파 조합 \n 복부,허벅지,종아리 등\n 탄력, 붓기 제거, 셀룰라이트 제거에 효과적!",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "바디 고주파 (10분)",
          description: "피부 탄력, 붓기, 순환개선에 도움. 고주파 에너지로 진피층을 탄탄하게!",
          originalPrice: "197,000",
          salePrices: "99,000"
        }
      ]
    },
    {
      title: "슬림 바디 케어 프로그램",
      description: "군살 없는 예쁜 몸매 만들기",
      items: [
        {
          name: "슬림 팔뚝 3회 프로그램",
          description: "[1회차] 바디 인모드(팔뚝) + 여리미주사 40cc\n[2회차] 노블쉐이프 + S퀸러미주사 100cc\n[3회차] 바디 플로리스2000샷 + 바디고주파 + 여리미주사 40cc",
          originalPrice: "997,000",
          salePrices: "499,000"
        },
        {
          name: "슬림 종아리 3회 프로그램",
          description: "[1회차] 여리미주사 40cc + 바디보톡스 200U \n[2회차] 노블쉐이프 +  여리미 주사 40cc\n[3회차] 바디 플로리스2000샷 + 바디고주파 + S퀸러미 주사 100cc \n *바디인모드 변경시 9.9 만원 추가 ",
          originalPrice: "997,000",
          salePrices: "499,000"
        },
        {
          name: "슬림 복부 3회 프로그램",
          description: "[1회차] 바디고주파 + S퀸러미 주사 200cc \n[2회차] 바디인모드 +  여리미 주사 60cc\n[3회차] 노블쉐이프 + S퀸러미 주사 200cc",
          originalPrice: "997,000",
          salePrices: "499,000"
        }
      ]
    },
    {
      title: "퀸러미 주사",
      description: "지방감소 효과, 지방분해 주사",
      items: [
        {
          name: "퀸러미 주사 100cc ",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "퀸러미 주사 200cc ",
          salePrices: "89,000"
        }
      ]
    },
    {
      title: "S퀸러미 주사",
      description: "기존 퀸러미 주사보다\n5배 고농축 지방분해 주사",
      items: [
        {
          name: "S퀸러미 주사 100cc",
          description: "팔뚝, 종아리, 허벅지, 복부 등 넓은 부위 집중 시술\n기존 퀸러미 주사의 5배 고농축 주사",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "S퀸러미 주사 200cc ",
          salePrices: "149,000"
        }
      ]
    },
    {
      title: "여리미 주사",
      description: "지방 분해, 셀룰라이트 감소, \n 국소부위까지 세밀하게!",
      items: [
        {
          name: "여리미 주사 10cc",
          description: "팔뚝, 허벅지, 종아리, 러브핸들 부위",
          originalPrice: "77,000",
          salePrices: "39,000"
        },
        {
          name: "여리미 주사 40cc",
          salePrices: "70,000"
        }
      ]
    },
    {
      title: "나노 다이어트 패키지",
      description: "무스테로이드 프리미엄 지방세포 파괴 주사",
      items: [
        {
          name: "베러미 원데이 나노 종아리 패키지",
          description: "여리미 주사 40cc + 플로리스 바디 2000샷 + 바디보톡스 200U + 나노발목주사 6cc",
          originalPrice: "397,000",
          salePrices: "199,000"
        },
        {
          name: "베러미 원데이 허리 패키지",
          description: "여리미 주사 80cc + 복부 노블쉐이프 + 플로리스 바디 2000샷 + 비만약 처방2주 \n * 바디인모드 변경시 9.9만원 추가",
          originalPrice: "397,000",
          salePrices: "199,000"
        }
      ]
    }
  ]
};

const BodyPage = () => (
  <>
    {bodyData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default BodyPage;