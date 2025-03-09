import React from "react";
import MovieIcon from "../../../assets/images/Movie.png";
import SideBarButtons from "../../__atoms/SideBarButtons/SideBarButtons";
import Profile from "../../../assets/images/Profile.png";
function SideBar({setAllMovie,setOnlyMovie,setOnlyTv,setFavourites,favourites,allMovie,onlyMovie,onlyTv,setCategoryName}) {
  return (
    <>
      <div className="w-[96px] h-[960px] rounded-[20px] bg-semi-dark-blue p-8 flex flex-col justify-between items-center max-tablet:rounded-[10px] max-tablet:px-5 max-tablet:py-6 max-tablet:flex-row max-tablet:w-full max-tablet:h-auto max-[650px]:rounded-[0px] ">
       
          <div className="">
            <img src={MovieIcon} className="max-mb:w-6 max-mb:h-5"  alt="" />
          </div>
          <SideBarButtons
            setAllMovie={setAllMovie}
            setOnlyMovie={setOnlyMovie}
            setOnlyTv={setOnlyTv}
            setFavourites={setFavourites}
            favourites={favourites}
            allMovie={allMovie}
            onlyMovie={onlyMovie}
            onlyTv={onlyTv}
            setCategoryName={setCategoryName}
          />
        <div className="">
          <img
            src={Profile}
            alt=""
            className="rounded-[20px] border-[2px] border-amber-50 max-tablet:w-8 max-tablet:h-8 max-mb:w-6 max-mb:h-6"
          />
        </div>
      </div>
    </>
  );
}
export default SideBar;
