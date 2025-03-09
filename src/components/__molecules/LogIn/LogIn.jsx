import LoginBtn from "../../__atoms/LoginBtn/LoginBtn";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { use } from "react";

const schema = yup.object().shape({
  email: yup
    .string("Email must not contain any numbers")
    .required("Email is required.")
    .email("Please enter a valid email address."),

  password: yup
    .string("Password must not contain any numbers")
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long."),

});

export default function LogIn({ setShowLogin, setShowSignup ,setRegister ,setMoviePage }) {
  const showSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };


  const [registerData,setRegisterDara] = useState([])


  useEffect(() =>{
    const registerData = JSON.parse(localStorage.getItem("data")) || []
    setRegisterDara(registerData)
   }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  
  
  const onSubmit = (data) => {
    if(registerData.email == data.email && registerData.password == data.password ){
      setRegister(false)
      setMoviePage(true)
    }
  };
  return (
    <>
      <div className="flex flex-col gap-10 rounded-[20px]">
        <h1 className="text-white text-[32px] ">Login</h1>
        <form
          className="flex flex-col gap-6 "
          onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              type="email"
              name="email"
              className="w-full pl-4 pb-4.5 placeholder:text-[#ffffff86] text-[#ffffff86] border-b-[1px] border-b-[#ffffff86] outline-none"
              placeholder="Email address"
              {...register("email")}
              />
            {errors.email && (
              <p className="text-cl-red text-right mt-1.5">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="">
            <input
              type="password"
              name="password"
              className="w-full pl-4 pb-4.5 placeholder:text-[#ffffff86] text-[#ffffff86] border-b-[1px] border-b-[#ffffff86] outline-none"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-cl-red text-right mt-1.5">
                {errors.password.message}
              </p>
            )}
          </div>
          <LoginBtn
            MainBtnP={"Login to your account"}
            accountP={"Don’t have an account?"}
            ScndBtnP={"Sign Up"}
            showFun={showSignup}
          />
        </form>
      </div>
    </>
  );
}
