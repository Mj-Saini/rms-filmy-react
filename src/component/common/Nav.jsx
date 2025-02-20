import { NavLink } from "react-router-dom";
import RMS_LOGO_img from "../../../src/assets/Png/RMS_LOGO_img.Png";
// import RMS_LOGO_img from "../../../";

const Nav = () => {
  return (
    <div>
      {
        <div className="max-w-[1140px] px-3 mx-auto pt-[10px] pb-[18px] bg-[black] relative z-20">
          <div className="flex justify-between items-center">
            <img className="cursor-pointer" src={RMS_LOGO_img} alt="" />
            <div className="lg:block hidden">
              <div className="flex items-center ">
                <div className="w-[438px] flex justify-between items-center me-[30px]">
                  <NavLink
                    className="text-[white] font-normal text-[14px] font_poppins leading-[19.88px] opacity-[70%]"
                    to="/"
                  >
                    Library
                  </NavLink>
                  <NavLink
                    className="text-[white] font-normal text-[14px] font_poppins leading-[19.88px] opacity-[70%]"
                    to="/My_reviews"
                  >
                    My Reviews
                  </NavLink>
                  <NavLink
                    className="text-[white] font-normal text-[14px] font_poppins leading-[19.88px] opacity-[70%]"
                    to="/History"
                  >
                    History
                  </NavLink>
                  <NavLink
                    className="text-[white] font-normal text-[14px] font_poppins leading-[19.88px] opacity-[70%]"
                    to="/Subscription"
                  >
                    Subscription
                  </NavLink>
                  <NavLink
                    className="text-[white] font-normal text-[14px] font_poppins leading-[19.88px] opacity-[70%]"
                    to="/Trending"
                  >
                    Trending
                  </NavLink>
                </div>
                <button className="me-[30px] font_inter font-semibold text-[16px] leading-[22.72px] text-[#FFFFFF] cursor-pointer border-1  px-[14px] py-[10px]  rounded-[4px] border-amber-400">
                  Sign out
                </button>
                <button className="me-[20px] font_inter font-semibold text-[16px] leading-[22.72px] text-[#FFFFFF] cursor-pointer border-1  px-[14px] py-[10px]  rounded-[4px] border-amber-400 background_linear ">
                  My account
                </button>
                <span className="me-[20px] cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.9">
                      <path
                        d="M19 17V11.8C18.5 11.9 18 12 17.5 12H17V18H7V11C7 8.2 9.2 6 12 6C12.1 4.7 12.7 3.6 13.5 2.7C13.2 2.3 12.6 2 12 2C10.9 2 10 2.9 10 4V4.3C7 5.2 5 7.9 5 11V17L3 19V20H21V19L19 17ZM10 21C10 22.1 10.9 23 12 23C13.1 23 14 22.1 14 21H10ZM21 6.5C21 8.4 19.4 10 17.5 10C15.6 10 14 8.4 14 6.5C14 4.6 15.6 3 17.5 3C19.4 3 21 4.6 21 6.5Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </span>
                <span className="cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.9">
                      <path
                        d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.5 17.38 16.93 18.28C15.5294 19.396 13.7909 20.0026 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.57618 15.4446 3.99967 13.7467 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.5 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.6022 11 11.2206 10.842 10.9393 10.5607C10.658 10.2794 10.5 9.89782 10.5 9.5C10.5 9.10218 10.658 8.72064 10.9393 8.43934C11.2206 8.15804 11.6022 8 12 8C12.3978 8 12.7794 8.15804 13.0607 8.43934C13.342 8.72064 13.5 9.10218 13.5 9.5C13.5 9.89782 13.342 10.2794 13.0607 10.5607C12.7794 10.842 12.3978 11 12 11Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Nav;
