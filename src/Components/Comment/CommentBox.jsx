import React from "react";
import { IoMdTimer } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const CommentBox = () => {
  return (
    <div className="border rounded-lg bg-slate-50 z-50 absolute cursor-pointer">
      {/* Comment 1 */}
      <div className="py-2 px-3 flex justify-between border-b border-zinc-300">
        <img src="./images/comment1.jpg" className="w-14 h-14 rounded-full" alt="" />
        <div>
          <h6>مهدی حاجیلو</h6>
          <p className="pb-0 mb-0 text-sm">اطلاعات کاربری من و گرفتید؟</p>
          <div className="flex items-center mt-1">
            <IoMdTimer className="text-gray-500" />
            <span className="text-xs text-gray-500">۴ ساعت پیش</span>
          </div>
        </div>
        <FaStar className="text-red-600" />
      </div>

      {/* Comment 2 */}
      <div className="py-2 px-3 flex justify-between border-b border-zinc-300">
        <img src="./images/comment2.jpg" className="w-14 h-14 rounded-full" alt="" />
        <div>
          <h6>مهدی حاجیلو</h6>
          <p className="pb-0 mb-0 text-sm">اطلاعات کاربری من و گرفتید؟</p>
          <div className="flex items-center mt-1">
            <IoMdTimer className="text-gray-500" />
            <span className="text-xs text-gray-500">۴ ساعت پیش</span>
          </div>
        </div>
        <FaStar className="text-slate-600" />
      </div>

      {/* Comment 3 */}
      <div className="py-2 px-3 flex justify-between border-b border-zinc-300">
        <img src="./images/comment3.jpg" className="w-14 h-14 rounded-full" alt="" />
        <div>
          <h6>مهدی حاجیلو</h6>
          <p className="pb-0 mb-0 text-sm">اطلاعات کاربری من و گرفتید؟</p>
          <div className="flex items-center mt-1">
            <IoMdTimer className="text-gray-500" />
            <span className="text-xs text-gray-500">۴ ساعت پیش</span>
          </div>
        </div>
        <FaStar className="text-amber-500" />
      </div>

      {/* Show all button */}
      <div className="text-center cursor-pointer">
        <button className="text-sm p-2">نمایش همه ی پیغام ها</button>
      </div>
    </div>
  );
};

export default CommentBox;