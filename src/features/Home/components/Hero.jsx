import Phone from "../../../assets/images/Hero.svg";
import apple from "../../../assets/icons/apple.svg";
import arrow from "../../../assets/icons/arrow-right.svg";

function Hero() {
  return (
    <div className="flex flex-row ">
      <div className="border-r-2 border-[#b3b3b3]">
        <ul className="flex flex-col gap-4 whitespace-nowrap mt-10 mr-4 ">
          <li>Woman's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="bg-black text-[#fafafa] w-full h-auto flex flex-row mt-10 ml-10 justify-between">
        <div className="pt-14.5 pl-16 pb-11.75 flex flex-col gap-5">
          <div className="flex flex-row text-white items-center gap-[14.5px]">
            <img src={apple} alt="" width={40} height={49} />
            <h1 className="text-[16px]">iphone 14 Series</h1>
          </div>
          <h2 className="text-[48px] font-semibold">
            Up to 10% <br /> off Voucher
          </h2>
          <button className="flex flex-row items-center gap-2">
            <h1 className="border-b border-[#b3b3b3] text-[16px] font-medium pb-1">
              Shop Now
            </h1>
            <img src={arrow} alt="" width={24} height={24} />
          </button>
        </div>
        <img src={Phone} alt="" width={496} />
      </div>
    </div>
  );
}

export default Hero;
