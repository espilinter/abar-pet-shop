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
import AdvertiseCard from "../../components/AdvertiseCard/AdvertiseCard";
import UserAdvertiseCard from "../../components/UserAdvertiseCard/UserAdvertiseCard";

const UserAd = (props) => {
    return (

        <div className="w-90% m-auto pt-160">
            <div className="w-full flex flex-col sm:flex-row gap-x-40 gap-y-30">
                <div className="flex m-auto justify-between w-full sm:w-20% mt-0 sm:min-w-[250px]">
                    <div className={`bg-white backdrop-blur-[2.5px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] w-full sm:w-192 860:w-248 1200:w-310 h-135 sm:h-290 860:h-415 1200:h-[512px] rounded-[12px] p-12 1200:p-16 m-auto flex sm:inline-block justify-between `}>
                        <div className="w-25% sm:w-auto">
                            <Image alt="" className="w-80 sm:w-64 860:w-120 1200:w-150 h-80 sm:h-64 860:h-120 1200:h-150 m-auto rounded-full" src={logo} />
                            <h3 className="font-normal sm:font-medium text-12 sm:text-16 860:text-18 1200:text-20 leading-[24px] 1200:leading-[30px] text-center">پت شاپ بول داگ</h3>
                        </div>
                        <div className="hidden sm:block h-1 w-98% bg-[#535353] m-auto mt-4 860:mt-25 1200:mt-32"></div>
                        <div className="w-41% sm:w-auto flex flex-col justify-between">
                            <div className="flex justify-between mx-12 1200:mx-16 sm:mt-12 1200:mt-15">
                                <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">مسئول :</p>
                                <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">محمد محمدی</p>
                            </div>
                            <div className="flex justify-between mx-12 1200:mx-16 sm:mt-12 1200:mt-15">
                                <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">استان/شهر :</p>
                                <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">تهران/یوسف‌آباد</p>
                            </div>
                            <div className="flex justify-between mx-12 1200:mx-16 sm:mt-12 1200:mt-15">
                                <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">آگهی‌ها : ۲</p>
                                <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">عضویت: ۸ ماه</p>
                            </div>
                        </div>
                        <div className="hidden sm:block h-1 w-98% bg-[#535353] m-auto mt-14"></div>
                        <div className="flex flex-col w-30% sm:w-full justify-between">
                            <button className="w-full sm:w-98% h-36 sm:h-25 860:h-30 1200:h-38 text-[#728A2D] border rounded-[6px] border-[#728A2D] font-medium mt-8 860:mt-24 1200:mt-30 text-center text-12 860:text-16 self-end">09xxxxxxxxx</button>
                            <button className="w-full sm:w-98% h-36 sm:h-25 860:h-30 1200:h-38 text-[#fff] border rounded-[6px] bg-[#728A2D] font-medium mt-8 860:mt-24 text-center text-12 860:text-16 self-end">اطلاعات بیشتر</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 1200:grid-cols-4 1750:grid-cols-6 gap-x-40 1500:gap-x-60 1600:grid-cols-5 1600:gap-x-25 gap-y-32 w-full sm:w-80%" style={{ direction: "ltr" }} >
                    {props.data && props.data.advertise.map((item) => (<UserAdvertiseCard item={item} key={item.id} />)
                    )}
                </div>
            </div>
            <div className="overflow-y-scroll 1400:overflow-y-hidden ">
                <div className="flex w-full m-auto justify-between mt-80 min-w-[900px] md:min-w-[1200px] px-3 py-10 [&>*:nth-child(6)]:hidden 1600:[&>*:nth-child(6)]:inline-block [&>*:nth-child(7)]:hidden 1500:[&>*:nth-child(7)]:inline-block ">
                    {props.data && props.data.advertise.slice(0, 7).map((item) => (
                        <AdvertiseCard item={item} key={item.id} />
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <a className=""><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px] text-center">مشاهده همه</button></a>
            </div>
        </div>

    );
}

export default UserAd;

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/userAd")
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