import ArticleCardLast from "@/components/ArticleCardLast/ArticleCardLast";
import Title from "@/components/Title/Title";
import Image from "next/image";
import cat1 from "../../assets/image/cat."
const Article = () => {
    return (
        <>
            <div className="pt-100 px-70">
                <div className="mt-48 flex justify-between">
                    <div className="text-[#BDBDBD] text-12 font-extrabold hidden md:flex ">
                        <a href="#">صفحه اصلی</a>/<a href="#"> دسته بندی </a>/<p>زیر دسته بندی</p>
                    </div>
                    <div className="text-right text-neutral-500 text-xs font-normal">۰۲/اردیبهشت/۱۴۰۲</div>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        <h1 className="text-right text-black text-2xl font-bold mt-48">۵ روش از بین بردن ریزش موی گربه</h1>
                        <div className="w-[965px] text-right text-black text-base font-normal leading-10 mt-32">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</div>
                        <Image src={""} />
                    </div>
                    <div className="">
                        <div className="w-fit self-start">
                            <Title title="آخرین مقالات" className={""} textStyle="text-16" />
                        </div>
                        <div className="flex flex-col m-30 p-8 shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)]">
                            <ArticleCardLast />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;