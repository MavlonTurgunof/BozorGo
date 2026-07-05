function ProductCard({ image, name, price, raiting, discount, oldPrice }) {
  return (
    <div className="h-87.5 w-67.5 shrink-0">
      <div className="h-62.5 w-full bg-[#F5F5F5] rounded-sm flex items-center justify-center relative">
        <div className="absolute text-white text-[12px] bg-[#DB4444] px-3 py-1 rounded-sm top-3 left-3">
          {discount}
        </div>
        <img src={image} alt="product pic" />
      </div>
      <h1 className="text-[16px] font-medium pt-4">{name}</h1>
      <div className="flex flex-row gap-3">
        <h2 className="text-[#DB4444] text-4 font-medium">${price}</h2>
        <h2 className="text-[#808080] text-4 font-medium line-through">
          ${oldPrice}
        </h2>
      </div>
    </div>
  );
}

export default ProductCard;
