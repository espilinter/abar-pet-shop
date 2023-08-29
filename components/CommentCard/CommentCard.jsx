import Image from "next/image";
import Avatar from "../../assets/image/commentAvatar.png"

const CommentCard = (props) => {
    return (
        <>
            <div className="w-400 h-300 rounded-[16px] bg-[rgba(255,255,255,0.01)] shadow-[0_0_8px_2px_rgba(0,0,0,0.12)] relative text-center py-16 px-21 ">
                <Image alt="" src={Avatar} className="m-auto w-96 h-96" />
                <h4 className="mt-18 m-auto">محمد محمدی</h4>
                <p className="mt-25 w-225 m-auto text-[#6D6E6D] font-bold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده...</p>
                <p className="absolute bottom-16 left-21 text-[#8A8A8A] text-10 font-normal">۲۱ / اردیبهشت / ۱۴۰۲</p>
            </div>
        </>
    );
}

export default CommentCard;