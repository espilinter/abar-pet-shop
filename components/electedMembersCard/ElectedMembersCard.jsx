import Image from "next/image";
import styles from "../../styles/components/ElectedMembersCard.module.css"

function toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n.toString().replace(/\d/g, x => farsiDigits[x]);
}

const ElectedMembersCard = (props) => {
    return (
        <div className={`${styles.bgBlur} w-310 h-455 rounded-[12px] p-16`}>
            <Image className="w-150 h-150  m-auto rounded-full" src={props.img} />
            <h3 className="font-medium text-20 leading-[30px]">پت شاپ بول داگ</h3>
            <div className="h-1 w-274 bg-[#535353] m-auto mt-32"></div>
            <div className="flex justify-between mr-16 ml-16 mt-15">
                <p className="text-14 text-[#535353] h-24 inline-block leading-[24px]">مسئول :</p>
                <p className="text-14 text-[#535353] h-24 inline-block leading-[24px]">{props.manager}</p>
            </div>
            <div className="flex justify-between mr-16 ml-16 mt-15">
                <p className="text-14 text-[#535353] h-24 inline-block leading-[24px]">استان/شهر :</p>
                <p className="text-14 text-[#535353] h-24 inline-block leading-[24px]">{props.state}/{props.city}</p>
            </div>
            <div className="flex justify-between mr-16 ml-16 mt-15">
                <p className="text-14 text-[#535353] h-24 inline-block leading-[24px]">{toFarsiNumber(`آگهی ها : ${props.adNumber}`)}</p>
                <p className="text-14 text-[#535353] h-24 inline-block leading-[24px]">{toFarsiNumber(`عضویت : ${props.membershipPeriod} ماه`)}</p>
            </div>
            <div className="h-1 w-274 bg-[#535353] m-auto mt-14"></div>
            <button className="w-274 h-38 text-[#728A2D] border rounded-[6px] border-[#728A2D] font-medium mt-30 ">اطلاعات بیشتر</button>
        </div>
    )
}

export default ElectedMembersCard;