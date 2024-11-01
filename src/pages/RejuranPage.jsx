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
          salePrices: ["109,000"]
        },
        {
          name: "풀페이스 리쥬란",
          description: "리쥬란힐러 2cc + 아이리쥬란 1cc",
          originalPrice: "597,000",
          salePrices: ["299,000"]
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
