import { useState } from "react";
import MovieIcon from "../../../assets/images/Movie.png";
import LogIn from "../../__molecules/LogIn/LogIn";
import SignUp from "../../__molecules/SignUp/SignUp";


// form Schema 




export default function MainPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  

  return (
    <>
      <div className="w-full min-h-[100vh]  bg-bg-main ">
        <div className="w-full h-full min-h-[100vh] flex justify-center items-center flex-col  gap-[83px]">
          <div className="">
            <img src={MovieIcon} alt="" />
          </div>
          <div className="max-w-[400px] w-full p-8 bg-semi-dark-blue rounded-[20px] duration-225 max-mb:max-w-[327px] max-mb:p-6 ">
            {showLogin && (
              <LogIn
              setShowSignup={setShowSignup}
              setShowLogin={setShowLogin}
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
      </div>
    </>
  );
}
