import ArticleCardPopular from "@/components/ArticleCardPopular/ArticleCardPopular";
import ArticlePageCards from "@/components/ArticlePageCards/ArticlePageCards";
import ArticlesSwiper from "@/components/ArticlesSwiper/ArticlesSwiper";
import Title from "@/components/Title/Title";

const Articles = (props) => {
    return (
        <>
            <div className="pt-80 md:pt-140">
                <div className="text-[#BDBDBD] text-12 font-extrabold hidden md:flex mr-68 ">
                    <a href="#">صفحه اصلی</a>/<a href="#"> دسته بندی </a>/<p>زیر دسته بندی</p>
                </div>
                <div className="w-100 md:w-190 self-start mt-25 mr-16 md:mr-68">
                    <Title title="آخرین مقالات" className="" />
                </div>
                <div className="mt-20 md:mt-80 py-10">
                    <ArticlesSwiper />
                </div>


                <div className="inline-block md:hidden w-120 md:w-200 self-start mt-25 mr-16 md:mr-68">
                    <Title title="بیشترین بازدید" className="" />
                </div>
                <div className="overflow-scroll mt-5 md:mt-80">
                    <div className="pr-50  w-full flex gap-x-18  md:[&>*:nth-child(3)]:hidden xl:[&>*:nth-child(3)]:inline-block md:[&>*:nth-child(4)]:hidden 1440:[&>*:nth-child(4)]:inline-block min-w-[1350px] md:min-w-[950px]">
                        {props.data.cards.slice(0, 4).map((item) => (
                            <ArticleCardPopular />
                        ))}
                        <div className="hidden md:inline-block mr-22 w-400">
                            <div className="w-220 self-start">
                                <Title title="بیشترین بازدید" />
                            </div>
                            <p className=" font-semibold mr-45 mt-40">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها </p>
                            <button className="w-155 h-38 bg-[#728A2D] text-white rounded-md flex items-center justify-center gap-x-8 ml-0 mr-auto">
                                <span className="text-16">مشاهده بیشتر</span>
                                <i className="aps-arrow-left-1-o text-20"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex mt-100 items-center justify-between overflow-scroll ">
                    <div className="hidden lg:inline-block w-250 pr-50">
                        <Title title="همه مقالات" />
                    </div>
                    <div className="bg-[#A6B677] w-full lg:w-70% flex min-w-[700px] mr-20">
                        <div className="flex flex-col gap-y-16 py-10 px-25 w-116 items-center bg-[#44531B] text-white">
                            <i className="aps-pet text-[50px]"></i>
                            <span className="text-14 ">دسته بندی</span>
                        </div>
                        <div className="flex flex-col gap-y-16 py-10 px-25 w-116 items-center bg-[#A6B677]">
                            <i className="aps-pet text-[50px]"></i>
                            <span className="text-14 ">دسته بندی</span>
                        </div>
                        <div className="flex flex-col gap-y-16 py-10 px-25 w-116 items-center bg-[#A6B677]">
                            <i className="aps-pet text-[50px]"></i>
                            <span className="text-14 ">دسته بندی</span>
                        </div>
                        <div className="flex flex-col gap-y-16 py-10 px-25 w-116 items-center bg-[#A6B677]">
                            <i className="aps-pet text-[50px]"></i>
                            <span className="text-14 ">دسته بندی</span>
                        </div>
                        <div className="flex flex-col gap-y-16 py-10 px-25 w-116 items-center bg-[#A6B677]">
                            <i className="aps-pet text-[50px]"></i>
                            <span className="text-14 ">دسته بندی</span>
                        </div>
                        <div className="flex flex-col gap-y-16 py-10 px-25 w-116 items-center bg-[#A6B677]">
                            <i className="aps-pet text-[50px]"></i>
                            <span className="text-14 ">دسته بندی</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 1500:grid-cols-6 1750:grid-cols-7 w-full px-16 md:px-60 mt-130 gap-y-32">
                    {props.data.cards.map((item) => (
                        <div className="flex justify-center">
                            <ArticlePageCards />
                        </div>
                    ))}
                </div>
                <div className="w-280 h-24 m-auto mt-32 flex justify-between">
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">{"<<"}</div>
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">{"<"}</div>
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">1</div>
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">2</div>
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">3</div>
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">...</div>
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">4</div>
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">{">"}</div>
                    <div className="w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] text-center">{">>"}</div>
                </div>
            </div>
        </>
    );
}

export default Articles;

export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/articles")
    const data = await res.json()
    if (data.length === 0) {
        return { notFound: true }
    }
    return {
        props: {
            data: data
        },
        revalidate: 10,
    }
}