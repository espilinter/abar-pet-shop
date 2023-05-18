import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import { getAppDescription, getAppTitle } from "../../utils";
import background1 from "../../assets/image/Frame44326.png";
import ad1 from "../../assets/image/ad1.png"
import system from "../../assets/image/image3.png"
import dot3 from "../../assets/image/dot3.png"
import timer1 from "../../assets/image/timer1.png"
import user from "../../assets/image/user.png"

import "./framePage.css"
import axios from "axios";
import SimilarSystemsCard from "../../components/similarSystemsCard/similarSystemsCard";
import Title from "../../components/Title/Title.jsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
const FramePage = () => {

    const [data, setData] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [secondCircleColor, setSecondCircleColor] = useState("border-2 border-[#B9B9B9]")
    const [firstLineColor, setFirstLineColor] = useState("bg-[#B9B9B9]")
    const [thirdCircleColor, setThirdCircleColor] = useState("border-2 border-[#B9B9B9]")
    const [secondtLineColor, setSecondLineColor] = useState("bg-[#B9B9B9]")
    const [firstBoxShadow, setFirstBoxShadow] = useState("shadowBox")
    const [secondBoxShadow, setSecondBoxShadow] = useState("")
    const [thirdBoxShadow, setThirdBoxShadow] = useState("")


    useEffect(() => {
        fetchData()
        fetchCategoryData()
        firstStep()
    }, [])

    useEffect(() => {

    }, [fetchData])

    function firstStep() {
        setSecondCircleColor("border-2 border-[#B9B9B9]")
        setFirstLineColor("bg-[#B9B9B9]")
        setThirdCircleColor("border-2 border-[#B9B9B9]")
        setSecondLineColor("bg-[#B9B9B9]")
        setFirstBoxShadow("shadowBox")
        setThirdBoxShadow("")
        setTimeout(() => {
            secondStep()
        }, 2000);
    }

    function secondStep() {
        setSecondCircleColor("bg-[#728A2D]")
        setFirstLineColor("bg-[#728A2D]")
        setFirstBoxShadow("")
        setSecondBoxShadow("shadowBox")
        setTimeout(() => {
            thirdStep()
        }, 2000);
    }

    function thirdStep() {
        setThirdCircleColor("bg-[#728A2D]")
        setSecondLineColor("bg-[#728A2D]")
        setSecondBoxShadow("")
        setThirdBoxShadow("shadowBox")

        setTimeout(() => {
            firstStep()
        }, 2000);
    }

    function fetchData() {
        axios.get("http://localhost:3001/similarSystems").then((response) => {
            setData(response.data);
        });
    }

    function fetchCategoryData() {
        axios.get("http://localhost:3001/categury").then((response) => {
            setCategoryData(response.data);
        });
    }



    const appTitle = getAppTitle()
    const appDescription = getAppDescription()
    return (

        <Fragment>
            <Helmet>
                <title>{appTitle}</title>
                <meta name="description" content={appDescription} />
            </Helmet>
            <PageContainer>
                <div className="bg-[#f4f4f4]">
                    <div className="w-full">
                        <img className="w-full " src={background1} />
                    </div>
                    <div className="mt-40">
                        <Title title="سامانه های مشابه" />
                    </div>
                    <div className="w-1080 h-129 m-auto mt-40 flex">
                        <div className="flex m-auto">
                            {data.slice(0, 6).map((item) => (<SimilarSystemsCard item={item} img={system} />))}
                            <div className="w-40 h-129 ml-68">
                                <div className="bg-[#ffffff] w-40 h-40 rounded-full mt-40"><img src={dot3} className="p-9" /></div>
                                <p className="text-12 mt-28">بیشتر</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1300] m-auto mt-80">
                        <img className="m-auto" src={ad1} />
                    </div>
                    <div className="mt-40">
                        <Title title="دسته بندی" />
                    </div>
                    <div className="w-90% m-auto grid grid-cols-4 gap-y-[68px] mt-48">
                        {categoryData.map((item) => (<CategoryCard item={item} img={system} />))}
                    </div>
                    <div className="mt-154">
                        <Title title="چرا ابر پت شاپ" />
                    </div>
                    <div className="flex w-75% m-auto">
                        <div className="m-auto w-336 h-318 relative mt-80 ">
                            <div className="w-96 h-96 rounded-full bg-white pt-24 mr-120 z-10 absolute mt-[-48px] shadowCircle">
                                <img src={timer1} className="w-48 h-48 m-auto" />
                            </div>
                            <div className="w-336 h-318 shadows pt-88 m-auto bg-white z-0 rounded-[18px] ">
                                <div className="w-256 h-190 m-auto">
                                    <h2 className="text-20 font-bold ">انتخاب اقتصادی</h2>
                                    <p className="text-16 mt-17 w-256 text-[#616161] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                                </div>
                            </div>
                        </div>
                        <div className="m-auto w-336 h-318 relative mt-224 ">
                            <div className="w-96 h-96 rounded-full bg-white pt-24 mr-120 z-10 absolute mt-[-48px] shadowCircle">
                                <img src={timer1} className="w-48 h-48 m-auto" />
                            </div>
                            <div className="w-336 h-318 shadows pt-88 m-auto bg-white z-0 rounded-[18px] ">
                                <div className="w-256 h-190 m-auto">
                                    <h2 className="text-20 font-bold ">انتخاب اقتصادی</h2>
                                    <p className="text-16 mt-17 w-256 text-[#616161] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                                </div>
                            </div>
                        </div>
                        <div className="m-auto w-336 h-318 relative mt-80 ">
                            <div className="w-96 h-96 rounded-full bg-white pt-24 mr-120 z-10 absolute mt-[-48px] shadowCircle">
                                <img src={timer1} className="w-48 h-48 m-auto" />
                            </div>
                            <div className="w-336 h-318 shadows pt-88 m-auto bg-white z-0 rounded-[18px] ">
                                <div className="w-256 h-190 m-auto">
                                    <h2 className="text-20 font-bold ">انتخاب اقتصادی</h2>
                                    <p className="text-16 mt-17 w-256 text-[#616161] leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-162">
                        <Title title="خدمات و مزیت ها" />
                    </div>
                    <div className="flex gap-x-[7%] w-90% m-auto mt-48">
                        <div className={`w-388 h-298 rounded-[16px] ${firstBoxShadow} pt-20 m-auto transitionShadow`}>
                            <img src={user} className="w-100 h-100 m-auto" />
                            <h3 className="text-18 mt-16">1.ثبت نام</h3>
                            <p className="font-medium text-15 text-[#8A8A8A] leading-[30px] mt-20">به راحتی با یک کلیک می‌شود در لینک‌بورد ثبت نام کرد</p>
                            <div className="w-96 h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6">ثبت نام</div>
                        </div>
                        <div className={`w-388 h-298 rounded-[16px] ${secondBoxShadow} pt-20 m-auto transitionShadow`}>
                            <img src={user} className="w-100 h-100 m-auto" />
                            <h3 className="text-18 mt-16">۲. میان آگهی ها جستجو کنید</h3>
                            <p className="font-medium text-15 text-[#8A8A8A] leading-[30px] mt-20">مراحل ساده ثبت آگهی در دسته‌بندی های مختلف</p>
                            <div className="w-96 h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6">آگهی ها</div>
                        </div>
                        <div className={`w-388 h-298 rounded-[16px] ${thirdBoxShadow} pt-20 m-auto transitionShadow`}>
                            <img src={user} className="w-100 h-100 m-auto" />
                            <h3 className="text-18 mt-16">۳. آگهی خود را ثبت کنید </h3>
                            <p className="font-medium text-15 text-[#8A8A8A] leading-[30px] mt-20">مراحل ساده ثبت آگهی در دسته‌بندی های مختلف</p>
                            <div className="w-96 h-38 m-auto bg-[#728A2D] mt-20 rounded-[6px] font-medium text-white pt-6 transitionBg">ثبت آگهی</div>
                        </div>
                    </div>
                    <div className="mt-40 w-71% mr-[16.5%]  flex ">
                        <div className="rounded-full bg-[#728A2D] w-36 h-36 transitionBg"></div>
                        <div className={`w-42% h-2 ${firstLineColor} mt-17 transitionBg`}></div>
                        <div className={`rounded-full ${secondCircleColor} w-36 h-36 transitionBg`}></div>
                        <div className={`w-42% h-2 ${secondtLineColor} mt-17 transitionBg`}></div>
                        <div className={`rounded-full ${thirdCircleColor} w-36 h-36 transitionBg`}></div>
                    </div >
                    {/* <div className="m-auto ">
                        <div className="w-246 h-246 bg-[#728a2d33] pt-16 rounded-full">
                            <div className="w-213 h-213 bg-[#728a2d33] m-auto rounded-full border-[6px] border-dotted border-[#728A2D]"></div>
                        </div>
                        <div className="w-276 h-276"></div>
                        <div className="w-246 h-246"></div>
                    </div> */}
                </div>
            </PageContainer>
        </Fragment >
    )
}
export default FramePage;