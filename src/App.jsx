import React from 'react';
import { Card } from '@/components/ui/card';
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

// 컴포넌트들을 먼저 정의
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

const MenuSection = ({ title, description, items }) => (
  <div className="mb-4 border rounded-lg overflow-hidden">
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
    // ... (나머지 tabsConfig 내용)
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