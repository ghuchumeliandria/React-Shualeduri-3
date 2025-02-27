export default function LoginBtn({MainBtnP,accountP,ScndBtnP,showFun}){
    return(
        <>
        <div className="flex gap-6 justify-center flex-col">
            <button type="submit" className="bg-cl-red w-full h-12 text-white rounded-md cursor-pointer" >{MainBtnP}</button>
            <div className="flex gap-[9px] mx-auto">
                <p className="text-white">{accountP}</p>
                <button className="text-cl-red cursor-pointer"onClick={showFun} > {ScndBtnP}</button>
            </div>
        </div>
        </>
    )
}