import logo from "../../assets/image/Logo.png"
import search from "../../assets/image/Vector.png"
import { CiSearch } from "react-icons/ci";
import lines from "../../assets/image/3line.png"
import lines2 from "../../assets/image/3line2.png"
import arrow from "../../assets/image/arrow-down.png"
import { FiPlus } from "react-icons/fi";
import styles from "../../styles/layout/header.layout.module.css"
import Image from "next/image";
import box from "../../assets/image/box.png"
import categoryArrow from "../../assets/image/categoryArrow.png"
import arrowdown2 from "../../assets/image/arrowdown2.png"
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname } from "next/navigation"
// import fs from 'fs'
// import path from 'path'

const Header = (props) => {
    const pathname = usePathname()
    console.log(pathname);
    const [data, setData] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [categoryModal, setCategoryModal] = useState("opacity-0 h-0")
    const [categoryDisplay, setCategoryDisplay] = useState("hidden")
    function openCategoryModal(params) {
        if (categoryModal === "opacity-0 h-0") {
            setCategoryDisplay("")
            setTimeout(() => { setCategoryModal("opacity-100 h-472") }, (200))
        } else {
            setCategoryModal("opacity-0 h-0")
            setTimeout(() => { setCategoryDisplay("hidden") }, (200))
        }
    }

    function categoryClickHandler(event) {
        setSubCategory(data.categorys[event.currentTarget.id])
    }

    useEffect(() => {
        axios.get("http://localhost:3001/header").then((response) => {
            setData(response.data);
        });
    }, [])
    if (pathname === "/") {
        return (
            <header className="w-90% h-104 rounded-3xl top-32 flex px-24 py-32 bg-[#ffffff8c] text-14 backdrop-blur-[10px] fixed right-5% justify-between z-10">
                <div className="w-200 h-40 flex pl-8 border-l justify-between border-[#8A8A8A]">
                    <Image alt="" src={logo} className="w-105 h-40" />
                    <Image alt="" src={search} className="w-24 h-24 mt-8 mr-10% xl:mr-27%" />
                </div>
                <div className="w-46% h-40 justify-between text-[#728A2D] leading-10 mr-1%">
                    <button className="mr-1 relative" onMouseEnter={openCategoryModal} onMouseLeave={openCategoryModal}>
                        <Image alt="" src={lines} className="inline-block" />
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
                    <a href="#" className="mr-2% 1150:mr-4% inline-block">صفحه اصلی</a>
                    <a href="#" className="mr-2% 1150:mr-4% hidden 1150:inline-block">مقالات</a>
                    <a href="#" className="mr-2% 1150:mr-4% hidden 1220:inline-block">اشتراک</a>
                    <a href="#" className="mr-2% 1150:mr-4% hidden 1383:inline-block">تماس با ما</a>
                    <button className="mr-2% 1150:mr-4% inline-block">
                        <p className="inline-block">انتخاب استان</p>
                        <Image alt="" src={arrow} className="inline-block mr-8" />
                    </button>
                </div>
                <div className=" h-40 flex justify-between ">
                    <div className="w-143 h-40 text-[#728A2D] leading-10 border border-[#728A2D] rounded-md ml-10 1150:ml-20 xl:ml-43 inline-block recruitment font-normal">استخدام در هلدینگ</div>
                    <div className=" flex ">
                        <div className="w-1 h-38 mt-1 bg-[#8A8A8A]  text-[#ffffff8c] "></div>
                        <div className="w-111 h-40 bg-[#728A2D] text-white leading-10 mr-8 rounded-md flex pr-10"><FiPlus className="w-20 h-20 mt-10 ml-5" /> <p>درج آگهی</p></div>
                        <div className="w-111 h-40 text-[#728A2D] leading-10 border mr-8 border-[#728A2D] rounded-md">ورود / ثبت نام</div>
                    </div>
                </div>
            </header >
        )
    } else {
        return (
            <header className="w-full h-104 top-0 flex px-70 py-32 bg-[#ffffff] text-14 backdrop-blur-[10px] fixed right-0 justify-between z-10 shadow-[0_5px_10px_0_rgba(0,0,0,0.25)]">
                <div className="w-15% h-40 flex ">
                    <Image alt="" src={logo} className="w-105 h-40" />
                    <Image alt="" src={search} className="w-24 h-24 mt-8 mr-10% xl:mr-27%" />
                    <div className="w-1 h-38 mt-1 bg-[#8A8A8A] mr-16 text-[#ffffff8c] hidden 1050:inline-block">.</div>
                </div>
                <div className="w-46% h-40 justify-between text-[#535353] leading-10 mr-1%">
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
                    <a href="#" className="mr-2% 1150:mr-4% inline-block">صفحه اصلی</a>
                    <a href="#" className="mr-2% 1150:mr-4% hidden 1150:inline-block">مقالات</a>
                    <a href="#" className="mr-2% 1150:mr-4% hidden 1220:inline-block">اشتراک</a>
                    <a href="#" className="mr-2% 1150:mr-4% hidden 1383:inline-block">تماس با ما</a>
                    <button className="mr-2% 1150:mr-4% inline-block">
                        <p className="inline-block">انتخاب استان</p>
                        <Image alt="" src={arrowdown2} className="inline-block mr-8" />
                    </button>
                </div>
                <div className=" h-40 flex justify-between ">
                    <div className="w-143 h-40 text-[#728A2D] leading-10 border border-[#728A2D] rounded-md ml-10 1150:ml-20 xl:ml-43 inline-block recruitment font-normal">استخدام در هلدینگ</div>
                    <div className=" flex ">
                        <div className="w-1 h-38 mt-1 bg-[#8A8A8A]  text-[#ffffff8c] "></div>
                        <div className="w-111 h-40 bg-[#728A2D] text-white leading-10 mr-8 rounded-md flex pr-10"><FiPlus className="w-20 h-20 mt-10 ml-5" /> <p>درج آگهی</p></div>
                        <div className="w-111 h-40 text-[#728A2D] leading-10 border mr-8 border-[#728A2D] rounded-md">ورود / ثبت نام</div>
                    </div>
                </div>
            </header >
        )
    }

}

export default Header;