import AdSwiper from "@/components/AdSwiper/AdSwiper";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import Title from "@/components/Title/Title";
import Advertising from "@/components/AdvertiseCard/AdvertiseCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
//////////////////////////////
import ReactPaginate from 'react-paginate';
import Router, { withRouter } from 'next/router'
//////////////////////////////
const Category = (props) => {
    const [accordion, setAccordion] = useState("a")
    const searchParams = useSearchParams()
    const router = useRouter()
    useEffect(() => {
        // searchParams.set(page, "2")
        console.log(props.categorys);
    }, [])

    function nextPage() {
        const search = props.router.query;
        const pageNum = Number(searchParams.get("page"))
        search.page = (pageNum + 1).toString()
        router.push({
            query: { ...search }
        })
    }

    function prevPage() {
        const search = props.router.query;
        const pageNum = Number(searchParams.get("page"))
        search.page = (pageNum - 1).toString()
        router.push({
            query: { ...search }
        })
    }

    //////////////////////////////
    const [isLoading, setLoading] = useState(false); //State for the loading indicator
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    /*
    Posts fetching happens after page navigation, 
    so we need to switch Loading state on Router events.
*/
    useEffect(() => { //After the component is mounted set router event handlers
        console.log(props);
        Router.events.on('routeChangeStart', startLoading);
        Router.events.on('routeChangeComplete', stopLoading);

        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
        }
    }, [])

    //When new page selected in paggination, we take current path and query parrams.
    // Then add or modify page parram and then navigate to the new route.
    const pagginationHandler = (page) => {
        console.log("pathname: ", props.router.pathname);
        console.log("query: ", props.router.query);
        console.log("page: ", page.selected + 1);
        // Router.push({
        //     query: { page: `${page.selected + 1}` }
        // })
        // const currentPath = props.router.pathname;
        // const currentQuery = props.router.query;
        // currentQuery.page = page.selected + 1;
        // props.router.push({
        //     pathname: currentPath,
        //     query: currentQuery,
        // });
    };
    /////////////////////////////



    function categoryClickHandler(event) {
        const search = props.router.query;
        search.category_id = event.currentTarget.id
        router.push({
            query: { ...search }
        })
    }

    let content = null;
    if (isLoading) {
        <div>Loading...</div>;
    } else {
        return (
            <div className="w-90% m-auto pt-60 lg:pt-100">
                <AdSwiper className="pt-40 w-full" data={props.data.slider} fakeClass={"w-[1300px] h-[300px]"} />
                <div className=" pt-40 lg:pt-80">
                    <Title title="آگهی‌های پت‌شاپ معمولی" />
                    <div className="flex w-full justify-between mt-16 md:mt-64 gap-x-50">
                        <div className="w-300 lg:inline-block hidden">
                            <div className="w-full p-8 rounded-xl border border-gray-200 text-right">
                                <input className="w-full text-right border border-gray-300 py-8 px-24 rounded-lg bg-[#f4f4f4]" type="text" placeholder="جستجو" />
                                <h3 className="text-16 font-bold text-right mt-8">فیلتر های اعمال شده</h3>
                                <button className="text-[#EC0303] mt-8">حذف فیلتر ها x</button>
                            </div>
                            <h3 className="text-14 text-[#B9B9B9] mt-24 text-right">دسته‌بندی خود را انتخاب کنید:</h3>
                            <div>
                                {props.categorys && props.categorys.map((item, index) => (
                                    <div className="text-right text-14 mt-14 text-[#B9B9B9]" key={index}>
                                        <div className="text-right items-center flex gap-x-8" onClick={categoryClickHandler} id={item.id}>
                                            <input type="radio" name="category" id={"category" + item.id} className="w-24 h-24" />
                                            <label className="text-right cursor-pointer" htmlFor={"category" + item.id} >{item.name}</label>
                                        </div>
                                        {/* <div className={`pr-32 h-0 transition-all overflow-hidden ${+item.id === +accordion ? `h-${item.subCategory.length * 40}` : "h-0"}`}>
                                                {item.subCategory.map((item, index) => (
                                                    <div className="flex items-center gap-x-8 my-16" key={index}>
                                                        <input type="checkbox" id={"subCategory" + item.id} className="w-24 h-24 accent-[#728A2D] rounded-3xl " />
                                                        <label className="text-right text-14 text-[#6E6E6E] h-24 cursor-pointer">{item.title}</label>
                                                    </div>
                                                ))}
                                            </div> */}
                                    </div>
                                ))}
                            </div>
                            <input className="w-300 h-50 text-[#B9B9B9] border border-[#B9B9B9] rounded-lg text-right p-12 bg-[#f4f4f4] text-14 mt-14" placeholder="انتخاب استان" />
                            <input className="w-300 h-50 text-[#B9B9B9] border border-[#B9B9B9] rounded-lg text-right p-12 bg-[#f4f4f4] text-14 mt-14" placeholder="انتخاب شهر" />
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 1750:grid-cols-6 gap-x-40 1500:gap-x-60 1600:grid-cols-5 1600:gap-x-25 gap-y-32 ">
                                {props.advertises && props.advertises.map((item, index) => (<Advertising item={item} key={index} />))}
                            </div>
                            <div className="w-280 h-24 m-auto mt-32 flex justify-between">
                                <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] cursor-pointer" onClick={prevPage}>{"<<"}</div>
                                {/* <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">{"<"}</div>
                                    <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">1</div>
                                    <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">2</div>
                                    <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">3</div>
                                    <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">...</div>
                                    <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">4</div>
                                    <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC]">{">"}</div> */}
                                <div className="text-center w-24 h-24 bg-white text-13 font-bold text-[#535353] p-3 rounded-lg border border-[#DCDCDC] cursor-pointer" onClick={nextPage}>{">>"}</div>
                            </div>
                            {/* <ReactPaginate
                                    previousLabel={'previous'}
                                    nextLabel={'next'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    activeClassName={'active'}
                                    containerClassName={'pagination'}
                                    subContainerClassName={'pages pagination'}
                                    initialPage={props.currentPage - 1}
                                    pageCount={5}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={pagginationHandler}
                                /> */}
                        </div>
                    </div>
                </div>
                <div className="md:mt-80 mt-40 w-90% m-auto" >
                    <Title title="مقالات" />
                    <div className="w-full overflow-x-scroll">
                        <div className="flex justify-between 20 md:mt-40 1440:[&>*:nth-child(5)]:hidden 1650:[&>*:nth-child(5)]:inline-block min-w-[1200px] 1220:min-w-[1400px] 1440:min-w-[1150px] p-10">
                            {props.data.articleCards && props.data.articleCards.slice(0, 5).map((item, index) => (
                                <ArticleCard item={item} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <a className=""><button className="w-112 h-38 m-auto border mt-32 border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px] text-center">همه مقالات</button></a>
                </div>
            </div>
        );
    }
}

//Fetching posts in get Intial Props to make the app seo friendly
Category.getInitialProps = async ({ query }) => {
    const page = query.page || 1; //if page empty we request the first page
    const posts = await axios.get(`https://api.abarpetshop.com/api/v1/advertises?page=${page}`);
    const categorys = await axios.get(`https://api.abarpetshop.com/api/v1/category`);
    const res = await fetch("http://localhost:3001/categoryPage")
    const data = await res.json()
    if (data.length === 0) {
        return { notFound: true }
    }
    return {
        // totalCount: posts.data._meta.totalCount,
        // pageCount: posts.data._meta.pageCount,
        // currentPage: posts.data._meta.currentPage,
        // perPage: posts.data._meta.perPage,
        // posts: posts.data.result,
        advertises: posts.data.data,
        data: data,
        categorys: categorys.data.data
    };
}

// export async function getServerSideProps(context) {
//     const { query } = context;
//     const page = query.page || 1; //if page empty we request the first page
//     const posts = await axios.get(`https://api.abarpetshop.com/api/v1/advertises?page=${page}`);
//     const categorys = await axios.get(`https://api.abarpetshop.com/api/v1/category`);
//     const res = await fetch("http://localhost:3001/categoryPage")
//     const data = await res.json()
//     if (data.length === 0) {
//         return { notFound: true }
//     }
//     return {
//         // totalCount: posts.data._meta.totalCount,
//         // pageCount: posts.data._meta.pageCount,
//         // currentPage: posts.data._meta.currentPage,
//         // perPage: posts.data._meta.perPage,
//         // posts: posts.data.result,
//         props: {
//             advertises: posts.data.data,
//             data: data,
//             categorys: categorys.data.data
//         }
//     };
// }

export default withRouter(Category);

// export async function getStaticProps() {
//     const res = await fetch("http://localhost:3001/categoryPage")
//     const advertises = await axios.get(`https://api.abarpetshop.com/api/v1/advertises`)
//     const data = await res.json()
//     if (data.length === 0) {
//         return { notFound: true }
//     }
//     return {
//         props: {
//             data: data,
//             advertises: advertises.data.data
//         },
//         revalidate: 10,
//     }
// }

