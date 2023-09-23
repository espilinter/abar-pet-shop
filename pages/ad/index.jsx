import AdSwiper from "@/components/AdSwiper/AdSwiper";
import Image from "next/image";
import logo from "../../assets/image/electedLogo.png"
import instagramGray from "../../assets/image/instagramGray.png"
import watsappGray from "../../assets/image/watsappGray.png"
import telegramGray from "../../assets/image/telegramGray.png"
import unsave from "../../assets/image/unsave.png"
import elementGray from "../../assets/image/elementGray.png"
import locationGray from "../../assets/image/locationGray.png"
import callGray from "../../assets/image/callGray.png"
import AdvertiseCard from "../../components/advertiseCard/AdvertiseCard";


const Ad = (props) => {
    return (
        <>
            <div className="w-90% m-auto pt-160 ">
                <div className="flex w-full m-auto justify-between ">
                    <AdSwiper className="w-75% h-[455px] " data={props.data.slider} />
                    <div className="w-300 h-[455px] bg-white rounded-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] p-16">
                        <Image src={logo} className="m-auto rounded-full" />
                        <h2 className="text-20 leading-[30px] font-medium text-[#2B2C2B] mt-15">پت‌شاپ بولداگ</h2>
                        <div className="border-y border-[#8A8A8A] py-15 flex flex-col gap-y-15 mt-10">
                            <div className="flex justify-between px-16 items-center">
                                <Image src={instagramGray} className=" w-32 h-32" />
                                <lable className="text-[#8A8A8A] text-16 leading-[30px] font-bold ">instagram</lable>
                            </div>
                            <div className="flex justify-between  px-16 items-center">
                                <Image src={telegramGray} className=" w-32 h-32" />
                                <lable className="text-[#8A8A8A] text-16 leading-[30px] font-bold ">telegram</lable>
                            </div>
                            <div className="flex justify-between  px-16 items-center">
                                <Image src={watsappGray} className=" w-32 h-32" />
                                <lable className="text-[#8A8A8A] text-16 leading-[30px] font-bold ">watsapp</lable>
                            </div>
                        </div>
                        <div className="flex gap-x-8 mt-24">
                            <buton className="py-4 px-12 bg-[#728A2D] rounded-md w-135 h-38 text-white leading-[30px]">ورود به سایت</buton>
                            <buton className="py-4 px-12 text-[#728A2D] rounded-md w-135 h-38 bg-white leading-[30px] border border-[#728A2D] flex items-center justify-around"><span>ذخیره آگهی</span><Image src={unsave} className="w-12 h-15" /></buton>
                        </div>
                    </div>
                </div>
                <div className="text-right w-58% mt-40">
                    <h1 className="text-[#535353] font-bold text-24 text-right">پت‌شاپ بول داگ</h1>
                    <p className="text-[#1E1E1E] font-norma text-right leading-[40px] text-16 mt-16">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد .</p>
                </div>
                <div className="text-right w-58% mt-40 flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-8"><Image src={elementGray} className="w-24 h-24" /><p className="text-[#1E1E1E] text-14 leading-[40px] font-medium">امکانات پت‌شاپ: پزشک ، لوازام حیوانات اهلی </p></div>
                    <div className="flex items-center gap-x-8"><Image src={locationGray} className="w-24 h-24" /><p className="text-[#1E1E1E] text-14 leading-[40px] font-medium">تهران - يوسف آباد - خيابان فتحی شقاقی - پلاک ۵۰ - طبقه همکف - واحد ۱۹ </p></div>
                    <div className="flex items-center gap-x-8"><Image src={callGray} className="w-24 h-24" /><p className="text-[#1E1E1E] text-14 leading-[40px] font-medium">۰۲۱-۸۸۵۵۲۴۰۷ , ۰۲۱-۸۸۵۵۲۴۰۷</p></div>
                </div>
                <div className="overflow-y-scroll 1400:overflow-y-hidden ">
                    <div className="flex w-full m-auto justify-between mt-80 min-w-[1200px] px-3 py-10 [&>*:nth-child(6)]:hidden 1600:[&>*:nth-child(6)]:inline-block [&>*:nth-child(7)]:hidden 1500:[&>*:nth-child(7)]:inline-block ">
                        {props.data && props.data.advertise.slice(0, 7).map((item) => (
                            <AdvertiseCard item={item} />
                        ))}
                    </div>
                </div>
                <a className=""><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px]">مشاهده همه</button></a>
            </div >
        </>
    );
}

export default Ad;

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/ad")
    const data = await res.json()
    if (data.length === 0) {
        return { notFound: true }
    }
    return {
        props: {
            data: data
        },
        revalidate: 10,
    }
}