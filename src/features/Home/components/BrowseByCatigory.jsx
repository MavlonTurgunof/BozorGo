import React, { useRef } from "react";
import left from "../../../assets/icons/Vector (3).svg";
import right from "../../../assets/icons/Vector (4).svg";
import Phone from "../../../assets/icons/Category-CellPhone.svg";
import Camera from "../../../assets/icons/Category-Camera.svg";
import Computer from "../../../assets/icons/Category-Computer.svg";
import GamePad from "../../../assets/icons/Category-GamePad.svg";
import HeadPhone from "../../../assets/icons/Category-HeadPhone.svg";
import SmartWatch from "../../../assets/icons/Category-SmartWatch.svg";

function BrowseByCatigory() {
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

  const CategoriesList = [
    { icon: Phone, name: "Phones" },
    { icon: Computer, name: "Computers" },
    { icon: SmartWatch, name: "SmartWatch" },
    { icon: Camera, name: "Camera" },
    { icon: HeadPhone, name: "HeadPhones" },
    { icon: GamePad, name: "Gaming" },
    { icon: Camera, name: "Camera" },
    { icon: HeadPhone, name: "HeadPhones" },
    { icon: GamePad, name: "Gaming" },
  ];

  return (
    <div>
      <div className="flex flex-row items-center gap-4 mt-35">
        <div className="bg-[#DB4444] h-10 w-5 rounded-sm " />
        <h1 className="text-[#DB4444] text-[16px] font-semibold">Catigories</h1>
      </div>

      <div className="flex flex-row items-center justify-between mb-15 mt-4">
        <h1 className="text-[36px] font-semibold">Browse By Category</h1>
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
        className="flex flex-row gap-[30px] overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {CategoriesList.map((catg) => (
          <div className="shrink-0 flex flex-col items-center border border-[#b3b3b3] w-[170px] pt-[25px] pb-[24px]">
            <img src={catg.icon} alt="" className="mb-4 w-[56px] h-[56px]" />
            <h1>{catg.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseByCatigory;
