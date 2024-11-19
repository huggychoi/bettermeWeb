// MenuItem.jsx
const MenuItem = ({ name, description, salePrices, originalPrice }) => {
  const formatPrice = (price) => {
    if (!price) return "0";
    if (typeof price === 'string' && price.includes(',')) {
      return price;
    }
    const numericPrice = String(price).replace(/[^0-9]/g, '');
    return Number(numericPrice).toLocaleString();
  };

  return (
    <div className=" px-6 py-4">
      <div className="flex flex-col">
        {/* Title */}
        <div className="mb-2">
          <h3 className="text-[#4A4039] font-bold text-sm">{name}</h3>
        </div>

        {/* Description - if exists */}
        {description && (
          <div className="mb-2">
            <p className="text-[#665A52] text-xs whitespace-pre-line">
              {description}
            </p>
          </div>
        )}

        {/* Price */}
        <div className=" px-6 text-right">
          {originalPrice && (
            <span className="text-[#998C84] text-sm line-through block mb-0.5">
              {formatPrice(originalPrice)}원
            </span>
          )}
          <span className="text-[#FF6B6B] font-bold text-base">
            {formatPrice(salePrices)}원
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;