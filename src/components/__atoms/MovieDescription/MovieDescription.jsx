import React from "react";

function MovieDescription({movie}) {
  return (
    <>
      <div className="flex gap-2 text-[#ffffffaf] items-center mt-2">
        <p>{movie.year}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3"
          height="3"
          viewBox="0 0 3 3"
          fill="none">
          <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
        </svg>
        <p>{movie.category}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3"
          height="3"
          viewBox="0 0 3 3"
          fill="none">
          <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
        </svg>
        <p>{movie.rating}</p>
      </div>
    </>
  );
}

export default MovieDescription;