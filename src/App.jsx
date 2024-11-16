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
import { Menu, X, XCircle, EyeOff } from 'lucide-react';
import { tabsConfig } from './config/tabsConfig';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('firstVisit');
  const contentRef = React.useRef(null);
  
  const [showLanding, setShowLanding] = useState(() => {
    const hideUntil = localStorage.getItem('hideUntilDate');
    return !hideUntil || new Date(hideUntil) < new Date();
  });

  useEffect(() => {
    if (!showLanding) {
      localStorage.setItem('showLanding', 'false');
    }
  }, [showLanding]);

  // 메뉴 관련 핸들러
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleTabClick = (key) => {
    setActiveTab(key);
    setIsMenuOpen(false);
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 랜딩 페이지 핸들러
  const handleCloseLanding = () => setShowLanding(false);

  const handleHideToday = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    localStorage.setItem('hideUntilDate', tomorrow.toISOString());
    setShowLanding(false);
  };

  // 활성 페이지 렌더링
  const renderActivePage = () => {
    switch(activeTab) {
      case 'firstVisit': return <FirstVisitPage />;
      case 'botox': return <BotoxPage />;
      case 'rejuran': return <RejuranPage />;
      case 'lifting': return <LiftingPage />;
      case 'ulthera': return <UltheraPage />;
      case 'whitening': return <WhiteningPage />;
      case 'antiaging': return <AntiagingPage />;
      case 'body': return <BodyPage />;
      case 'virizen': return <VirizenPage />;
      case 'skincare': return <SkincarePage />;
      case 'booster': return <BoosterPage />;
      case 'acne': return <AcnePage />;
      case 'removal': return <RemovalPage />;
      case 'filler': return <FillerPage />;
      case 'haracell': return <HaracellPage />;
      case 'histolab': return <HistolabPage />;
      case 'supplements': return <SupplementsPage />;
      case 'wedding': return <WeddingPage />;
      case 'membership': return <MembershipPage />;
      default: return <FirstVisitPage />;
    }
  };

  // 하단 공지사항 렌더링
  const renderBottomNotice = () => {
    const taxIncludedPages = ['haracell', 'supplements', 'histolab'];
    
    if (activeTab === 'membership') {
      return (
        <div className="text-center font-nanum-square">
          <p className="text-[#9B8777] text-sm leading-relaxed">
            유효기간 1년 - 가족 양도 1회 가능, 초진고객 동반 내원시 본인 결제 금액 5% 적립금 페이백
          </p>
        </div>
      );
    }
    
    return (
      <div className="text-center font-nanum-square">
        <p className="text-[#7A6B5B] text-sm">
          ※ 부가세 10% {taxIncludedPages.includes(activeTab.toLowerCase()) ? '포함' : '별도'}입니다 ※
        </p>
      </div>
    );
  };

  // 보안 기능 설정
  useEffect(() => {
    const preventActions = (e) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboardShortcuts = (e) => {
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

    // 이벤트 리스너 등록
    document.addEventListener('contextmenu', preventActions);
    document.addEventListener('dragstart', preventActions);
    document.addEventListener('selectstart', preventActions);
    document.addEventListener('keydown', preventKeyboardShortcuts);
    document.addEventListener('copy', preventActions);
    document.addEventListener('cut', preventActions);
    document.addEventListener('paste', preventActions);

    // 보안 관련 스타일 추가
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

    return () => {
      document.removeEventListener('contextmenu', preventActions);
      document.removeEventListener('dragstart', preventActions);
      document.removeEventListener('selectstart', preventActions);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
      document.removeEventListener('copy', preventActions);
      document.removeEventListener('cut', preventActions);
      document.removeEventListener('paste', preventActions);
      document.head.removeChild(style);
    };
  }, []);

  // 이미지 props
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
    <div className="relative h-screen">
      {/* Landing Overlay */}
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

      {/* Main Layout */}
      <div className="fixed inset-0 flex">
        {/* Sidebar Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div 
          className={`
            fixed left-0 top-0 h-full bg-[#F2EAE1] border-r border-[#E5D5C5]/40 
            transition-transform duration-300 ease-in-out z-50
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          style={{
            width: '15vw',
            minWidth: '250px',
            maxWidth: '280px'
          }}
        >
          {/* Sidebar Header */}
          <div className="h-14 flex items-center justify-between px-4 border-b border-[#E5D5C5]/40">
            <p className="text-[#7A6B5B] font-bold">MENU</p>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[#E5D5C5] transition-colors"
            >
              <X size={20} className="text-[#7A6B5B]" />
            </button>
          </div>

          {/* Menu Buttons */}
          <div className="p-1.5 space-y-1 pb-20 overflow-y-auto h-[calc(100%-3.5rem)]">
            {Object.entries(tabsConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => handleTabClick(key)}
                className={`
                  w-full px-2 py-2 rounded-lg transition-all duration-300 ease-in-out
                  flex flex-col items-center justify-center gap-1 group
                  ${activeTab === key 
                    ? 'bg-[#E5D5C5] text-[#7A6B5B] shadow-sm transform scale-[1.02]' 
                    : 'text-[#9B8777] hover:bg-[#EAE0D5] hover:text-[#7A6B5B] hover:transform hover:scale-[1.02]'
                  }
                `}
              >
                <div className={`
                  transition-colors duration-300 text-base
                  ${activeTab === key 
                    ? 'text-[#7A6B5B]' 
                    : 'text-[#9B8777] group-hover:text-[#7A6B5B]'
                  }
                `}>
                  {config.icon}
                </div>
                <span className={`
                  text-[9px] tracking-wide transition-all duration-300 whitespace-nowrap
                  ${activeTab === key ? 'font-bold' : 'font-medium'}
                `}>
                  {config.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div 
          ref={contentRef}
          className="flex-1 h-full overflow-y-auto bg-white font-nanum-square"
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#EAE4DE] z-10 border-b border-[#E5D5C5]/30">
            <div className="flex items-center h-14">
              <button
                onClick={toggleMenu}
                className="p-4 hover:bg-[#E5D5C5]/30 transition-colors"
              >
                <Menu size={20} className="text-[#7A6B5B]" />
              </button>
              
              <div className="flex-1 px-4">
                <h1 className="text-base font-bold text-[#7A6B5B] tracking-wide">
                  {tabsConfig[activeTab].title}
                </h1>
                <p className="text-[11px] text-[#9B8777] tracking-wider">
                  {tabsConfig[activeTab].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="max-w-4xl mx-auto p-6 min-h-0 bg-white">
            <div className="bg-white rounded-lg">
              {renderActivePage()}
            </div>

            {/* Bottom Notice with increased bottom padding */}
            <div className="mt-8 pt-6 pb-28 border-t border-[#EAE4DE]">
              {renderBottomNotice()}
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;