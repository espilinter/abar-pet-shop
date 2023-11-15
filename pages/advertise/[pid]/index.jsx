import AdSwiper from "@/components/AdSwiper/AdSwiper";
import Image from "next/image";
import logo from "../../../assets/image/electedLogo.png"
import instagramGray from "../../../assets/image/instagramGray.png"
import watsappGray from "../../../assets/image/watsappGray.png"
import telegramGray from "../../../assets/image/telegramGray.png"
import unsave from "../../../assets/image/unsave.png"
import elementGray from "../../../assets/image/elementGray.png"
import locationGray from "../../../assets/image/locationGray.png"
import callGray from "../../../assets/image/callGray.png"
import AdvertiseCard from "../../../components/AdvertiseCard/AdvertiseCard";
import LeafletContainer from "@/components/LeafletContainer/LeafletContainer";
import { useEffect, useState } from "react";
import axios from "axios";
// import fs from 'fs'
// import path from 'path'

const Ad = (props) => {
    const [save, setSave] = useState(props.data.saved)
    useEffect(() => {
        console.log(props.data);
    }, [])

    const { data } = props;
    if (!data) {
        return <p>Loding ...</p>
    }
    function saveAdvertise(event) {
        const object = {
            "advertise_id": event.currentTarget.id
        }
        console.log(object);
        axios.post("https://api.abarpetshop.com/api/v1/favorite-advertise/store", object,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("Authorization_token"),
                }
            })
            .then((res) => {
                console.log(res);
                setSave(res.data.liked)
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="w-90% m-auto pt-100 lg:pt-160 ">
            <div className="flex flex-col lg:flex-row w-full m-auto items-center lg:justify-between gap-20 ">
                <AdSwiper className="w-full lg:w-75% h-auto lg:h-[455px] " data={props.data.images} />
                <div className="w-full justify-between flex flex-row md:flex-col md:w-300 h-auto md:h-[455px] bg-white rounded-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] p-8 md:p-16">
                    <Image alt={""} src={logo} className="h-90 w-90 md:w-150 md:h-150 md:m-auto rounded-lg md:rounded-full" />
                    <div className="flex flex-col justify-between">
                        <h2 className="text-[100%] md:text-20 leading-[30px] font-medium text-[#2B2C2B] md:mt-15 text-center">{props.data.title}</h2>
                        <div className="md:border-y md:border-[#8A8A8A] md:py-15 flex flex-row md:flex-col gap-y-15 md:mt-10 justify-between">
                            <div className="flex justify-between md:px-16 items-center">
                                <Image alt={""} src={instagramGray} className=" w-32 h-32" />
                                <lable className="text-[#8A8A8A] text-16 leading-[30px] font-bold hidden md:inline-block">instagram</lable>
                            </div>
                            <div className="flex justify-between md:px-16 items-center">
                                <Image alt={""} src={telegramGray} className=" w-32 h-32" />
                                <lable className="text-[#8A8A8A] text-16 leading-[30px] font-bold hidden md:inline-block">telegram</lable>
                            </div>
                            <div className="flex justify-between md:px-16 items-center">
                                <Image alt={""} src={watsappGray} className=" w-32 h-32" />
                                <lable className="text-[#8A8A8A] text-16 leading-[30px] font-bold hidden md:inline-block">watsapp</lable>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-y-16 flex-col md:flex-row gap-x-8 md:mt-24 justify-between">
                        <button className="py-4 px-12 bg-[#728A2D] rounded-md w-135 h-38 text-white text-center leading-[30px]">ورود به سایت</button>
                        <button className="py-4 px-12 text-[#728A2D] rounded-md w-135 h-38 bg-white leading-[30px] border border-[#728A2D] flex items-center justify-around text-center" onClick={saveAdvertise} id={props.data.id}>
                            <span>{!save ? "ذخیره آگهی" : "ذخیره شده"}</span>
                            <i className={`${!save ? "aps-bookmark-o" : "aps-bookmark"} text-18`}></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-40 lg:flex-row gap-32">
                <div className="w-full lg:flex-[2]">
                    <div className="text-right ">
                        <h1 className="text-[#535353] font-bold text-24 text-right">{props.data.title}</h1>
                        <p className="text-[#1E1E1E] font-norma text-right leading-[40px] text-16 mt-16">
                            {props.data.description}
                            {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد . */}
                        </p>
                    </div>
                    <div className="text-right  mt-40 flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-8">
                            <Image alt={""} src={elementGray} className="w-24 h-24" />
                            <p className="text-[#1E1E1E] text-14 leading-[40px] font-medium">امکانات پت‌شاپ: پزشک ، لوازام حیوانات اهلی </p>
                        </div>
                        <div className="flex items-center gap-x-8"><Image alt={""} src={locationGray} className="w-24 h-24" />
                            <p className="text-[#1E1E1E] text-14 leading-[40px] font-medium">{props.data.address}</p>
                        </div>
                        <div className="flex items-center gap-x-8">
                            <Image alt={""} src={callGray} className="w-24 h-24" />
                            <p className="text-[#1E1E1E] text-14 leading-[40px] font-medium">{props.data.phone}</p>
                        </div>
                    </div>
                </div>
                <div className="adLocation lg:flex-[1]">
                    <LeafletContainer location={props.data.map} />
                </div>
            </div>
            <div className="overflow-y-scroll 1400:overflow-y-hidden ">
                <div className="flex w-full m-auto justify-between mt-80 min-w-[900px] md:min-w-[1200px] px-3 py-10 [&>*:nth-child(6)]:hidden 1600:[&>*:nth-child(6)]:inline-block [&>*:nth-child(7)]:hidden 1500:[&>*:nth-child(7)]:inline-block ">
                    {/* {props.slider && props.slider.slice(0, 7).map((item) => (
                            <AdvertiseCard item={item} key={item.id} />
                        ))} */}
                </div>
            </div>
            <div className="w-full flex justify-center">
                <a className=""><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px] text-center">مشاهده همه</button></a>
            </div>

        </div >

    );
}

async function getData() {
    const data = await axios.get(`https://api.abarpetshop.com/api/v1/advertises`)
    return data.data.data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const allData = await getData();
    const data = allData.find((item) => item.id === productId);
    const res = await fetch(`http://localhost:3001/advertise`)
    const slider = await res.json()
    if (!data) {
        return { notFound: true };
    }
    return {
        props: {
            data: data,
            slider: slider
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const data = await getData()
    const ids = data.map((item) => item.id);
    const pathsWithParams = ids.map((id) => {
        return {
            params: { pid: id.toString() }
        }
    });
    return {
        paths: pathsWithParams,
        fallback: 'blocking'
    }
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: { id: "1" }
//             }
//         ],
//         fallback: "blocking"
//     }
// }

// export async function getStaticProps(context) {
//     const { params } = context;
//     const res = await fetch(`http://localhost:3001/ad/advertise`)
//     const data = await res.json()
//     if (data.length === 0) {
//         return { notFound: true }
//     }
//     return {
//         props: {
//             data: data
//         },
//         revalidate: 10,
//     }
// }

export default Ad;
// export default function Ad({ repo }) {
//     return repo.stargazers_count
// }