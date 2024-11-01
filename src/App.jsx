import React, { useState } from 'react';
import TabButton from './components/TabButton';
import BotoxPage from './pages/BotoxPage';
import RejuranPage from './pages/RejuranPage';
import { tabsConfig } from './config/tabsConfig';

function App() {
  const [activeTab, setActiveTab] = React.useState('botox');

  const renderActivePage = () => {
    switch(activeTab) {
      case 'botox':
        return <BotoxPage />;
      case 'rejuran':
        return <RejuranPage />;
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