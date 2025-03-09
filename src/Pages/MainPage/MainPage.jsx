import { useEffect, useState } from "react";
import MovieIcon from "../../assets/images/Movie.png";
import LogIn from "../../components/__molecules/LogIn/LogIn";
import SignUp from "../../components/__molecules/SignUp/SignUp";
import MoviePage from "../../components/__organism/MoviePage/MoviePage";

export default function MainPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [register,setRegister] = useState(true)
  const [moviePage,setMoviePage] = useState(false)
  return (
    <>
      <div className="w-full min-h-[100vh]  bg-bg-main flex justify-center box-border ">
        {register && (
          <div className="w-full h-full min-h-[100vh] flex justify-center items-center flex-col  gap-[83px]">
            <div className="">
              <img src={MovieIcon} alt="" />
            </div>

            <div className="max-w-[400px]  w-full rounded-[10px] p-8 bg-semi-dark-blue rou6nded-[20px]  duration-225 max-mb:max-w-[327px] max-mb:p-6 ">
              {showLogin && (
                <LogIn
                  setShowSignup={setShowSignup}
                  setShowLogin={setShowLogin}
                  setRegister={setRegister}
                  setMoviePage={setMoviePage}
                />
              )}
              {showSignup && (
                <SignUp
                  setShowLogin={setShowLogin}
                  setShowSignup={setShowSignup}
                />
              )}
            </div>
          </div>
        )}

        {moviePage && 
          <MoviePage />
        }
      </div>
    </>
  );
}
