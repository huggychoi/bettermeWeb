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
import HiracellPage from './pages/HiracellPage';
import HistolabPage from './pages/HistolabPage';
import SupplementsPage from './pages/SupplementsPage';
import { tabsConfig } from './config/tabsConfig';
import FirstVisitPage from './pages/FirstVisitPage';

function App() {
  const [activeTab, setActiveTab] = React.useState('membership');
  const contentRef = React.useRef(null);

  const handleTabClick = (key) => {
    setActiveTab(key);
    // 메뉴판 영역을 최상단으로 스크롤
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  const renderActivePage = () => {
    switch(activeTab) {
      case 'firstVisit': // firstVisit을 membership으로 변경
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
    <div className="fixed inset-0 flex bg-gray-50">
      {/* 왼쪽 카테고리 영역 - 너비 축소 및 스크롤바 숨김 */}
      <div 
        className="w-14 h-full overflow-y-auto bg-white border-r flex-shrink-0 scrollbar-hide"
        style={{
          msOverflowStyle: 'none',  /* IE and Edge */
          scrollbarWidth: 'none'     /* Firefox */
        }}
      >
        <div className="sticky top-0 bg-white z-10 p-3 border-b">

        </div>
        <div className="p-2">
          {Object.entries(tabsConfig).map(([key, { icon, label }]) => (
            <TabButton
              key={key}
              icon={icon}
              label={label}
              isActive={activeTab === key}
              onClick={() => handleTabClick(key)}
            />
          ))}
        </div>
      </div>


    {/* 오른쪽 메뉴판 영역 - 독립 스크롤 */}
    <div 
        ref={contentRef}
        className="flex-1 h-full overflow-y-auto"
      >
        <div className="max-w-4xl mx-auto p-6">
          {renderActivePage()}
        </div>
      </div>
    </div>
  );
}

export default App;