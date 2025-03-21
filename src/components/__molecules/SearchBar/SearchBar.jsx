import React, { useEffect } from "react";
import { useState } from "react";
import Data from "../../../../data.json";
import Movie from "../../__atoms/Movie/Movie";
function SearchBar({ setShowSearchBar, setShowMovies, showSearchBar }) {
  const [value, setValue] = useState("");
  const [searchLength, setSearchLength] = useState("");
  const filteredSearch = (e) => {
    setValue(e.target.value);
    if (e.target.value.length > 0) {
      setShowMovies(false);
      setShowSearchBar(true);
    } else {
      setShowMovies(true);
      setShowSearchBar(false);
    }
  };
  const Search = value
    ? Data.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  useEffect(() => {
    setSearchLength(Search.length);
  }, [Search]);
  return (
    <>
    <div className="flex flex-col gap-8">
      <div className="flex gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none">
          <rect opacity="0.01" width="32" height="32" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.08 21.2L27.6133 25.72C27.8657 25.9704 28.0077 26.3111 28.0077 26.6667C28.0077 27.0222 27.8657 27.363 27.6133 27.6133C27.363 27.8657 27.0222 28.0077 26.6667 28.0077C26.3111 28.0077 25.9704 27.8657 25.72 27.6133L21.2 23.08C19.3366 24.5426 17.0355 25.3363 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667C25.3363 17.0355 24.5426 19.3366 23.08 21.2ZM14.6667 6.66667C10.2484 6.66667 6.66667 10.2484 6.66667 14.6667C6.66667 19.0849 10.2484 22.6667 14.6667 22.6667C19.0849 22.6667 22.6667 19.0849 22.6667 14.6667C22.6667 10.2484 19.0849 6.66667 14.6667 6.66667Z"
            fill="white"
          />
        </svg>
        <input
          type="text"
          onChange={filteredSearch}
          className="text-[#ffffff70] w-full max-w-[350px] outline-0 text-[24px] font-Outfit_light max-mb:text-[16px]"
          placeholder="Search for movies or TV series"
          maxLength={35}
        />


      </div>
      {value && (
        
        <div className=" flex flex-col gap-8  w-full max-w-[1240px]  m-auto">
          <div className="text-white text-[32px] font-Outfit_light w-full max-mb:text-[16px]">
            {searchLength > 0 ? (
              <p>{`Found ${searchLength} results for '${value}'`}</p>
            ) : (
              <p>{`not found result for '${value}'`}</p>
            )}
          </div>
          <div className="flex gap-10 flex-wrap   w-full ">
            <Movie Data={Search} />
          </div>
        </div>
      )}
      </div>
      
    </>
  );
}

export default SearchBar;
