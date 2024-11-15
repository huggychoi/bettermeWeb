// 샘플 1: 카드 스타일
const CardStyleSection = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-lg font-bold text-pink-700">스킨부스터</h2>
          <p className="text-sm text-pink-500/80">Skin Booster</p>
        </div>
        
        {/* 카드 아이템 */}
        <div className="space-y-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 hover:bg-white/70 transition-colors">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">물광주사 2.5cc</h3>
                <p className="text-sm text-gray-600 mt-1">피부 진정, 진주름, 물광 어드븐 개선, 노화 예방</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-gray-400 line-through">₩157,000</p>
                <p className="text-lg font-bold text-pink-500">₩79,000</p>
              </div>
            </div>
          </div>
  
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 hover:bg-white/70 transition-colors">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">톡톡광채 톡신</h3>
                <p className="text-sm text-gray-600 mt-1">강한 보습력으로 촉촉하게!</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-gray-400 line-through">₩297,000</p>
                <p className="text-lg font-bold text-pink-500">₩149,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // 샘플 2: 섹션 구분이 명확한 스타일
  const SectionStyle = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white/50 rounded-2xl overflow-hidden">
          <div className="bg-pink-50/80 px-6 py-4 border-b border-pink-100/50">
            <h2 className="text-lg font-bold text-pink-700">스킨부스터</h2>
            <p className="text-sm text-pink-600/70">Skin Booster</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start py-3 border-b border-pink-100/30">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">물광주사 2.5cc</h3>
                <p className="text-sm text-gray-600 mt-1">피부 진정, 진주름, 물광 어드븐 개선, 노화 예방</p>
              </div>
              <div className="text-right ml-4">
                <p className="text-sm text-gray-400 line-through">₩157,000</p>
                <p className="text-lg font-bold text-pink-500">₩79,000</p>
              </div>
            </div>
  
            <div className="flex justify-between items-start py-3">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">톡톡광채 톡신</h3>
                <p className="text-sm text-gray-600 mt-1">강한 보습력으로 촉촉하게!</p>
              </div>
              <div className="text-right ml-4">
                <p className="text-sm text-gray-400 line-through">₩297,000</p>
                <p className="text-lg font-bold text-pink-500">₩149,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // 샘플 3: 미니멀 그리드 스타일
  const MinimalGridStyle = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-pink-700">스킨부스터</h2>
          <p className="text-sm text-pink-600/70 mt-1">Skin Booster</p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 hover:bg-white/50 transition-colors">
            <h3 className="font-medium text-gray-900">물광주사 2.5cc</h3>
            <p className="text-sm text-gray-600 mt-1 min-h-[40px]">
              피부 진정, 진주름, 물광 어드븐 개선, 노화 예방
            </p>
            <div className="mt-3 text-right">
              <p className="text-sm text-gray-400 line-through">₩157,000</p>
              <p className="text-lg font-bold text-pink-500">₩79,000</p>
            </div>
          </div>
  
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-4 hover:bg-white/50 transition-colors">
            <h3 className="font-medium text-gray-900">톡톡광채 톡신</h3>
            <p className="text-sm text-gray-600 mt-1 min-h-[40px]">
              강한 보습력으로 촉촉하게!
            </p>
            <div className="mt-3 text-right">
              <p className="text-sm text-gray-400 line-through">₩297,000</p>
              <p className="text-lg font-bold text-pink-500">₩149,000</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export { CardStyleSection, SectionStyle, MinimalGridStyle };