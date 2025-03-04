import LoginBtn from "../../__atoms/LoginBtn/LoginBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string("Email must not contain any numbers")
    .required("Email is required.")
    .email("Please enter a valid email address."),

  password: yup
    .string("Password must not contain any numbers")
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long."),

  repeatPassword: yup
    .string("Password must not contain any numbers")
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long."),
});

export default function SignUp({ setShowLogin, setShowSignup }) {
  const showLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    localStorage.setItem('data' , JSON.stringify(data))
    setShowLogin(true);
    setShowSignup(false);
  };

  return (
    <>
      <div className="flex flex-col gap-10 rounded-[20px] font-Outfit_light">
        <h1 className="text-white text-[32px] ">Sign up</h1>
        <form
          className="flex flex-col gap-6 "
          onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <input
              type="text"
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
              name="Password"
              className="w-full pl-4 pb-4.5 text-[#ffffff86] placeholder:text-[#ffffff86] border-b-[1px] border-b-[#ffffff86] outline-none"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-cl-red text-right mt-1.5">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="">
            <input
              type="password"
              name="repeatPassword"
              className="w-full pl-4 pb-4.5 placeholder:text-[#ffffff86]  text-[#ffffff86] border-b-[1px] border-b-[#ffffff86] outline-none"
              placeholder="Repeat password"
              {...register("repeatPassword")}
            />
            {errors.repeatPassword && (
              <p className="text-cl-red text-right mt-1.5">
                {errors.repeatPassword.message}
              </p>
            )}
          </div>
          <LoginBtn
            MainBtnP={"Create an account"}
            accountP={"Already have an account?"}
            ScndBtnP={"Login"}
            showFun={showLogin}
          />
        </form>
      </div>
    </>
  );
}
