import React, { useState } from 'react';
import TabButton from './components/TabButton';
import BotoxPage from './pages/BotoxPage';
import RejuranPage from './pages/RejuranPage';
import LiftingPage from './pages/LiftingPage';
import UltheraPage from './pages/UltheraPage';
import WhiteningPage from './pages/WhiteningPage';
import BodyPage from './pages/BodyPage';
import VirizenPage from './pages/VirizenPage';
import SkincarePage from './pages/SkincarePage';
import BoosterPage from './pages/BoosterPage';
import AcnePage from './pages/AcnePage';
import RemovalPage from './pages/RemovalPage';
import FillerPage from './pages/FillerPage';
import WeddingPage from './pages/WeddingPage';
import MembershipPage from './pages/MembershipPage';
import AntiagingPage from './pages/AntiagingPage';
import FirstVisitPage from './pages/FirstVisitPage';
import { tabsConfig } from './config/tabsConfig';
import { X } from 'lucide-react';

function App() {
  const [showLanding, setShowLanding] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('firstVisit');
  const contentRef = React.useRef(null);

  const handleTabClick = (key) => {
    setActiveTab(key);
    setShowLanding(false);
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const renderActivePage = () => {
    switch(activeTab) {
      case 'firstVisit':
        return <FirstVisitPage />;
      case 'botox':
        return <BotoxPage />;
      case 'rejuran':
        return <RejuranPage />;
      case 'lifting':
        return <LiftingPage />;
      case 'ulthera':
        return <UltheraPage />;
      case 'whitening':
        return <WhiteningPage />;
      case 'antiaging':
        return <AntiagingPage />;
      case 'body':
        return <BodyPage />;
      case 'virizen':
        return <VirizenPage />;
      case 'skincare':
        return <SkincarePage />;
      case 'booster':
        return <BoosterPage />;
      case 'acne':
        return <AcnePage />;
      case 'removal':
        return <RemovalPage />;
      case 'filler':
        return <FillerPage />;
      case 'wedding':
        return <WeddingPage />;
      case 'membership':
        return <MembershipPage />;
      default:
        return (
          <div className="w-full min-h-[400px] flex items-center justify-center">
            <div className="text-center text-xs text-gray-500">
              준비 중입니다
            </div>
          </div>
        );
    }
  };

// 랜딩 페이지
// if (showLanding) {
//   return (
//     <div className="fixed inset-0 bg-pink-50/30 flex items-center justify-center">
//       <div className="max-w-2xl w-full mx-4 relative">
//         <button 
//           onClick={() => setShowLanding(false)}
//           className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
//         >
//           <X size={16} className="text-gray-600" />
//         </button>
//         <img 
//           src="/events/suneung-event.jpg" 
//           alt="수험생 이벤트" 
//           className="w-full rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
//           onClick={() => setShowLanding(false)}
//         />
//       </div>
//     </div>
//   );
// }

  return (
    <div className="fixed inset-0 flex bg-gradient-to-br from-pink-50/90 via-yellow-50/80 to-pink-50/70 font-pretendard">
      {/* 왼쪽 카테고리 영역 - 더 축소 */}
      <div 
        className="w-16 h-full overflow-y-auto bg-white/90 border-r border-pink-100/50 flex-shrink-0 scrollbar-hide backdrop-blur-sm"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 p-1 border-b border-pink-100/50">
          <p className="text-[9px] text-center text-black tracking-wider font-medium">MENU</p>
        </div>
        <div className="py-0.5">
          {Object.entries(tabsConfig).map(([key, config]) => (
            <TabButton
              key={key}
              icon={config.icon}
              label={config.label}
              isActive={activeTab === key}
              onClick={() => handleTabClick(key)}
            />
          ))}
        </div>
      </div>

      {/* 오른쪽 메뉴판 영역 - 배경색 짙게 */}
      <div 
        ref={contentRef}
        className="flex-1 h-full overflow-y-auto bg-gradient-to-br from-pink-100/80 via-pink-50/70 to-yellow-50/70 backdrop-blur-sm"
      >
        <div className="sticky top-0 bg-white/85 backdrop-blur-sm border-b border-pink-100/50 z-10">
          <div className="max-w-4xl mx-auto px-4 py-2">
            <h1 className="text-sm font-bold text-pink-700 tracking-wide">
              {tabsConfig[activeTab].title}
            </h1>
            <p className="text-[10px] text-pink-400 tracking-wider">
              {tabsConfig[activeTab].subtitle}
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto p-4">
          {renderActivePage()}
        </div>
      </div>
    </div>
  );
}
export default App;