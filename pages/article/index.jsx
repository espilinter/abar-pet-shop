import ArticleCardLast from "@/components/ArticleCardLast/ArticleCardLast";
import Title from "@/components/Title/Title";
import Image from "next/image";
import cat1 from "../../assets/image/cat2.jpg"
import cat2 from "../../assets/image/cat2.webp"
import watsapp from "../../assets/image/watsapp.png"
import telegram from "../../assets/image/telegram.png"

const Article = (props) => {
    return (
        <>
            <div className="pt-100 px-16 md:px-70">
                <div className="mt-48 flex justify-between">
                    <div className="text-[#BDBDBD] text-12 font-extrabold hidden md:flex ">
                        <a href="#">صفحه اصلی</a>/<a href="#"> دسته بندی </a>/<p>زیر دسته بندی</p>
                    </div>
                    <div className="text-right text-neutral-500 text-xs font-normal">۰۲/اردیبهشت/۱۴۰۲</div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_246px] gap-x-90 gap-y-30">
                    <div className="w-full">
                        <h1 className="text-right text-black text-2xl font-bold mt-48">۵ روش از بین بردن ریزش موی گربه</h1>
                        <div className="w-full text-right text-black text-base font-normal leading-10 mt-32">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</div>
                        <Image alt={""} src={cat2} className="w-full" />
                        <div className="w-full text-right text-black text-base font-normal leading-10 mt-32">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</div>
                        <div className="w-full text-right text-black text-base font-normal leading-10 mt-32">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</div>
                        <Image alt={""} src={cat1} className="w-full" />
                        <div className="w-full text-right text-black text-base font-normal leading-10 mt-32">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</div>
                        <div className="w-full text-right text-black text-base font-normal leading-10 mt-32">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</div>
                        <div className="w-full text-right text-black text-base font-normal leading-10 mt-32">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.</div>
                    </div>
                    <div className="flex flex-col gap-y-30 lg:gap-y-0">
                        <div className="">
                            <div className="w-fit self-start">
                                <Title title="آخرین مقالات" className={""} textStyle="text-16" />
                            </div>
                            <div className="flex justify-between lg:justify-stretch flex-row lg:flex-col my-0 md:my-30 mr-0 md:mr-30 p-8 lg:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] gap-y-16">
                                <ArticleCardLast />
                                <div className="w-full h-1 bg-[#B9B9B9] hidden lg:inline-block"></div>
                                <ArticleCardLast />
                                <div className="w-full h-1 bg-[#B9B9B9] hidden lg:inline-block"></div>
                                <ArticleCardLast />
                            </div>
                        </div>
                        <div className="">
                            <div className="w-fit self-start">
                                <Title title="بیشترین بازدید" className={""} textStyle="text-16" />
                            </div>
                            <div className="flex justify-between lg:justify-stretch flex-row lg:flex-col p-8 lg:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] gap-y-16 my-0 md:my-30 mr-0 md:mr-30">
                                <ArticleCardLast />
                                <div className="w-full h-1 bg-[#B9B9B9] hidden lg:inline-block"></div>
                                <ArticleCardLast />
                                <div className="w-full h-1 bg-[#B9B9B9] hidden lg:inline-block"></div>
                                <ArticleCardLast />
                                <div className="w-full h-1 bg-[#B9B9B9] hidden lg:inline-block"></div>
                                <button className="w-full h-38 bg-[#728A2D] text-white rounded-md  items-center justify-center m-auto hidden lg:flex">همه مقالات</button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-full flex flex-col mt-100">
                            <div className="w-full flex flex-col md:flex-row justify-between gap-y-24">
                                <div className="flex items-center gap-x-16">
                                    <span className="text-black text-2xl font-bold ">برچسب ها : </span>
                                    <div className="h-20 p-8 bg-lime-500 bg-opacity-20 rounded border border-lime-600 justify-center items-center gap-4 inline-flex">
                                        <span className="text-center text-lime-600 text-[10px] font-normal">حیوان خانگی</span>
                                    </div>
                                    <div className="h-20 p-8 bg-lime-500 bg-opacity-20 rounded border border-lime-600 justify-center items-center gap-4 inline-flex">
                                        <span className="text-center text-lime-600 text-[10px] font-normal">گربه</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-16">
                                    <div className="text-black text-2xl font-bold ">اشتراک مطلب : </div>
                                    <Image alt={""} src={watsapp} className="w-32 h-32" />
                                    <Image alt={""} src={telegram} className="w-32 h-32" />
                                </div>

                            </div>
                            <div className="grid grid-cols-4 w-full mt-80 gap-16 items-center">
                                <div className="col-span-full flex flex-col gap-y-4">
                                    <lable className="text-right text-[#1E1E1E] text-sm font-medium leading-relaxed">نوشتن نظر</lable>
                                    <textarea className="p-12 rounded-md border border-[#8A8A8A] h-140" placeholder="..." />
                                </div>
                                <div className="flex flex-col gap-y-4 col-span-4 md:col-span-2 xl:col-span-1">
                                    <lable className="text-right text-stone-900 text-sm font-medium leading-relaxed ">نام و نام خانوادگی</lable>
                                    <input type="text" placeholder="نام خود را وارد کنید" className="p-12 rounded-md border border-[#8A8A8A] h-50" />
                                </div>
                                <div className="flex flex-col gap-y-4 col-span-4 md:col-span-2 xl:col-span-1">
                                    <lable className="text-right text-stone-900 text-sm font-medium leading-relaxed">آدرس ایمیل</lable>
                                    <input type="text" placeholder="example@mail.com" className="p-12 rounded-md border border-[#8A8A8A] h-50" />
                                </div>
                                <div className="flex flex-col gap-y-4 col-span-4 md:col-span-2 xl:col-span-1">
                                    <lable className="text-right text-stone-900 text-sm font-medium leading-relaxed">شماره تماس</lable>
                                    <input type="text" placeholder="********* 09 (اختیاری)" className="p-12 rounded-md border border-[#8A8A8A] h-50" />
                                </div>

                                <button className="w-full h-50 bg-[#728A2D] text-white rounded-md flex items-center justify-center m-auto mt-25 col-span-1 md:col-span-2 xl:col-span-1 col-start-4 md:col-start-auto">ثبت نظر</button>
                            </div>
                            <div className="w-full h-16 justify-between items-center inline-flex mt-30">
                                <span className="text-right text-stone-900 text-xl font-medium leading-[30px]">نظرات ثبت شده</span>
                                <span className="text-right text-zinc-500 text-base font-bold">تعداد نظرات ثبت شده : ۱۲</span>
                            </div>
                            <div className="flex flex-col mt-50 gap-y-30">
                                <div className="max-w-[708px]  px-24 py-16 bg-zinc-100 rounded-lg shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] flex-col justify-center items-start gap-16 inline-flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-right text-stone-900 text-base font-medium">محمد محمدی</div>
                                        <div className="text-right text-neutral-500 text-xs font-normal">۱ ماه پیش</div>
                                    </div>
                                    <div className="self-stretch text-right text-stone-900 text-base font-normal leading-10">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند</div>
                                </div>
                                <div className="max-w-[708px] px-24 py-16 bg-zinc-100 rounded-lg flex-col justify-center items-start gap-16 inline-flex shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] mr-auto">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-right text-blue-700 text-base font-medium">پاسخ ادمین ۱</div>
                                        <div className="text-right text-neutral-500 text-xs font-normal">۱ ماه پیش</div>
                                    </div>
                                    <div className="self-stretch text-right text-stone-900 text-base font-normal leading-10">  (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;