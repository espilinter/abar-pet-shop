import AdSwiper from "@/components/AdSwiper/AdSwiper";
import Title from "@/components/Title/Title";
import Advertising from "@/components/advertiseCard/AdvertiseCard";
import { useState } from "react";
const Category = (props) => {
    const [accordion, setAccordion] = useState("a")
    function categoryClickHandler(event) {
        console.log(event.target.id);
        if (+event.target.id === +accordion) {
            setAccordion("a")
        } else {
            setAccordion(event.target.id)
        }
    }
    return (
        <>
            <div className="w-90% m-auto pt-104">
                <AdSwiper className="pt-40" />
                <div className="pt-80">
                    <Title title="آگهی‌های پت‌شاپ معمولی" />
                    <div className="flex w-full justify-between mt-64">
                        <div className="w-300 h-[950px] ">
                            <div className="w-full p-8 rounded-xl border border-gray-200 text-right">
                                <input className="w-full text-right border border-gray-300 py-8 px-24 rounded-lg" type="text" placeholder="جستجو" />
                                <h3 className="text-16 font-bold text-right mt-8">فیلتر های اعمال شده</h3>
                                <button className="text-[#EC0303] mt-8">حذف فیلتر ها x</button>
                            </div>

                            <h3 className="text-14 text-[#B9B9B9] mt-24 text-right">دسته‌بندی خود را انتخاب کنید:</h3>
                            <div>
                                {props.data && props.data.category.map((item) => (
                                    <div className="text-right text-14 mt-14 text-[#B9B9B9]">

                                        <input type="radio" name="category" id={"category" + item.id} />
                                        <label className="text-right cursor-pointer" htmlFor={"category" + item.id} onClick={categoryClickHandler} id={item.id}>{item.title}</label>

                                        {/* {+item.id === +accordion ? <div className="pr-32">
                                            {item.subCategory.map((item) => (
                                                <button className="text-right block">{item.title}</button>
                                            ))}
                                        </div> : ""} */}
                                        <div className={`pr-32 h-0 transition-all overflow-hidden ${+item.id === +accordion ? `h-${item.subCategory.length * 40}` : "h-0"}`}>
                                            {item.subCategory.map((item) => (
                                                <button className="text-right block text-[#6E6E6E] h-24 my-16">{item.title}</button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-4 gap-x-40 gap-y-32">
                                {props.data && props.data.advertise.map((item) => (<Advertising item={item} />))}
                            </div>
                            <div className="w-280 h-24 bg-slate-400 m-auto mt-32"></div>
                        </div>
                    </div>
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