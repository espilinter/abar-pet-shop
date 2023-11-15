import Image from "next/image";
import Avatar from "../../assets/image/commentAvatar.png"

const CommentCard = (props) => {
    return (
        <div className="w-150 md:w-400 h-200 md:h-300 rounded-[16px] bg-[rgba(255,255,255,0.01)] shadow-[0_0_8px_2px_rgba(0,0,0,0.12)] relative text-center py-16 px-21 ">
            <Image alt="" src={Avatar} className="m-auto w-64 md:w-96 h-64 md:h-96" />
            <h4 className="text-14 md:text-16 mt-8 md:mt-18 m-auto text-center">{props.item.name}</h4>
            <p className="text-10 md:text-16 mt-8 md:mt-25 w-130 md:w-225 m-auto text-[#6D6E6D] font-bold">{props.item.comment}</p>
            <p className="absolute bottom-16 left-21 text-[#8A8A8A] text-8 md:text-10 font-normal mt-10">{props.item.date}</p>
        </div>
    );
}

export default CommentCard;