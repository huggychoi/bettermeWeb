// components/Footer.jsx
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex h-14 text-[10px] font-medium z-50 [&_a]:no-underline bg-[#EAE4DE]">
      {/* 전화상담 */}
      <a 
        href="tel:16443524"
        className="flex-1 text-[#3C1E1E] flex items-center justify-center gap-1.5 
                 active:bg-[#E5D5C5] transition-colors"
      >
        <Phone size={14} className="stroke-[#3C1E1E]" />
        <span>전화상담</span>
      </a>

      {/* 구분선 */}
      <div className="w-[1px] bg-[#3C1E1E]/20"></div>

      {/* 카카오상담 */}
      <a 
        href="https://pf.kakao.com/_UUxdVG/chat"
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 text-[#3C1E1E] flex items-center justify-center gap-1.5 
                 active:bg-[#E5D5C5] transition-colors"
      >
        <MessageCircle size={14} className="stroke-[#3C1E1E]" />
        <span>카카오상담</span>
      </a>

      {/* 구분선 */}
      <div className="w-[1px] bg-[#3C1E1E]/20"></div>

      {/* 바로예약 */}
      <a 
        href="https://beomeo.bettermeclinic.co.kr/event-introduction?eventIntroductionDurationId=4&eventIntroductionCategoryId=222"
        className="flex-1 text-[#3C1E1E] flex items-center justify-center gap-1.5 
                 active:bg-[#E5D5C5] transition-colors"
      >
        <Calendar size={14} className="stroke-[#3C1E1E]" />
        <span>이벤트예약</span>
      </a>
    </div>
  );
};

export default Footer;