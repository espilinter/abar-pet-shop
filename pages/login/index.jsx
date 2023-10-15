import Image from "next/image";
import animals from "../../assets/image/image 25.svg"
import logo from "../../assets/image/Logo.png"

const Login = (props) => {
    return (
        <>
            <div className="pt-150">
                <div className="w-90% m-auto md:h-600 lg:h-800 md:bg-[#F3FBDF] flex flex-col-reverse md:flex-row md:shadow-[0_0_16px_8px_rgba(0,0,0,0.35)] rounded-3xl items-center md:items-stretch">
                    <div className="w-full md:w-50% rounded-r-3xl flex flex-col md:p-32">
                        <Image className="hidden md:inline-block" src={logo} />
                        <div className=" py-48 px-0 lg:px-48 ">
                            <i className="hidden md:inline-block aps-home-2-o text-24"></i>
                            <input className="w-full h-50 p-10 rounded-md border border-[#8A8A8A] text-16 text-[#CACBCA] bg-[#F1F1F1] md:bg-[#F3FBDF] md:mt-120" placeholder="شماره موبایل" />
                            <button className="w-full h-50 text-[#fff] border rounded-md bg-[#728A2D] font-medium text-center text-16 mt-65">اطلاعات بیشتر</button>
                        </div>


                    </div>
                    <div className="w-full md:w-50% bg-white md:rounded-l-3xl flex items-center justify-center p-32 pr-0 relative">
                        <Image src={animals} />
                        <div className="absolute top-16 left-16 flex flex-col gap-y-16 items-end">
                            <div className="hidden w-fit rounded-full bg-[#E4F7E8] px-24 py-6 h-38 md:flex justify-center items-center">
                                <p className="text-14 font-medium text-[#21C45D]">کد ورود ارسال شد</p>
                            </div>
                            <div className="hidden w-fit rounded-full bg-[#FDE9E9] px-24 py-6 h-38 md:flex justify-center items-center">
                                <p className="text-14 font-medium text-[#EC0303]">شماره یا رمزعبور صحیح نمی‌باشد</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;