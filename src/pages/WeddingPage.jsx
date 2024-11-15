import React from 'react';
import MenuSection from '../components/MenuSection';

const weddingData = {
  sections: [
    {
      title: "웨딩 케어",
      description: "예비혼주 부모님들께 추천드립니다❤",
      items: [
        {
          name: "웨딩 혼주 베이직 케어",
          description: "주름 보톡스(국산)\n+ 사각턱 보톡스 50U(국산)\n+ 아쿠아필 3단계\n+ 항산화 스킨케어(LDM/오투덤 중 택1)",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "웨딩 혼주 프리미엄 케어",
          description: "주름 보톡스(국산)\n+ 사각턱 보톡스 50U(국산)\n+ 필링 관리(리라필/물톡스/플라필 중 택1)\n+ 항산화 스킨케어(LDM/오투덤 중 택1)",
          originalPrice: "257,000",
          salePrices: "129,000"
        }
      ]
    },
    {
      title: "웨딩 D-7",
      description: "예비신부 고객님들께 추천드립니다❤",
      items: [
        {
          name: "[예식 D-7 케어] 혼주 맞춤 케어",
          description: "베이직 스킨케어(스크러버 포함)\n+ LDM 물방울리프팅 12분\n+ 백옥링거",
          originalPrice: "217,000",
          salePrices: "109,000"
        },
        {
          name: "[예식 D-7 케어] 신랑&신부 맞춤 케어",
          description: "베이직 스킨케어(스크러버 포함)\n+ 고주파 붓기케어\n+ LDM 물방울리프팅 12분\n+ 백옥링거",
          originalPrice: "317,000",
          salePrices: "159,000"
        }
      ]
    },
    {
      title: "웨딩 패키지",
      description: "예비신부 고객님들께 추천드립니다❤",
      items: [
        {
          name: "웨딩 베이직 패키지",
          description: "[미백/광채케어]\n라라필+릴리이드M 2.5cc+얼굴전체 스킨보톡스(국산)+LDM 물방울리프팅 12분 +백옥링거\n\n[페이스 V라인 탄력케어]\n얼굴전체 인모드 FX or Forma+V라인 리프테라2 펜3000샷+V라인 타이트닝 주사 +백옥링거\n\n[드레스라인 바디케어]\n승모근 보톡스 100U(국산)+승모근 고주파+여리미주사 40cc+바디 윤곽주사6cc\n\n팔뚝,허벅지,러브핸들",
          originalPrice: "1,197,000",
          salePrices: "599,000"
        },
        {
          name: "웨딩 프리미엄 패키지",
          description: "[미백/광채케어 1]\n라라필+릴리이드M 2.5cc+얼굴전체 스킨보톡스(국산)+LDM 물방울리프팅 12분 +백옥링거\n\n[미백/광채케어 2]\n물톡스+고주파 붓기케어\n+LDM 물방울리프팅 12분+백옥링거\n\n[페이스 V라인 탄력케어 1]\n얼굴전체 인모드 FX or Forma\n+V라인 리프테라2 펜 3000샷+V라인 타이트닝 주사 +백옥링거\n\n[페이스 V라인 탄력케어 2]\n슈링크 라인 300샷+부스터 300샷\n+LDM 물방울리프팅 12분+백옥링거\n\n[드레스라인 바디케어]\n승모근 보톡스 150U(국산)\n+승모근 고주파+여리미주사 80cc\n+바디 윤곽주사 6cc",
          originalPrice: "2,397,000",
          salePrices: "1,199,000"
        },
        {
          name: "웨딩 하이엔드 패키지",
          description: "[미백/광채케어 1]\n라라필+릴리이드M 2.5cc+얼굴전체 스킨보톡스(국산)+LDM 물방울리프팅 20분 +백옥링거\n\n[미백/광채케어 2]\n물톡스+고주파 붓기케어\n+LDM 물방울리프팅 20분+백옥링거\n\n[미백/광채케어 3]\n플라필+ISCE 엑소좀\n+LDM 물방울리프팅 20분+백옥링거\n\n[페이스 V라인 탄력케어 1]\n얼굴전체 인모드 FX or Forma\n+V라인 리프테라2 펜 3000샷+V라인 타이트닝 주사+백옥링거\n\n[페이스 V라인 탄력케어 2]\n슈링크 라인 300샷+부스터 300샷+프리미엄 아큐주사 6cc+LDM 물방울리프팅 20분 +백옥링거\n\n[드레스라인 바디케어]\n승모근 보톡스 200U(국산)\n+승모근 고주파+여리미주사 80cc\n+바디 윤곽주사 6cc",
          originalPrice: "3,197,000",
          salePrices: "1,599,000"
        }
      ]
    }
  ]
};

const WeddingPage = () => (
  <>
    {weddingData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default WeddingPage;