import React from 'react';
import MenuSection from '../components/MenuSection';

const botoxData = {
  sections: [
    {
      title: "주름 & 사각턱 보톡스",
      description: "주름, 사각턱 고민 한번에 해결하기\n 부위: 눈가, 눈밑, 미간, 이마, 자갈턱, 콧등, 콧볼, 입꼬리 중 선택",
      items: [
        {
          name: "주름보톡스 1부위\n [국산]",
          originalPrice: "35,000",
          salePrices: "18,000"
        },
        {
          name: "주름보톡스 3부위\n [국산]",
          originalPrice: "89,000",
          salePrices: "45,000"
        },
        {
          name: "주름보톡스 1부위\n [나보타]",
          originalPrice: "77,000",
          salePrices: "39,000"
        },
        {
          name: "주름보톡스 3부위\n [나보타]",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "수입 주름보톡스 1부위\n [제오민]",
          originalPrice: "117,000",
          salePrices: "59,000"
        },    
        {
          name: "수입 주름보톡스 3부위\n [제오민]",
          originalPrice: "297,000",
          salePrices: "149,000"
        },        
        {
          name: "사각턱 보톡스 50u \n [국산]",
          originalPrice: "47,000",
          salePrices: "24,000"
        },
        {
          name: "사각턱 보톡스 50u \n [나보타]",
          originalPrice: "109,000",
          salePrices: "55,000"
        },
        {
          name: "수입 사각턱 보톡스 50u \n [제오민]",
          originalPrice: "237,000",
          salePrices: "119,000"
        }
      ]
    },
    {
      title: "더모톡신(스킨보톡스)",
      description: "잔주름 개선, 탱글탱글한 피부탄력",
      items: [
        {
          name: "더모톡신 1부위 \n [국산]",
          description: "부위: 이마, 볼, 목 중 선택",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "더모톡신 1부위 \n [나보타]",
          originalPrice: "147,000",
          salePrices: "74,000"
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
        },
        {
          name: "수입 더모톡신 얼굴전체 \n [제오민]",
          originalPrice: "297,000",
          salePrices: "149,000"
        }
      ]
    },
    {
      title: "광대 & 관자 & 침샘 보톡스",
      description: "특수부위 보톡스",
      items: [
        {
          name: "광대보톡스 [국산]",
          originalPrice: "59,000",
          salePrices: "30,000"
        },
        {
          name: "광대보톡스 [나보타]",
          originalPrice: "119,000",
          salePrices: "60,000"
        },
        {
          name: "귀밑 침샘 보톡스 50u \n [국산]",
          originalPrice: "97,000",
          salePrices: "49,000"
        },
        {
          name: "귀밑 침샘 보톡스 50u \n [나보타]",
          originalPrice: "157,000",
          salePrices: "79,000"
        },
        {
          name: "측두근 보톡스 50u \n [국산]",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "측두근 보톡스 50u \n [나보타]",
          originalPrice: "177,000",
          salePrices: "89,000"
        }
      ]
    },
    {
      title: "다한증 보톡스",
      description: "언제 어디서나 뽀송뽀송",
      items: [
        {
          name: "다한증 보톡스 50u \n [국산]",
          originalPrice: "137,000",
          salePrices: "69,000"
        },
        {
          name: "다한증 보톡스 100u \n [국산]",
          originalPrice: "197,000",
          salePrices: "99,000"
        },
        {
          name: "수입 다한증보톡스 50u \n [제오민]",
          originalPrice: "297,000",
          salePrices: "149,000"
        },
        {
          name: "수입 다한증보톡스 100u \n [제오민]",
          originalPrice: "477,000",
          salePrices: "239,000"
        }
      ]
    },
    {
      title: "골드 XV주사/브이올렛",
      description: "무스테로이드 프리미엄 지방세포 파괴 주사", 
      items: [
        {
          name: "골드 XV주사 20cc 얼굴 1부위",
          description: "허리는 X로, 얼굴은 V로 잘록하고 갸름하게",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "브이올렛 주사 2cc 1회",
          description: "이중턱 파괴!! 지방세포 자체를 파괴, 콜라겐 합성 도움으로 턱선 유지까지! \n지방 세포의 수가 줄어 반영구적인 효과 ",
          originalPrice: "497,000",
          salePrices: "249,000"
        }
      ]
    },
    {
      title: "윤곽주사 & 아큐주사 & GPC주사",
      description: "불필요한 페이스 지방 감소 주사", 
      items: [
        {
          name: "윤곽주사 10cc",
          description: "V라인을 위한 베러미만의 윤곽주사 레시피",
          originalPrice: "47,000",
          salePrices: "24,000"
        },
        {
          name: "프리미엄 아큐주사 3cc",
          description: "윤곽주사의 고농축 버전",
          originalPrice: "57,000",
          salePrices: "29,000"
        },
        {
          name: "프리미엄 아큐주사 10cc",
          description: "이중턱 부위 전용 \n 고용량 주사 1회",
          originalPrice: "117,000",
          salePrices: "59,000"
        },
        {
          name: "GPC주사",
          description: "무스테로이드 얼굴 지방 분해 주사",
          originalPrice: "77,000",
          salePrices: "39,000"
        }
      ]
    },
    {
      title: "코 조각 패키지",
      description: "콧망울과 콧볼에 한번에!", 
      items: [
        {
          name: "원데이 코조각 패키지",
          description: "1회: 코조각 주사+ 콧볼 보톡스 \n 3회: 코조각 주사3회 + 콧볼 보톡스 1회",
          originalPrice: "117,000",
          salePrices: "59,000"
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