import { useEffect, useRef, useState } from "react";
import ProductCard from "../../../components/common/ProductCard";
import keyboard from "../../../assets/images/products/keyboard.svg";
import monitor from "../../../assets/images/products/monitor.svg";
import joystick from "../../../assets/images/products/joystick.svg";
import chair from "../../../assets/images/products/chair.svg";
import left from "../../../assets/icons/Vector (3).svg";
import right from "../../../assets/icons/Vector (4).svg";
import Button from "../../../components/common/Button";

function FlashSales() {
  const [time, setTime] = useState(14400);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      category: "Gaming",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 5,
      reviews: 88,
      image: joystick,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      category: "Gaming",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: keyboard,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      category: "Gaming",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: monitor,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      category: "Furniture",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 4.5,
      reviews: 99,
      image: chair,
    },
    {
      id: 5,
      name: "S-Series Comfort Chair",
      category: "Furniture",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 4.5,
      reviews: 99,
      image: chair,
    },
    {
      id: 6,
      name: "S-Series Comfort Chair",
      category: "Furniture",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 4.5,
      reviews: 99,
      image: chair,
    },
  ];

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  });
  const days = Math.floor(time / (34 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-4 mt-35">
        <div className="bg-[#DB4444] h-10 w-5 rounded-sm " />
        <h1 className="text-[#DB4444] text-[16px] font-semibold">Today's</h1>
      </div>
      <div className="flex items-end justify-between mt-6">
        <div className="flex flex-row gap-20 items-end">
          <h1 className="text-[36px] font-semibold">Flash Sales</h1>

          <div className="flex flex-row gap-4">
            <div>
              <h1 className="text-[12px] font-medium">Days</h1>
              <h2 className="text-[32px] font-bold">{formatTime(days)}</h2>
            </div>

            <p className="text-2xl font-semibold pb-1 mt-6 text-[#e07575]">:</p>

            <div>
              <h1 className="text-[12px] font-medium">Hours</h1>
              <h2 className="text-[32px] font-bold">{formatTime(hours)}</h2>
            </div>

            <p className="text-2xl font-semibold pb-1 mt-6 text-[#e07575]">:</p>

            <div>
              <h1 className="text-[12px] font-medium">Minutes</h1>
              <h2 className="text-[32px] font-bold">{formatTime(minutes)}</h2>
            </div>

            <p className="text-2xl font-semibold pb-1 mt-6 text-[#e07575]">:</p>

            <div>
              <h1 className="text-[12px] font-medium">Seconds</h1>
              <h2 className="text-[32px] font-bold">{formatTime(seconds)}</h2>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
          >
            <img src={left} alt="" />
          </button>

          <button
            onClick={scrollRight}
            className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
          >
            <img src={right} alt="" />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex flex-row gap-6 mt-10 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            index={prod.id}
            image={prod.image}
            name={prod.name}
            price={prod.price}
            rating={prod.rating}
            discount={prod.discount}
            oldPrice={prod.oldPrice}
          />
        ))}
      </div>
      <div className="flex flex-row  justify-center">
        <Button className="bg-[#DB4444] text-white font-medium text-[16px] rounded-sm flex">
          View All Products
        </Button>
      </div>
      <div className="border-[#b3b3b3] border-b mt-15 mb-20" />
    </div>
  );
}

export default FlashSales;
