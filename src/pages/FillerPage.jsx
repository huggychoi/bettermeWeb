import React from 'react';
import MenuSection from '../components/MenuSection';

const fillerData = {
  sections: [
    {
      title: "레스틸렌",
      description: "26년 역사의 레스틸렌 필러",
      items: [
        {
          name: "1cc",
          description: "높은 점재율과 손도로 지속력, 안정성, 자연스러움까지\n모두 담은 프리미엄 필러! *눈밑, 애교 제외",
          originalPrice: "477,000",
          salePrices: "239,000"
        },
        {
          name: "3cc",
          originalPrice: "1,197,000",
          salePrices: "599,000"
        },
        {
          name: "5cc",
          originalPrice: "1,899,000",
          salePrices: "950,000"
        },
        {
          name: "[입술+입꼬리] 1cc + 입꼬리 보톡스(국산)",
          description: "첫 입술 전용 프리미엄 수입 필러, 내 입술 같이 이쁘감 제로",
          originalPrice: "497,000",
          salePrices: "249,000"
        },
        {
          name: "[입술+입꼬리] 1cc + 입꼬리 보톡스(제오민)",
          originalPrice: "537,000",
          salePrices: "269,000"
        }
      ]
    },
    {
      title: "벨로테로 필러",
      description: "필러의 정석, 벨로테로 / 엠스 CPM 공법",
      items: [
        {
          name: "소프트, 주름 필러 1cc",
          description: "팔자/이마/볼 등 얼굴의 깊수름에\n탁월한 프리미엄 필러",
          originalPrice: "497,000",
          salePrices: "249,000"
        },
        {
          name: "소프트, 주름 필러 2cc",
          originalPrice: "937,000",
          salePrices: "469,000"
        },
        {
          name: "흉터 필러 1cc",
          description: "깊고 넓게 패인 여드름 흉터에\n효과적이고 즉각적인 시술!",
          originalPrice: "659,000",
          salePrices: "330,000"
        },
        {
          name: "밸런스 필러 1cc",
          description: "앞볼/엄볼/팔자에\n탁월한 프리미엄 필러",
          originalPrice: "577,000",
          salePrices: "289,000"
        },
        {
          name: "밸런스 필러 2cc",
          originalPrice: "1,097,000",
          salePrices: "549,000"
        },
        {
          name: "밸런스 필러 5cc",
          originalPrice: "2,497,000",
          salePrices: "1,249,000"
        },
        {
          name: "인텐스 필러 1cc",
          description: "코,턱끝에 탁월한 프리미엄 필러",
          originalPrice: "577,000",
          salePrices: "289,000"
        },
        {
          name: "볼륨 필러 1cc",
          description: "이마에 자연스럽고 은은하게 볼륨 채워주는 필러",
          originalPrice: "577,000",
          salePrices: "289,000"
        },
        {
          name: "볼륨 필러 3cc",
          originalPrice: "1,597,000",
          salePrices: "799,000"
        },
        {
          name: "볼륨 필러 5cc",
          originalPrice: "2,497,000",
          salePrices: "1,249,000"
        }
      ]
    },
    {
      title: "리쥬비엘 필러",
      description: "프리미엄 프랑스산 HA의 안전한 필러",
      items: [
        {
          name: "W 주름 필러 1cc",
          description: "프리미엄 프랑스산 HA원료",
          originalPrice: "297,000",
          salePrices: "149,000"
        }
      ]
    },
    {
      title: "아떼에르",
      description: "매디톡스 필러",
      items: [
        {
          name: "1cc",
          description: "인정성요건을 갖춘 위험률은산 성분의 필러\n*입술, 코, 애교, 눈밑, 미간 제외/모든부위 가능",
          originalPrice: "177,000",
          salePrices: "89,000"
        },
        {
          name: "3cc",
          originalPrice: "497,000",
          salePrices: "249,000"
        },
        {
          name: "5cc",
          originalPrice: "797,000",
          salePrices: "399,000"
        },
        {
          name: "[입술+입꼬리] 1cc + 입꼬리 보톡스 (국산)",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "코 필러",
          originalPrice: "217,000",
          salePrices: "109,000"
        }
      ]
    },
    {
      title: "아말리안",
      description: "독일산 평품 수입 필러",
      items: [
        {
          name: "1cc",
          description: "인정성요건을 갖춘 위험률은산 성분의 필러\n*입술, 코, 애교, 눈밑, 미간 제외/모든부위 가능",
          originalPrice: "297,000",
          salePrices: "149,000"
        },
        {
          name: "3cc",
          originalPrice: "837,000",
          salePrices: "419,000"
        },
        {
          name: "5cc",
          originalPrice: "1,377,000",
          salePrices: "689,000"
        },
        {
          name: "[입술+입꼬리] 1cc + 입꼬리 보톡스 (국산)",
          originalPrice: "317,000",
          salePrices: "159,000"
        },
        {
          name: "코 필러",
          originalPrice: "357,000",
          salePrices: "179,000"
        }
      ]
    },
    {
      title: "프리미엄 민트실 코 리프팅",
      description: "360도 동기가 있는 4세대 리프팅",
      items: [
        {
          name: "민트 콧대 2줄",
          description: "라인 & 길이 개선, 콜라겐 형성 활성화",
          originalPrice: "257,000",
          salePrices: "129,000"
        },
        {
          name: "민트 콧대 4줄",
          originalPrice: "437,000",
          salePrices: "219,000"
        },
        {
          name: "민트 코끝 2줄",
          originalPrice: "357,000",
          salePrices: "179,000"
        },
        {
          name: "민트 코 전체 실리프팅",
          description: "콧대 4줄 + 코끝 2줄",
          originalPrice: "657,000",
          salePrices: "329,000"
        },
        {
          name: "민트 모노실 30줄",
          description: "녹으면서 콜라겐이 합성되는 모노실\n*모노실 30줄 추가 시 50,000원",
          originalPrice: "257,000",
          salePrices: "129,000"
        },
        {
          name: "민트실 4줄 [시술 전 맞춤 디자인]",
          description: "비수술적인 요법으로 자연스럽게 리프팅\n*1줄 추가시 50,000원",
          originalPrice: "719,000",
          salePrices: "360,000"
        },
        {
          name: "슈퍼민트실 4줄 [시술 전 맞춤 디자인]",
          description: "세밀하게 일괄대며, 필자를 효과적으로 UP\n*1줄 추가시 50,000원",
          originalPrice: "639,000",
          salePrices: "320,000"
        }
      ]
    }
  ]
};

const FillerPage = () => (
  <>
    {fillerData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default FillerPage;