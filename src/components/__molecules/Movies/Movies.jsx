import React, { useState } from "react";
import MovieSlider from "../../__atoms/MovieSlider/MovieSlider";
import Movie from "../../__atoms/Movie/Movie";
import Data from "../../../../data.json";

function Movies({ allMovie, onlyMovie, onlyTv, favourites,showMovies }) {

  // Trending Data
  const Trending = Data.filter((movie) => {
    return movie.isTrending === true;
  });
  // Only Movie category
  const OnlyMovies = Data.filter((movie) => {
    return movie.category === "Movie";
  });
  // Only Tv Series category
  const OnlyTv = Data.filter((movie) =>{
    return movie.category === "TV Series"
  })

  const Favourites = Data.filter((movie) =>{
    return movie.isBookmarked === true
  })
  // 

  return (
    <>
    {showMovies &&
      <div className="">
        <div className="">
          <p className="text-[32px] text-white font-Outfit_light">Trending</p>
          <MovieSlider />
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[32px] text-white font-Outfit_light">
            Recommended for you
          </p>
          <div className="flex gap-10 flex-wrap justify-center ">
            {allMovie && <Movie Data={Data} />}
            { onlyMovie && <Movie Data={OnlyMovies} />}
            { onlyTv && <Movie Data={OnlyTv} />}
             { favourites && <Movie Data={Favourites} />}
            </div>
        </div>
      </div>
      }
    </>
  );
}
export default Movies;
