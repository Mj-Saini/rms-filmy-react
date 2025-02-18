import React from "react";
// import RMS_LOGO_img from "../src/assets/Png/RMS_LOGO_img.Png";
import herosection_film_img from "../assets/Png/herosection_film_img.Png";
import herosection_film_2nd_img from "../assets/Png/herosection_film_2nd_img.Png";
import tack_img from "../assets/Png/tack_img.Png";
// import { favorites_cards, watch_cards } from "../component/common/Helper";
import SliderReact, { FeaturedToday, VideosSlider, ViewedRecently } from "../component/SliderReact";
import WatchListCard from "../component/common/WatchListCard";
import robin_hood_img from "../assets/PNG/robin_hood_img.png"
import { Download_icon, SliderArrow } from "../component/common/Icons";
import star_img_fad from "../assets/PNG/star_img_fad.png";
import linear_hover from "../assets/PNG/linear_hover.png";
import dotted_line from "../assets/PNG/dotted_line.png";
import movie_line from "../assets/PNG/movie_line.png";
import rating_first_img from "../assets/PNG/rating_first_img.png"
import rating_second_img from "../assets/PNG/rating_second_img.png"
import rating_third_img from "../assets/PNG/rating_third_img.png"
import rating_fourth_img from "../assets/PNG/rating_fourth_img.png"
import rating_fifth_img from "../assets/PNG/rating_fifth_img.png"
import videos_absolute from "../assets/PNG/videos_absolute.png"
import rating_ellips from "../assets/PNG/rating_ellips.png"
import viewed_absolute_img from "../assets/PNG/viewed_absolute_img.png"
import { favorites_cards, Rating_cards, Viewed_cards } from "../component/common/Helper";
import viewed_ellips from "../assets/PNG/viewed_ellips.png"
import video_ellips from "../assets/PNG/video_ellips.png"




