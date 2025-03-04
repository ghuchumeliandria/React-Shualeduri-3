import React from "react";
import MovieIcon from "../../../assets/images/Movie.png";
import SideBarButtons from "../../__atoms/SideBarButtons/SideBarButtons";
import Profile from "../../../assets/images/Profile.png";
function SideBar({setAllMovie,setOnlyMovie,setOnlyTv,setFavourites,favourites,allMovie,onlyMovie,onlyTv}) {
  return (
    <>
      <div className="w-[96px] h-[960px] rounded-[20px] bg-semi-dark-blue p-8 flex flex-col justify-between ">
        <div className="flex flex-col gap-[75px]  items-center">
          <div className="">
            <img src={MovieIcon} alt="" />
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
          />
        </div>
        <div className="">
          <img
            src={Profile}
            alt=""
            className="rounded-[20px] border-[2px] border-amber-50"
          />
        </div>
      </div>
    </>
  );
}
export default SideBar;
