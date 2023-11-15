import Image from "next/image";
import articlesPageCard from "../../assets/image/articlesPageCard.png"
import articlesAvatar from "../../assets/image/articlesAvatar.png"

const ArticleCardPopular = () => {
    return (

        <div className="w-200">
            <Image alt={""} src={articlesPageCard} />
            <p className="text-[#8A8A8A] text-10 pt-16">۱ هفته پیش</p>
            <div className="flex gap-x-4 items-center mt-8">
                <Image alt={""} src={articlesAvatar} className="rounded-full" width={20} height={20} />
                <p className="text-[#8A8A8A] text-10">محمد محمدی</p>
            </div>
            <h3 className="text-14 text-[#1E1E1E] mt-16">لورم ایپسوم متن ساختگی با...</h3>
            <p className="text-[#8A8A8A] text-10 mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...</p>
        </div>

    );
}

export default ArticleCardPopular;