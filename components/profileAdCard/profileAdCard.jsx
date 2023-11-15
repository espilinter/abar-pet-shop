import Image from "next/image";
import image from "../../assets/image/articleCardImg.png"

const ProfileAdCard = (props) => {
    return (

        <div className="flex flex-row p-16 bg-white rounded-xl gap-x-24 items-center">
            <Image alt={""} src={props.item.images[0].url} className="rounded-xl w-125 h-125" width={125} height={125} />
            <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between items-center">
                    <span className=" text-right text-neutral-500 text-xs font-normal">کد چند روز گذشته</span>
                    <span className={`text-[10px] font-normal ${props.item.status === "ACCEPT" ? "text-[#7FD300]" : props.item.status === "PENDING" ? "text-[#ff9900]" : "text-[#a80000]"}`}>{props.item.status === "ACCEPT" ? "تایید شده" : props.item.status === "PENDING" ? "در انتظار تایید" : "رد شده"}</span>
                </div>
                <div className="flex flex-row items-center gap-8 mt-12">
                    <i className="aps-shop-o text-20"></i>
                    <h3 className="text-right text-stone-900 text-xl font-medium leading-[30px]">{props.item.title}</h3>
                </div>
                <div className="flex flex-row items-center gap-8 mt-12">
                    <i className="aps-shop-o text-20"></i>
                    <span className="text-right text-[#1E1E1E] text-xs font-medium">{props.item.province_id.lable}</span>
                    <span className="text-right text-[#535353] text-xs font-normal">{props.item.city_id.lable}</span>
                </div>
                <div className="w-full h-1 bg-[#B9B9B9] mt-12"></div>
                <div className="flex flex-row justify-between mt-6 items-center">
                    <span className="w-[70px] h-[13px] text-right text-[#535353] text-[10px] font-normal">کد دسته‌بندی</span>
                    <i className="aps-edit-2-o text-[#728A2D] text-18"></i>
                </div>
            </div>
        </div>

    );
}

export default ProfileAdCard;