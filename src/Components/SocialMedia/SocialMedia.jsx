import React from "react";

const SocialMedia = ({ openSlider }) => {
  const progress1 = 40;
  const progress2 = 60;
  const progress3 = 25;

  return (
    <div className="flex items-center justify-around">
      <div className="my-5 flex text-[#258ECF]">
        <div className="flex items-center p-3">
          <div className="flex flex-col items-center justify-center">
            <span className={`${openSlider ? "text-[25px]" : "text-[30px]"}`}>
              1354
            </span>
            <span>Likes</span>
          </div>
          <div className="mr-3 flex flex-col items-center justify-center">
            <span className={`${openSlider ? "text-[25px]" : "text-[30px]"}`}>
              2349
            </span>
            <span>followers</span>
          </div>
        </div>
        <div
          className="mr-4 flex h-40 w-40 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#258ECF ${progress3}% , #ddeef9 ${progress3}% 100%)`, // پیشرفت در داخل دایره
          }}
        >
          <div className="border-1 flex h-36 w-36 items-center justify-center rounded-full border-[#258ECF] bg-[#ddeef9]">
            <span className="text-[25px] text-[#258ECF]">Telegram</span>
          </div>
        </div>
      </div>
      <div className="my-5 flex text-[#CD1C90]">
        <div className="flex items-center p-3">
          <div className="flex flex-col items-center justify-center">
            <span className={`${openSlider ? "text-[25px]" : "text-[30px]"}`}>
              4367
            </span>
            <span>Likes</span>
          </div>
          <div className="mr-3 flex flex-col items-center justify-center">
            <span className={`${openSlider ? "text-[25px]" : "text-[30px]"}`}>
              3679
            </span>
            <span>followers</span>
          </div>
        </div>
        <div
          className="mr-4 flex h-40 w-40 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#CD1C90 ${progress2}% , #f9e4f2 ${progress2}% 100%)`, // پیشرفت در داخل دایره
          }}
        >
          <div className="border-1 flex h-36 w-36 items-center justify-center rounded-full border-[#CD1C90] bg-[#f9e4f2]">
            <span className="text-[25px] text-[#CD1C90]">Instagram</span>
          </div>
        </div>
      </div>

      <div className="my-5 flex text-[#2C4188]">
        <div className="flex items-center p-3">
          <div className="flex flex-col items-center justify-center">
            <span className={`${openSlider ? "text-[25px]" : "text-[30px]"}`}>
              3256
            </span>
            <span>Likes</span>
          </div>
          <div className="mr-3 flex flex-col items-center justify-center">
            <span className={`${openSlider ? "text-[25px]" : "text-[30px]"}`}>
              1340
            </span>
            <span>followers</span>
          </div>
        </div>
        <div
          className="mr-4 flex h-40 w-40 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(#2C4188 ${progress1}% , #e6ebfc ${progress1}% 100%)`, // پیشرفت در داخل دایره
          }}
        >
          <div className="border-1 flex h-36 w-36 items-center justify-center rounded-full border-[#2C4188] bg-[#e6ebfc]">
            <span className="text-[25px] text-[#2C4188]">facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