const Library = () => {
  return <>
    {/*  this code used herosection pendding responsive and images different  slider */}
    {/* <div className="max-w-[1140px] px-3 mx-auto ">
      <div className="relative">
        <div className="absolute top-[50px] left-[-15%]">
          <img src={tack_img} alt="img" />
        </div>
      </div>

      <div className="flex flex-wrap flex-row items-center">
        <div className="lg:w-6/12 px-3">
          <p className="font-bold text-[55px] font_poppins leading-[78.11px] text-[white]">
            Customer <span className="clr_linear_yellow">Review </span> sites movies
          </p>

          <p className="font_poppins text-[white]  font-semibold leading-[25.6px] text-[16px] opacity-[90%] mt-[10px]">
            Csras lectus nunc venenatis incidunt id quis malesuada
          </p>
          <p className="font_poppins  text-[16px] font-normal leading-[25.6px] text-[white] mt-[10px] ">
            Amet suscipit risus nulla libero porta purus id rhoncus emper faucibus risus cursus dibero ipsum tempus rhoncus dignissi massa cursus tortor.
          </p>

          <div className="flex w-[343px] justify-between items-center input_seacrh_border rounded-[127px] mt-[40px]">
            <input
              className="ms-[20px] me-[30px] w-full font-normal text-[14px] leading-[19.88px] font_poppins text-white outline-0 placeholder-white"
              type="text"
              placeholder="Search"
            />
            <span>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_214_2856)" />
                <path d="M23 31C24.775 30.9996 26.4988 30.4054 27.897 29.312L32.293 33.708L33.707 32.294L29.311 27.898C30.405 26.4997 30.9996 24.7754 31 23C31 18.589 27.411 15 23 15C18.589 15 15 18.589 15 23C15 27.411 18.589 31 23 31ZM23 17C26.309 17 29 19.691 29 23C29 26.309 26.309 29 23 29C19.691 29 17 26.309 17 23C17 19.691 19.691 17 23 17Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_214_2856" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F2CD75" />
                    <stop offset="1" stop-color="#A97424" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>




        </div>
        <div className="lg:w-3/12 px-2">
          <img className="translate-y-[-10%]" src={herosection_film_img} alt="movie_img" />
        </div>
        <div className="lg:w-3/12 px-2">
          <img className="translate-y-[-3%]" src={herosection_film_2nd_img} alt="movie_img" />
        </div>

      </div>

    </div> */}

    {/******************************Watch vides **********************/}
    <div className="relative">
      <img className="absolute top-[-23%] right-0 hidden xl:block" src={videos_absolute} alt="img" />
      <img className="absolute top-[-80%] left-[0%] -z-30" src={video_ellips} alt="ellips" />
      <div className="max-w-[1140px] px-3 mx-auto   lg:mt-[120px] mt-[60px] sm:mt-[80px]">
        <p className="font-semibold md:text-[40px] sm:text-[34px] text-[28px] leading-[56px] font_poppins text-white text-center">
          Watch  <span className="clr_linear_yellow">videos</span>
        </p>
        <VideosSlider />
      </div>
    </div>

    {/*************************Fan favorites *************************/}
    <div className="relative">
      <img className="absolute bottom-[-10%] left-[22px] hidden xl:block" src={tack_img} alt="img" />
      <div className="max-w-[1140px] px-3 mx-auto  lg:mt-[150px] mt-[60px] sm:mt-[80px]">
        <p className="font-semibold md:text-[40px] sm:text-[34px] text-[28px] leading-[56px] font_poppins text-white text-center">
          Fan  <span className="clr_linear_yellow">favorites</span>
        </p>
        <SliderReact mapData={favorites_cards} />
      </div>
    </div>

    {/*************************Most rated movies *************************/}
    <div className="relative">
      <img className="absolute right-[0px] -z-10 hidden xl:block" src={movie_line} alt="movie_line_img" />
      <div className="max-w-[1140px] px-3 mx-auto  lg:mt-[181px] sm:mt-[80px] mt-[60px]">
        <p className="font-semibold md:text-[40px] sm:text-[34px] text-[25px] leading-[56px] font_poppins text-white text-center">
          Most rated  <span className="clr_linear_yellow">movies</span>
        </p>
        <div className="flex md:flex-row flex-col-reverse flex-wrap md:mt-[50px]  mt-[30px] relative items-center bg-[#ffffff13] backdrop-filter: blur(273px) rounded-[12px]  lg:p-[30px] p-[20px]">
          <img className="absolute top-[-60%]  right-[-8%] -z-40 hidden xl:block" src={linear_hover} alt="linear_img" />
          <div className="h-[14px] w-[282px] absolute top-0 hidden xl:block right-[46%] background_linear rounded-tr-[12px] rounded-bl-[12px]"></div>
          <img className="absolute top-[6%] right-[43%] hidden xl:block" src={dotted_line} alt="dotted_line" />
          <div className="h-[14px] w-[282px] absolute hidden xl:block bottom-0 right-[0%] background_linear rounded-br-[12px] rounded-tl-[12px]"></div>
          <img className="absolute bottom-[6%] right-[5%] hidden xl:block" src={dotted_line} alt="dotted_line" />
          <div className="lg:w-3/12 md:w-5/12 sm:w-7/12 w-10/12 px-3 mt-[20px] md:mt-[0px]">
            <img className="w-full" src={robin_hood_img} alt="movie_img" />
          </div>
          <div className="lg:w-9/12 md:w-7/12  w-12/12 sm:px-6 ">
            <div className="flex item-center justify-between">
              <p className="font_poppins font-semibold sm:text-[24px] text-[16px] leading-[38.4px] text-white">
                Robin Hood
              </p>
              <button className="flex background_linear px-[14px] cursor-pointer whitespace-nowrap items-center py-[10px] border-amber-300 rounded-[4px] ">
                <Download_icon />
                <p className="font_inter ms-[4px] font-semibold sm:text-[16px] text-[12px]  text-[white]">  Download now</p>
              </button>
            </div>
            <div className="mt-[12px] sm:flex gap-7.5  text-center">
              <div className="flex gap-7.5 justify-center">
                <p className="font_poppins font-normal whitespace-nowrap text-[14px] leading-[22px] text-[white] opacity-70">
                  189K Reviews
                </p>
                <p className="font_poppins font-normal whitespace-nowrap text-[14px] leading-[22px] text-[white] opacity-70">
                  29M+ Download
                </p>
              </div>
              <p className="font_poppins font-normal whitespace-nowrap text-[14px] leading-[22px] mt-[10px] sm:mt-0 text-[white] opacity-70">
                4+ Rated out of 5
              </p>
            </div>
            <img className="mt-[20px]" src={star_img_fad} alt="star_img" />
            <p className="font_poppins font-normal sm:text-[16px] text-[13px] lg:leading-[27.2px] text-[white] opacity-80 mt-[20px]">
              Odio elit nulla tellus elementum. Odio proin dignissim venenatis ullamcorper. Sed enim et sed lorem. Quis et potenti tortor arcu egestas ac tortor non. Aliquet sem varius in eget sodales nisl pretium diam. Lorem mauris aliquet massa aliquam ultricies imperdiet phasellus sociis urna. Faucibus quis dui etiam hendrerit amet pellentesque pellentesque.
            </p>
            <div className="flex items-center mt-[30px]">
              <span className="w-[30px] h-[30px] me-[20px] flex items-center cursor-pointer justify-center border  border-amber-200 rounded-full -scale-105 linear_hover">
                <SliderArrow />
              </span>
              <span className='w-[30px] h-[30px] z-20 flex linear_hover  items-center cursor-pointer justify-center border border-amber-200 rounded-full'>
                <SliderArrow />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/************************ Featured today *******************************/}
    <div className="relative lg:mt-[191px] mt-[60px] sm:mt-[80px]">
      <img className="absolute top-[-30%] left-[22px] lg:block hidden" src={tack_img} alt="img" />
      <div className="max-w-[1140px] px-3 mx-auto ">
        <div className="flex lg:flex-row flex-col flex-wrap items-center justify-between  ">
          <div className="lg:w-5/12 px-3 text-center lg:text-start">
            <p className="font_poppins font-semibold lg:leading-[56.8px] lg:text-[40px] sm:text-[34px] text-[25px] text-[white]">
              Featured <span className="clr_linear_yellow"> today</span>
            </p>
            <p className="font_poppins mt-[16px] font-normal etxt-[16px] opacity-[40%] leading-[25px] text-[white]">
              Amet suscipit risus nulla libero porta purus id rhoncus emper faucibus risus cursus dibero ipsum tempus rhoncus dignissi massa cursus tortor.
            </p>
            <div className="flex items-center mt-[40px] justify-end lg:justify-start">
              <span className="w-[30px] h-[30px] me-[20px] flex items-center cursor-pointer  duration-300 active:brightness-125 active:bg-gradient-to-r active:from-[#F2CD75] active:to-[#A97424] justify-center border  border-amber-200 rounded-full -scale-105">
                <SliderArrow />
              </span>
              <span className='w-[30px] h-[30px] z-20 flex   items-center cursor-pointer  duration-300 active:brightness-125 active:bg-gradient-to-r active:from-[#F2CD75] active:to-[#A97424] justify-center border border-amber-200 rounded-full'>
                <SliderArrow />
              </span>
            </div>
          </div>
          <div className="lg:w-7/12 w-12/12 px-3 lg:absolute right-0">
            <FeaturedToday />
          </div>
        </div>
      </div>
    </div>

    {/*************************** Reviews & Rating ********************************/}
    <div className="relative">
      <img className="absolute top-0 right-[54px] hidden lg:block" src={tack_img} alt="img" />
      <img className="absolute right-0 top-[-50%] xl:block hidden -z-40" src={rating_ellips} alt="ellips" />
      <div className="max-w-[1140px] px-3 mx-auto  lg:mt-[162px] sm:mt-[80px] mt-[60px]">
        <p className="font-semibold md:text-[40px]sm:text-[34px] text-[28px] leading-[56px] font_poppins text-white text-center">
          Reviews &  <span className="clr_linear_yellow">Rating</span>
        </p>
        <div className="flex flex-row flex-wrap lg:justify-between items-center lg:mt-[60px] mt-[30px] justify-center">
          <div className="lg:w-4/12 w-11/12 px-3">
            <p className=" font_poppins font-bold leading-[90px] text-[white] text-[64px]">
              4.3
            </p>
            <img className="lg:mt-[6px]" src={star_img_fad} alt="star_img" />
            <p className="font-normal text-[16px] leading-[25px] text-white opacity-[70%] lg:mt-[20px] mt-[10px]" >
              1.4K reviews
            </p>
            <div className="flex gap-4 items-center mt-[20px]">
              <p className="font-normal text-[16px]  leading-[25px] text-[white] opacity-[80%]">
                01
              </p>
              <div><img src={rating_first_img} alt="rating img" /></div>
            </div>
            <div className="flex gap-4 items-center mt-[6px]">
              <p className="font-normal text-[16px]  leading-[25px] text-[white] opacity-[80%]">
                02
              </p>
              <div><img src={rating_second_img} alt="rating img" /></div>
            </div>
            <div className="flex gap-4 items-center mt-[6px]">
              <p className="font-normal text-[16px]  leading-[25px] text-[white] opacity-[80%]">
                03
              </p>
              <div><img src={rating_third_img} alt="rating img" /></div>
            </div>
            <div className="flex gap-4 items-center mt-[6px]">
              <p className="font-normal text-[16px]  leading-[25px] text-[white] opacity-[80%]">
                04
              </p>
              <div><img src={rating_fourth_img} alt="rating img" /></div>
            </div>
            <div className="flex gap-4 items-center mt-[6px]">
              <p className="font-normal text-[16px]  leading-[25px] text-[white] opacity-[80%]">
                05
              </p>
              <div><img src={rating_fifth_img} alt="rating img" /></div>
            </div>
            
            <button className="flex px-[14px] cursor-pointer whitespace-nowrap items-center py-[10px] border-1 border-amber-300 rounded-[4px] font_inter font-semibold sm:text-[16px] text-[12px] text-white lg:mt-[59px] mt-[15px] transition-all duration-500 bg-gradient-to-r from-[#F2CD75] to-[#A97424] hover:bg-white hover:text-transparent hover:bg-clip-text hover:border-amber-300  hover:bg-gradient-to-r hover:from-[#F2CD75] hover:to-[#A97424]">
              See All Reviews
            </button>



            {/* <button className=" transition-all duration-500 bg-gradient-to-r from-[#F2CD75] to-[#A97424] hover:bg-transparent hover:text-transparent hover:bg-clip-text">
              All Viewed
            </button> */}
          </div>
          <div className="xl:w-7/12 lg:w-8/12  lg:px-3 sm:flex w-12/12 ">
            {Rating_cards.map((card, i) => (
              <div key={i} className="sm:px-2.5 mt-[30px] lg:mt-0">
                <div className="border border-amber-50/25   rounded-[12px] pt-[20px] px-[16px] pb-[42px]">
                  <h1 className="font_poppins font-semibold text-[16px] text-[white]">{card.heading}</h1>
                  <div className="flex items-center mt-[10px] justify-between">
                    <p className="font_poppins font-normal text-[14px] leading-[22px] text-white opacity-70">
                      22/05/2023
                    </p>
                    <img src={card.img} alt="movie_img" />
                  </div>
                  <p className="font_poppins font-normal text-[14px] leading-[22px] text-[white] opacity-70 lg:mt-[24px] mt-[15px]">
                    {card.peragraph}
                  </p>
                </div>
              </div >
            ))}
          </div>
        </div>
      </div>
    </div>

    {/************************* Recently Viewed ***********************************/}
    <div className="relative">
      <img className="absolute top-[-10%] left-0 hidden xl:block" src={viewed_absolute_img} alt="img" />
      <img className=" absolute top-[-100%] left-0 hidden xl:block -z-30" src={viewed_ellips} alt="img" />
      <div className="max-w-[1140px] px-3 mx-auto xl:mt-[190px] sm:mt-[80px] mt-[60px]">
        <p className="font-semibold md:text-[40px]  sm:text-[34px] text-[28px] leading-[56px] font_poppins text-white text-center">
          Recently  <span className="clr_linear_yellow">Viewed</span>
        </p>
        {/* <ViewedRecently /> */}
        <SliderReact mapData={Viewed_cards} />
        <button className="flex px-[14px] cursor-pointer whitespace-nowrap mx-auto py-[10px] text-center border-1 border-amber-400 font_inter font-semibold sm:text-[16px] text-[12px] text-white lg:mt-[60px] mt-[30px] transition-all duration-500 bg-gradient-to-r from-[#F2CD75] to-[#A97424] hover:bg-transparent hover:text-transparent hover:bg-clip-text rounded-[4px]">
          All Viewed
        </button>






      </div>
    </div>


  </>


};

export default Library;
