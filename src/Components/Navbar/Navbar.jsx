import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Slider from "../slider/Slider";

const Navbar = () => {
  return (
    <nav className="grid h-16 grid-cols-12 border-b border-gray-300 shadow-md">
      {/* import slider component */}
      <div className="col-span-2">
        <Slider />
      </div>
      <div className="col-span-10 flex h-16 items-center justify-between">
        {/* left nav */}
        <div className="flex">
        <div className="mr-3 flex items-center">
            <a href="">
              <RxHamburgerMenu className="text-lg text-gray-400" />
            </a>
          </div>
          <div className="">
            <span className="fs-3 mx-2">EliTech</span>
          </div>
      
        </div>
        {/* right nav */}
        <div className="flex h-10 items-center">
        <div className="mr-6 flex justify-center">
            <ul className="my-auto flex h-6 items-center gap-3">
              <li className="">
                <a href="">
                  <BsArrowsFullscreen className="text-gray-600" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaRegBell className="text-lg text-gray-600" />
                </a>
              </li>
              <li>
                <a href="">
                  <MdOutlineComment className="text-lg text-gray-600" />
                </a>
              </li>
              <li>
                <a href="">
                  <IoSearch className="text-lg text-gray-600" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center pl-6">
          <img
              className="mx-3 h-8 w-8 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              src="./images/avatar2.png"
              alt=""
            />
            <span className="text-lg">الهه سلطانی</span>
         
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
