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
//import HiracellPage from './pages/HiracellPage';
//import HistolabPage from './pages/HistolabPage';
//import SupplementsPage from './pages/SupplementsPage';
import { tabsConfig } from './config/tabsConfig';
import FirstVisitPage from './pages/FirstVisitPage';
import EventPage from './pages/EventPage';

function App() {
  const [activeTab, setActiveTab] = React.useState('firstVisit');
  const contentRef = React.useRef(null);

  const handleTabClick = (key) => {
    setActiveTab(key);
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  const renderActivePage = () => {
    switch(activeTab) {
      case 'firstVisit': // firstVisit을
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
      case 'antiaging': // 새로 추가
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
      case 'hiracell': // 새로 추가
        return <HiracellPage />;
      case 'histolab': // 새로 추가
        return <HistolabPage />;
      case 'supplements': // 새로 추가
        return <SupplementsPage />;
      case 'event':
        return <EventPage />;
      
      default:
        return (
          <div className="w-full min-h-[400px] flex items-center justify-center">
            <div className="text-center text-sm text-gray-500">
              준비 중입니다
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 flex bg-pink-50/30">
      {/* 왼쪽 카테고리 영역 - 너비 축소 */}
      <div 
        className="w-16 h-full overflow-y-auto bg-white/80 border-r border-pink-100 flex-shrink-0 scrollbar-hide"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 p-1 border-b border-pink-100">
          <p className="text-[10px] text-center text-gray-500">MENU</p>
        </div>
        <div className="py-1">
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

      {/* 오른쪽 메뉴판 영역 */}
      <div 
        ref={contentRef}
        className="flex-1 h-full overflow-y-auto"
      >
        {/* 현재 메뉴의 제목 */}
        <div className="sticky top-0 bg-white border-b z-10">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <h1 className="text-base font-bold">{tabsConfig[activeTab].label}</h1>
            <p className="text-xs text-gray-500 mt-0.5">{tabsConfig[activeTab].subtitle}</p>
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