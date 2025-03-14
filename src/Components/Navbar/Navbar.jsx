import React, { useContext, useEffect, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineComment } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Slider from "../slider/Slider";
import { IoMdExit } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";
import CommentBox from "../Comment/CommentBox";
import Notifications from "../notification/Notifications.jsx"
import { MyContext } from "../../Context.jsx";

const Navbar = () => {
  const { openSlider, setOpenSlider } = useContext(MyContext);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav
      className={`grid h-16 ${openSlider ? "grid-cols-10" : "grid-cols-12"} border-b border-gray-300 shadow-md`}
    >
      {/* Slider component that appears when openSlider is true */}
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
        {/* Right side of the Navbar: Hamburger menu and site name */}
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

        {/* Left side of the Navbar: Search, Comments, Notifications, Fullscreen, and Logout */}
        <div className="flex h-10 items-center">
          <div className="mr-6 flex justify-center">
            <ul className="my-auto flex h-6 items-center gap-4">
              {/* Search Box */}
              <li className="">
                <AnimatePresence>
                  {openSearchBox && (
                    <motion.input
                      key="search-box"
                      type="text"
                      placeholder="جستجو کنید و لذت ببرید"
                      className="search-box px-2 py-1 text-sm outline-none"
                      style={{
                        width: "0px",
                        borderBottom: "none",
                        overflow: "hidden",
                        transition: "border-bottom 0.3s ease-in-out",
                      }}
                      initial={{ width: 0, opacity: 0, borderBottom: "none" }}
                      animate={{
                        width: "300px",
                        opacity: 1,
                        borderBottom: "2px solid #D00E1D",
                        transition: { duration: 0.4 },
                      }}
                      exit={{
                        width: 0,
                        opacity: 0,
                        borderBottom: "none",
                        transition: { duration: 0.4 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <IoSearch
                  onClick={() => setOpenSearchBox(!openSearchBox)}
                  className="search-box-icon text-xl text-gray-600"
                />
              </li>

              {/* Comment Icon and Notification Number */}
              <li>
                <div className="relative">
                  <span className="comment-number" onClick={(e) => {e.preventDefault(); setShowComments(!showComments)}}>۳</span>
                  <MdOutlineComment
                    onClick={(e) => {e.preventDefault(); setShowComments(!showComments)}}
                    className="cursor-pointer text-xl text-gray-600"
                  />
                  {showComments && (
                    <div className="absolute left-0 top-10 w-80 rounded-md bg-white shadow-lg">
                      <CommentBox setShowComments={setShowComments} />
                    </div>
                  )}
                </div>
              </li>

              {/* Notifications Icon and Alert Number */}
              <li>
                <div className="relative">
                  <span className="alert-number" onClick={() => setShowNotifications(!showNotifications)}>۲۰</span>
                  <FaRegBell onClick={() => setShowNotifications(!showNotifications)} className="cursor-pointer text-xl text-gray-600" />
                  {showNotifications && (
                    <div className="absolute left-0 top-10 w-72 rounded-md bg-white shadow-lg">
                      <Notifications />
                    </div>
                  )}
                </div>
              </li>

              {/* Fullscreen Icon */}
              <li className="">
                <a href="">
                  <BsArrowsFullscreen className="text-gray-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Logout Icon */}
          <div>
            <IoMdExit className="ml-6 text-2xl text-red-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;