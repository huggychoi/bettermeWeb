import React, { useState, useEffect } from 'react';
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
import { X, XCircle, EyeOff } from 'lucide-react';
import { tabsConfig } from './config/tabsConfig';

function App() {
  const [showLanding, setShowLanding] = useState(() => {
    const today = new Date().toDateString();
    const hideUntil = localStorage.getItem('hideUntilDate');
    
    // 날짜가 지났거나, 저장된 날짜가 없으면 true 반환
    if (!hideUntil || new Date(hideUntil) < new Date()) {
      localStorage.removeItem('hideUntilDate'); // 오래된 날짜 삭제
      return true;
    }
    return false;
  });
  const [activeTab, setActiveTab] = useState('firstVisit');
  const contentRef = React.useRef(null);

  useEffect(() => {
    localStorage.setItem('showLanding', JSON.stringify(showLanding));
  }, [showLanding]);

  const handleTabClick = (key) => {
    setActiveTab(key);
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleCloseLanding = () => {
    setShowLanding(false);
  };

  // 오늘 하루 안보기
  const handleHideToday = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    localStorage.setItem('hideUntilDate', tomorrow.toISOString());
    setShowLanding(false);
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
            <div className="text-center text-sm text-gray-500">
              준비 중입니다
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative">
      {/* 랜딩 페이지 */}
      {showLanding && (
        <div className="fixed inset-0 bg-pink-50/30 flex items-center justify-center z-50">
          <div className="max-w-2xl w-full mx-4 relative">
            {/* 버튼 그룹 */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              {/* 오늘 하루 안보기 버튼 */}
              <button 
                onClick={handleHideToday}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white shadow-md text-gray-600 hover:text-gray-900 text-xs"
              >
                <EyeOff size={14} />
                <span>오늘 하루 안보기</span>
              </button>
              
              {/* 닫기 버튼 */}
              <button 
                onClick={handleCloseLanding}
                className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-gray-600 hover:text-gray-900"
              >
                <X size={16} />
              </button>
            </div>

            {/* 이미지 */}
            <img 
              src="https://raw.githubusercontent.com/huggychoi/bettermeWeb/refs/heads/main/public/suneung-event.png"
              alt="수능 이벤트"
              className="w-full rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
              onClick={handleCloseLanding}
              onError={(e) => {
                console.error('Image load error:', e);
                handleCloseLanding();
              }}
            />
          </div>
        </div>
      )}

      {/* 메인 앱 UI */}
      <div className="fixed inset-0 flex bg-gradient-to-br from-pink-100/80 via-pink-50/70 to-yellow-50/70">
        {/* 왼쪽 카테고리 영역 */}
        <div 
          className="w-16 h-full overflow-y-auto bg-white/90 border-r border-pink-100/50 flex-shrink-0 scrollbar-hide"
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

        {/* 오른쪽 메뉴판 영역 */}
        <div 
          ref={contentRef}
          className="flex-1 h-full overflow-y-auto"
        >
          <div className="sticky top-0 bg-gradient-to-r from-pink-50/90 via-rose-50/80 to-pink-50/90 backdrop-blur-sm border-b border-pink-100/50 z-10">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <h1 className="text-lg font-bold text-pink-700 tracking-wide">
                {tabsConfig[activeTab].title}
              </h1>
              <p className="text-sm text-pink-500/80 tracking-wider">
                {tabsConfig[activeTab].subtitle}
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto p-4">
            {renderActivePage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;