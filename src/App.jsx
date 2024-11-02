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
  const menuContentRef = React.useRef(null);

  const handleTabClick = (key) => {
    setActiveTab(key);
    // 메뉴판 영역을 최상단으로 스크롤
    if (menuContentRef.current) {
      menuContentRef.current.scrollTo({
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
    <div className="flex justify-center min-h-screen bg-gray-50 w-full">
      <div className="w-full md:w-[768px] flex">
        {/* 왼쪽 탭 메뉴 */}
        <div className="w-14 flex-shrink-0 border-r border-gray-200 bg-white">
          <div className="flex flex-col sticky top-0">
        </div>
        <div className="p-2">
          {Object.entries(tabsConfig).map(([key, { icon, label }]) => (
            <TabButton
              key={key}
              icon={icon}
              label={label}
              isActive={activeTab === key}
              onClick={() => setActiveTab(key)}
            />
          ))}
        </div>
      </div>

        {/* 메뉴 내용 */}
        <div className="flex-1 min-w-[306px]"> {/* 320px - 14px(탭메뉴) = 306px */}
          <div className="p-3 md:p-4">
            <h1 className="text-lg font-bold text-center">
              {tabsConfig[activeTab].title}
            </h1>
            <p className="text-xs text-gray-500 mt-0.5 mb-3 text-center">
              {tabsConfig[activeTab].subtitle}
            </p>

            {renderActivePage()}

            <div className="text-center text-xs text-gray-500 mt-3 pb-4">
              부가세 10% 별도
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;