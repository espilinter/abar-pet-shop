import Image from "next/image";
import articlesPageCard from "../../assets/image/articlesPageCard.png"
import articlesAvatar from "../../assets/image/articlesAvatar.png"

const ArticlePageCards = () => {
    return (
        <>
            <div className="w-full md:w-200 h-132 md:h-auto flex flex-row md:flex-col p-16 md:p-0 gap-x-16 items-center shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] md:shadow-none rounded-xl md:rounded-none">
                <Image src={articlesPageCard} className="h-100 md:h-auto md:w-auto w-100 rounded-lg" />
                <div>
                    <p className="text-[#8A8A8A] text-10 md:pt-16">۱ هفته پیش</p>
                    <div className="flex gap-x-4 items-center mt-8">
                        <Image src={articlesAvatar} className="rounded-full" width={20} height={20} />
                        <p className="text-[#8A8A8A] text-10">محمد محمدی</p>
                    </div>
                    <h3 className="text-14 text-[#1E1E1E] mt-8 md:mt-16">لورم ایپسوم متن ساختگی با...</h3>
                    <p className="text-[#8A8A8A] text-10 mt-4 md:mt-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...</p>
                </div>
            </div>
        </>
    );
}

export default ArticlePageCards;