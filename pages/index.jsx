import { useEffect, useState } from "react";
import background1 from "../assets/image/Frame44326.png";
import ad1 from "../assets/image/ad1.png"
import system from "../assets/image/image3.png"
import dot3 from "../assets/image/dot3.png"
import timer1 from "../assets/image/timer1.png"
import user from "../assets/image/user.png"
import dots from "../assets/image/dots.png"
import note from "../assets/image/note.png"
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

const FramePage = () => {
    const [data, setData] = useState([])
    const [categoryData, setCategoryData] = useState([])
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
    const [advertisegData, setAdvertisegData] = useState([])
    const [electedMembersData, setElectedMembersData] = useState([])

    useEffect(() => {
        fetchData()
        fetchCategoryData()
        firstStep()
        fetchAdvertisegData()
        fetchElectedMembersData()
        // steper()
    }, [])

    useEffect(() => {
        let a = false;
        const handleScroll = (event) => {
            if (window.scrollY >= 3300 && a === false) {
                console.log(window.scrollY);
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

    useEffect(() => {

    }, [fetchData])

    function firstCounterFunction() {
        for (let i = 0; i <= allAdNumber; i++) {
            setTimeout(() => {
                setAllAd(i)
            }, i * (3000 / allAdNumber));
        }
    }

    function firstCircleFillFunction() {
        for (let i = 0; i <= 80; i++) {
            setTimeout(() => {
                setFirstCircleFill(i)
            }, i * (3000 / 85));
        }
    }

    function secondCounterFunction() {
        for (let i = 0; i <= allActiveAd; i++) {
            setTimeout(() => {
                setActiveAd(i)
            }, i * (3000 / allActiveAd));
        }
    }

    function secondCircleFillFunction() {
        for (let i = 0; i <= 75; i++) {
            setTimeout(() => {
                setSecondCircleFill(i)
            }, i * (3000 / 75));
        }
    }

    function thirdCounterFunction() {
        for (let i = 0; i <= allMembership; i++) {
            setTimeout(() => {
                setMembership(i)
            }, i * (3000 / allMembership));
        }
    }

    function thirdcircleFillFunction() {
        for (let i = 0; i <= 55; i++) {
            setTimeout(() => {
                setThirdCircleFill(i)
            }, i * (3000 / 55));
        }
    }

    function toFarsiNumber(n) {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return n.toString().replace(/\d/g, x => farsiDigits[x]);
    }

    // function steper() {
    //     for (let i = 1; i; i++) {
    //         setTimeout(() => {
    //             if ((i % 3) === 1) {
    //                 setSecondCircleColor("border-2 border-[#B9B9B9]")
    //                 setFirstLineColor("bg-[#B9B9B9]")
    //                 setThirdCircleColor("border-2 border-[#B9B9B9]")
    //                 setSecondLineColor("bg-[#B9B9B9]")
    //                 setFirstBoxShadow("[0_0_16px_-2px_rgba(0,0,0,0.1)] backdrop-blur-[2.5px]")
    //                 setThirdBoxShadow("")
    //             }
    //             if ((i % 3) === 2) {
    //                 setSecondCircleColor("bg-[#728A2D]")
    //                 setFirstLineColor("bg-[#728A2D]")
    //                 setFirstBoxShadow("")
    //                 setSecondBoxShadow("[0_0_16px_-2px_rgba(0,0,0,0.1)] backdrop-blur-[2.5px]")
    //             }
    //             if ((i % 3) === 0) {
    //                 setThirdCircleColor("bg-[#728A2D]")
    //                 setSecondLineColor("bg-[#728A2D]")
    //                 setSecondBoxShadow("")
    //                 setThirdBoxShadow("[0_0_16px_-2px_rgba(0,0,0,0.1)] backdrop-blur-[2.5px]")
    //             }
    //         }, i * 2000);
    //     }
    // }

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

    function fetchData() {
        axios.get("http://localhost:3001/similarSystems").then((response) => {
            setData(response.data);
        });
    }

    function fetchCategoryData() {
        axios.get("http://localhost:3001/categury").then((response) => {
            setCategoryData(response.data);
        });
    }

    function fetchAdvertisegData() {
        axios.get("http://localhost:3001/advertise").then((response) => {
            setAdvertisegData(response.data);
        });
    }

    function fetchElectedMembersData() {
        axios.get("http://localhost:3001/electedMembers").then((response) => {
            setElectedMembersData(response.data);
        });
    }

    return (
        <div className="bg-[#f4f4f4]">
            <div className="w-full">
                <Image className="w-full " src={background1} />
            </div>
            <div className="mt-40">
                <Title title="سامانه های مشابه" />
            </div>
            <div className="w-1080 h-129 m-auto mt-40 flex">
                <div className="flex m-auto">
                    {data.slice(0, 6).map((item) => (<SimilarSystemsCard item={item} img={system} />))}
                    <div className="w-40 h-129 ml-68">
                        <div className="bg-[#ffffff] w-40 h-40 rounded-full mt-40"><Image src={dot3} className="p-9" /></div>
                        <p className="text-12 mt-28">بیشتر</p>
                    </div>
                </div>
            </div>
            <div className="w-[1300] m-auto mt-80">
                <Image className="m-auto" src={ad1} />
            </div>
            <div className="mt-40">
                <Title title="دسته بندی" />
            </div>
            <div className="w-90% m-auto grid grid-cols-4 gap-y-[68px] mt-48">
                {categoryData.map((item) => (<CategoryCard item={item} img={system} />))}
            </div>
            <div className="mt-154">
                <Title title="چرا ابر پت شاپ" />
            </div>
            <div className="flex w-75% m-auto">
                <div className="m-auto w-336 h-318 relative mt-80 ">
                    <div className="w-96 h-96 rounded-full bg-white pt-24 mr-120 z-[2] absolute mt-[-48px] shadow-[0_4px_44px_rgba(0,0,0,0.12)]">
                        <Image src={timer1} className="w-48 h-48 m-auto" />
                    </div>
                    <div className="w-336 h-318 shadow-[0_4px_44px_rgba(0,0,0,0.12)] pt-88 m-auto bg-white z-0 rounded-[18px] ">
                        <div className="w-256 h-190 m-auto">
                            <h2 className="text-20 font-bold ">انتخاب اقتصادی</h2>
                            <p className="text-16 mt-17 w-256 text-[#616161] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                        </div>
                    </div>
                </div>
                <div className="m-auto w-336 h-318 relative mt-224">
                    <div className="w-96 h-96 rounded-full bg-white pt-24 mr-120 z-[2] absolute mt-[-48px] shadow-[0_4px_44px_rgba(0,0,0,0.12)]">
                        <Image src={timer1} className="w-48 h-48 m-auto" />
                    </div>
                    <div className="w-336 h-318 shadow-[0_4px_44px_rgba(0,0,0,0.12)] pt-88 m-auto bg-white z-0 rounded-[18px] ">
                        <div className="w-256 h-190 m-auto">
                            <h2 className="text-20 font-bold ">انتخاب اقتصادی</h2>
                            <p className="text-16 mt-17 w-256 text-[#616161] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                        </div>
                    </div>
                </div>
                <div className="m-auto w-336 h-318 relative mt-80 ">
                    <div className="w-96 h-96 rounded-full bg-white pt-24 mr-120 z-[2] absolute mt-[-48px] shadow-[0_4px_44px_rgba(0,0,0,0.12)]">
                        <Image src={timer1} className="w-48 h-48 m-auto" />
                    </div>
                    <div className="w-336 h-318 shadow-[0_4px_44px_rgba(0,0,0,0.12)] pt-88 m-auto bg-white z-0 rounded-[18px] ">
                        <div className="w-256 h-190 m-auto">
                            <h2 className="text-20 font-bold ">انتخاب اقتصادی</h2>
                            <p className="text-16 mt-17 w-256 text-[#616161] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-162">
                <Title title="خدمات و مزیت ها" />
            </div>
            <div className="flex gap-x-[7%] w-90% m-auto mt-48">
                <div className={`w-388 h-298 rounded-[16px] ${firstBoxShadow} pt-20 m-auto transition-shadow duration-1000`}>
                    <Image src={user} className="w-100 h-100 m-auto" />
                    <h3 className="text-18 mt-16">1.ثبت نام</h3>
                    <p className="font-medium text-15 text-[#8A8A8A] leading-[30px] mt-20">به راحتی با یک کلیک می‌شود در لینک‌بورد ثبت نام کرد</p>
                    <div className="w-96 h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6">ثبت نام</div>
                </div>
                <div className={`w-388 h-298 rounded-[16px] ${secondBoxShadow} pt-20 m-auto transition-shadow duration-1000`}>
                    <Image src={note} className="w-100 h-100 m-auto" />
                    <h3 className="text-18 mt-16">۲. میان آگهی ها جستجو کنید</h3>
                    <p className="font-medium text-15 text-[#8A8A8A] leading-[30px] mt-20">مراحل ساده ثبت آگهی در دسته‌بندی های مختلف</p>
                    <div className="w-96 h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6">آگهی ها</div>
                </div>
                <div className={`w-388 h-298 rounded-[16px] ${thirdBoxShadow} pt-20 m-auto transition-shadow duration-1000`}>
                    <Image src={addSquare} className="w-100 h-100 m-auto" />
                    <h3 className="text-18 mt-16">۳. آگهی خود را ثبت کنید </h3>
                    <p className="font-medium text-15 text-[#8A8A8A] leading-[30px] mt-20">مراحل ساده ثبت آگهی در دسته‌بندی های مختلف</p>
                    <div className="w-96 h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6 transition-colors duration-1000">ثبت آگهی</div>
                </div>
            </div>
            <div className="mt-40 w-71% mr-[16.5%]  flex ">
                <div className="rounded-full bg-[#728A2D] w-36 h-36 transition-colors duration-1000"></div>
                <div className={`w-42% h-2 ${firstLineColor} mt-17 transition-colors duration-1000`}></div>
                <div className={`rounded-full ${secondCircleColor} w-36 h-36 transition-colors duration-1000`}></div>
                <div className={`w-42% h-2 ${secondtLineColor} mt-17 transition-colors duration-1000`}></div>
                <div className={`rounded-full ${thirdCircleColor} w-36 h-36 transition-colors duration-1000`}></div>
            </div>
            <div className="m-auto flex w-81% justify-between mt-212" onScroll={() => { console.log("++++++") }}>
                <div className="w-246 h-246 bg-[#728a2d33] pt-16 rounded-full mt-78">
                    <div className="w-213 h-213 m-auto relative">
                        <Image src={dots} className=" absolute mt-[-20px]" />
                        <div className="w-174 h-174 m-auto mt-20">
                            <CircularProgressbarWithChildren value={firstCircleFill} strokeWidth={5} styles={buildStyles({ pathColor: '#728A2D', rotation: 0.5, trailColor: 'none' })} className="" >
                                <p className="text-35 leading-[60px] mt-[-10px]">{toFarsiNumber(allAd)}</p>
                                <p className="font-medium">تمام آگهی ها</p>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                </div>
                <div className="w-376 h-376 bg-[#728a2d33] pt-16 rounded-full">
                    <div className="w-325 h-325 m-auto mt-10">
                        <Image src={dots} className=" absolute mt-[-35px]" />
                        <div className="w-250 h-250 m-auto mt-50">
                            <CircularProgressbarWithChildren value={secondCircleFill} strokeWidth={5} styles={buildStyles({ pathColor: '#728A2D', rotation: 0.5, trailColor: 'none' })} className="" >
                                <p className="text-[62px] font-medium leading-[107px] mt-[-40px]">{toFarsiNumber(activeAd)}</p>
                                <p className="font-medium text-24">تعداد آگهی فعال</p>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                </div>
                <div className="w-246 h-246 bg-[#728a2d33] pt-16 rounded-full mt-78">
                    <div className="w-213 h-213 m-auto relative">
                        <Image src={dots} className=" absolute mt-[-20px]" />
                        <div className="w-174 h-174 m-auto mt-20">
                            <CircularProgressbarWithChildren value={thirdCircleFill} strokeWidth={5} styles={buildStyles({ pathColor: '#728A2D', rotation: 0.5, trailColor: 'none' })} className="" >
                                <p className="text-35 leading-[60px] mt-[-10px]">{toFarsiNumber(membership)}</p>
                                <p className="font-medium">تمام آگهی ها</p>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>
                </div>
            </div>
            <button className=" w-100 h-50 m-auto" onClick={() => { firstCircleFillFunction(); firstCounterFunction(); secondCounterFunction(); secondCircleFillFunction(); thirdCounterFunction(); thirdcircleFillFunction() }}></button>
            <div>
                <Title title="آگهی های ویژه" />
            </div>
            <div>
                <div className="flex w-80% h-307 m-auto justify-between mt-80">
                    {advertisegData.slice(0, 5).map((item) => (<AdvertiseCard img={item.img} title={item.title} phonNumber={item.phonNumber1} city={item.city} state={item.state} type={item.type} category={item.category1} />))}
                </div>
                <a><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px]">مشاهده همه</button></a>
            </div>
            <div className="mt-102">
                <Title title="اعضای منتخب" />
            </div>
            <div>
                <div className="w-71% mt-80 m-auto flex justify-between">
                    {electedMembersData.slice(0, 3).map((item) => (<ElectedMembersCard img={electedLogo} manager={item.manager} state={item.state} city={item.city} adNumber={item.adNumber} membershipPeriod={item.membershipPeriod}
                    />))}
                </div>
                <a><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px]">مشاهده همه</button></a>
            </div>
            <div className="mt-135">
                <Title title="نظرات" />
            </div>
            <div className="w-78% m-auto mt-80 h-315">
                <SwiperCoverflow />
            </div>
        </div>
    )
}
export default FramePage;