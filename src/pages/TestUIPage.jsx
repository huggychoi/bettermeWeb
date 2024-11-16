import React from 'react';
import { CardStyleSection, SectionStyle, MinimalGridStyle } from '../components/MenuSectionSample';

const TestUIPage = () => {
  return (
    <div className="space-y-12 py-4">
      <div className="bg-white/50 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">스타일 1: 카드 스타일</h2>
        <p className="text-sm text-gray-600 mb-4">깔끔하고 현대적인 카드 레이아웃</p>
        <CardStyleSection />
      </div>

      <div className="bg-white/50 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">스타일 2: 섹션 스타일</h2>
        <p className="text-sm text-gray-600 mb-4">명확한 구분과 체계적인 정보 구조</p>
        <SectionStyle />
      </div>

      <div className="bg-white/50 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold mb-2">스타일 3: 미니멀 그리드</h2>
        <p className="text-sm text-gray-600 mb-4">현대적이고 균형 잡힌 그리드 레이아웃</p>
        <MinimalGridStyle />
      </div>
    </div>
  );
};

export default TestUIPage;