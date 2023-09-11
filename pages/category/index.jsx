import AdSwiper from "@/components/AdSwiper/AdSwiper";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Title from "@/components/Title/Title";
import Advertising from "@/components/advertiseCard/AdvertiseCard";
import { useEffect, useState } from "react";
const Category = (props) => {
    const [accordion, setAccordion] = useState("a")
    function categoryClickHandler(event) {
        setAccordion(event.currentTarget.id)
    }

    useEffect(() => {
        console.log(props.data.advertise);
    }, [])

    return (
        <>
            <div className="w-90% m-auto pt-104">
                <AdSwiper className="pt-40 w-full" data={props.data.slider} fakeClass={"w-[1300px] h-[300px]"} />
                <div className="pt-80">
                    <Title title="آگهی‌های پت‌شاپ معمولی" />
                    <div className="flex w-full justify-between mt-64">
                        <div className="w-300 ">
                            <div className="w-full p-8 rounded-xl border border-gray-200 text-right">
                                <input className="w-full text-right border border-gray-300 py-8 px-24 rounded-lg bg-[#f4f4f4]" type="text" placeholder="جستجو" />
                                <h3 className="text-16 font-bold text-right mt-8">فیلتر های اعمال شده</h3>
                                <button className="text-[#EC0303] mt-8">حذف فیلتر ها x</button>
                            </div>
                            <h3 className="text-14 text-[#B9B9B9] mt-24 text-right">دسته‌بندی خود را انتخاب کنید:</h3>
                            <div>
                                {props.data && props.data.category.map((item) => (
                                    <div className="text-right text-14 mt-14 text-[#B9B9B9]">
                                        <div className="text-right items-center flex gap-x-8" onClick={categoryClickHandler} id={item.id}>
                                            <input type="radio" name="category" id={"category" + item.id} className="w-24 h-24" />
                                            <label className="text-right cursor-pointer" htmlFor={"category" + item.id} >{item.title}</label>
                                        </div>
                                        <div className={`pr-32 h-0 transition-all overflow-hidden ${+item.id === +accordion ? `h-${item.subCategory.length * 40}` : "h-0"}`}>
                                            {item.subCategory.map((item) => (
                                                <div className="flex items-center gap-x-8 my-16">
                                                    <input type="checkbox" id={"subCategory" + item.id} className="w-24 h-24 accent-[#728A2D] rounded-3xl " />
                                                    <label className="text-right text-14 text-[#6E6E6E] h-24 cursor-pointer">{item.title}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <input className="w-300 h-50 text-[#B9B9B9] border border-[#B9B9B9] rounded-lg text-right p-12 bg-[#f4f4f4] text-14 mt-14" placeholder="انتخاب استان" />
                            <input className="w-300 h-50 text-[#B9B9B9] border border-[#B9B9B9] rounded-lg text-right p-12 bg-[#f4f4f4] text-14 mt-14" placeholder="انتخاب شهر" />
                        </div>
                        <div>
                            <div className="grid grid-cols-4 1750:grid-cols-6 gap-x-40 1500:gap-x-60 1600:grid-cols-5 1600:gap-x-25 gap-y-32">
                                {props.data && props.data.advertise.map((item) => (<Advertising item={item} />))}
                            </div>
                            <div className="w-280 h-24 m-auto mt-32 flex justify-between">
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">{"<<"}</div>
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">{"<"}</div>
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">1</div>
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">2</div>
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">3</div>
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">...</div>
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">4</div>
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">{">"}</div>
                                <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">{">>"}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-128 w-90% m-auto" >
                    <Title title="مقالات" />
                    <div className="flex justify-between mt-80 [&>*:nth-child(5)]:hidden 1600:[&>*:nth-child(5)]:inline-block ">
                        {props.data.articleCards && props.data.articleCards.slice(0, 5).map((item) => (
                            <ArticleCard item={item} />
                        ))}
                    </div>
                    <a><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px]">همه مقالات</button></a>
                </div>
            </div>
        </>
    );
}

export default Category;

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/categoryPage")
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