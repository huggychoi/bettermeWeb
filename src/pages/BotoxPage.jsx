import React from 'react';
import MenuSection from '../components/MenuSection';

const botoxData = {
  sections: [
    {
      title: "주름 & 사각턱 보톡스",
      description: "주름, 사각턱 고민 한번에 해결하기",
      items: [
        {
          name: "주름보톡스 1부위\n [국산]",
          description: "부위: 눈가, 눈밑, 미간, 이마, 자갈턱, 콧등, 콧볼, 입꼬리 중 선택\n 다회권 유효기간 1년",
          originalPrice: "35,000",
          salePrices: "18,000"
        },
        {
          name: "주름보톡스 3부위\n [국산]",
          originalPrice: "77,000",
          salePrices: "39,000"
        },
        {
          name: "주름보톡스 1부위\n [나보타]",
          originalPrice: "68,800",
          salePrices: "34,900"
        },
        {
          name: "수입 주름보톡스 1부위\n [제오민]",
          originalPrice: "97,000",
          salePrices: "49,000"
        },
        {
          name: "사각턱 보톡스 50u \n [국산]",
          originalPrice: "37,000",
          salePrices: "19,000"
        },
        {
          name: "사각턱 보톡스 50u \n [나보타]",
          originalPrice: "106,800",
          salePrices: "53,900"
        },
        {
          name: "수입 사각턱 보톡스 50u \n [제오민]",
          originalPrice: "217,000",
          salePrices: "109,000"
        }
      ]
    },
    {
      title: "더모톡신",
      description: "잔주름 개선, 탱글탱글한 피부탄력",
      items: [
        {
          name: "더모톡신(스킨보톡스) 1부위 \n [국산]",
          description: "부위: 이마, 볼, 목 중 선택",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "수입 더모톡신 1부위 \n [제오민]",
          originalPrice: "177,000",
          salePrices: "89,000"
        },
        {
          name: "더모톡신 얼굴전체 \n [국산]",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "더모톡신 얼굴전체 \n [나보타]",
          originalPrice: "197,000",
          salePrices: "99,000"
        }
      ]
    },
    {
      title: "광대 & 관자 & 침샘 보톡스",
      description: "특수부위 보톡스",
      items: [
        {
          name: "광대 보톡스 [국산]",
          originalPrice: "59,000",
          salePrices: "30,000"
        },
        {
          name: "귀밑 침샘 보톡스 50u [국산]",
          originalPrice: "77,000",
          salePrices: "39,000"
        },
        {
          name: "귀밑 침샘 보톡스 50u [나보타]",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "측두근 보톡스 50u [국산]",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "측두근 보톡스 50u [나보타]",
          originalPrice: "157,000",
          salePrices: "79,000"
        }
      ]
    },
    {
      title: "다한증 보톡스",
      description: "원래 어디서나 보송보송 해지자",
      items: [
        {
          name: "다한증 보톡스 50u [국산]",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "다한증 보톡스 100u [국산]",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "수입 다한증보톡스 100u [제오민]",
          originalPrice: "437,000",
          salePrices: "219,000"
        }
      ]
    },
    {
      title: "브이올렛 주사",
      items: [
        {
          name: "브이올렛 주사 2cc 1회",
          description: "이중턱 파괴!! 지방세포 자체를 파괴, 콜라겐 합성 도움으로 턱선 유지까지! \n지방 세포의 수가 줄어 반영구적인 효과 *이중턱 복원 가능",
          originalPrice: "497,000",
          salePrices: "249,000"
        }
      ]
    }
  ]
};

const BotoxPage = () => (
  <>
    {botoxData.sections.map((section, idx) => (
      <MenuSection key={idx} {...section} />
    ))}
  </>
);

export default BotoxPage;