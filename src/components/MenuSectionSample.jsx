import React from 'react';

// 샘플 데이터
const sampleData = {
  title: "스킨부스터",
  subtitle: "Skin Booster",
  items: [
    {
      name: "물광주사 2.5cc",
      description: "피부 진정, 진주름, 물광 어드븐 개선, 노화 예방",
      originalPrice: "157,000",
      salePrices: "79,000"
    },
    {
      name: "톡톡광채 톡신",
      description: "강한 보습력으로 촉촉하게!",
      originalPrice: "297,000",
      salePrices: "149,000"
    },
    {
      name: "프리미엄 물광주사",
      description: "기존 물광주사와 차별화, 빠른 엘보싱 흡수",
      originalPrice: "357,000",
      salePrices: "179,000"
    }
  ]
};

// 스타일 1: 카드 스타일
const CardStyleSection = () => {
  const { title, subtitle, items } = sampleData;
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-pink-700">{title}</h2>
        <p className="text-sm text-pink-500/80">{subtitle}</p>
      </div>
      
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-xl p-5 hover:bg-white/70 transition-colors">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-gray-400 line-through">₩{item.originalPrice}</p>
                <p className="text-lg font-bold text-pink-500">₩{item.salePrices}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 스타일 2: 섹션 구분 스타일
const SectionStyle = () => {
  const { title, subtitle, items } = sampleData;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white/50 rounded-2xl overflow-hidden">
        <div className="bg-pink-50/80 px-6 py-4 border-b border-pink-100/50">
          <h2 className="text-lg font-bold text-pink-700">{title}</h2>
          <p className="text-sm text-pink-600/70">{subtitle}</p>
        </div>
        <div className="p-6 space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex justify-between items-start py-3 border-b border-pink-100/30 last:border-0">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
              <div className="text-right ml-4">
                <p className="text-sm text-gray-400 line-through">₩{item.originalPrice}</p>
                <p className="text-lg font-bold text-pink-500">₩{item.salePrices}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 스타일 3: 미니멀 그리드 스타일
const MinimalGridStyle = () => {
  const { title, subtitle, items } = sampleData;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-pink-700">{title}</h2>
        <p className="text-sm text-pink-600/70 mt-1">{subtitle}</p>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white/40 backdrop-blur-sm rounded-lg p-4 hover:bg-white/50 transition-colors">
            <h3 className="font-medium text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1 min-h-[40px]">{item.description}</p>
            <div className="mt-3 text-right">
              <p className="text-sm text-gray-400 line-through">₩{item.originalPrice}</p>
              <p className="text-lg font-bold text-pink-500">₩{item.salePrices}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CardStyleSection, SectionStyle, MinimalGridStyle };