import Image from "next/image";
import styles from "../../styles/components/ElectedMembersCard.module.css"

function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n.toString().replace(/\d/g, x => farsiDigits[x]);
}

const ElectedMembersCard = (props) => {
    return (
        <div className={` backdrop-blur-[2.5px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] w-192 860:w-248 1200:w-310 h-265 860:h-364 1200:h-455 rounded-[12px] p-12 1200:p-16`}>
            <Image alt="" className="w-64 860:w-120 1200:w-150 h-64 860:h-120 1200:h-150 m-auto rounded-full" src={props.img} />
            <h3 className="font-medium text-16 1200:text-20 leading-[24px] 1200:leading-[30px] text-center">پت شاپ بول داگ</h3>
            <div className="h-1 w-98% bg-[#535353] m-auto mt-4 860:mt-25 1200:mt-32"></div>
            <div className="flex justify-between mx-12 1200:mx-16 mt-12 1200:mt-15">
                <p className="text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">مسئول :</p>
                <p className="text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">{props.manager}</p>
            </div>
            <div className="flex justify-between mx-12 1200:mx-16 mt-12 1200:mt-15">
                <p className="text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">استان/شهر :</p>
                <p className="text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">{props.state}/{props.city}</p>
            </div>
            <div className="flex justify-between mx-12 1200:mx-16 mt-12 1200:mt-15">
                <p className="text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">{toFarsiNumber(`آگهی ها : ${props.adNumber}`)}</p>
                <p className="text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">{toFarsiNumber(`عضویت : ${props.membershipPeriod} ماه`)}</p>
            </div>
            <div className="h-1 w-98% bg-[#535353] m-auto mt-14"></div>
            <button className="w-98% h-25 860:h-30 1200:h-38 text-[#728A2D] border rounded-[6px] border-[#728A2D] font-medium mt-8 860:mt-24 1200:mt-30 text-center text-12 860:text-16">اطلاعات بیشتر</button>
        </div>
    )
}

export default ElectedMembersCard;