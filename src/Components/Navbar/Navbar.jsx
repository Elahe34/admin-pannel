import React, { useEffect, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Slider from "../slider/Slider";
import { IoMdExit } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [openSlider, setOpenSlider] = useState(false);
  return (
    <nav
      className={`grid h-16 ${openSlider ? "grid-cols-10" : "grid-cols-12"} border-b border-gray-300 shadow-md`}
    >
      {/* import slider component */}
      <AnimatePresence>
        {openSlider && (
          <motion.div
            key="slider"
            className="col-span-2"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
            exit={{ x: "100%", opacity: 0, transition: { duration: 0.3 } }}
          >
            <Slider />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={`${openSlider ? "col-span-8" : "col-span-12"} flex h-16 items-center justify-between`}
      >
        {/* right nav */}
        <div className="flex">
          <div className="mr-3 flex items-center">
            <button onClick={() => setOpenSlider(!openSlider)}>
              <RxHamburgerMenu className="text-lg text-gray-400" />
            </button>
          </div>
          <div className="">
            <span className="fs-3 mx-2">EliTech</span>
          </div>
        </div>
        {/* left nav */}
        <div className="flex h-10 items-center">
          <div className="mr-6 flex justify-center">
            <ul className="my-auto flex h-6 items-center gap-4">
              <li>
                <a href="">
                  <IoSearch className="text-xl text-gray-600" />
                </a>
              </li>
              <li>
                <a href="">
                  <MdOutlineComment className="text-xl text-gray-600" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaRegBell className="text-xl text-gray-600" />
                </a>
              </li>
              <li className="">
                <a href="">
                  <BsArrowsFullscreen className="text-gray-600" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <IoMdExit className="ml-6 text-2xl text-red-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
