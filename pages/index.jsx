import { useEffect, useState } from "react";
import fs from 'fs'
import path from 'path'
import background1 from "../assets/image/framePage.png";
import ad1 from "../assets/image/ad1.png"
import system from "../assets/image/image3.png"
import dot3 from "../assets/image/dot3.png"
import timer1 from "../assets/image/timer1.png"
import user from "../assets/image/user.png"
import dots from "../assets/image/dots.png"
import note from "../assets/image/note.png"
import bg1 from "../assets/image/bg1.png"
import bg2 from "../assets/image/bg2.png"
import bg3 from "../assets/image/bg3.png"
import addSquare from "../assets/image/add-square.png"
import electedLogo from "../assets/image/electedLogo.png"
import ElectedMembersCard from "../components/electedMembersCard/ElectedMembersCard"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
import SimilarSystemsCard from "../components/similarSystemsCard/similarSystemsCard";
import Title from "../components/Title/Title.jsx";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import AdvertiseCard from "../components/advertiseCard/AdvertiseCard";
import Image from "next/image";
import SwiperCoverflow from "@/components/SwiperCoverflow/SwiperCoverflow";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import { revalidatePath } from "next/cache";

const Home = (props) => {
    const [data, setData] = useState([])
    const [secondCircleColor, setSecondCircleColor] = useState("border-2 border-[#B9B9B9]")
    const [firstLineColor, setFirstLineColor] = useState("bg-[#B9B9B9]")
    const [thirdCircleColor, setThirdCircleColor] = useState("border-2 border-[#B9B9B9]")
    const [secondtLineColor, setSecondLineColor] = useState("bg-[#B9B9B9]")
    const [firstBoxShadow, setFirstBoxShadow] = useState("shadow-[0_0_16px_-2px_rgba(0,0,0,0.1)] backdrop-blur-[2.5px]")
    const [secondBoxShadow, setSecondBoxShadow] = useState("")
    const [thirdBoxShadow, setThirdBoxShadow] = useState("")
    const [firstCircleFill, setFirstCircleFill] = useState(0)
    const [allAd, setAllAd] = useState(0)
    const [allAdNumber, setAllAdNumber] = useState(4056)
    const [secondCircleFill, setSecondCircleFill] = useState(0)
    const [activeAd, setActiveAd] = useState(0)
    const [allActiveAd, setAllActiveAd] = useState(630)
    const [thirdCircleFill, setThirdCircleFill] = useState(0)
    const [membership, setMembership] = useState(0)
    const [allMembership, setAllMembership] = useState(147)
    const articleCard = [1, 2, 3, 4]
    useEffect(() => {
        setData(props.data)
        firstStep()
        const x = window.matchMedia("(max-width: 700px)")
        console.log(x);
    }, [])
    useEffect(() => {
        let a = false;
        const handleScroll = (event) => {
            if (window.scrollY >= 3300 && a === false) {
                firstCounterFunction()
                firstCircleFillFunction()
                secondCounterFunction()
                secondCircleFillFunction()
                thirdCounterFunction()
                thirdcircleFillFunction()
                a = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function firstCounterFunction() {
        // for (let i = 0; i <= allAdNumber; i++) {
        //     setTimeout(() => {
        //         setAllAd(i)
        //     }, i * (1000 / allAdNumber));
        // }
        setAllAd(allAdNumber)
    }

    function firstCircleFillFunction() {
        // for (let i = 0; i <= 80; i++) {
        //     setTimeout(() => {
        //         setFirstCircleFill(i)
        //     }, i * (1000 / 85));
        // }
        setFirstCircleFill(85)
    }

    function secondCounterFunction() {
        // for (let i = 0; i <= allActiveAd; i++) {
        //     setTimeout(() => {
        //         setActiveAd(i)
        //     }, i * (1000 / allActiveAd));
        // }
        setActiveAd(allActiveAd)
    }

    function secondCircleFillFunction() {
        // for (let i = 0; i <= 75; i++) {
        //     setTimeout(() => {
        //         setSecondCircleFill(i)
        //     }, i * (1000 / 75));
        // }
        setSecondCircleFill(75)
    }

    function thirdCounterFunction() {
        // for (let i = 0; i <= allMembership; i++) {
        //     setTimeout(() => {
        //         setMembership(i)
        //     }, i * (1000 / allMembership));
        // }
        setMembership(allMembership)
    }

    function thirdcircleFillFunction() {
        // for (let i = 0; i <= 55; i++) {
        //     setTimeout(() => {
        //         setThirdCircleFill(i)
        //     }, i * (1000 / 55));
        // }
        setThirdCircleFill(55)
    }

    function toFarsiNumber(n) {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return n.toString().replace(/\d/g, x => farsiDigits[x]);
    }

    function firstStep() {
        setSecondCircleColor("border-2 border-[#B9B9B9]")
        setFirstLineColor("bg-[#B9B9B9]")
        setThirdCircleColor("border-2 border-[#B9B9B9]")
        setSecondLineColor("bg-[#B9B9B9]")
        setFirstBoxShadow("shadow-[0_0_16px_-2px_rgba(0,0,0,0.1)] backdrop-blur-[2.5px]")
        setThirdBoxShadow("")
        setTimeout(() => {
            secondStep()
        }, 2000);
    }

    function secondStep() {
        setSecondCircleColor("bg-[#728A2D]")
        setFirstLineColor("bg-[#728A2D]")
        setFirstBoxShadow("")
        setSecondBoxShadow("shadow-[0_0_16px_-2px_rgba(0,0,0,0.1)] backdrop-blur-[2.5px]")
        setTimeout(() => {
            thirdStep()
        }, 2000);
    }

    function thirdStep() {
        setThirdCircleColor("bg-[#728A2D]")
        setSecondLineColor("bg-[#728A2D]")
        setSecondBoxShadow("")
        setThirdBoxShadow("shadow-[0_0_16px_-2px_rgba(0,0,0,0.1)] backdrop-blur-[2.5px]")

        setTimeout(() => {
            firstStep()
        }, 2000);
    }

    return (
        <div className="bg-[#f4f4f4] pb-96 relative">
            <div className="w-full h-273 sm:h-400 lg:h-[100vh] bg-[url('../assets/image/framePage.png')] bg-top bg-cover bg-no-repeat">
            </div>
            {/* <div className="absolute left-0 top-[4472px] w-full bg-[url('../assets/image/bg1.png')]"></div>
            <div className="absolute top-[2772px] right-0"></div>
            <div className="absolute top-[2843px]"></div> */}
            <div className="absolute z-[1] top-0 w-full">
                <div className="w-full h-273 lg:h-[100vh] bg-[url('../assets/image/framePage.png')] bg-top bg-cover bg-no-repeat">
                </div>
                <Image alt="" src={bg1} className=" w-full mt-[720px] sm:mt-[1100px] md:mt-[1400px] 1440:mt-[1820px] 1600:mt-[1750px] relative z-[1]" />
                <Image alt="" src={bg2} className=" mt-[-200px] sm:mt-[-405px] z-[0] relative" />
                <Image alt="" src={bg3} className=" ml-0 mr-auto" />
            </div>
            <div className="z-[2] relative">
                <div className="mt-32 md:mt-40">
                    <Title title="سامانه های مشابه" />
                </div>
                <div className="w-full lg:w-90% 1400:w-70% h-120 items-center sm:h-170 m-auto md:mt-40 pt-12 overflow-x-scroll 900:overflow-x-hidden 900:mr-auto">
                    <div className="flex gap-x-40 p-10 900:justify-around m-auto items-center ">
                        {data.similarSystems && data.similarSystems.slice(0, 6).map((item) => (<SimilarSystemsCard item={item} img={system} />))}
                        <div className="w-60 h-72 sm:h-130 pl-20"  >
                            <div className="bg-[#ffffff] w-40 h-40 rounded-full sm:mt-40"><Image alt="" src={dot3} className="p-9" width={40} /></div>
                            <p className="text-12 mt-8 900:mt-28 text-center">بیشتر</p>
                        </div>
                    </div>
                </div>
                <div className="w-[1300] m-auto mt-32 md:mt-80">
                    <Image alt="" className="m-auto" src={ad1} />
                </div>
                <div className="mt-32 md:mt-40">
                    <Title title="دسته بندی" />
                </div>
                <div className="w-full 1440:w-90% m-auto mt-16 md:mt-48 overflow-x-scroll 1440:overflow-x-hidden">
                    <div className="min-w-[800px] sm:min-w-[1400px] flex 1440:grid 1440:grid-cols-4 1440:gap-y-[68px] 1440:h-[700px] sm:h-250 h-120">
                        {data.categury && data.categury.map((item) => (<CategoryCard item={item} img={system} />))}
                    </div>
                </div>
                <div className="mt-60 md:mt-154">
                    <Title title="چرا ابر پت شاپ" />
                </div>
                <div className="flex w-95% 940:w-90% 1440:w-75% m-auto sm:mt-50 900:mt-0">
                    <div className="m-auto w-116 h-141 900:w-268 900:h-254 1220:w-336 1220:h-318 relative mt-32 md:mt-80 500:scale-150 md:scale-[180%] 900:scale-100">
                        <div className="w-32 900:w-76 1220:w-96 h-32 900:h-76 1220:h-96 rounded-full bg-white pt-8 900:pt-19 1220:pt-24 mr-42 900:mr-96 1220:mr-120 z-[2] absolute mt-[-17px] 900:mt-[-37px] 1200:mt-[-48px] shadow-[0_4px_44px_rgba(0,0,0,0.12)]">
                            <Image alt="" src={timer1} className="w-16 900:w-38 1220:w-48 h-16 900:h-38 1220:h-48 m-auto" />
                        </div>
                        <div className="w-116 900:w-268 h-124 900:h-254 1220:w-336 1220:h-318 shadow-[0_4px_44px_rgba(0,0,0,0.12)] pt-25 900:pt-60 1220:pt-88 m-auto bg-white z-0 rounded-[18px] ">
                            <div className="w-103 900:w-212 1220:w-256 h-152 1220:h-190 m-auto">
                                <h2 className="text-10 900:text-16 1220:text-20 font-bold text-center ">انتخاب اقتصادی</h2>
                                <p className="text-8 900:text-13 1220:text-16 mt-10 w-100 900:w-204 1220:w-256 text-[#616161] leading-normal 900:leading-8 text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                            </div>
                        </div>
                    </div>
                    <div className=" m-auto w-116 h-141 900:w-268 900:h-254 1220:w-336 1220:h-318 relative mt-70 md:mt-160 500:scale-150 md:scale-[180%] 900:scale-100">
                        <div className="w-32 900:w-76 1220:w-96 h-32 900:h-76 1220:h-96 rounded-full bg-white pt-8 900:pt-19 1220:pt-24 mr-42 900:mr-96 1220:mr-120 z-[2] absolute mt-[-17px] 900:mt-[-37px] 1200:mt-[-48px] shadow-[0_4px_44px_rgba(0,0,0,0.12)]">
                            <Image alt="" src={timer1} className="w-16 900:w-38 1220:w-48 h-16 900:h-38 1220:h-48 m-auto" />
                        </div>
                        <div className="w-116 900:w-268 h-124 900:h-254 1220:w-336 1220:h-318 shadow-[0_4px_44px_rgba(0,0,0,0.12)] pt-25 900:pt-60 1220:pt-88 m-auto bg-white z-0 rounded-[18px] ">
                            <div className="w-103 900:w-212 1220:w-256 h-152 1220:h-190 m-auto">
                                <h2 className="text-10 900:text-16 1220:text-20 font-bold text-center ">انتخاب اقتصادی</h2>
                                <p className="text-8 900:text-13 1220:text-16 mt-10 w-100 900:w-204 1220:w-256 text-[#616161] leading-normal 900:leading-8 text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                            </div>
                        </div>
                    </div>
                    <div className="m-auto w-116 h-141 900:w-268 900:h-254 1220:w-336 1220:h-318 relative mt-32 md:mt-80 500:scale-150 md:scale-[180%] 900:scale-100">
                        <div className="w-32 900:w-76 1220:w-96 h-32 900:h-76 1220:h-96 rounded-full bg-white pt-8 900:pt-19 1220:pt-24 mr-42 900:mr-96 1220:mr-120 z-[2] absolute mt-[-17px] 900:mt-[-37px] 1200:mt-[-48px] shadow-[0_4px_44px_rgba(0,0,0,0.12)]">
                            <Image alt="" src={timer1} className="w-16 900:w-38 1220:w-48 h-16 900:h-38 1220:h-48 m-auto" />
                        </div>
                        <div className="w-116 900:w-268 h-124 900:h-254 1220:w-336 1220:h-318 shadow-[0_4px_44px_rgba(0,0,0,0.12)] pt-25 900:pt-60 1220:pt-88 m-auto bg-white z-0 rounded-[18px] ">
                            <div className="w-103 900:w-212 1220:w-256 h-152 1220:h-190 m-auto">
                                <h2 className="text-10 900:text-16 1220:text-20 font-bold text-center ">انتخاب اقتصادی</h2>
                                <p className="text-8 900:text-13 1220:text-16 mt-10 w-100 900:w-204 1220:w-256 text-[#616161] leading-normal 900:leading-8 text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32 md:mt-162">
                    <Title title="خدمات و مزیت ها" />
                </div>
                <div className="mt-32 md:mt-48 flex flex-row-reverse lg:flex-col h-[792px] lg:h-auto items-center lg:items-start m-auto">
                    <div className="flex gap-x-[7%] w-90% m-auto gap-y-48 flex-col lg:flex-row basis-3/4 lg:basis-1">
                        <div className={`w-264 lg:w-388 h-232 lg:h-298 rounded-[16px] ${firstBoxShadow} pt-20 m-auto transition-shadow duration-1000`}>
                            <Image alt="" src={user} className="w-32 lg:w-100 h-32 lg:h-100 m-auto" />
                            <h3 className="text-14 lg:text-18 mt-16 text-center">1.ثبت نام</h3>
                            <p className="font-medium text-12 lg:text-15 text-[#8A8A8A] leading-[30px] mt-20 text-center">به راحتی با یک کلیک می‌شود در لینک‌بورد ثبت نام کرد</p>
                            <div className="w-72 lg:w-96 h-36 lg:h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6 text-center text-14 lg:text-16">ثبت نام</div>
                        </div>
                        <div className={`w-264 lg:w-388 h-232 lg:h-298 rounded-[16px] ${secondBoxShadow} pt-20 m-auto transition-shadow duration-1000`}>
                            <Image alt="" src={note} className="w-32 lg:w-100 h-32 lg:h-100 m-auto" />
                            <h3 className="text-14 lg:text-18 mt-16 text-center">۲. میان آگهی ها جستجو کنید</h3>
                            <p className="font-medium text-12 lg:text-15 text-[#8A8A8A] leading-[30px] mt-20 text-center">مراحل ساده ثبت آگهی در دسته‌بندی های مختلف</p>
                            <div className="w-72 lg:w-96 h-36 lg:h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6 text-center text-14 lg:text-16">آگهی ها</div>
                        </div>
                        <div className={`w-264 lg:w-388 h-232 lg:h-298 rounded-[16px] ${thirdBoxShadow} pt-20 m-auto transition-shadow duration-1000`}>
                            <Image alt="" src={addSquare} className="w-32 lg:w-100 h-32 lg:h-100 m-auto" />
                            <h3 className="text-14 lg:text-18 mt-16 text-center">۳. آگهی خود را ثبت کنید </h3>
                            <p className="font-medium text-12 lg:text-15 text-[#8A8A8A] leading-[30px] mt-20 text-center">مراحل ساده ثبت آگهی در دسته‌بندی های مختلف</p>
                            <div className="w-72 lg:w-96 h-36 lg:h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6 text-center text-14 lg:text-16">ثبت آگهی</div>
                        </div>
                    </div>
                    <div className="mt-40 w-71% lg:mr-[16.5%] flex lg:flex-row flex-col items-center basis-1/4 lg:basis-1">
                        <div className="rounded-full bg-[#728A2D] w-36 h-36 transition-colors duration-1000"></div>
                        <div className={`w-2 lg:w-42% lg:h-2 h-225 ${firstLineColor}  transition-colors duration-1000`}></div>
                        <div className={`rounded-full ${secondCircleColor} w-36 h-36 transition-colors duration-1000`}></div>
                        <div className={`w-2 lg:w-42% lg:h-2 h-225 ${firstLineColor}  transition-colors duration-1000`}></div>
                        <div className={`rounded-full ${thirdCircleColor} w-36 h-36 transition-colors duration-1000`}></div>
                    </div>
                </div>
                <div className="m-auto flex px-16 w-full md:w-75% lg:w-90% 1150:w-80% justify-between mt-56 md:mt-212 items-center">
                    <div className="w-100 580:w-147 lg:w-246 h-100 580:h-147 lg:h-246 bg-[#728a2d33] pt-16 rounded-full">
                        <div className="w-86 580:w-127 lg:w-213 h-86 580:h-127 lg:h-213 m-auto relative">
                            <Image alt="" src={dots} className="absolute mt-[-7px] 580:mt-[-12px] lg:mt-[-20px]" />
                            <div className="w-72 580:w-104 lg:w-174 h-72 580:h-104 lg:h-174 m-auto mt-[-1px] 580:mt-7 lg:mt-20">
                                <CircularProgressbarWithChildren value={firstCircleFill} strokeWidth={5} styles={buildStyles({ pathColor: '#728A2D', rotation: 0.5, trailColor: 'none' })} className="" >
                                    <p className="text-18 580:text-21 lg:text-35 leading-[36px] lg:leading-[60px] mt-[-10px]">{allAd}</p>
                                    <p className="font-medium text-9 580:text-11 lg:text-16">تمام آگهی ها</p>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                    <div className="w-148 580:w-225 lg:w-376 h-148 580:h-225 lg:h-376 bg-[#728a2d33] pt-9 lg:pt-16 rounded-full">
                        <div className="w-128 580:w-195 lg:w-325 h-128 580:h-195 lg:h-325 m-auto mt-10 relative">
                            <Image alt="" src={dots} className=" absolute mt-[-13px] 580:mt-[-22px] lg:mt-[-35px]" />
                            <div className="w-104 580:w-150 lg:w-250 h-104 580:h-150 lg:h-250 m-auto mt-15 580:mt-30 lg:mt-50">
                                <CircularProgressbarWithChildren value={secondCircleFill} strokeWidth={5} styles={buildStyles({ pathColor: '#728A2D', rotation: 0.5, trailColor: 'none' })} className="" >
                                    <p className="text-32 580:text-37 lg:text-[62px] font-medium leading-[64px] lg:leading-[107px] mt-[-18px] 580:mt-[-24px] lg:mt-[-40px]">{activeAd}</p>
                                    <p className="font-medium text-9 580:text-14 lg:text-24">تعداد آگهی فعال</p>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 580:w-147 lg:w-246 h-100 580:h-147 lg:h-246 bg-[#728a2d33] pt-16 rounded-full">
                        <div className="w-86 580:w-127 lg:w-213 h-86 580:h-127 lg:h-213 m-auto relative">
                            <Image alt="" src={dots} className=" absolute mt-[-7px] 580:mt-[-12px] lg:mt-[-20px]" />
                            <div className="w-72 580:w-104 lg:w-174 h-72 580:h-104 lg:h-174 m-auto mt-[-1px] 580:mt-7 lg:mt-20">
                                <CircularProgressbarWithChildren value={thirdCircleFill} strokeWidth={5} styles={buildStyles({ pathColor: '#728A2D', rotation: 0.5, trailColor: 'none' })} className="" >
                                    <p className="text-18 580:text-21 lg:text-35 leading-[36px] lg:leading-[60px] mt-[-10px]">{membership}</p>
                                    <p className="font-medium text-9 580:text-11 lg:text-16">تمام آگهی ها</p>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-46 md:mt-64">
                    <Title title="آگهی های ویژه" />
                </div>
                <div className=" text-center">
                    <div className="overflow-x-scroll 1400:overflow-x-hidden mt-32 md:mt-80 h-260 md:h-330">
                        <div className="flex w-80% gap-16 sm:justify-between sm:m-auto min-w-[1050px] sm:min-w-[1200px] px-16 sm:px-3 py-10 [&>*:nth-child(6)]:inline-block md:[&>*:nth-child(6)]:hidden 1600:[&>*:nth-child(6)]:inline-block h-260 md:h-330">
                            {data.advertise && data.advertise.slice(0, 6).map((item) => (<AdvertiseCard item={item} />))}
                        </div>
                    </div>
                    <a className=" text-center"><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px]  text-center">مشاهده همه</button></a>
                </div>
                <div className="mt-46 md:mt-102">
                    <Title title="اعضای منتخب" />
                </div>
                <div className=" text-center">
                    <div className=" overflow-x-scroll md:overflow-x-hidden">
                        <div className="w-90% 1400:w-71% mt-32 md:mt-80 mb-10 m-auto flex justify-between [&>*:nth-child(4)]:hidden 1600:[&>*:nth-child(4)]:inline-block min-w-[620px]">
                            {data.electedMembers && data.electedMembers.slice(0, 4).map((item) => (<ElectedMembersCard img={electedLogo} manager={item.manager} state={item.state} city={item.city} adNumber={item.adNumber} membershipPeriod={item.membershipPeriod}
                            />))}
                        </div>
                    </div>
                    <a><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px] text-center">مشاهده همه</button></a>
                </div>
                <div className="mt-32 md:mt-128">
                    <Title title="نظرات" />
                    <div className="w-full md:w-90% m-auto mt-26 md:mt-80 h-225 md:h-315">
                        <SwiperCoverflow data={data.commentCards} />
                    </div>
                </div>
                <div className="mt-32 md:mt-128 lg:w-90% w-full m-auto  text-center">
                    <Title title="مقالات" />
                    <div className="overflow-x-scroll mt-26 md:">
                        <div className="flex justify-around 900:[&>*:nth-child(5)]:hidden 1600:[&>*:nth-child(5)]:inline-block py-10 min-w-[1150px] 900:min-w-[900px]">
                            {data.articleCards && data.articleCards.slice(0, 5).map((item) => (
                                <ArticleCard item={item} />
                            ))}
                        </div>
                    </div>
                    <a><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px] text-center">همه مقالات</button></a>
                </div>
            </div>
        </div>
    )
}


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'db.json');
    const jsonData = await fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    //handle error 404
    if (data.framePage.length === 0) {
        return { notFound: true }
    }

    //handle any error
    // if (!data) {
    //     return {
    //         redirect: {
    //             destination: "/error500"
    //         }
    //     }
    // }
    return {
        props: {
            data: data.framePage
        },
        revalidate: 3600,
    }
}


export default Home;