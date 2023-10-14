import Image from "next/image";
import logo from "../../assets/image/Logo.png"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleOpenAsideState } from "@/HandleSlice/HandleSlice";
const Aside = (props) => {
    const dataState = useSelector((state) => state.states);
    const dispatch = useDispatch();
    const [asideWidth, setAsideWidth] = useState("w-0")
    const [asideDisplay, setAsideDisplay] = useState("hidden")

    function closeAsideHandler(event) {
        setAsideWidth("w-0")
        setTimeout(() => {
            setAsideDisplay("hidden")
        }, 200);
        dispatch(handleOpenAsideState(false))
    }

    function openAsideHandler(event) {
        setAsideWidth("w-320")
        setTimeout(() => {
            setAsideDisplay("inline-block")
        }, 100);
    }

    useEffect(() => {
        if (dataState.openAsideState) {
            openAsideHandler()
        }
    }, [dataState])
    return (
        <>
            <aside className={` bg-white fixed lg:hidden z-[12] pt-12 h-[100vh] ${asideWidth} transition-all duration-500 right-0`} >
                <div className={` ${asideDisplay} w-full`}>
                    <div className="flex pl-70 pr-12 justify-between">
                        <button className="rotate-45" onClick={closeAsideHandler}>
                            <i className="aps-add-o text-30"></i>
                        </button>
                        <Image src={logo} />
                    </div>
                    <div className="w-full bg-[#D0D3DE] h-1 mt-10"></div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-map text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">انتخاب شهر/استان</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-add-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">ثبت آگهی</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-add-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">دسته بندی</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-dollar-circle-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">تعرفه ها</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-profile-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">ورود و ثبت نام</div>
                        </div>
                    </div>
                    <div className="w-[calc(100%-32px)] bg-[#D0D3DE] h-1 m-auto"></div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-info-circle-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">درباره ما</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-call-calling-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">تماس با ما</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-book-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">مقالات </div>
                        </div>
                    </div>
                    <div className="w-[calc(100%-32px)] bg-[#D0D3DE] h-1 m-auto"></div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-book-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">قوانین سایت</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-book-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">راهنمای درج آگهی</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-book-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">سوالات متداول</div>
                        </div>
                    </div>
                    <div className="w-[calc(100%-32px)] bg-[#D0D3DE] h-1 m-auto"></div>
                    <div className="flex flex-col gap-16 p-16">
                        <div className="flex gap-x-4 items-center">
                            <i className="aps-personalcard-o text-24"></i>
                            <div className="text-right text-stone-900 text-sm font-normal leading-normal">استخدام در هلدینگ</div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Aside;