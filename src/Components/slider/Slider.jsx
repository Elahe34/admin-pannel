import React from "react";
import {
  RiProfileLine,
  RiProductHuntLine,
  RiSettings5Line,
} from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { BiMessageAltDetail } from "react-icons/bi";
import { FaChartLine, FaUsersCog } from "react-icons/fa";
import { GiBuyCard } from "react-icons/gi";
import { TbReportAnalytics } from "react-icons/tb";

const Slider = () => {
  return (
    <div className="flex flex-col bg-slate-800 text-white">
      {/* Admin Panel Header */}
      <span className="flex justify-center border-b border-neutral-400 py-[18px] text-[18px] shadow-md shadow-slate-400">
        پنل ادمین
      </span>

      {/* User Info Section */}
      <div className="flex pr-4 items-center py-9 mb-3 border-b border-neutral-400 shadow-md shadow-slate-400">
        <img
          className="mx-3 h-12 w-12 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
          src="./images/avatar2.png"
          alt=""
        />
        <span className="text-lg">الهه سلطانی</span>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col items-center pt-3 text-[18px]">
        <ul className="flex w-full flex-col items-center pl-0 text-gray-200">
          
          {/* Dashboard Item */}
          <li className="flex h-20 w-48 items-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <RxDashboard className="ml-3 mr-6 text-gray-200" />
            <a
              href=""
              className="text-decoration-none text-gray-200 hover:text-gray-50"
            >
              داشبورد
            </a>
          </li>
          
          {/* Profile Item */}
          <li className="flex h-20 w-48 items-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <RiProfileLine className="ml-3 mr-6 text-gray-200" />
            <a
              href=""
              className="text-decoration-none text-gray-200 hover:text-gray-50"
            >
              پروفایل
            </a>
          </li>

          {/* Messages Item */}
          <li className="flex h-20 w-48 items-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <BiMessageAltDetail className="ml-3 mr-6 text-gray-200" />
            <a
              href=""
              className="text-decoration-none text-gray-200 hover:text-gray-50"
            >
              پیام ها
            </a>
          </li>

          {/* Charts Item */}
          <li className="flex h-20 w-48 items-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <FaChartLine className="ml-3 mr-6 text-gray-200" />
            <a
              href=""
              className="text-decoration-none text-gray-200 hover:text-gray-50"
            >
              نمودارها
            </a>
          </li>

          {/* Orders Section with Sub-menu */}
          <li className="flex h-20 w-48 flex-col items-center justify-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <div className="flex w-48 items-center rounded-sm">
              <GiBuyCard className="ml-3 mr-6 text-gray-200" />
              <a
                href=""
                className="text-decoration-none text-gray-200 hover:text-gray-50"
              >
                سفارشات
              </a>
            </div>
            {/* Orders sub-menu */}
            <ul className="hidden">
              <li>مشاهده سفارشات</li>
              <li>وضعیت ارسال</li>
              <li>گزارش فروش</li>
            </ul>
          </li>

          {/* Products Section with Sub-menu */}
          <li className="flex h-20 w-48 flex-col items-center justify-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <div className="flex w-48 items-center rounded-sm">
              <RiProductHuntLine className="ml-3 mr-6 text-gray-200" />
              <a
                href=""
                className="text-decoration-none text-gray-200 hover:text-gray-50"
              >
                محصولات
              </a>
            </div>
            {/* Products sub-menu */}
            <ul className="hidden">
              <li>افزودن محصول</li>
              <li>ویرایش محصول</li>
              <li>حذف محصول</li>
              <li>دسته بندی ها</li>
            </ul>
          </li>

          {/* Users Section with Sub-menu */}
          <li className="flex h-20 w-48 flex-col items-center justify-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <div className="flex w-48 items-center rounded-sm">
              <FaUsersCog className="ml-3 mr-6 text-gray-200" />
              <a
                href=""
                className="text-decoration-none text-gray-200 hover:text-gray-50"
              >
                کاربران
              </a>
            </div>
            {/* Users sub-menu */}
            <ul className="hidden">
              <li>لیست کاربران</li>
              <li>نقش ها</li>
            </ul>
          </li>

          {/* Reports Section with Sub-menu */}
          <li className="flex h-20 w-48 flex-col items-center justify-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <div className="flex w-48 items-center rounded-sm">
              <TbReportAnalytics className="ml-3 mr-6 text-gray-200" />
              <a
                href=""
                className="text-decoration-none text-gray-200 hover:text-gray-50"
              >
                گزارشات و آمار
              </a>
            </div>
            {/* Reports sub-menu */}
            <ul className="hidden">
              <li>گزارش فروش</li>
              <li>رفتار کاربران</li>
              <li>تحلیل پرداخت ها</li>
            </ul>
          </li>

          {/* Settings Section with Sub-menu */}
          <li className="flex h-20 w-48 flex-col items-center justify-center rounded-sm duration-300 ease-in hover:bg-slate-500">
            <div className="flex w-48 items-center rounded-sm">
              <RiSettings5Line className="ml-3 mr-6 text-gray-200" />
              <a
                href=""
                className="text-decoration-none text-gray-200 hover:text-gray-50"
              >
                تتظیمات
              </a>
            </div>
            {/* Settings sub-menu */}
            <ul className="hidden">
              <li>تنظیمات سایت</li>
              <li>تنظیمات پرداخت</li>
              <li>تنظیمات حمل ونقل</li>
              <li>دسته بندی ها</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;