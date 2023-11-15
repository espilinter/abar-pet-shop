import { useEffect, useState } from "react";
import shop from "../../assets/image/shop.png";
import call from "../../assets/image/call.png";
import location from "../../assets/image/location.png";
import save from "../../assets/image/save.png";
import unSave from "../../assets/image/unSave.png";
import styles from "../../styles/components/AdvertiseCard.module.css"
import * as React from 'react';
import Image from "next/image";
import category from "../../assets/image/category.png";
import Link from "next/link";

const IndexAdvetiseCard = (props) => {

    const [adType, setAdType] = useState("hidden")
    const [mark, setMark] = useState(unSave)

    useEffect(() => {
        // if (props.type === "vip") {
        //     setAdType("")
        // }
        console.log(props.item.id);
    }, [])

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Link href={`/advertise/${props.item.id}`}>
            <div className={`w-157 md:w-200 h-238 md:h-307 shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] rounded-xl m-auto bg-none flex flex-col p-0 gap-x-16`}>
                <Image alt={""} src={category} className="w-157 md:w-200 h-157 md:h-200 rounded-t-xl" width={200} height={200} />
                <div className="h-141 md:h-166 rounded-t-[16px] rounded-b-xl bg-white mt-[-60px] w-157 md:w-200 pt-8 px-16 z-[2] relative">
                    <div className="w-full h-16 md:h-28 flex justify-between">
                        <p className="text-10 text-[#6B6B6B] sm:mt-4">همین الان</p>
                        <div className={`w-60 h-20 bg-[#7fd30026] text-[#728A2D] text-10 p-3 px-8 rounded-[4px] border-[0.5px] border-[#728A2D] ${adType}`}>اگهی ویژه</div>
                    </div>
                    <div className=" flex mt-7 xl:mt-13">
                        <Image alt="" className="w-18 h-18 mt-2" src={shop} width={18} height={18} />
                        <p className="text-[#1E1E1E] text-12 md:text-14 mr-10">
                            {props.item.title}
                        </p>
                    </div>
                    {/* <div className="167px flex mt-8">
                    <Image alt="" className="w-18 h-18 mt-2" src={call} />
                    <p className="text-[#1E1E1E] text-10 mr-10 pt-3">{toFarsiNumber(props.phonNumber)}</p>
                </div> */}
                    <div className=" flex mt-7 md:mt-20 justify-between">
                        <div className="flex">
                            <Image alt="" className="w-18 h-18 mt-2" src={location} />
                            <p className="text-[#1E1E1E] text-12 mr-10 leading-[20px]">
                                {/* {props.item.province.title} */}
                            </p>
                            <p className="text-[#535353] text-10 mt-3 mr-8 leading-[17px]">
                                {props.item.city.title}
                            </p>
                        </div>
                        {/* <div className="w-13 mt-3" onClick={bookMark}>
                            <Image alt="" src={mark} />
                        </div> */}
                    </div>
                    <div className="w-full sm:w-125 md:w-168 bg-[#B9B9B9] h-1 mt-9 sm:mt-15"></div>
                    <div className="w-full sm:w-125 md:w-168 h-14 flex justify-between mt-8 sm:mt-10">
                        <p className="text-10 text-[#535353]">
                            {/* {props.item.category1} */}
                        </p>
                        <p className="text-10 text-[#535353]">آگهی (22)</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default IndexAdvetiseCard;