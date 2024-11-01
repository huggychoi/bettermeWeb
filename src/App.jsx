// ... (이전 import 구문들)

// MenuItem 컴포넌트 수정
const MenuItem = ({ name, description, originalPrice, salePrices }) => (
  <div className="border-b border-gray-100 last:border-0 py-2">
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900 text-left">{name}</h3>
        {description && (
          <p className="text-xs text-gray-500 mt-0.5 text-left">{description}</p>
        )}
      </div>
      <div className="text-right min-w-[100px] ml-4">
        {originalPrice && (
          <p className="text-xs text-gray-400 line-through">{originalPrice}원</p>
        )}
        {Array.isArray(salePrices) ? (
          <div className="space-y-0.5">
            {salePrices.map((price, idx) => (
              <p key={idx} className="text-base font-semibold text-rose-500">{price}원</p>
            ))}
          </div>
        ) : (
          <p className="text-base font-semibold text-rose-500">{salePrices}원</p>
        )}
      </div>
    </div>
  </div>
);

// MenuSection 컴포넌트 수정
const MenuSection = ({ title, description, items }) => (
  <div className="mb-3 bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="bg-gray-50 p-2.5 border-b">
      <h2 className="text-base font-semibold text-gray-900 text-left">{title}</h2>
      {description && (
        <p className="text-xs text-gray-500 text-left">{description}</p>
      )}
    </div>
    <div className="p-3">
      {items.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </div>
  </div>
);

// TabButton 컴포넌트 수정
const TabButton = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center w-16 py-3 px-1 transition-colors
      ${isActive 
        ? 'bg-white text-rose-500 border-r-2 border-rose-500' 
        : 'text-gray-500 hover:bg-gray-100'}`}
  >
    {React.cloneElement(icon, { size: 20 })}
    <span className="mt-1 text-[10px] font-medium text-center whitespace-nowrap">
      {label}
    </span>
  </button>
);

// App 컴포넌트의 return 부분 수정
function App() {
  // ... (tabsConfig 등 이전 코드 유지)

  return (
    <div className="flex min-w-[320px] h-screen bg-gray-50">
      {/* 왼쪽 탭 메뉴 - 너비 축소 */}
      <div className="border-r border-gray-200 overflow-y-auto">
        <div className="flex flex-col">
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
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto p-3">
          <h1 className="text-xl font-bold text-left">
            {tabsConfig[activeTab].title}
          </h1>
          <p className="text-sm text-gray-500 mt-0.5 mb-4 text-left">
            {tabsConfig[activeTab].subtitle}
          </p>

          {tabsConfig[activeTab].sections.length > 0 ? (
            tabsConfig[activeTab].sections.map((section, idx) => (
              <MenuSection key={idx} {...section} />
            ))
          ) : (
            <div className="text-center text-sm text-gray-500 py-8">
              준비 중입니다
            </div>
          )}

          <div className="text-left text-xs text-gray-500 mt-3 pb-4">
            부가세 10% 별도
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;