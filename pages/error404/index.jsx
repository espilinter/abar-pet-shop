import Image from "next/image";
import pageNotFound from "../../assets/image/404.png"
import backward from "../../assets/image/backward.png"
const Eror404 = () => {
    return (
        <>
            <div className="pt-200 pb-100 px-50 w-fit m-auto">
                <Image src={pageNotFound} className="m-auto" />
                <div className="flex justify-end mt-6">
                    <span className="text-left text-black text-14 sm:text-[28px] font-medium">صفحه مورد نظر یافت نشد.</span>
                </div>
                <div className="flex justify-center gap-16 mt-16">
                    <button className="w-112 h-38 border border-[#728A2D] rounded-[6px] text-16 font-medium text-center text-[#728A2D] leading-[30px]">صفحه اصلی </button>
                    <button className="px-12 py-8 h-38  text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px] flex items-center justify-center gap-8 min-w-[100px]">
                        <span className="text-white">تلاش مجدد</span>
                        <Image src={backward} className="hidden sm:inline-block" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Eror404;