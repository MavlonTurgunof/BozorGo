import React from "react";
import Button from "../../../components/common/Button";
import Coat from "../../../assets/images/products/Coat.svg";
import Bag from "../../../assets/images/products/Bag.svg";
import Cooler from "../../../assets/images/products/Cooler.svg";
import BookShelf from "../../../assets/images/products/BookShelf.svg";

function BestSelling() {
  const products = [
    {
      id: 1,
      name: "The north coat",
      category: "Clothes",
      price: 260,
      oldPrice: 360,
      discount: "-40%",
      rating: 5,
      reviews: 65,
      image: Coat,
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
  ];

  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <div className="bg-[#DB4444] h-10 w-5 rounded-sm " />
        <h1 className="text-[#DB4444] text-[16px] font-semibold">This month</h1>
      </div>

      <div className="flex flex-row items-center justify-between mb-15 mt-4">
        <h1 className="text-[36px] font-semibold">Best Selling Products</h1>
        <Button className="bg-[#DB4444] text-white">View All</Button>
      </div>

      <div>{}</div>
    </div>
  );
}

export default BestSelling;
