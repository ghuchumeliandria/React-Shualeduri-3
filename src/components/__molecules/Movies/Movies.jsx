import React, { useEffect, useState } from "react";
import MovieSlider from "../../__atoms/MovieSlider/MovieSlider";
import Movie from "../../__atoms/Movie/Movie";
import Data from "../../../../data.json";
import FavouritesSection from "../FavouritesSection/FavouritesSection";

function Movies({ allMovie, onlyMovie, onlyTv, favourites,showMovies,categoryName }) {



  const [favouritesSec,setFavouritesSec] = useState([])
  useEffect(()=>{
    const favouritesData = JSON.parse(localStorage.getItem("favourites"))
    if(favouritesData){
      setFavouritesSec(favouritesData)
    }

  },[])

  console.log(favouritesSec)
  
  // Only Movie category
  const OnlyMovies = Data.filter((movie) => {
    return movie.category === "Movie";
  });
  // Only Tv Series category
  const OnlyTv = Data.filter((movie) =>{
    return movie.category === "TV Series"
  })

  // 

  return (
    <>
    {showMovies &&
      <div className="w-full max-w-[1240px] flex flex-col">
        <div className="">
          <p className="text-[32px] w-full text-white font-Outfit_light max-mb:text-[20px]">Trending</p>
          <MovieSlider  />
        </div>
        <div className="flex flex-col gap-8 max-mb:gap-6">
          <p className="text-[32px] text-white font-Outfit_light max-mb:text-[20px]">
            {categoryName}
          </p>
          <div className="grid gap-10 grid-cols-4 max-[1130px]:grid-cols-3 max-[650px]:grid-cols-2 max-mb:gap-[15px] ">
            {allMovie && <Movie Data={Data}  />}
            { onlyMovie && <Movie Data={OnlyMovies}  />}
            { onlyTv && <Movie Data={OnlyTv}  />}
             { favourites && <FavouritesSection Data={favouritesSec}  />}
            </div>
        </div>
      </div>
      }
    </>
  );
}
export default Movies;
