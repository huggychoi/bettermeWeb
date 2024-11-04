function App() {
  // ... 기존 코드 유지 ...

  return (
    <div className="fixed inset-0 flex bg-gray-50">
      {/* 왼쪽 카테고리 영역 - 너비 축소 */}
      <div 
        className="w-20 h-full overflow-y-auto bg-white border-r flex-shrink-0 scrollbar-hide"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <div className="sticky top-0 bg-white z-10 p-2 border-b">
          <h1 className="text-sm font-bold">베터미 법어점</h1>
          <p className="text-xs text-gray-500 mt-0.5">MENU</p>
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
        className="flex-1 h-full overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b z-10">
          <div className="max-w-5xl mx-auto px-6 py-3">
            <h1 className="text-lg font-bold">{tabsConfig[activeTab].title}</h1>
            <p className="text-xs text-gray-500 mt-0.5">{tabsConfig[activeTab].subtitle}</p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto p-6">
          {renderActivePage()}
        </div>
      </div>
    </div>
  );
}