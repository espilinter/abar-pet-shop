import Image from "next/image";
import articlesPageCard from "../../assets/image/articlesPageCard.png"
import articlesAvatar from "../../assets/image/articlesAvatar.png"

const ArticleCardLast = () => {
    return (
        <>
            <div className="w-200">
                <Image src={articlesPageCard} className="w-full h-100" />
                <h3 className="text-14 text-[#1E1E1E] mt-16">لورم ایپسوم متن ساختگی با...</h3>
                <p className="text-[#8A8A8A] text-10 mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...</p>
            </div>
        </>
    );
}

export default ArticleCardLast;