import React from "react";
import RMS_Cinema_profile from "../assets/PNG/RMS_Cinema_profile/My account/Ellipse 9.png"
import { Book_icon, Home_icon } from "../component/common/Icons";

const Subscription = () => {
  return <div>
    <div className="max-w-[1140px] px-3 mx-auto">
      <div className="w-[100%]">
        <div className="w-[15%]">
          <div>
            <img src={RMS_Cinema_profile} alt="profile img" />
            <p className="font_poppins font-normal text-[18px] leading-[25px] text-white mt-[10px]">
              Floyd Miles
            </p>

            <div className="flex justify-between border border-b-amber-50/60 pb-[10px] mt-[20px]">
              <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                Subscriptions
              </p>
              <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                100k
              </p>
            </div>
            <div className="flex justify-between border border-b-amber-50/60 pb-[10px] mt-[10px]">
              <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                Uploads
              </p>
              <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                2.5k
              </p>
            </div>
            <div className="flex justify-between border border-b-amber-50/60 pb-[10px] mt-[10px]">
              <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                Likes
              </p>
              <p className="font_poppins font-normal text-[14px] leading-[19px] text-white opacity-[80%]">
                1.2M
              </p>
            </div>

            <div className="flex  items-center">
              <Home_icon />
              <p className="font-normal ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70">
                Home
              </p>
            </div>

            <div className="flex  items-center">
              <Book_icon />
              <p className="font-normal ms-[8px] font_poppins text-[16px] leading-[22px] text-[white] opacity-70">
                Home
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Subscription;
