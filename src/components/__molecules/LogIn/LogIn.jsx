import LoginBtn from "../../__atoms/LoginBtn/LoginBtn"

export default function LogIn({setShowLogin, setShowSignup}){
    const showSignup = () =>{
        setShowLogin(false)
        setShowSignup(true)
    }
    return(
        <>
        <div className="flex flex-col gap-10 rounded-[20px]">
            <h1 className="text-white text-[32px] ">Login</h1>
            <form className="flex flex-col gap-6 " >
                <input type="email" name="email" className="w-full pl-4 pb-4.5 placeholder:text-[#ffffff86] border-b-[1px] border-b-[#ffffff86] outline-none"  placeholder="Email address" />
                <input type="password" name="password" className="w-full pl-4 pb-4.5 placeholder:text-[#ffffff86] border-b-[1px] border-b-[#ffffff86] outline-none" placeholder="Password"/>
            </form>
            <LoginBtn MainBtnP={"Login to your account"} accountP={"Don’t have an account?"} ScndBtnP={"Sign Up"} showFun={showSignup} />
        </div>
        </>
    )
}