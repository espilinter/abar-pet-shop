import Image from "next/image";
import cart1 from "../../assets/image/cart1.jpg"
import cart2 from "../../assets/image/cart2.jpg"


const Pricing = (props) => {
    return (
        <>
            <div className=" px-16 md:px-70 pt-50 sm:pt-100 lg:pt-140">
                <div className="text-[#BDBDBD] text-12 font-extrabold hidden md:flex ">
                    <a href="#">صفحه اصلی</a>/<a href="#"> دسته بندی </a>/<p>زیر دسته بندی</p>
                </div>
                <div className="bg-white shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] rounded-lg w-full p-16 sm:p-32 mt-40">
                    <h1 className=" text-center text-stone-900 text-14 sm:text-[28px] font-normal leading-normal">پرداخت آگهی</h1>
                    <p className="w-full text-right text-[#3B4054] text-10 sm:text-2xl font-normal leading-10 mt-16 sm:mt-60">کاربر گرامی شما می توانید پرداخت خود را به دو روش درگاه پرداخت و یا کارت به کارت انجام دهید، در صورت تمایل می توانید آگهی به صورت پکیج خریداری کنید.</p>
                    <div className="w-full lg:w-71% bg-[#CCD6AF] px-34 sm:px-40 py-8 sm:py-40 mt-16 sm:mt-60 m-auto rounded-lg h-[108px] sm:h-[230px] xl:h-184 ">
                        <div className="flex justify-center xl:justify-start">
                            <span className="text-right text-stone-900 text-12 sm:text-2xl font-normal leading-normal">اطلاعات آگهی</span>
                        </div>
                        <div className="justify-between mt-8 sm:mt-28 xl:mt-56 h-24 grid grid-cols-2 xl:flex gap-y-10 sm:gap-y-40 ">
                            <div className=" h-24 justify-center items-center gap-2 inline-flex gap-x-8">
                                <div className="text-right text-lime-950 text-10 sm:text-base font-normal leading-normal">عنوان:</div>
                                <div className="text-right text-lime-950 text-10 sm:text-xl font-bold sm:font-normal leading-normal">خدمات پزشکی</div>
                            </div>
                            <div className=" h-24 justify-center items-center gap-2 inline-flex gap-x-8">
                                <div className="text-right text-lime-950 text-10 sm:text-base font-normal leading-normal">استان:</div>
                                <div className="text-right text-lime-950 text-10 sm:text-xl font-bold sm:font-normal leading-normal">تهران</div>
                            </div>
                            <div className=" h-24 justify-center items-center gap-2 inline-flex gap-x-8">
                                <div className="text-right text-lime-950 text-10 sm:text-base font-normal leading-normal">خدمات:</div>
                                <div className="text-right text-lime-950 text-10 sm:text-xl font-bold sm:font-normal leading-normal">خدمات پزشکی</div>
                            </div>
                            <div className=" h-24 justify-center items-center gap-2 inline-flex gap-x-8">
                                <div className="text-right text-lime-950 text-10 sm:text-base font-normal leading-normal">عنوان:</div>
                                <div className="text-right text-lime-950 text-10 sm:text-xl font-bold sm:font-normal leading-normal">خدمات پزشکی</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] rounded-lg mt-60 flex flex-col 900:flex-row justify-between p-24 gap-y-20">
                        <div className="justify-center 900:justify-start items-center gap-4 inline-flex">
                            <i className="aps-dollar-circle-o text-16 sm:text-24"></i>
                            <div className="text-right text-lime-950 text-12 sm:text-xl font-normal leading-normal">پرداخت از طریق درگاه پرداخت</div>
                        </div>
                        <div className="flex justify-around 900:justify-between gap-x-40">
                            <div className="flex flex-col items-center gap-y-20">
                                <span className="text-right text-lime-950 text-12 sm:text-base font-normal leading-normal">200,000 تومان</span>
                                <button className="w-112 h-38  text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]">پرداخت ویژه</button>
                            </div>
                            <div className="flex flex-col items-center gap-y-20">
                                <span className="text-right text-lime-950 text-12 sm:text-base font-normal leading-normal">100,000 تومان</span>
                                <button className="w-112 h-38  text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]">پرداخت عادی</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] rounded-lg mt-60 justify-around 900:justify-between p-24 flex flex-col 900:flex-row gap-y-20">
                        <div className=" justify-center 900:justify-start items-center gap-4 inline-flex">
                            <i className="aps-profile-o text-16 sm:text-24"></i>
                            <div className="text-right text-lime-950 text-12 sm:text-xl font-normal leading-normal">پرداخت از طریق حساب کاربری</div>
                        </div>
                        <div className="flex flex-col  gap-y-16">
                            <div className="flex justify-around 900:justify-between gap-x-40">
                                <div className="flex flex-col items-center gap-y-20">
                                    <span className="text-right text-lime-950 text-12 sm:text-base font-normal leading-normal">تعداد موجود:0</span>
                                    <button className="w-112 h-38  text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]">پرداخت ویژه</button>
                                </div>
                                <div className="flex flex-col items-center gap-y-20">
                                    <span className="text-right text-lime-950 text-12 sm:text-base font-normal leading-normal">تعداد موجود:0</span>
                                    <button className="w-112 h-38  text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]">پرداخت عادی</button>
                                </div>
                            </div>
                            <div className="text-center text-[#22290D] text-12 sm:text-base font-normal leading-normal">خرید پکیج</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start mt-52 w-full m-auto shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] rounded-lg p-16 sm:p-24">
                        <div className="justify-center sm:justify-start items-center gap-4 inline-flex">
                            <i className="aps-card-o text-16 sm:text-24"></i>
                            <div className="text-right text-lime-950 text-12 sm:text-xl font-normal leading-normal">پرداخت از طریق کارت به کارت</div>
                        </div>
                        <div className="flex flex-col xl:flex-row items-center justify-between px-10% mt-80 gap-y-24 ">
                            {/* <div className="w-306 h-176 bg-[#69B663] rounded-xl"></div>
                            <div className="w-306 h-176 bg-[#959FB3] rounded-xl"></div> */}
                            <Image alt={""} src={cart1} className="w-230 sm:w-306 h-132 sm:h-176 rounded-xl" />
                            <Image alt={""} src={cart2} className="w-230 sm:w-306 h-132 sm:h-176 rounded-xl" />
                        </div>
                        <div className="flex justify-center sm:justify-start sm:pr-30 mt-40 gap-x-8">
                            <span className="text-[#0352EC] text-12 sm:text-xl font-normal">توجه:</span>
                            <p className="text-right text-[#070707] text-12 sm:text-xl font-normal leading-normal">لطفا بعد از پرداخت به صورت کارت به کارت با پشتیبانی سایت تماس بگیرید.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;