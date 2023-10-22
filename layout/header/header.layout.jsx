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

    function openCategoryModal(params) {
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
        setSubCategory(data.categorys[event.currentTarget.id])
    }

    useEffect(() => {
        window.addEventListener("resize", responsiveHandler)
        axios.get("http://localhost:3001/header").then((response) => {
            setData(response.data);
        });
        axios.get(`https://api.abarpetshop.com/api/v1/home/provinces`).then((res) => {
            setProvinceData(res.data.data);
        })
        setWindowSize(window.innerWidth);
        return () => {
            window.removeEventListener("resize", responsiveHandler);
        };
    }, [])

    function responsiveHandler(params) {
        setWindowSize(window.innerWidth);
    }

    function openAsideHandler(params) {
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
        axios.get(`https://api.abarpetshop.com/api/v1/home/cities/${id}`).then((res) => {
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

    function acceptButtonHandler(params) {
        console.log(selectedCitys);
        setSelectedCitys([])
    }

    if (pathname === "/") {
        return (
            <>
                {windowSize >= 1024 ? <header className="hidden w-90% h-104 rounded-3xl top-32 lg:flex px-24 py-32 bg-[#ffffff8c] text-14 backdrop-blur-[10px] fixed right-5% justify-between z-[1000]">
                    <div className="w-200 h-40 flex pl-8 border-l justify-between border-[#8A8A8A]">
                        <Image alt="" src={logo} className="w-105 h-40" />
                        <Image alt="" src={search} className="w-24 h-24 mt-8 mr-10% xl:mr-27%" onClick={openSearchHandler} />
                    </div>
                    <input className={`${searchW} transition-all rounded-lg `} placeholder="جستجو" />
                    <div className={`w-46% h-40 justify-between text-[#728A2D] leading-10 mr-1% ${searchDisplay}`}>
                        <button className="mr-1 relative" onMouseEnter={openCategoryModal} onMouseLeave={openCategoryModal}>
                            <Image alt="" src={lines} className="inline-block" />
                            <p className="inline-block mr-7">دسته بندی</p>
                            {/* <div className="bg-[#00000035] w-full h-[100vh] absolute  cursor-default"></div> */}
                            <div className={` absolute rounded-lg bg-white w-[826px] px-40 py-32 flex gap-x-40 justify-start cursor-default transition-all duration-200 ${categoryModal} ${categoryDisplay} `}>
                                <ul className="border-l-2 border-l-[#6E6E6E] w-230 text-[#1E1E1E] font-bold flex flex-col gap-12">
                                    {data.categorys && data.categorys.map((item, index) => (
                                        <li className="w-196 h-40 flex items-center justify-between p-8 cursor-pointer" id={index} onMouseEnter={categoryClickHandler}><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>{item.title}</span></span><Image src={categoryArrow} className="h-24" /></li>
                                    ))}
                                </ul>
                                <ul className="grid grid-cols-3 gap-x-60 text-[#1E1E1E]">
                                    {subCategory.category2 &&
                                        subCategory.category2.map((item) => (<li>
                                            <h4 className="font-bold text-16">{item.title}</h4>
                                            <ul className="text-[#6E6E6E] text-14 font-normal">
                                                <li>دسته‌بندی سطح 3</li>
                                                <li>دسته‌بندی سطح 3</li>
                                                <li>دسته‌بندی سطح 3</li>
                                                <li>دسته‌بندی سطح 3</li>
                                            </ul>
                                        </li>))}
                                </ul>
                            </div>
                        </button>
                        <Link href="/" className="mr-2% 1150:mr-4% inline-block">صفحه اصلی</Link>
                        <Link href="articles" className="mr-2% 1150:mr-4% hidden 1150:inline-block">مقالات</Link>
                        <Link href="/tariffs" className="mr-2% 1150:mr-4% hidden 1220:inline-block">تعرفه ها</Link>
                        <Link href="contactus" className="mr-2% 1150:mr-4% hidden 1383:inline-block">تماس با ما</Link>
                        <button className={`mr-2% 1150:mr-4% inline-block relative`} onMouseEnter={openStateDropdown} onMouseLeave={openStateDropdown}>
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
                                        {provinceData && provinceData.map((item) => (
                                            <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 cursor-pointer" onClick={() => { stateClickHandler(item.id) }}>
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
                                            {/* <i className="aps-arrow-left-o text-24 text-[#1E1E1E]"></i> */}
                                            <input type="checkbox" className="w-20 h-20 rounded-lg" />
                                        </div>
                                        {cityeData && cityeData.map((item) => (
                                            // <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 cursor-pointer">
                                            //     <lable className="text-right text-stone-900 text-sm font-normal" for={item.title}>{item.title}</lable>
                                            //     {/* <i className="aps-arrow-left-o text-24 text-[#1E1E1E]"></i> */}
                                            //     <input type="checkbox" className="w-20 h-20 rounded-lg" id={item.title} onClick={cityClickHandler} />
                                            // </div>
                                            <CityCard item={item} setSelectedCitys={setSelectedCitys}
                                                selectedCitys={selectedCitys} />
                                        ))}
                                    </div>
                                    <div className="flex justify-between bg-white mt-10">
                                        <ButtonLight text="لغو" className="w-48%" />
                                        <ButtonFilled text="تایید" className="w-48%" onClick={acceptButtonHandler} />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className=" h-40 flex justify-between ">
                        <button className="w-143 h-40 text-[#728A2D] leading-10 border border-[#728A2D] rounded-md ml-10 1150:ml-20 xl:ml-43 inline-block recruitment font-normal text-center top-0 cursor-pointer">استخدام در هلدینگ</button>
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
                </header >
                    :
                    <header className="flex z-[1000] fixed lg:hidden bg-[#35A362] w-full h-72 pt-20 pb-15 px-16 justify-between items-center">
                        <button onClick={openAsideHandler}><Image src={lines3} className="w-24 h-24" /></button>
                        <div><Image src={logo} /></div>
                        <div className="flex gap-x-8">
                            <Image src={map} className="w-24 h-24" />
                            <Image src={searchBlack} className="w-24 h-24" />
                        </div>
                    </header>}
            </>
        )
    } else {
        return (
            <>
                {windowSize >= 1024 ? <header className={`hidden w-full h-104 top-0 lg:flex px-70 py-32 bg-[#ffffff] text-14 backdrop-blur-[10px] fixed right-0 justify-between z-[1000] shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] `}>
                    <div className="w-18% h-40 flex border-l border-[#8A8A8A] pl-10">
                        <Image alt="" src={logo} className="w-105 h-40" />
                        <Image alt="" src={search} className="w-24 h-24 mt-8 mr-10% xl:mr-27%" onClick={openSearchHandler} />
                    </div>
                    <input className={`${searchW} transition-all rounded-lg `} placeholder="جستجو" />
                    <div className={`w-46% h-40 justify-between text-center text-[#535353] leading-10 mr-1% ${searchDisplay}`}>
                        <button className="mr-1 relative" onMouseEnter={openCategoryModal} onMouseLeave={openCategoryModal}>
                            <Image alt="" src={lines2} className="inline-block" />
                            <p className="inline-block mr-7">دسته بندی</p>
                            {/* <div className="bg-[#00000035] w-full h-[100vh] absolute  cursor-default"></div> */}
                            <div className={` absolute bg-white w-[826px] px-40 py-32 flex gap-x-40 justify-start cursor-default transition-all duration-200 ${categoryModal} ${categoryDisplay}`}>
                                <ul className="border-l-2 border-l-[#6E6E6E] w-230 text-[#1E1E1E] font-bold flex flex-col gap-12">
                                    {data.categorys && data.categorys.map((item, index) => (
                                        <li className="w-196 h-40 flex items-center justify-between p-8 cursor-pointer" id={index} onMouseEnter={categoryClickHandler}><span className="flex items-center gap-x-4"><Image src={box} className="h-24" /><span>{item.title}</span></span><Image src={categoryArrow} className="h-24" /></li>
                                    ))}
                                </ul>
                                <ul className="grid grid-cols-3 gap-x-60 text-[#1E1E1E]">
                                    {subCategory.category2 &&
                                        subCategory.category2.map((item) => (<li>
                                            <h4 className="font-bold text-16">{item.title}</h4>
                                            <ul className="text-[#6E6E6E] text-14 font-normal">
                                                <li>دسته‌بندی سطح 3</li>
                                                <li>دسته‌بندی سطح 3</li>
                                                <li>دسته‌بندی سطح 3</li>
                                                <li>دسته‌بندی سطح 3</li>
                                            </ul>
                                        </li>))}
                                </ul>
                            </div>
                        </button>
                        <Link href="/" className="mr-2% 1150:mr-4% inline-block">صفحه اصلی</Link>
                        <Link href="articles" className="mr-2% 1150:mr-4% hidden 1150:inline-block">مقالات</Link>
                        <Link href="/tariffs" className="mr-2% 1150:mr-4% hidden 1220:inline-block">تعرفه ها</Link>
                        <Link href="contactus" className="mr-2% 1150:mr-4% hidden 1383:inline-block">تماس با ما</Link>
                        <button className={`mr-2% 1150:mr-4% inline-block relative`} onMouseEnter={openStateDropdown} onMouseLeave={openStateDropdown}>
                            <p className="inline-block">انتخاب استان</p>
                            <Image alt="" src={arrow} className="inline-block mr-8" />
                            <div className={`w-[326px] ${stateHeight} ${stateDisplay} bg-white rounded-lg py-16 px-8 transition-all duration-200 absolute cursor-default`}>
                                {<div className={cityOrState ? "" : "hidden"}>
                                    <div className="w-full flex justify-start items-center">
                                        <span className="text-right text-stone-900 text-base font-bold">انتخاب استان</span>
                                    </div>
                                    <div className="flex items-center gap-x-8 border border-[#6E6E6E] rounded-md mt-12 px-12 py-4 h-32">
                                        <i className="aps-search-normal1 text-24"></i>
                                        <input className="w-full rounded-md active:border-none focus:border-none h-30" placeholder="جستجو در استان‌ها" />
                                    </div>
                                    <div className="w-full h-1 bg-[#DCDCDC] mt-12"></div>
                                    <div className="px-8 mt-10">
                                        {data.state && data.state.map((item) => (
                                            <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 cursor-pointer" onClick={stateClickHandler}>
                                                <span className="text-right text-stone-900 text-sm font-normal">{item}</span>
                                                <i className="aps-arrow-left-o text-24 text-[#1E1E1E]"></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>}
                                {<div className={!cityOrState ? "" : "hidden"}>
                                    <div className="w-full flex justify-start items-center">
                                        <i className="aps-arrow-right-o text-stone-900 text-24 cursor-pointer" onClick={backButtonHandler}></i>
                                        <span className="text-right text-stone-900 text-base font-bold">انتخاب شهر</span>
                                    </div>
                                    <div className="flex items-center gap-x-8 border border-[#6E6E6E] rounded-md mt-12 px-12 py-4 h-32">
                                        <i className="aps-search-normal1 text-24"></i>
                                        <input className="w-full rounded-md active:border-none focus:border-none h-30" placeholder="جستجو در شهر ها" />
                                    </div>
                                    <div className="w-full h-1 bg-[#DCDCDC] mt-12"></div>
                                    <div className="px-8 mt-10">
                                        {data.state && data.state.map((item) => (
                                            <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 cursor-pointer" onClick={stateClickHandler}>
                                                <span className="text-right text-stone-900 text-sm font-normal">{item}</span>
                                                <i className="aps-arrow-left-o text-24 text-[#1E1E1E]"></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>}
                            </div>
                        </button>
                    </div>
                    <div className=" h-40 flex justify-between ">
                        <button className="w-143 h-40 text-[#728A2D] leading-10 border border-[#728A2D] rounded-md ml-10 1150:ml-20 xl:ml-43 inline-block recruitment font-normal text-center cursor-pointer">استخدام در هلدینگ</button>
                        <div className=" flex ">
                            <div className="w-1 h-38 mt-1 bg-[#8A8A8A]  text-[#ffffff8c] "></div>
                            <div className="w-111 h-40 bg-[#728A2D] text-white leading-10 mr-8 rounded-md flex pr-10"><FiPlus className="w-20 h-20 mt-10 ml-5" /> <p>درج آگهی</p></div>
                            <div className="w-111 text-center h-40 text-[#728A2D] leading-10 border mr-8 border-[#728A2D] rounded-md">ورود / ثبت نام</div>
                        </div>
                    </div>
                </header > :
                    <header className="flex z-[1000] fixed lg:hidden bg-[#35A362] w-full h-72 pt-20 pb-15 px-16 justify-between items-center">
                        <button onClick={openAsideHandler}><Image src={lines3} className="w-24 h-24" /></button>
                        <div><Image src={logo} /></div>
                        <div className="">
                            <Image src={backButton} className="w-24 h-24" />
                        </div>
                    </header>}
            </>
        )
    }

}

export default Header;