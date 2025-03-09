import React from "react";
import MovieDescription from "../../__atoms/MovieDescription/MovieDescription";
function FavouritesSection({Data}){
    return(
        <>
        {Data.map((movie) => {
        return (
          <div className="w-full max-w-[280px]  " key={movie.title}>
            <div className="w-full relative ">
              <img
                src={`../../../${movie.img}`}
                className="rounded-[8px] w-full cursor-pointer object-cover"
                alt=""
              />
              
            </div>
            <MovieDescription movie={movie} />
            <div className="">
              <p className="text-white text-[18px] max-mb:text-[14px]">{movie.title}</p>
            </div>
          </div>
        );
      })}
        </>
    )
}

export default FavouritesSection