import logo from "../../assets/image/Logo.png"
import search from "../../assets/image/Vector.png"
import { CiSearch } from "react-icons/ci";
import lines from "../../assets/image/3line.png"
import lines2 from "../../assets/image/3line2.png"
import lines3 from "../../assets/image/menu.png"
import arrow from "../../assets/image/arrow-down.png"
import searchBlack from "../../assets/image/search-normal.png"
import map from "../../assets/image/map.png"
import backButton from "../../assets/image/backButton.png"
import { FiPlus } from "react-icons/fi";
import styles from "../../styles/layout/header.layout.module.css"
import Image from "next/image";
import box from "../../assets/image/box.png"
import categoryArrow from "../../assets/image/categoryArrow.png"
import arrowdown2 from "../../assets/image/arrowdown2.png"
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation"
import { useDispatch, useSelector } from "react-redux";
import { handleOpenAsideState } from "@/HandleSlice/HandleSlice";
import Link from "next/link";
import ButtonFilled from "@/components/ButtonFilled/BurronFilled";
import ButtonLight from "@/components/ButtonLight/ButtonLight";
import CityCard from "@/components/CityCard/CityCard";

// import fs from 'fs'
// import path from 'path'

const Header = (props) => {
    // const dataState = useSelector((state) => state.states);
    const [stateHeight, setStateHeight] = useState("opacity-0 max-h-0")
    const [stateDisplay, setStateDisplay] = useState("hidden")
    const [windowSize, setWindowSize] = useState("")
    const dispatch = useDispatch();
    const pathname = usePathname()
    const [data, setData] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [categoryModal, setCategoryModal] = useState("opacity-0 h-0")
    const [categoryDisplay, setCategoryDisplay] = useState("hidden")
    const [cityOrState, setCityOrState] = useState(true)
    const [searchW, setSearchW] = useState("w-0")
    const [searchDisplay, setSearchDisplay] = useState("")
    const [provinceData, setProvinceData] = useState([])
    const [cityeData, setCityeData] = useState([])
    const [selectedCitys, setSelectedCitys] = useState([])
    const [categoryData, setCategoryData] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const estekhdam = [
        {
            id: 1,
            title: "طراحی سایت (برنامه نویس) فر انت اند و بک اند",
            num: "20"
        },
        {
            id: 2,
            title: "کار آموز طراح سایت",
            num: "20"
        },
        {
            id: 3,
            title: "کارشناس سئو",
            num: "20"
        },
        {
            id: 4,
            title: "کارآموز سئو",
            num: "20"
        },
        {
            id: 5,
            title: "گرافیست - طراح ui/ux",
            num: "20"
        },
        {
            id: 6,
            title: "کارآموز ui/ux",
            num: "20"
        },
        {
            id: 7,
            title: "ادمین شبکه های مجازی (واتس اپ-تلگرام-اینستاگرام و...)",
            num: "50"
        },
        {
            id: 8,
            title: "کارشناس تبلیغات-مقاله نویس",
            num: "20"
        },
        {
            id: 9,
            title: "کارمند اداری",
            num: "10"
        },
        {
            id: 10,
            title: "نیروی خدماتی",
            num: "2"
        },

    ]
    function openCategoryModal() {
        if (categoryModal === "opacity-0 h-0") {
            setCategoryDisplay("")
            // setTimeout(() => { setCategoryModal("opacity-100 h-472") }, (200))
            setCategoryModal("opacity-100 h-472")
        } else {
            setCategoryModal("opacity-0 h-0")
            // setTimeout(() => { setCategoryDisplay("hidden") }, (200))
            setCategoryDisplay("hidden")
        }
    }

    function categoryClickHandler(event) {
        console.log(categoryData[event.currentTarget.id].children);
        setSubCategory(categoryData[event.currentTarget.id].children)
    }

    useEffect(() => {
        window.addEventListener("resize", responsiveHandler)
        axios.get("http://localhost:3001/header").then((response) => {
            setData(response.data);
        });
        axios.get(`${process.env.BASE_API}/provinces`).then((res) => {
            setProvinceData(res.data.data);
        })
        axios.get(`${process.env.BASE_API}/category`).then((res) => {
            setCategoryData(res.data.data);
        }).catch((res) => { console.log(res); })
        setWindowSize(window.innerWidth);
        return () => {
            window.removeEventListener("resize", responsiveHandler);
        };
    }, [])

    function responsiveHandler() {
        setWindowSize(window.innerWidth);
    }

    function openAsideHandler() {
        dispatch(handleOpenAsideState(true));
    }

    function openStateDropdown() {
        if (stateHeight === "opacity-0 max-h-0") {
            setStateDisplay("")
            // setTimeout(() => { setStateHeight("opacity-100 max-h-[594px]") }, (200))
            setStateHeight("opacity-100 max-h-[594px]")
        } else {
            setStateHeight("opacity-0 max-h-0")
            // setTimeout(() => { setStateDisplay("hidden") }, (200))
            setStateDisplay("hidden")
        }
    }

    function stateClickHandler(id) {
        setCityOrState(false)
        axios.get(`${process.env.BASE_API}/cities/${id}`).then((res) => {
            setCityeData(res.data.data);
        })
    }

    function openSearchHandler() {
        if (searchDisplay === "") {
            setSearchDisplay("hidden")
            setSearchW("w-46% border border-[#6E6E6E] p-8")
        } else {
            setSearchW("w-0")
            setSearchDisplay("")
        }
    }

    function backButtonHandler() {
        setCityOrState(true)
    }

    function acceptButtonHandler() {
        console.log(selectedCitys);
        setSelectedCitys([])
    }

    return (
        <>
            {windowSize >= 1024 ? <header className={`hidden h-104 lg:flex  py-32 text-14 fixed justify-between z-[1000] ${pathname === "/" ? "bg-[#ffffff8c] backdrop-blur-[10px] right-5%  w-90% top-32 rounded-3xl px-24" : "bg-white top-0 right-0 w-full px-70"}`}>
                <div className="w-200 h-40 flex pl-8 border-l justify-between border-[#8A8A8A]">
                    <Image alt="" src={logo} className="w-105 h-40" />
                    <Image alt="" src={search} className="w-24 h-24 mt-8 mr-10% xl:mr-27%" onClick={openSearchHandler} />
                </div>
                <input className={`${searchW} transition-all rounded-lg `} placeholder="جستجو" />
                <div className={`w-46% h-40 justify-between text-[#728A2D] leading-10 mr-1% ${searchDisplay}`}>
                    <button className="mr-1 relative" onMouseEnter={openCategoryModal} onMouseLeave={openCategoryModal}>
                        <Image alt="" src={lines} className="inline-block" />
                        <p className="inline-block mr-7">دسته بندی</p>
                        <div className={`absolute rounded-lg bg-white px-40 py-32 flex gap-x-40 justify-start cursor-default transition-all duration-200 ${categoryModal} ${categoryDisplay}`}>
                            <ul className="border-l-2 border-l-[#6E6E6E] w-230 text-[#1E1E1E] font-bold flex flex-col gap-12">
                                {categoryData && categoryData.map((item, index) => (
                                    <li className="w-196 h-40 flex items-center justify-between p-8 cursor-pointer" id={index} onMouseEnter={categoryClickHandler} key={index}>
                                        <span className="flex items-center gap-x-4">
                                            <i className={`aps-${item.icon} text-24`}></i>
                                            <span>{item.name}</span>
                                        </span>
                                        <i className="arrow-left-o text-24"></i>
                                    </li>
                                ))}
                            </ul>
                            <ul className="flex flex-col flex-wrap gap-x-60 text-[#1E1E1E]">
                                {subCategory &&
                                    subCategory.map((item, index) => (<li>
                                        <h4 key={index} className="font-semibold text-16">{item.name}</h4>
                                    </li>))}
                            </ul>
                        </div>
                    </button>
                    <Link href="/" className="mr-2% 1150:mr-4% inline-block">صفحه اصلی</Link>
                    <Link href="articles" className="mr-2% 1150:mr-4% hidden 1150:inline-block">مقالات</Link>
                    <Link href="/tariffs" className="mr-2% 1150:mr-4% hidden 1220:inline-block">تعرفه ها</Link>
                    <Link href="contactus" className="mr-2% 1150:mr-4% hidden 1383:inline-block">تماس با ما</Link>
                    <div className={`mr-2% 1150:mr-4% inline-block relative`} onMouseEnter={openStateDropdown} onMouseLeave={openStateDropdown}>
                        <p className="inline-block">انتخاب استان</p>
                        <Image alt="" src={arrow} className="inline-block mr-8" />
                        <div className={`w-[326px] ${stateHeight} ${stateDisplay} bg-white rounded-lg py-16 px-8 transition-all duration-200 absolute cursor-default`}>
                            <div className={`${!cityOrState ? "hidden" : ""}`}>
                                <div className="w-full flex justify-start items-center">
                                    <span className="text-right text-stone-900 text-base font-bold">انتخاب استان</span>
                                </div>
                                <div className="flex items-center gap-x-8 border border-[#6E6E6E] rounded-md mt-12 px-12 py-4 h-32">
                                    <i className="aps-search-normal1 text-24"></i>
                                    <input className="w-full rounded-md active:border-none focus:border-none h-30" placeholder="جستجو در استان‌ها" />
                                </div>
                                <div className="w-full h-1 bg-[#DCDCDC] mt-12"></div>
                                <div className="px-8 mt-10 overflow-y-scroll h-[470px]">
                                    {provinceData && provinceData.map((item, index) => (
                                        <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 cursor-pointer" key={index} onClick={() => { stateClickHandler(item.id) }}>
                                            <span className="text-right text-stone-900 text-sm font-normal">{item.title}</span>
                                            <i className="aps-arrow-left-o text-24 text-[#1E1E1E]"></i>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className={`${cityOrState ? "hidden" : ""}`}>
                                <div className="w-full flex justify-start items-center">
                                    <i className="aps-arrow-right-o text-stone-900 text-24 cursor-pointer" onClick={backButtonHandler}></i>
                                    <span className="text-right text-stone-900 text-base font-bold">انتخاب شهر</span>
                                </div>
                                <div className="flex items-center gap-x-8 border border-[#6E6E6E] rounded-md mt-12 px-12 py-4 h-32">
                                    <i className="aps-search-normal1 text-24"></i>
                                    <input className="w-full rounded-md active:border-none focus:border-none h-30" placeholder="جستجو در شهر ها" />
                                </div>
                                <div className="w-full h-1 bg-[#DCDCDC] mt-12"></div>
                                <div className="px-8 mt-10 overflow-y-scroll h-[430px]">
                                    <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 cursor-pointer"
                                    >
                                        <span className="text-right text-stone-900 text-sm font-normal">تمام شهر ها</span>
                                        <input type="checkbox" className="w-20 h-20 rounded-lg" />
                                    </div>
                                    {cityeData && cityeData.map((item, index) => (
                                        <CityCard item={item} setSelectedCitys={setSelectedCitys}
                                            selectedCitys={selectedCitys} key={item.title} />
                                    ))}
                                </div>
                                <div className="flex justify-between bg-white mt-10">
                                    <ButtonLight text="لغو" className="w-48%" />
                                    <ButtonFilled text="تایید" className="w-48%" onClick={acceptButtonHandler} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-40 flex justify-between ">
                    <button className="w-143 h-40 text-[#728A2D] leading-10 border border-[#728A2D] rounded-md ml-10 1150:ml-20 xl:ml-43 inline-block recruitment font-normal text-center top-0 cursor-pointer" onClick={() => { setOpenModal(true) }}>استخدام در هلدینگ</button>
                    <div className=" flex ">
                        <div className="w-1 h-38 mt-1 bg-[#8A8A8A]  text-[#ffffff8c] "></div>
                        <Link href="/insertad">
                            <button className="w-111 h-40 bg-[#728A2D] text-white leading-10 mr-8 rounded-md flex pr-10"><FiPlus className="w-20 h-20 mt-10 ml-5" /> <p>درج آگهی</p></button>
                        </Link>
                        <Link href="/login">
                            <button className="w-111 h-40 text-[#728A2D] leading-10 border mr-8 border-[#728A2D] text-center rounded-md">ورود / ثبت نام</button>
                        </Link>
                    </div>
                </div>
                {openModal && <div className="w-screen h-screen bg-[#00000080] z-[1000000] fixed top-[-32px] right-[-5.5%] " onClick={(event) => { event.target === event.currentTarget ? setOpenModal(false) : "" }}>
                    <div className="w-70% bg-white m-auto flex flex-col items-center absolute top-[calc(50%-350px)] [1620px]:top-[calc(50%-330px)] right-15% pt-16 gap-y-12 rounded-xl">
                        <h3 className="text-center text-zinc-950 text-xl font-normal leading-normal">استخدام در هلدینگ بزرگ کلید طلایی ایران</h3>
                        <div className="text-center text-[#728A2D] text-lg font-normal ">www.kelidetalaeiiran.com</div>
                        <div className="text-center py-[12px] bg-[#728A2D] rounded-lg inline-flex w-95% mx-auto">
                            <p className="grow shrink basis-0 h-[22px] text-center text-white text-lg font-normal leading-normal">بزرگترین سازمان کارآفرینی و ایجاد اشتغال جوانان در فضای مجازی و واقعی در سراسر ایران</p>
                        </div>
                        <p className=" text-center text-zinc-950 text-lg font-normal leading-normal">تعدادی همکار بصورت حضوری (تمام وقت - نیمه وقت) جهت دفتر مرکزی تهران دعوت به همکاری میشوند.</p>
                        <div className=" flex flex-col gap-y-12 pt-12 w-95% mx-auto">
                            {estekhdam.map((item) => (
                                <div className="flex justify-between">
                                    <div className="flex gap-x-4 items-center ">
                                        <i className="aps-arrow-left-o text-24 text-[#728A2D]"></i>
                                        <span className="text-center text-zinc-950 text-base font-normal leading-normal">{item.title}</span>
                                    </div>
                                    <span className="text-center text-[#728A2D] text-base font-normal leading-normal">{item.num} نفر</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center text-zinc-950 text-base font-normal leading-normal">همه روزه از ساعت 8 صبح الی 8 شب - حتی جمعه ها و روزهای تعطیل</div>
                        <div className="bg-[#A6B677] justify-center w-full flex flex-row gap-y-16 py-16 px-32 flex-wrap gap-x-32 rounded-b-xl">
                            <span className="text-center text-white text-base font-normal leading-normal ">آدرس دفتر مرکزی : تهران یوسف آباد خیابان فتحی شقاقی پلاک 50 واحد 2</span>
                            <span className="text-center text-white text-base font-normal leading-normal">ارسال رزومه : 09021248883</span>
                            <span className="text-center text-white text-base font-normal leading-normal">تلفن : 02188552190 - 02188550080 - 09121248883</span>
                        </div>
                    </div>
                </div>}
            </header >
                :
                <header className="flex z-[1000] fixed lg:hidden bg-[#35A362] w-full h-72 pt-20 pb-15 px-16 justify-between items-center">
                    <button onClick={openAsideHandler}>
                        <Image alt={""} src={lines3} className="w-24 h-24" />
                    </button>
                    <div><Image src={logo} alt={""} /></div>
                    <div className="flex gap-x-8">
                        <Image alt={""} src={map} className="w-24 h-24" />
                        <Image alt={""} src={searchBlack} className="w-24 h-24" />
                    </div>
                </header>}
        </>
    )
}



export default Header;