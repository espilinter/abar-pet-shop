import Image from "next/image";
import ArticleCardImg from "../../assets/image/articleCardImg.png"
import Arrow from "../../assets/image/arrow-left.png"


const ArticleCard = (props) => {
    return (
        <>
            <div className="w-208 1220:w-260 h-320 1220:h-400 p-24 rounded-[12px] bg-[#FFFFFF03] flex flex-col gap-y-6 1220:gap-y-8 shadow-[0_0_8px_2px_rgba(0,0,0,0.12)]">
                <Image alt="" src={ArticleCardImg} />
                <p className="#ACADAC text-9 1220:text-12 block text-right leading-[17px] 1220:leading-[22px]">{props.item.date}</p>
                <h3 className="text-13 1220:text-16 font-bold leading-[24px] 1200:leading-[30px] text-[#2B2C2B] text-right ">{props.item.header}</h3>
                <p className="text-[#6D6E6D] text-9 1220:text-12 font-normal text-right leading-[17px] 1220:leading-[22px]">{props.item.description}</p>
                <button className="flex gap-x-6 1220:gap-x-8 text-[#728A2D] items-center w-96 1220:w-120 self-end justify-end h-25 1220:h-32"><span className="text-11 1220:text-14">ادامه مطلب</span><Image alt="" src={Arrow} className="h-13 1220:h-16 w-13 1220:w-16" /></button>
            </div>
        </>
    );
}

export default ArticleCard;