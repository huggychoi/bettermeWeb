import React from 'react';
import { 
  Syringe, 
  Sparkles,
  Star,
  Zap,
  Sun,
  Heart,
  CircleDot,
  Pointer,
  Flower2,
  Droplets,
  Flame,
  Scissors,
  Diamond,
  Gift,
  Rocket,
  UserPlus
} from 'lucide-react';
import './App.css';

// MenuItem 컴포넌트는 그대로 유지
const MenuItem = ({ name, description, originalPrice, salePrices }) => (
  <div className="border-b border-gray-100 last:border-0 py-3">
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{name}</h3>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
      <div className="text-right min-w-[120px]">
        {originalPrice && (
          <p className="text-sm text-gray-400 line-through">{originalPrice}원</p>
        )}
        {Array.isArray(salePrices) ? (
          <div className="space-y-1">
            {salePrices.map((price, idx) => (
              <p key={idx} className="text-lg font-semibold text-rose-500">{price}원</p>
            ))}
          </div>
        ) : (
          <p className="text-lg font-semibold text-rose-500">{salePrices}원</p>
        )}
      </div>
    </div>
  </div>
);

// MenuSection 컴포넌트를 Card 대신 일반 div로 수정
const MenuSection = ({ title, description, items }) => (
  <div className="mb-4 bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="bg-gray-50 p-3 border-b">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
    <div className="p-4">
      {items.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </div>
  </div>
);

// TabButton 컴포넌트는 그대로 유지
const TabButton = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center w-20 py-4 px-2 transition-colors
      ${isActive 
        ? 'bg-white text-rose-500 border-r-2 border-rose-500' 
        : 'text-gray-500 hover:bg-gray-100'}`}
  >
    {icon}
    <span className="mt-2 text-xs font-medium text-center whitespace-nowrap">
      {label}
    </span>
  </button>
);

function App() {
  const [activeTab, setActiveTab] = React.useState('botox');

  const tabsConfig = {
    botox: {
      icon: <Syringe size={24} />,
      label: "보톡스",
      title: "보톡스/뻬띠",
      subtitle: "Botox",
      sections: [
        {
          title: "주름 & 사각턱 보톡스",
          description: "주름, 사각턱 고민 한번에 해결하기",
          items: [
            {
              name: "주름 보톡스 1부위 [국산]",
              description: "부위: 눈가, 눈썹, 미간, 이마, 자갈턱,콧볼,입꼬리 등 선택",
              originalPrice: "29,000",
              salePrices: "15,000"
            },
            {
              name: "주름 보톡스 3부위 [국산]",
              originalPrice: "77,000",
              salePrices: "39,000"
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
              name: "측두근 보톡스 50u [국산]",
              originalPrice: "137,000",
              salePrices: "69,000"
            }
          ]
        }
      ]
    },
    rejuran: {
      icon: <Sparkles size={24} />,
      label: "리쥬란",
      title: "리쥬란 스킨부스터",
      subtitle: "REJURAN Skin Booster",
      sections: [
        {
          title: "리쥬란 힐러",
          description: "피부재생, 탄력생성, 피부복원",
          items: [
            {
              name: "리쥬란 아이힐러",
              originalPrice: "217,000",
              salePrices: ["109,000", "199,000"]
            },
            {
              name: "풀페이스 리쥬란",
              description: "리쥬란힐러 2cc + 아이리쥬란 1cc",
              originalPrice: "597,000",
              salePrices: ["299,000", "809,000"]
            }
          ]
        }
      ]
    },
    lifting: {
      icon: <Zap size={24} />,
      label: "리프팅",
      title: "리프팅",
      subtitle: "Lifting",
      sections: []
    },
    ulthera: {
      icon: <Star size={24} />,
      label: "울쎄라",
      title: "울쎄라",
      subtitle: "Ulthera",
      sections: []
    },
    whitening: {
      icon: <Sun size={24} />,
      label: "미백/기미",
      title: "미백/기미",
      subtitle: "Whitening",
      sections: []
    },
    body: {
      icon: <Heart size={24} />,
      label: "바디체형",
      title: "바디체형",
      subtitle: "Body Contouring",
      sections: []
    },
    virizen: {
      icon: <CircleDot size={24} />,
      label: "바이리즌",
      title: "바이리즌",
      subtitle: "Virizen",
      sections: []
    },
    skincare: {
      icon: <Flower2 size={24} />,
      label: "스킨케어",
      title: "스킨케어",
      subtitle: "Skin Care",
      sections: []
    },
    booster: {
      icon: <Droplets size={24} />,
      label: "스킨부스터",
      title: "스킨부스터",
      subtitle: "Skin Booster",
      sections: []
    },
    acne: {
      icon: <Pointer size={24} />,
      label: "여드름/모공",
      title: "여드름/모공",
      subtitle: "Acne Care",
      sections: []
    },
    removal: {
      icon: <Scissors size={24} />,
      label: "제모",
      title: "제모",
      subtitle: "Hair Removal",
      sections: []
    },
    filler: {
      icon: <Diamond size={24} />,
      label: "필러/실",
      title: "필러/실",
      subtitle: "Filler & Thread",
      sections: []
    },
    wedding: {
      icon: <Gift size={24} />,
      label: "웨딩",
      title: "웨딩",
      subtitle: "Wedding",
      sections: []
    },
    new: {
      icon: <Rocket size={24} />,
      label: "신규런칭",
      title: "신규런칭",
      subtitle: "New Launch",
      sections: []
    },
    firstVisit: {
      icon: <UserPlus size={24} />,
      label: "첫방문",
      title: "첫방문",
      subtitle: "First Visit",
      sections: []
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 왼쪽 탭 메뉴 - 스크롤 가능하도록 수정 */}
      <div className="border-r border-gray-200 overflow-y-auto">
        <div className="flex flex-col">
          {Object.entries(tabsConfig).map(([key, tab]) => (
            <TabButton
              key={key}
              icon={tab.icon}
              label={tab.label}
              isActive={activeTab === key}
              onClick={() => setActiveTab(key)}
            />
          ))}
        </div>
      </div>

      {/* 메뉴 내용 */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-center">
            {tabsConfig[activeTab].title}
          </h1>
          <p className="text-center text-gray-500 mt-1 mb-6">
            {tabsConfig[activeTab].subtitle}
          </p>

          {tabsConfig[activeTab].sections.length > 0 ? (
            tabsConfig[activeTab].sections.map((section, idx) => (
              <MenuSection key={idx} {...section} />
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              준비 중입니다
            </div>
          )}

          <div className="text-center text-sm text-gray-500 mt-4 pb-4">
            부가세 10% 별도
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;