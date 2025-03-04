import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Movies from "../Movies/Movies";
import { useState } from "react";
function MovieContent({allMovie,onlyMovie,onlyTv,favourites}) {
  const [showSearchBar,setShowSearchBar] = useState(false)
  const [showMovies,setShowMovies] = useState(true)
  return (
    <>
      <div className="max-w-[1240px] w-full  flex flex-col gap-[35px]">
        <SearchBar
        setShowSearchBar={setShowSearchBar}
        setShowMovies={setShowMovies}
        showSearchBar={showSearchBar}
        />
        <Movies
          allMovie={allMovie}
          onlyMovie={onlyMovie}
          onlyTv={onlyTv}
          favourites={favourites}
          showMovies={showMovies}
        />
      </div>
    </>
  );
}
export default MovieContent;
