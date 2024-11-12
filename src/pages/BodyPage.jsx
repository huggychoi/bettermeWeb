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
          description: "무스테로이드 프리미엄고농축 지방세포 파괴 주사\n*100cc: 100cc x 1회\n*150cc: 50cc x 3회",
          originalPrice: "237,000",
          salePrices: "119,000"
        }
      ]
    },
    {
      title: "바디보톡스",
      description: "간단한 시술로 완성하는 바디라인",
      items: [
        {
          name: "바디보톡스 [국산]",
          description: "종아리/팔뚝/허벅지/종아리 중 택 1",
          originalPrice: "97,000",
          salePrices: "49,000"
        },
        {
          name: "바디보톡스 [나보타]",
          description: "국산 프리미엄 나보타\n정종정맥/눈밑소분",
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
          description: "겨살/팔뚝/발목 중 선택",
          originalPrice: "77,000",
          salePrices: "39,000"
        }
      ]
    },
    {
      title: "바디 리프팅",
      description: "마이크로 초음파 시스템으로 진행하는 리프팅",
      items: [
        {
          name: "바디 플로리스 2000샷",
          description: "바디 슈링크! HIFU를 이용하여 처진\n살들을 안으로 당겨주는 시술!\n처짐 방지와 탄력관리에 효과적!",
          originalPrice: "197,000",
          salePrices: "99,000"
        }
      ]
    },
    {
      title: "바디 인모드",
      description: "2배 커진 핸드피스 크기\n2배 강해진 에너지의 바디 인모드",
      items: [
        {
          name: "바디인모드 FX 1부위",
          description: "양손바닥 크기 1부위\n종아리 (FX2부위)\n허벅지 (FX 6부위)",
          originalPrice: "297,000",
          salePrices: "149,000"
        }
      ]
    },
    {
      title: "바디 고주파관리",
      description: "지방 흡입 후 관리, 셀룰라이트 관리",
      items: [
        {
          name: "노블쉐이프 20분 2부위",
          description: "의료용 레이저 + 고주파 + 저주파 조합 복부, 허벅지, 종아리 등\n탄력, 붓기 셀룰라이트 체지방에 효과적!",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "바디 고주파 (10분)",
          description: "피부를 탄력, 붓기, 순환개선에 도움. 고주파 에너지로 진피층을 탄탄하게!",
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
          description: "[1회차] 바디 인모드(팔뚝) + 여리미주사 40cc\n[2회차] 노블쉐이프 + S퀸러미주사 100cc\n[3회차] 바디 플로리스2000샷 + 바디고주파 + 어리미주사 40cc",
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
          name: "퀸러미 주사",
          description: "600cc: 200cc x 3회",
          originalPrice: "137,000",
          salePrices: "69,000"
        }
      ]
    },
    {
      title: "S퀸러미 주사",
      description: "기존 퀸러미 주사보다\n5배 고농축 지방분해 주사",
      items: [
        {
          name: "S퀸러미 주사",
          description: "팔뚝, 종아리, 허벅지, 복부 등 넓은 부위 집중 시술\n기존 퀸러미 주사의 5배 고농축 주사",
          originalPrice: "197,000",
          salePrices: "99,000"
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