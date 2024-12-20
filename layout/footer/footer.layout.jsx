import Image from 'next/image'
import { FiMapPin } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import kelidLogo from "../../assets/image/kelideTalayi.png"
import logoBlack from "../../assets/image/logoBlack.png"
import Enamad from "../../assets/image/Enamad.png"
import instegeram from "../../assets/image/instagram.png"
import telegram from "../../assets/image/telegram.png"
import watsapp from "../../assets/image/watsapp.png"
import footerpng from "../../assets/image/2.png"
import instegramBlcak from "../../assets/image/instagramBlack.png"
import telegramBlack from "../../assets/image/telegramBlack.png"
import watsappBlack from "../../assets/image/watsappBlack.png"

import "../../styles/layout/footer.layout.module.css"
import { useEffect, useState } from 'react';

const Footer = () => {
    const [windowSize, setWindowSize] = useState("")

    useEffect(() => {
        window.addEventListener("resize", responsiveHandler)
        setWindowSize(window.innerWidth);
        return () => {
            window.removeEventListener("resize", responsiveHandler);
        };
    }, [])
    function responsiveHandler() {
        setWindowSize(window.innerWidth);
    }
    return (
        <footer>
            {windowSize >= 1024 ? <div className="pb-28 shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.16)] mt-30 bg-[url('../assets/image/2.png')] bg-no-repeat bg-[center_top_55px]">
                <div className="flex w-98% 1220:w-90% m-auto pt-40">
                    <div className="w-26% h-134">
                        <div className=" flex">
                            <div className="h-134">
                                <Image alt="" src={kelidLogo} className="" />
                            </div>
                            <p className="w-209 text-12 mt-14 text-right mr-16">بزرگترین سامانه کارآفرینی و ایجاد اشتغال جوانان و دانشجویان ایران در فضای مجازی و واقعی و در زمینه تبلیغات ، خرید و فروش ، خدمات ، گردشگری ، واردات و صادرات ، بازرگانی و روابط بین المللی ایران</p>

                        </div>
                        <div className=" flex mt-40">
                            <div className="h-134 mt-20">
                                <Image alt="" src={logoBlack} />
                            </div>
                            <p className="w-209 text-12 mt-14 text-right mr-16">از نزدیک به یک قرن پیش پرچم دار خرید و فروش ملک در ایران بوده ایم. پس از گذشت 30 سال از آغاز تجارت در این حوزه درسال 1377 شمسی به پشتوانه کسب رضایت مشتریان گام در مسیر تولید انبوه صنعتی نهادیم.</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-65% text-[#8A8A8A] mr-6%">
                        <div>
                            <h2 className="text-right font-bold text-14 1150:text-16 mb-24 text-[#1E1E1E]">ابر پت شاپ</h2>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">درباره ما</a>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">مجله</a>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">فرصت شغلی</a>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">استخدام در هولدینگ</a>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">باشگاه مشتریان</a>
                        </div>
                        <div>
                            <h2 className="text-right font-bold text-14 1150:text-16 mb-24 text-[#1E1E1E]">پشتیبانی</h2>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">راهنمای درج آگهی</a>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">پرسش های متداول</a>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">انتقادات و پیشنهادات</a>
                        </div>
                        <div>
                            <h2 className="text-right font-bold text-14 1150:text-16 mb-24 text-[#1E1E1E]">اطلاعات قانونی</h2>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">قوانین سایت</a>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">اشتراک</a>
                            <a href="#" className="font-normal text-12 1150:text-14 leading-10 block text-right">حریم خصوصی</a>
                        </div>
                        <div className="w-278">
                            <h2 className="text-right font-bold text-14 1150:text-16 mb-24 text-[#1E1E1E]">تماس با ما</h2>
                            <div className="text-right flex">
                                <FiMapPin className=" inline-block w-20 mt-7 " />
                                <p className=" font-normal text-14 leading-8 inline-block w-246 text-right">تهران - يوسف آباد - خيابان فتحی شقاقی
                                    پلاک ۵۰ - طبقه همکف - واحد ۲</p>
                            </div>
                            <div className="text-right">
                                <FiPhoneCall className="inline-block w-20" />
                                <p className="font-normal text-16 leading-10 text-right inline-block">021-88558407</p>
                            </div>
                            <div className="text-right">
                                <FiPhoneCall className="inline-block w-20" />
                                <p className="font-normal text-16 leading-10  inline-block">021-88558407</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-90% m-auto bg-[#6E6E6E] text-[#6E6E6E] h-1 block mt-114"></div>
                <div className="h-83 w-90% pt-40 flex justify-between m-auto">
                    <div className="h-83 w-345">
                        <h4 className="font-medium text-14 text-right">باشگاه مشتریان</h4>
                        <div className="mt-4 text-right flex">

                            <input className="text-right w-230 h-50 border border-[#8A8A8A] rounded-[6px] px-12" placeholder="example@gmail.com" />

                            <div className="w-107 h-50 rounded-[6px] bg-[#728A2D] mr-8">
                                <p className="text-white pt-8 leading-8 text-center">عضویت</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-168 h-40 justify-between mt-[21.5px]">
                        <div className="w-32 h-32">
                            <Image alt="" src={instegeram} />
                        </div>
                        <div className="w-32 h-32">
                            <Image alt="" src={telegram} />
                        </div>
                        <div className="w-32 h-32">
                            <Image alt="" src={watsapp} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-75 h-85">
                            <Image alt="" src={Enamad} />
                        </div>
                        <div className="w-75 h-85 mr-16">
                            <Image alt="" src={Enamad} />
                        </div>
                        <div className="w-75 h-85 mr-16">
                            <Image alt="" src={Enamad} />
                        </div>
                        <div className="w-75 h-85 mr-16">
                            <Image alt="" src={Enamad} />
                        </div>
                    </div>
                </div>
                <p className="mt-73 mb-28 text-[#8A8A8A] text-12">۱۴۰۲ © تمامی حقوق اين پايگاه (سايت) متعلق به ابر پت‌شاپ می باشد و استفاده غير قانونی از آن پيگرد قانونی دارد.</p>
            </div >
                :
                <div className='flex-col gap-y-28 justify-center pt-10 shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.16)] mt-20 pb-20'>
                    <div className='flex flex-col m-auto gap-4'>
                        <p className='text-[#3B4054] text-12 leading-[24px] text-center'>تلفن پاسخگویی</p>
                        <p className=' text-[#070707] text-14 leading-[24px]text-center'>021-88550080-88550080</p>
                    </div>
                    <div className="w-260 sm:w-390 h-90 sm:h-135 bg-[url('../assets/image/2.png')] bg-no-repeat bg-center bg-cover m-auto grid grid-cols-2">
                        <h5 className='text-[#3B4054] text-12 leading-[24px] text-center col-span-full'>صفحات سایت</h5>
                        <button className='text-[#070707] text-14 leading-[24px] text-right'>درباره ما</button>
                        <button className='text-[#070707] text-14 leading-[24px] text-left'>تعرفه ها</button>
                        <button className='text-[#070707] text-14 leading-[24px] text-right'>تماس با ما</button>
                        <button className='text-[#070707] text-14 leading-[24px] text-left'>مقالات سایت</button>
                    </div>
                    <div className="grid grid-cols-4 w-full m-auto sm:w-600">
                        <div className="w-75 m-auto">
                            <Image alt="" src={kelidLogo} />
                        </div>
                        <div className="w-75 m-auto">
                            <Image alt="" src={kelidLogo} />
                        </div>
                        <div className="w-75 m-auto">
                            <Image alt="" src={kelidLogo} />
                        </div>
                        <div className="w-75 m-auto">
                            <Image alt="" src={kelidLogo} />
                        </div>
                    </div>
                    <div className="flex h-40 gap-x-8 m-auto">
                        <div className="w-32 h-32">
                            <Image alt="" src={instegramBlcak} />
                        </div>
                        <div className="w-32 h-32">
                            <Image alt="" src={telegramBlack} />
                        </div>
                        <div className="w-32 h-32">
                            <Image alt="" src={watsappBlack} />
                        </div>
                    </div>
                    <div className='text-[#1E1E1E] text-8 leading-[24px] m-auto'>۱۴۰۲ تمامی حقوق اين پايگاه (سايت) متعلق به گروه خدمات پزشکی می باشد و استفاده غير قانونی از آن پيگرد قانونی دارد</div>
                </div>}
        </footer>
    )
}

export default Footer;