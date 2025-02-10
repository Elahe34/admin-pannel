import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { HiChartBar } from "react-icons/hi2";
import { FaUserCheck } from "react-icons/fa";
import { MyContext } from "../../Context.jsx";
import './Cards.css'
const Cards = () => {
  const {openSlider, setOpenSlider} = useContext(MyContext);

  return (
    <div className={` mt-6 flex justify-around ${openSlider? "w-[80%] transform translate-x-[-25%]" : ''} transition-all duration-300 ease-in-out `}>
      <div className={`card-1 w-[250px] bg-blue-600 text-zinc-50 flex flex-col justify-between rounded-xl group transition-all duration-300 ease-in-out cursor-pointer`}>
        <div className="flex justify-between items-center mx-3">
          <div className="mt-3">
            <h1>۲۳۳</h1>
            <p className="text-sm">خرید جدید</p>
          </div>
          <div>
            <FaShoppingCart className="text-6xl opacity-30 text-blue-950 transition-transform duration-300 group-hover:scale-125" />
          </div>
        </div>
        <div className="flex justify-center text-sm items-center bg-blue-700 h-9 rounded-b-xl">
          <IoIosLink />
          <span>اطلاعات بیشتر</span>
        </div>
      </div>
      <div className={`card-1 w-[250px] bg-[#1E7742] text-white flex flex-col justify-between rounded-xl group transition-all duration-300 ease-in-out cursor-pointer`}>
        <div className="flex justify-between items-center mx-3">
          <div className="mt-3">
            <h1>۴۳٪</h1>
            <p className="text-sm">ترک صفحه</p>
          </div>
          <div>
            <HiChartBar className="text-6xl opacity-30 text-blue-950 transition-transform duration-300 group-hover:scale-125" />
          </div>
        </div>
        <div className="flex justify-center text-sm items-center bg-[#144e2b] h-9 rounded-b-xl">
          <IoIosLink />
          <span>اطلاعات بیشتر</span>
        </div>
      </div>
      <div className={`card-1 w-[250px] bg-[#FBB60E] text-white flex flex-col justify-between rounded-xl group transition-all duration-300 ease-in-out cursor-pointer`}>
        <div className="flex justify-between items-center mx-3">
          <div className="mt-3">
            <h1>۳۶</h1>
            <p className="text-sm">ثبت نام جدید</p>
          </div>
          <div>
            <FaUserCheck className="text-6xl opacity-30 text-blue-950 transition-transform duration-300 group-hover:scale-125" />
          </div>
        </div>
        <div className="flex justify-center text-sm items-center bg-[#d29f20] h-9 rounded-b-xl">
          <IoIosLink />
          <span>اطلاعات بیشتر</span>
        </div>
      </div>
      <div className={` card-1 w-[250px] bg-[#D11E36] text-white flex flex-col justify-between rounded-xl group transition-all duration-300 ease-in-out cursor-pointer`}>
        <div className="flex justify-between items-center mx-3">
          <div className="mt-3">
            <h1>۵۸</h1>
            <p className="text-sm">بازدید کنندگان غیرتکراری</p>
          </div>
          <div>
            <AiFillPieChart className="text-6xl opacity-30 text-blue-950 transition-transform duration-300 group-hover:scale-125" />
          </div>
        </div>
        <div className="flex justify-center text-sm items-center bg-[#ad1c2f] h-9 rounded-b-xl">
          <IoIosLink />
          <span>اطلاعات بیشتر</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
