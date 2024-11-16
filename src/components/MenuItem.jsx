// MenuItem.jsx
const MenuItem = ({ name, description, salePrices, originalPrice }) => {
  const formatPrice = (price) => {
    if (!price) return "0";
    const numericPrice = price.toString().replace(/,/g, '');
    return Number(numericPrice).toLocaleString();
  };

  return (
    <div className="bg-white rounded-lg border border-[#EAE4DE] p-3 hover:border-[#E5D5C5] transition-all duration-200 hover:shadow-sm">
      {/* 이름 */}
      <h3 className="text-[#4A4039] font-bold text-[14px] mb-0.5">{name}</h3>
      
      {/* 설명 */}
      {description && (
        <p className="text-[#7A6B5B] text-[12px] leading-relaxed whitespace-pre-line mb-1">
          {description}
        </p>
      )}
      
      {/* 가격 영역 */}
      <div className="text-right">
        {originalPrice && (
          <span className="text-[#9B8777] text-xs line-through block mb-0.5">
            {formatPrice(originalPrice)}원
          </span>
        )}
        <span className="text-[#FF6B6B] font-bold text-base">
          {formatPrice(salePrices)}원
        </span>
      </div>
    </div>
  );
};

export default MenuItem;