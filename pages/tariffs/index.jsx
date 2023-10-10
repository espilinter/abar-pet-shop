import RangeSlider from "@/components/RangeSlider/RangeSlider";
import Title from "@/components/Title/Title";
import Image from "next/image";

const tariffs = () => {
    return (
        <>
            <div className=" px-16 md:px-70 pt-100 lg:pt-140">
                <div className="text-[#BDBDBD] text-12 font-extrabold hidden md:flex ">
                    <a href="#">صفحه اصلی</a>/<a href="#"> دسته بندی </a>/<p>زیر دسته بندی</p>
                </div>
                <Title title="تعرفه های درج آگهی و تبلیغات وب سایت" className="mr-0 mt-0 md:mt-40" />
                <div className="flex gap-y-16 flex-col md:flex-row mt-24 md:mt-56 justify-around">
                    <div className="w-full md:w-186 lg:w-248 xl:w-[310px] h-141 md:h-269 lg:h-358 xl:h-[448px] px-12 lg:px-16 py-12 lg:py-32 bg-white rounded-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] flex-row md:flex-col items-center inline-flex gap-x-16 justify-around">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="text-right text-[#1E1E1E] text-12 sm:text-16 lg:text-xl xl:text-2xl font-bold">آگهی ویژه</h2>
                            <div className="text-center text-[#728A2D] text-14 md:text-18 lg:text-24 xl:text-[28px] font-bold mt-12 lg:mt-24">200,000 تومان</div>
                        </div>
                        <div className="w-2 md:w-85% h-full md:h-2 bg-[#B9B9B9] mt-10 lg:mt-16 xl:mt-24 text-white">.</div>
                        <div className="mt-10 lg:mt-16 xl:mt-24">
                            <div className="w-full text-center text-[#1E1E1E] text-10 md:text-12 lg:text-sm font-normal ">با درج آگهی در وب سایت “ابر پت‌شاپ” با هزینه تنها 200,000 تومان آگهی شما در صفحه زیر قرار می گیرد:</div>
                            <div className="w-full flex justify-between mt-12 lg:mt-20 xl:mt-40">
                                <span className="h-24 text-right text-black text-10 md:text-12 lg:text-14 xl:text-16 font-bold items-center">نمایش آگهی در دسته بندی</span>
                                <i className="aps-tick-circle-o text-18 lg:text-20 xl:text-24 text-[#7FD300] "></i>
                            </div>
                            <div className="w-full flex justify-between mt-6 lg:mt-16 xl:mt-32">
                                <span className="h-24 text-10 md:text-12 lg:text-14 xl:text-16 text-right text-black font-bold items-center">نمایش آگهی در صفحه اصلی</span>
                                <i className="aps-tick-circle-o text-18 lg:text-20 xl:text-24 text-[#7FD300] "></i>
                            </div>
                            <div className="w-full flex justify-between mt-6 lg:mt-16 xl:mt-32">
                                <span className="h-24 text-right text-black text-10 md:text-12 lg:text-14 xl:text-16 font-bold items-center">نمایش آگهی در جایگاه ویژه</span>
                                <i className="aps-tick-circle-o text-18 lg:text-20 xl:text-24 text-[#7FD300] "></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-186 lg:w-248 xl:w-[310px] h-141 md:h-269 lg:h-358 xl:h-[448px] px-12 lg:px-16 py-12 lg:py-32 bg-white rounded-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] flex-row md:flex-col items-center inline-flex gap-x-16 justify-around">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="text-right text-[#1E1E1E] text-12 sm:text-16 lg:text-xl xl:text-2xl font-bold">آگهی ویژه</h2>
                            <div className="text-center text-[#728A2D] text-14 md:text-18 lg:text-24 xl:text-[28px] font-bold mt-12 lg:mt-24">100,000 تومان</div>
                        </div>
                        <div className="w-2 md:w-85% h-full md:h-2 bg-[#B9B9B9] mt-10 lg:mt-16 xl:mt-24 text-white">.</div>
                        <div className="mt-10 lg:mt-16 xl:mt-24">
                            <div className="w-full text-center text-[#1E1E1E] text-10 md:text-12 lg:text-sm font-normal ">با درج آگهی در وب سایت “ابر پت‌شاپ” با هزینه تنها 00,000 تومان آگهی شما در صفحه زیر قرار می گیرد:</div>
                            <div className="w-full flex justify-between mt-12 lg:mt-20 xl:mt-40">
                                <span className="h-24 text-right text-black text-10 md:text-12 lg:text-14 xl:text-16 font-bold items-center">نمایش آگهی در دسته بندی</span>
                                <i className="aps-tick-circle-o text-18 lg:text-20 xl:text-24 text-[#7FD300] "></i>
                            </div>
                            <div className="w-full flex justify-between mt-6 lg:mt-16 xl:mt-32">
                                <span className="h-24 text-10 md:text-12 lg:text-14 xl:text-16 text-right text-black font-bold items-center">نمایش آگهی در صفحه اصلی</span>
                                <i className="aps-tick-circle-o text-18 lg:text-20 xl:text-24 text-[#7FD300] "></i>
                            </div>
                            <div className="w-full flex justify-between mt-6 lg:mt-16 xl:mt-32">
                                <span className="h-24 text-right text-black text-10 md:text-12 lg:text-14 xl:text-16 font-bold items-center">نمایش آگهی در جایگاه ویژه</span>
                                <i className="aps-close-circle-o text-18 lg:text-20 xl:text-24 text-[#EC0303] "></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-186 lg:w-248 xl:w-[310px] h-141 md:h-269 lg:h-358 xl:h-[448px] px-12 lg:px-16 py-12 lg:py-32 bg-white rounded-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] flex-row md:flex-col items-center inline-flex gap-x-16 justify-around">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="text-right text-[#1E1E1E] text-12 sm:text-16 lg:text-xl xl:text-2xl font-bold">آگهی ویژه</h2>
                            <div className="text-center text-[#728A2D] text-14 md:text-18 lg:text-24 xl:text-[28px] font-bold mt-12 lg:mt-24">20,000 تومان</div>
                        </div>
                        <div className="w-2 md:w-85% h-full md:h-2 bg-[#B9B9B9] mt-10 lg:mt-16 xl:mt-24 text-white">.</div>
                        <div className="mt-10 lg:mt-16 xl:mt-24">
                            <div className="w-full text-center text-[#1E1E1E] text-10 md:text-12 lg:text-sm font-normal ">شما می توانید با استفاده از سیستم نردبان آگهی خود را برئز کرده و به بالای صفحه منتقل نمایید: </div>
                            <div className="w-full flex justify-between mt-12 lg:mt-20 xl:mt-40">
                                <span className="h-24 text-right text-black text-10 md:text-12 lg:text-14 xl:text-16 font-bold items-center">نمایش آگهی در دسته بندی</span>
                                <i className="aps-tick-circle-o text-18 lg:text-20 xl:text-24 text-[#7FD300] "></i>
                            </div>
                            <div className="w-full flex justify-between mt-6 lg:mt-16 xl:mt-32">
                                <span className="h-24 text-10 md:text-12 lg:text-14 xl:text-16 text-right text-black font-bold items-center">نمایش آگهی در صفحه اصلی</span>
                                <i className="aps-close-circle-o text-18 lg:text-20 xl:text-24 text-[#EC0303] "></i>
                            </div>
                            <div className="w-full flex justify-between mt-6 lg:mt-16 xl:mt-32">
                                <span className="h-24 text-right text-black text-10 md:text-12 lg:text-14 xl:text-16 font-bold items-center">نمایش آگهی در جایگاه ویژه</span>
                                <i className="aps-close-circle-o text-18 lg:text-20 xl:text-24 text-[#EC0303] "></i>
                            </div>
                        </div>
                    </div>
                </div>
                <Title title="پکیج خودتو بساز" className="mr-0 mt-25 md:mt-150" />
                <div className="mt-16 md:mt-72 max-w-[1080px] py-32 px-16 bg-white shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] rounded-2xl m-auto">
                    <div className="bg-[#728A2D] px-24 py-8 rounded-lg flex justify-between">
                        <span className="text-right text-white text-2xl font-bold">پکیج ساز</span>
                        <span className="text-right text-white text-[28px] font-bold ">???,??? تومان</span>
                    </div>
                    <div className="flex items-center mt-21 pr-16">
                        <div className="rotate-180 w-fit flex items-center">
                            <i className="aps-info-circle-o text-20 text-[#0352EC]"></i>
                        </div>
                        <p className="text-right text-neutral-600 text-sm font-normal ">شما می‌توانید به صورت دلخواه تعداد آگهی‌های مورد نظر خود را انتخاب کرده و قیمت آن بر اساس تعرفه سایت محاسبه می‌شود</p>
                    </div>
                    <div className="pt-50 px-16 sm:px-96 flex flex-col gap-y-50">
                        <div className=" flex xl:flex-row flex-col xl:justify-between justify-start items-start xl:items-center gap-y-20">
                            <div className="justify-start items-start gap-2 flex gap-x-10">
                                <span className="text-right text-stone-900 text-base font-bold">تعداد آگهی ویژه :</span>
                                <span className="w-[118px] h-[17px] text-right text-stone-900 text-base font-bold">150 عدد</span>
                            </div>
                            <div className="w-full xl:w-50%">
                                <RangeSlider />
                            </div>
                        </div>
                        <div className=" flex xl:flex-row flex-col justify-start xl:justify-between items-start xl:items-center gap-y-20">
                            <div className="justify-start items-start gap-2 flex gap-x-10">
                                <span className="text-right text-stone-900 text-base font-bold">تعداد آگهی ویژه :</span>
                                <span className="w-[118px] h-[17px] text-right text-stone-900 text-base font-bold">150 عدد</span>
                            </div>
                            <div className="w-full xl:w-50%">
                                <RangeSlider />
                            </div>
                        </div>
                        <div className=" flex xl:flex-row flex-col justify-start xl:justify-between items-start xl:items-center gap-y-20">
                            <div className="justify-start items-start gap-2 flex gap-x-10">
                                <span className="text-right text-stone-900 text-base font-bold">تعداد آگهی ویژه :</span>
                                <span className="w-[118px] h-[17px] text-right text-stone-900 text-base font-bold">150 عدد</span>
                            </div>
                            <div className="w-full xl:w-50%">
                                <RangeSlider />
                            </div>
                        </div>
                        <div className="w-full h-1 bg-[#B9B9B9]"></div>
                        <div className="w-full flex justify-end mt-[-20px]">
                            <button className="w-112 h-38  text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]">پرداخت</button>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white mt-80 rounded-2xl py-40  ">
                    <h2 className="text-center text-zinc-950 text-[28px] font-normal leading-normal">روش های پرداخت</h2>
                    <div className="flex flex-col justify-start mt-52 w-70% m-auto">
                        <span className="text-right text-gray-800 text-2xl font-normal leading-normal">پرداخت آگهی به دو روش زیر انجام می شود:</span>
                        <div className="flex gap-x-8 items-center  mt-40">
                            <i className="aps-dollar-circle text-xl"></i>
                            <span className="text-center text-zinc-950 text-xl font-normal leading-normal">پرداخت اینترنتی</span>
                        </div>
                        <div className="flex gap-x-8 items-center  mt-40">
                            <i className="aps-dollar-circle text-xl"></i>
                            <span className="text-center text-zinc-950 text-xl font-normal leading-normal">کارت به کارت</span>
                        </div>
                        <div className="flex justify-start pr-30 mt-40 gap-x-8">
                            <span className="text-[#0352EC] text-xl font-normal">توجه:</span>
                            <p className="text-right text-[#070707] text-xl font-normal leading-normal">لطفا بعد از پرداخت به صو رت کارت به کارت با پشتیبانی سایت تماس بگیرید.</p>
                        </div>
                        <div className="flex flex-col xl:flex-row justify-between px-32 mt-80 gap-y-24">
                            <div className="w-306 h-176 bg-[#69B663] rounded-xl"></div>
                            <div className="w-306 h-176 bg-[#959FB3] rounded-xl"></div>
                        </div>
                        <span className="text-right text-gray-800 text-2xl font-normal leading-normal mt-80">پرداخت پکیج به روش زیر انجام می شود:</span>
                        <div className="flex gap-x-8 items-center  mt-40">
                            <i className="aps-dollar-circle text-xl"></i>
                            <span className="text-center text-zinc-950 text-xl font-normal leading-normal">پرداخت اینترنتی</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default tariffs;