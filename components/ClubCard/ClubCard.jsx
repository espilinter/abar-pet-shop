import Image from "next/image";
import styles from "../../styles/components/ElectedMembersCard.module.css"

function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n.toString().replace(/\d/g, x => farsiDigits[x]);
}

const ClubCard = (props) => {
    return (
        <div className={`bg-white backdrop-blur-[2.5px] shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] w-full sm:w-192 860:w-248 1200:w-310 h-135 sm:h-265 860:h-364 1200:h-455 rounded-[12px] p-12 1200:p-16 m-auto flex sm:inline-block justify-between`}>
            <div className="w-25% sm:w-auto">
                <Image alt="" className="w-80 sm:w-64 860:w-120 1200:w-150 h-80 sm:h-64 860:h-120 1200:h-150 m-auto rounded-full" src={props.img} />
                <h3 className="font-normal sm:font-medium text-12 sm:text-16 860:text-18 1200:text-20 leading-[24px] 1200:leading-[30px] text-center">پت شاپ بول داگ</h3>
            </div>
            <div className="hidden sm:block h-1 w-98% bg-[#535353] m-auto mt-4 860:mt-25 1200:mt-32"></div>
            <div className="w-41% sm:w-auto flex flex-col justify-between">
                <div className="flex justify-between mx-12 1200:mx-16 sm:mt-12 1200:mt-15">
                    <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">مسئول :</p>
                    <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">{props.manager}</p>
                </div>
                <div className="flex justify-between mx-12 1200:mx-16 sm:mt-12 1200:mt-15">
                    <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">استان/شهر :</p>
                    <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">{props.state}/{props.city}</p>
                </div>
                <div className="flex justify-between mx-12 1200:mx-16 sm:mt-12 1200:mt-15">
                    <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">{toFarsiNumber(`آگهی ها : ${props.adNumber}`)}</p>
                    <p className="text-10 sm:text-12 1200:text-14 text-[#535353] h-20 1200:h-24 inline-block leading-[20px] 1200:leading-[24px]">{toFarsiNumber(`عضویت : ${props.membershipPeriod} ماه`)}</p>
                </div>
            </div>
            <div className="hidden sm:block h-1 w-98% bg-[#535353] m-auto mt-14"></div>
            <button className="w-30% sm:w-98% h-36 sm:h-25 860:h-30 1200:h-38 text-[#728A2D] border rounded-[6px] border-[#728A2D] font-medium mt-8 860:mt-24 1200:mt-30 text-center text-12 860:text-16 self-end">اطلاعات بیشتر</button>

        </div>
    )
}

export default ClubCard;