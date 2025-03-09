import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../Global.css";
import Data from "../../../../data.json";
function MovieSlider() {
  return (
    <><div className="w-full max-w-[1230px] flex">
    {/* <Swiper 
      spaceBetween={10}
      slidesPerView={2}
      loop={true}
      
    >
      {Data.filter((trending) => trending.isTrending).map((movie) => (
        <SwiperSlide key={movie.title} className="rounded-[8px] w-full max-w-[300px]">
          <div className="relative rounded-[8px]">
            <img
              src={`${movie.thumbnail.regular.large}`}
              alt={movie.title}
              className="rounded-[8px]"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p>
                {movie.year} • {movie.category} • {movie.rating}
              </p>
              <h2 className="text-lg font-bold">{movie.title}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper> */}
    <h1 className="text-[22px] text-white">ნიკი სვაიპერს იმდენი ვეწვალე არ 
      იმუშავა და მერე გამომასწორებინე
    </h1>
  </div>
    </>
  );
}
export default MovieSlider;
