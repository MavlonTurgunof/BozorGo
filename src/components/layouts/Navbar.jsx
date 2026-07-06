import React from "react";
import logo from "../../assets/logo/logo.png";
import lense from "../../assets/icons/lense.svg";
import Cart from "../../assets/icons/Cart.svg";
import heart from "../../assets/icons/heart.svg";
import Container from "./Container";

function Navbar() {
  return (
    <div className="pt-[47px] pb-[23px] border-[#b3b3b3] border-b">
      <Container>
        <div className="flex flex-row items-center justify-between ">
          <h1 className="font-bold text-2xl">Exclusive</h1>
          <ul className="flex flex-row text-[16px] font-normal gap-10">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          <div className="flex flex-row items-center gap-6">
            <div className="flex items-center justify-between w-60.75 h-9.5 bg-[#f5f5f5] rounded-sm px-5">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full bg-transparent outline-none text-[12px] text-gray-700 placeholder:text-gray-400"
              />

              <button type="submit" className="ml-3">
                <img src={lense} alt="search" width={32} height={32} />
              </button>
            </div>
            <img src={heart} alt="Heart" width={20} height={17.83} />
            <img src={Cart} alt="Cart" width={32} height={32} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
