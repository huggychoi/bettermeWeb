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
import HaracellPage from './pages/HaracellPage';
import HistolabPage from './pages/HistolabPage';
import SupplementsPage from './pages/SupplementsPage';
import MembershipPage from './pages/MembershipPage';
import AntiagingPage from './pages/AntiagingPage';
import FirstVisitPage from './pages/FirstVisitPage';
import { X, XCircle, EyeOff } from 'lucide-react';
import { tabsConfig } from './config/tabsConfig';

function App() {
  const [showLanding, setShowLanding] = useState(() => {
    const today = new Date().toDateString();
    const hideUntil = localStorage.getItem('hideUntilDate');
    
    if (!hideUntil || new Date(hideUntil) < new Date()) {
      localStorage.removeItem('hideUntilDate');
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
      case 'haracell':
        return <HaracellPage />;
      case 'histolab':
        return <HistolabPage />;
      case 'supplements':
        return <SupplementsPage />;
      case 'wedding':
        return <WeddingPage />;
      case 'membership':
        return <MembershipPage />;
      default:
        return <FirstVisitPage />; // 기본값 추가
    }
  };

  const renderVatNotice = () => {
    const taxIncludedPages = ['haracell', 'supplements', 'histolab'];
    
    return (
      <div className="mt-8 pb-4 text-center text-gray-500 text-sm border-t border-gray-200 pt-4">
        ※ 표시된 모든 가격은 부가세 10% {taxIncludedPages.includes(activeTab) ? '포함' : '별도'}입니다 ※
      </div>
    );
  };

  useEffect(() => {
    const preventDefaultAction = (e) => {
      e.preventDefault();
      return false;
    };

    const preventContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboardShortcuts = (e) => {
      // Ctrl + S, Ctrl + U, Ctrl + Shift + I, F12 등 방지
      if (
        (e.ctrlKey && e.keyCode === 83) || // Ctrl + S
        (e.ctrlKey && e.keyCode === 85) || // Ctrl + U
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl + Shift + I
        e.keyCode === 123 // F12
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 이미지 드래그 방지
    const preventDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // 텍스트 선택 방지
    const preventSelect = (e) => {
      e.preventDefault();
      return false;
    };

    // 이벤트 리스너 등록
    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart', preventDragStart);
    document.addEventListener('selectstart', preventSelect);
    document.addEventListener('keydown', preventKeyboardShortcuts);
    document.addEventListener('copy', preventDefaultAction);
    document.addEventListener('cut', preventDefaultAction);
    document.addEventListener('paste', preventDefaultAction);

    // CSS 추가
    const style = document.createElement('style');
    style.textContent = `
      img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
      }
      body {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `;
    document.head.appendChild(style);

    // 클린업 함수
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart', preventDragStart);
      document.removeEventListener('selectstart', preventSelect);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
      document.removeEventListener('copy', preventDefaultAction);
      document.removeEventListener('cut', preventDefaultAction);
      document.removeEventListener('paste', preventDefaultAction);
      document.head.removeChild(style);
    };
  }, []);

  // 이미지 요소에 적용할 props
  const imageProps = {
    onContextMenu: (e) => e.preventDefault(),
    draggable: false,
    style: {
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
    }
  };

  return (
    <div className="relative">
      {showLanding && (
        <div className="fixed inset-0 bg-pink-50/30 flex items-center justify-center z-50">
          <div className="max-w-2xl w-full mx-4 relative">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button 
                onClick={handleHideToday}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white shadow-md text-gray-600 hover:text-gray-900 text-xs"
              >
                <EyeOff size={14} />
                <span>오늘 하루 안보기</span>
              </button>
              
              <button 
                onClick={handleCloseLanding}
                className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-gray-600 hover:text-gray-900"
              >
                <X size={16} />
              </button>
            </div>

            <img 
              {...imageProps}
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

      <div className="fixed inset-0 flex bg-gradient-to-br from-pink-50/90 via-yellow-50/80 to-rose-50/70 font-pretendard">
        {/* 왼쪽 카테고리 영역 - 유동적 너비 */}
        <div 
          className="min-w-[5rem] w-auto h-full overflow-y-auto bg-white/80 border-r border-pink-100/30 flex-shrink-0 scrollbar-hide backdrop-blur-sm"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          <div className="sticky top-0 bg-white/70 backdrop-blur-sm z-10 p-1.5 border-b border-pink-100/30">
            <p className="text-[10px] text-center text-pink-400 tracking-wider font-medium">MENU</p>
          </div>
          <div className="p-1.5">
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
          className="flex-1 h-full overflow-y-auto bg-gradient-to-br from-white/60 via-pink-50/30 to-yellow-50/30 backdrop-blur-sm"
        >
          <div className="sticky top-0 bg-white/70 backdrop-blur-sm border-b border-pink-100/30 z-10">
            <div className="max-w-4xl mx-auto px-4 py-2.5">
              <h1 className="text-sm font-bold text-pink-700 tracking-wide">
                {tabsConfig[activeTab].title}
              </h1>
              <p className="text-[10px] text-pink-400 tracking-wider">
                {tabsConfig[activeTab].subtitle}
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto p-4 min-h-0">
            {renderActivePage()}
            {renderVatNotice()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;