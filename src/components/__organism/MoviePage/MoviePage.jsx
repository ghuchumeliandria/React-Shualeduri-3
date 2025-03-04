import React from "react";
import SideBar from "../../__molecules/SideBar/SideBar";
import MovieContent from "../../__molecules/MovieContent/MovieContent";
import { useState } from "react";
function MoviePage() {
  const [allMovie, setAllMovie] = useState(true);
  const [onlyMovie, setOnlyMovie] = useState(false);
  const [onlyTv, setOnlyTv] = useState(false);
  const [favourites, setFavourites] = useState(false);

  return (
    <>
      <div className="flex gap-9 p-8 max-w-[1440px] w-full m-auto">
        <SideBar
          setAllMovie={setAllMovie}
          setOnlyMovie={setOnlyMovie}
          setOnlyTv={setOnlyTv}
          setFavourites={setFavourites}
          favourites={favourites}
          onlyTv={onlyTv}
          onlyMovie={onlyMovie}
          allMovie={allMovie}
        />
        <MovieContent
          allMovie={allMovie}
          onlyMovie={onlyMovie}
          onlyTv={onlyTv}
          favourites={favourites}
        />
      </div>
    </>
  );
}

export default MoviePage;
