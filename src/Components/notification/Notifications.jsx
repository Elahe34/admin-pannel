import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import { IoMdDocument } from "react-icons/io";
const Notifications = () => {
  return (
    <div className="rounded-lg border bg-slate-50">
      <div className="cursor-pointer text-center border-b border-zinc-300">
        <button className="p-2 text-sm">۲۰ اعلان باز نشده</button>
      </div>
      <div className="border-b border-zinc-300 px-3 py-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <BsEnvelope className="ml-2 " />
            <p className="mb-0 ml-4 pb-0 text-sm">۹ پیام جدید</p>
          </div>
          <span className="text-xs text-gray-500">۴ ساعت پیش</span>
        </div>
      </div>
      <div className="border-b border-zinc-300 px-3 py-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <HiMiniUsers className="ml-2 text-lg" />
            <p className="mb-0 ml-4 pb-0 text-sm">۸ درخواست عضویت</p>
          </div>
          <span className="text-xs text-gray-500">۷ ساعت پیش</span>
        </div>
      </div>
      <div className="border-b border-zinc-300 px-3 py-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <IoMdDocument className="ml-2 text-lg" />
            <p className="mb-0 ml-4 pb-0 text-sm">۳ گزارش جدید</p>
          </div>
          <span className="text-xs text-gray-500">۱ ساعت پیش</span>
        </div>
      </div>
      <div className="cursor-pointer text-center">
        <button className="p-2 text-sm">نمایش همه ی پیغام ها</button>
      </div>
    </div>
  );
};

export default Notifications;
