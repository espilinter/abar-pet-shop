import ArticlesSwiper from "@/components/ArticlesSwiper/ArticlesSwiper";
import Title from "@/components/Title/Title";

const Articles = () => {
    return (
        <>
            <div className="pt-140">
                <div className="text-[#BDBDBD] text-12 font-extrabold flex mr-68">
                    <a href="#">صفحه اصلی</a>/<a href="#"> دسته بندی </a>/<p>زیر دسته بندی</p>
                </div>
                <div className="w-190 self-start mt-25 mr-68">
                    <Title title="آخرین مقالات" className="" />
                </div>
                <ArticlesSwiper />
            </div>
        </>
    );
}

export default Articles;