import LeafletContainer from "@/components/LeafletContainer/LeafletContainer";
import Title from "@/components/Title/Title";
import Image from "next/image";
import Link from "next/link";
import instagram from "../../assets/image/instagramStone.png"
import telegram from "../../assets/image/telegramStone.png"
import watsapp from "../../assets/image/watsappStone.png"
import contactPNG from "../../assets/image/contactPNG.png"
const ContactUs = () => {
    return (

        <div className="pt-60 lg:pt-150 px-20 sm:px-68">
            <div className="text-[#BDBDBD] text-12 font-extrabold hidden md:flex ">
                <a href="#">صفحه اصلی</a>/<a href="#"> دسته بندی </a>/<p>زیر دسته بندی</p>
            </div>

            <Title title="تماس با ما" className="mr-0 ml-auto mt-36" />

            <div className="w-full lg:h-[600px] m-auto mt-28 relative">
                <div className="lg:absolute top-40 right-40 backdrop-blur-md bg-white lg:bg-[#728A2D26] h-[520px] w-full lg:w-[340px]  rounded-[26px] z-[900] flex flex-col px-16 py-32 gap-y-16 mb-54 lg:mb-auto">
                    <span className="text-right text-lime-950 text-xl font-normal">آدرس دفتر مرکزی:</span>
                    <p className=" text-justify text-lime-950 text-base font-normal">تهران، یوسف آباد، خیابان فتحی شقاقی، پلاک ۵۰، طبقه همکف، واحد ۲</p>
                    <div className="w-full bg-[#A6B677] h-1"></div>
                    <span className="text-right text-lime-950 text-xl font-normal">تلفن های پاسخگویی:</span>
                    <address className="w-[99px] text-center text-lime-950 text-sm font-normal" >۰۲۱-۸۸۵۵۰۰۸۰</address>
                    <address className="w-[99px] text-center text-lime-950 text-sm font-normal">۰۲۱-۸۸۵۵۲۱۹۰</address>
                    <div className="w-full bg-[#A6B677] h-1"></div>
                    <div className="flex flex-col gap-y-24">
                        <span className="text-right text-lime-950 text-xl font-normal">پست الکترونیک:</span>
                        <span className="text-lime-950 text-sm font-normal leading-[30px] text-left ml-0 mr-auto">info[at]kelideamlak[dot]com</span>
                    </div>
                    <div className="w-full bg-[#A6B677] h-1"></div>
                    <div className="text-right text-lime-950 text-xl font-normal">شبکه های اجتماعی:</div>
                    <div className="flex justify-center gap-x-16">
                        <Link href="#">
                            <Image alt={""} src={instagram} className="w-32 h-32" />
                        </Link>
                        <Link href="#">
                            <Image alt={""} src={telegram} className="w-32 h-32" />
                        </Link>
                        <Link href="#">
                            <Image alt={""} src={watsapp} className="w-32 h-32" />
                        </Link>
                    </div>
                </div>
                <LeafletContainer />
            </div>
            <div className="flex mt-70 gap-x-24">
                <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-x-16 gap-y-16 ">
                    <div className="flex flex-col gap-y-4">
                        <lable className="text-right text-stone-900 text-sm font-medium leading-relaxed">آدرس ایمیل</lable>
                        <input className="border bg-none border-[#8A8A8A]text-14 p-12 text-[#6E6E6E] rounded-md" placeholder="نام خود را وارد کنید" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <lable className="text-right text-stone-900 text-sm font-medium leading-relaxed">آدرس ایمیل</lable>
                        <input className="border bg-none border-[#8A8A8A]text-14 p-12 text-[#6E6E6E] rounded-md" placeholder="نام خود را وارد کنید" />
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <lable className="text-right text-stone-900 text-sm font-medium leading-relaxed">آدرس ایمیل</lable>
                        <input className="border bg-none border-[#8A8A8A]text-14 p-12 text-[#6E6E6E] rounded-md" placeholder="example@mail.com" />
                    </div>
                    <div className="flex flex-col gap-y-4 sm:col-span-3">
                        <lable className="text-right text-stone-900 text-sm font-medium leading-relaxed">متن پیام :</lable>
                        <textarea className="border bg-none border-[#8A8A8A]text-14 p-12 text-[#6E6E6E] rounded-md" placeholder="..." rows={11} />
                    </div>
                    <button className="px-12 py-8 h-50 sm:col-start-3 text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px] flex items-center justify-center gap-8 w-full xl:w-50% ml-0 mr-auto mt-16">
                        <span className="text-white">تلاش مجدد</span>
                    </button>
                </div>
                <Image alt={""} src={contactPNG} className="w-[330px] hidden lg:inline-block pt-30" />
            </div>
        </div>

    );
}

export default ContactUs;