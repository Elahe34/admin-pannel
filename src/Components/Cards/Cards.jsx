import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { HiChartBar } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import { MyContext } from "../../Context.jsx";
import Mappage from "../map/Mappage.jsx";
import SalesChart from "../Charts/SalesChart.jsx";
import SocialMedia from "../SocialMedia/SocialMedia.jsx";

const Cards = () => {
  // Use context to get state of slider visibility
  const { openSlider, setOpenSlider } = useContext(MyContext);

  return (
    <div>
      {/* Main container for cards, adjusts size based on slider state */}
      <div
        className={`mt-6 ${openSlider ? "w-[80%] translate-x-[-25%] transform" : ""} transition-all duration-300 ease-in-out`}
      >
        {/* Flex container for displaying cards */}
        <div className="mt-6 flex justify-around transition-all duration-300 ease-in-out">
          {/* Card 1: Displays new purchases */}
          <div
            className={`card-1 group flex w-[250px] cursor-pointer flex-col justify-between rounded-xl bg-blue-600 text-zinc-50 transition-all duration-300 ease-in-out`}
          >
            <div className="mx-3 flex items-center justify-between">
              <div className="mt-3">
                <h1>۲۳۳</h1>
                <p className="text-sm">خرید جدید</p>
              </div>
              <div>
                <FaShoppingCart className="text-6xl text-blue-950 opacity-30 transition-transform duration-300 group-hover:scale-125" />
              </div>
            </div>
            {/* More details button */}
            <div className="flex h-9 items-center justify-center rounded-b-xl bg-blue-700 text-sm">
              <IoIosLink />
              <span>اطلاعات بیشتر</span>
            </div>
          </div>

          {/* Card 2: Shows page bounce rate */}
          <div
            className={`card-2 group flex w-[250px] cursor-pointer flex-col justify-between rounded-xl bg-[#1E7742] text-white transition-all duration-300 ease-in-out`}
          >
            <div className="mx-3 flex items-center justify-between">
              <div className="mt-3">
                <h1>۴۳٪</h1>
                <p className="text-sm">ترک صفحه</p>
              </div>
              <div>
                <HiChartBar className="text-6xl text-blue-950 opacity-30 transition-transform duration-300 group-hover:scale-125" />
              </div>
            </div>
            <div className="flex h-9 items-center justify-center rounded-b-xl bg-[#144e2b] text-sm">
              <IoIosLink />
              <span>اطلاعات بیشتر</span>
            </div>
          </div>

          {/* Card 3: Shows new registrations */}
          <div
            className={`card-3 group flex w-[250px] cursor-pointer flex-col justify-between rounded-xl bg-[#FBB60E] text-white transition-all duration-300 ease-in-out`}
          >
            <div className="mx-3 flex items-center justify-between">
              <div className="mt-3">
                <h1>۳۶</h1>
                <p className="text-sm">ثبت نام جدید</p>
              </div>
              <div>
                <FaUserCheck className="text-6xl text-blue-950 opacity-30 transition-transform duration-300 group-hover:scale-125" />
              </div>
            </div>
            <div className="flex h-9 items-center justify-center rounded-b-xl bg-[#d29f20] text-sm">
              <IoIosLink />
              <span>اطلاعات بیشتر</span>
            </div>
          </div>

          {/* Card 4: Displays unique visitors */}
          <div
            className={`card-4 group flex w-[250px] cursor-pointer flex-col justify-between rounded-xl bg-[#D11E36] text-white transition-all duration-300 ease-in-out`}
          >
            <div className="mx-3 flex items-center justify-between">
              <div className="mt-3">
                <h1>۵۸</h1>
                <p className="text-sm">بازدید کنندگان غیرتکراری</p>
              </div>
              <div>
                <AiFillPieChart className="text-6xl text-blue-950 opacity-30 transition-transform duration-300 group-hover:scale-125" />
              </div>
            </div>
            <div className="flex h-9 items-center justify-center rounded-b-xl bg-[#ad1c2f] text-sm">
              <IoIosLink />
              <span>اطلاعات بیشتر</span>
            </div>
          </div>
        </div>

        {/* Social media component */}
        <div>
          <SocialMedia openSlider={openSlider} />
        </div>

        {/* Flex container for other components (map and sales chart) */}
        <div className="flex items-center justify-between">
          <Mappage openSlider={openSlider} />
          <SalesChart openSlider={openSlider} />
        </div>
      </div>
    </div>
  );
};

export default Cards;