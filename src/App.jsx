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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = React.useRef(null);
  
  // Landing popup state
  const [showLanding, setShowLanding] = useState(() => {
    const hideUntil = localStorage.getItem('hideUntilDate');
    return !hideUntil || new Date(hideUntil) < new Date();
  });

  // Handle landing popup
  useEffect(() => {
    if (!showLanding) {
      localStorage.setItem('showLanding', 'false');
    }
  }, [showLanding]);

  // Handle page transitions
  const handleTabClick = async (key) => {
    setIsTransitioning(true);

    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Fade out
    await new Promise(resolve => setTimeout(resolve, 150));
    
    // Change page
    setActiveTab(key);
    setIsMenuOpen(false);

    // Fade in
    await new Promise(resolve => setTimeout(resolve, 150));
    setIsTransitioning(false);
  };

  const handleCloseLanding = () => setShowLanding(false);

  const handleHideToday = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    localStorage.setItem('hideUntilDate', tomorrow.toISOString());
    setShowLanding(false);
  };

  // Render active page
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

  // Render bottom notice
  const renderBottomNotice = () => {
    const taxIncludedPages = ['membership','haracell', 'supplements', 'histolab'];
    return (
      <div className="text-center font-nanum-square">
        <p className="text-[#7A6B5B] text-sm">
          ※ 부가세 {taxIncludedPages.includes(activeTab.toLowerCase()) ? '포함' : '10% 별도'}입니다 ※
        </p>
      </div>
    );
  };

  // Image props for security
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
      {/* Landing Popup */}
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
              src="/bettermeBeomeoLogo.png"
              alt="Better Me"
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
            minWidth: '220px',
            maxWidth: '250px'
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
          <div className="p-1 space-y-0.5 pb-20 overflow-y-auto h-[calc(100%-3.5rem)]">
            {Object.entries(tabsConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => handleTabClick(key)}
                className={`
                  w-full px-3 py-2.5 transition-all duration-300 ease-in-out
                  flex items-center gap-3 group
                  ${activeTab === key 
                    ? 'bg-[#E5D5C5] text-[#7A6B5B] shadow-sm transform scale-[1.02]' 
                    : 'text-[#9B8777] hover:bg-[#EAE0D5] hover:text-[#7A6B5B] hover:transform hover:scale-[1.02]'
                  }
                `}
              >
                <div className={`
                  transition-colors duration-300
                  ${activeTab === key 
                    ? 'text-[#7A6B5B]' 
                    : 'text-[#9B8777] group-hover:text-[#7A6B5B]'
                  }
                `}>
                  {config.icon}
                </div>
                <span className={`
                  text-sm transition-all duration-300
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
          <div className="sticky top-0 bg-white z-10 border-b border-[#F8F0ED]">
            <div className="flex items-center h-14">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-[#EAE4DE] hover:opacity-80 transition-opacity bg-white ml-4"
              >
                <Menu size={24} />
              </button>
              
              <div className="flex flex-col justify-center ml-4">
                <h1 className="text-[#7A6B5B] font-bold text-sm leading-tight">
                  {tabsConfig[activeTab].title}
                </h1>
                <p className="text-[#9B8777] text[10pt] mt-0.5">
                  {tabsConfig[activeTab].subtitle}
                </p>
              </div>

              <div className="flex-1 flex justify-end items-center pr-4">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://github.com/huggychoi/bettermeWeb/blob/main/public/Group%201@1x.png?raw=true" 
                    alt="Better Me Logo" 
                    className="h-6"
                  />
                  {/* <div className="text-right">
                    <p className="text-sm font-bold leading-tight">BETTER ME CLINIC</p>
                    <p className="text-xs text-[#9B8777]">베러미의원 대구 범어점</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area with Transition */}
          <div className="max-w-4xl mx-auto pt-6">
            <div
              className={`
                content-transition
                ${isTransitioning ? 'content-transition-entering' : 'content-transition-entered'}
              `}
            >
              {renderActivePage()}
            </div>

            {/* Bottom Notices */}
            <div className="mt-8 space-y-4 pb-28">
              <div className="text-center font-nanum-square">
                {renderBottomNotice()}
              </div>
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