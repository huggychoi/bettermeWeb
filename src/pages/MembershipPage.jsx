import React from 'react';
import MenuSection from '../components/MenuSection';

const membershipData = {
  sections: [
    {
      title: "VIP 멤버십",
      description: "베러미 법어점 VIP들을 위한\n할인 멤버십 안내",
      items: [
        {
          name: "베러미 10",
          description: "100만원 결제 시 10만원 추가 적립\n10% 할인 멤버십",
          originalPrice: "1,100,000",
          salePrices: "1,000,000"
        },
        {
          name: "베러미 15",
          description: "200만원 결제 시 30만원 추가 적립\n15% 할인 멤버십",
          originalPrice: "2,300,000",
          salePrices: "2,000,000"
        },
        {
          name: "베러미 16",
          description: "300만원 결제 시 50만원 추가 적립\n16% 할인 멤버십",
          originalPrice: "3,500,000",
          salePrices: "3,000,000"
        },
        {
          name: "베러미 17",
          description: "400만원 결제 시 70만원 추가 적립\n17% 할인 멤버십",
          originalPrice: "4,700,000",
          salePrices: "4,000,000"
        },
        {
          name: "베러미 18",
          description: "500만원 결제 시 90만원 추가 적립\n18% 할인 멤버십",
          originalPrice: "5,900,000",
          salePrices: "5,000,000"
        }
      ]
    },
    {
      title: "유효기간 1년",
      description: "가족 양도 1회 가능, 초진고객 동반 내원시 본인 결제 금액의 5% 적립금 페이백",
      items: []
    }
  ]
};

const MembershipPage = () => (
  <>
    {membershipData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default MembershipPage;