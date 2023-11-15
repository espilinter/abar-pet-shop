import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import telegram from "../../assets/image/telegramBlack.png"
import ProfileAdCard from "@/components/profileAdCard/profileAdCard";
import SavedCard from "@/components/SavedCard/SavedCard";
import avatar from "../../assets/image/avatar.jpg"
import axios from "axios";
import { useRouter } from "next/router";


function useForceUpdate() {
    const [value, setState] = useState(true);
    return () => setState(!value);
}

const Profile = (props) => {
    const [data] = useState([1, 2, 3, 4, 5, 6])
    const handleForceupdateMethod = useForceUpdate();
    const [clickedButtonStyle] = useState("bg-[#CCD6AF]")
    const [clickedButtonId, setClickedButtonId] = useState("edit")
    const [linksArray, setLinkArray] = useState([{ id: "telegram", "value": "@espilinter2" }])
    const [imageState, setImageState] = useState("")
    const [imageDispaly, setImageDispaly] = useState(false)
    const [userData, setUserData] = useState({})
    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])
    const [advertises, setAdvertises] = useState([])
    const router = useRouter()

    useLayoutEffect(() => {
        axios.get("https://api.abarpetshop.com/api/v1/provinces").then((res) => {
            setProvinces(res.data.data)
        })
        axios.get("https://api.abarpetshop.com/api/v1/dashboard/favorites/advertises").then((res) => {
            setAdvertises(res.data.data)
        })

    }, [])


    function handlePagination(event) {
        setClickedButtonId(event.currentTarget.id)
    }

    function addInput(event) {
        let arrey = linksArray;
        arrey.push({ "id": "telegram", "value": "" })
        setLinkArray(arrey)
        handleForceupdateMethod()
    }

    function provincesChangeHandler(event) {
        let object = userData;
        object[event.target.id] = event.target.value;
        setUserData(object)
        axios.get(`https://api.abarpetshop.com/api/v1/cities/${event.target.value}`).then((res) => {
            setCities(res.data.data)
        })
    }

    async function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
        })
    }

    function imageInputHandler(event) {
        getBase64(event.target.files[0])
            .then(res => {
                fetch(res)
                    .then((response) => response.blob())
                    .then((blob) => {
                        // let array = multiImage;
                        // array.push({
                        //     url: res,
                        //     name: event.target.files[0].name,
                        //     id: multiImage.length + 1,
                        //     size: (event.target.files[0].size / 1000000).toFixed(1),
                        //     upload: true
                        // })
                        // setMultiImage(array)
                        // handleForceupdateMethod()
                        const file = new File([blob], event.target.files[0].name, {
                            type: `${event.target.files[0].type}`,
                        });
                        const formData = new FormData();
                        formData.append("image", file);
                        formData.append("type", "SLIDER");
                        // SetSpinnerState(event.target.files[0].name)
                        axios.post(`https://api.abarpetshop.com/api/v1/files`, formData)
                            .then((res) => {
                                // let array = multiImage;
                                // array[multiImage.length - 1].id = res.data.data.id
                                // setMultiImage(array)
                                setImageState(res.data.data.url)
                            }).then(() => {
                                // SetSpinnerState("")
                                // handleForceupdateMethod()
                                setImageDispaly(true)
                            })
                    });
            })
            .catch(err => console.log(err))
    };

    function inputChangeHandler(event) {
        let object = userData;
        object[event.target.id] = event.target.value;
        setUserData(object)
    }

    function sendUserData() {
        console.log(userData);
        axios.post(`https://api.abarpetshop.com/api/v1/dashboard/edit`, userData).then((res) => {
            console.log(res);
        })
    }

    function exitHandler(params) {
        // axios.post("https://api.abarpetshop.com/api/v1/logout").then((res) => {
        //     console.log(res);
        // })
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row pt-100 lg:pt-150 justify-between px-16 md:px-70 gap-y-16">
                <div className="bg-white w-full lg:w-27% rounded-3xl shadow-[0_0_8px_2px_rgba(0,0,0,0.12)] px-16 md:px-24 py-12 md:py-16 flex flex-col gap-y-12 lg:gap-y-24 h-fit">
                    <div className="bg-white lg:bg-[#F6F7F6] h-145 lg:h-185 rounded-2xl lg:shadow-[0_0_8px_2px_rgba(0,0,0,0.12)] items-center flex flex-col lg:pt-24">
                        <Image alt={""} src={avatar} className="bg-stone-500 rounded-full h-112 w-112" />
                        <span className="text-right text-[#1E1E1E] text-base font-bold mt-8">محمد محمدی</span>
                    </div>
                    <div className="w-full h-[73px] p-16 justify-center items-center lg:inline-flex hidden">
                        <span className="text-right text-[#8A8A8A] text-2xl">داشبورد</span>
                    </div>
                    <div className="flex flex-roe lg:flex-col gap-y-16">
                        <div className={`w-full h-65 lg:h-58 lg:p-16 p-8 pb-0 lg:pb-16 justify-between items-center flex flex-col lg:flex-row cursor-pointer rounded-xl ${clickedButtonId === "edit" ? clickedButtonStyle : ""}`} onClick={handlePagination} id="edit">
                            <div className="flex flex-col lg:flex-row gap-x-8 items-center gap-y-4">
                                <i className="aps-edit-o text-22"></i>
                                <div className="text-right text-zinc-500 text-10 md:text-sm font-normal">ویرایش پروفایل</div>
                            </div>
                            <div className={`w-full h-5 lg:w-5 lg:h-24 bg-[#44531B] rounded-xl ${clickedButtonId === "edit" ? "inline-block" : "hidden"}`}></div>
                        </div>
                        <div className={`w-full h-65 lg:h-58 lg:p-16 p-8 pb-0 lg:pb-16 justify-between items-center flex flex-col lg:flex-row cursor-pointer rounded-xl ${clickedButtonId === "transaction" ? clickedButtonStyle : ""}`} onClick={handlePagination} id="transaction">
                            <div className="flex flex-col lg:flex-row gap-x-8 items-center gap-y-4">
                                <i className="aps-receipt-text-o text-22"></i>
                                <div className="text-right text-zinc-500 text-10 md:text-sm font-normal">تراکنش‌ها</div>
                            </div>
                            <div className={`w-full h-5 lg:w-5 lg:h-24 bg-[#44531B] rounded-xl ${clickedButtonId === "transaction" ? "inline-block" : "hidden"}`}></div>
                        </div>
                        <div className={`w-full h-65 lg:h-58 lg:p-16 p-8 pb-0 lg:pb-16 justify-between items-center flex flex-col lg:flex-row cursor-pointer rounded-xl ${clickedButtonId === "myAd" ? clickedButtonStyle : ""}`} onClick={handlePagination} id="myAd">
                            <div className="flex flex-col lg:flex-row gap-x-8 items-center gap-y-4">
                                <i className="aps-message-text-o text-22"></i>
                                <div className="text-right text-zinc-500 text-10 md:text-sm font-normal">آگهی های من</div>
                            </div>
                            <div className={`w-full h-5 lg:w-5 lg:h-24 bg-[#44531B] rounded-xl ${clickedButtonId === "myAd" ? "inline-block" : "hidden"}`}></div>
                        </div>
                        <div className={`w-full h-65 lg:h-58 lg:p-16 p-8 pb-0 lg:pb-16 justify-between items-center flex flex-col lg:flex-row cursor-pointer rounded-xl ${clickedButtonId === "savedAd" || clickedButtonId === "savedMag" ? clickedButtonStyle : ""}`} onClick={handlePagination} id="savedAd">
                            <div className="flex flex-col lg:flex-row gap-x-8 items-center gap-y-4">
                                <i className="aps-receipt-text-o text-22"></i>
                                <div className="text-right text-zinc-500 text-10 md:text-sm font-normal">ذخیره شده</div>
                            </div>
                            <div className={`w-full h-5 lg:w-5 lg:h-24 bg-[#44531B] rounded-xl ${clickedButtonId === "savedAd" || clickedButtonId === "savedMag" ? "inline-block" : "hidden"}`}></div>
                        </div>
                        <div className={`w-full h-65 lg:h-58 lg:p-16 p-8 pb-0 lg:pb-16 justify-between items-center flex flex-col lg:flex-row cursor-pointer rounded-xl ${clickedButtonId === "logOut" ? clickedButtonStyle : ""}`} onClick={exitHandler} id="logOut">
                            <div className="flex flex-col lg:flex-row gap-x-8 items-center gap-y-4">
                                <i className="aps-logout-o text-22 text-[#EC0303]"></i>
                                <span className="text-right text-[#EC0303] text-10 md:text-sm font-normal hidden lg:inline-block">خروج از حساب کاربری</span>
                                <span className="text-right text-[#EC0303] text-10 md:text-sm font-normal lg:hidden inline-block">خروج</span>
                            </div>
                            <div className={`w-full h-5 lg:w-5 lg:h-24 bg-[#44531B] rounded-xl ${clickedButtonId === "logOut" ? "inline-block" : "hidden"}`}></div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-70% ">
                    <div className="bg-gradient-to-l from-[#CCD6AF] to-[#CCD6AF1A] h-196 w-full rounded-xl flex justify-between py-20 px-40">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col">
                                <span className="text-right text-zinc-800 text-[16px] sm:text-2xl font-bold">اشتراک فعلی:</span>
                                <span className="text-right text-neutral-500 text-12 sm:text-base font-bold mt-8">سوپر ویژه</span>
                            </div>
                            <button className="w-fit px-16 h-38 text-white rounded-[6px] text-12 sm:text-16 font-medium text-center bg-[#728A2D] leading-[30px]">خرید اشتراک</button>
                        </div>
                        <div className="w-50% flex flex-col">
                            {/* <div className="w-100% bg-white h-8">
                                <div className={`h-8 bg-[#728A2D] w-[calc(100%*4/5)]`}></div>
                            </div> */}
                            <span className="text-left text-[#6E6E6E] text-12 sm:text-base font-bold ">۸ آگهی ویژه باقی مانده</span>
                            <ProgressBar completed={60} isLabelVisible={false} bgColor="#728A2D" height="8px" animateOnRender={true} maxCompleted={100} baseBgColor="#F1F3F1" className="ProgressBarStyle mt-8" />
                            <span className="text-left text-[#6E6E6E] text-12 sm:text-base font-bold mt-16">۸ آگهی ویژه باقی مانده</span>
                            <ProgressBar completed={60} isLabelVisible={false} bgColor="#728A2D" height="8px" animateOnRender={true} maxCompleted={100} baseBgColor="#F1F3F1" className="ProgressBarStyle mt-8" />
                            <span className="text-left text-[#6E6E6E] text-12 sm:text-base font-bold mt-16">۸ آگهی ویژه باقی مانده</span>
                            <ProgressBar completed={60} isLabelVisible={false} bgColor="#728A2D" height="8px" animateOnRender={true} maxCompleted={100} baseBgColor="#F1F3F1" className="ProgressBarStyle mt-8" />

                        </div>
                    </div>
                    {(() => {
                        switch (clickedButtonId) {
                            case "edit":
                                return (<div className="flex flex-col gap-y-40">
                                    <div className="w-200 h-200 bg-[#f4f4f4] mt-32 rounded-lg text-center border border-[#B9B9B9] relative justify-center items-center flex flex-col p-16 ">
                                        <input type="file" className="opacity-0 absolute top-0 h-full cursor-pointer w-full right-0 rounded-3xl z-[2]" onChange={imageInputHandler} />
                                        <i className="aps-add-square-o text-24"></i>
                                        <h3 className=" text-16 leading-[30px] mt-4 font-semibold text-[#1E1E1E]">بارگذاری تصویر پروفایل</h3>
                                        <p className="text-10 leading-[22px] text-[#8A8A8A] ">فایل تا 5MB با فرمت PNG, JPG, GIF</p>
                                        {imageDispaly && <Image className="absolute rounded-lg w-200 h-198 bg-[#f4f4f4]" src={imageState} width={200} height={200} />}
                                    </div>
                                    <div className="flex flex-col gap-y-8">
                                        <label className="text-right text-stone-900 text-sm font-normal">نام و نام خانوادگی</label>
                                        <input type="text" className="border border-[#DCDCDC] p-12 h-48 max-w-[372px] bg-[#f4f4f4] rounded-md" onChange={inputChangeHandler} id="full_name" />
                                    </div>
                                    <div className="flex flex-col gap-y-8">
                                        <label className="text-right text-stone-900 text-sm font-normal">شماره تلفن</label>
                                        <input type="tel" className="border border-[#DCDCDC] p-12 h-48 max-w-[372px] bg-[#f4f4f4] rounded-md" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={inputChangeHandler} id="mobile" />
                                    </div>
                                    <div className="flex flex-col gap-y-8">
                                        <label className="text-right text-stone-900 text-sm font-normal">آدرس ایمیل</label>
                                        <input type="email" className="border border-[#DCDCDC] p-12 h-48 max-w-[372px] bg-[#f4f4f4] rounded-md" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={inputChangeHandler} id="email" />
                                    </div>
                                    <div className="flex flex-col gap-y-8">
                                        <label className="text-right text-stone-900 text-sm font-normal">استان</label>
                                        <select className="border border-[#DCDCDC] p-12 h-48 max-w-[372px] bg-[#f4f4f4] rounded-md" onChange={provincesChangeHandler} id="province_id">
                                            <option>انتخاب کنید</option>
                                            {provinces.map((item) => (
                                                <option value={item.id}>{item.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-y-8">
                                        <label className="text-right text-stone-900 text-sm font-normal">شهر</label>
                                        <select className="border border-[#DCDCDC] p-12 h-48 max-w-[372px] bg-[#f4f4f4] rounded-md" onChange={inputChangeHandler} id="city_id">
                                            <option>انتخاب کنید</option>
                                            {cities.map((item) => (
                                                <option value={item.id}>{item.title}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-y-8">
                                        <label className="text-right text-stone-900 text-sm font-normal">لینک شبکه های اجتماعی</label>
                                        {linksArray.map((item) => (
                                            <div className="flex gap-x-16" key={item.id}>
                                                <input type="text" className="border border-[#DCDCDC] p-12 h-48 w-[372px] bg-[#f4f4f4] rounded-md" />
                                                <select className="border border-[#DCDCDC] p-12 h-48 max-w-[90px] bg-[#f4f4f4] rounded-md" onChange={inputChangeHandler} id="social">
                                                    <option value="telegram">تلگرام</option>
                                                </select>
                                            </div>
                                        ))}
                                        <div className="justify-start items-center gap-8 flex cursor-pointer" onClick={addInput}>
                                            <i className="aps-add-square-o text-24 text-[#728A2D] "></i>
                                            <span className="text-right text-[#728A2D] text-sm font-normal">افزودن</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-8">
                                        <label className="text-right text-stone-900 text-sm font-normal">توضیحات</label>
                                        <textarea className="border border-[#B9B9B9] p-12 bg-[#f4f4f4] rounded-md" name="" rows="6" onChange={inputChangeHandler} id="description"></textarea>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="w-112 h-38 text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]" onClick={sendUserData}>ثبت تغییرات</button>
                                    </div>
                                </div>
                                )
                            case "transaction":
                                return (
                                    <div className="">
                                        <div className="overflow-scroll p-10">
                                            <table className="min-w-[720px] md:min-w-fit w-full mt-40 shadow-[0_0_8px_2px_rgba(0,0,0,0.12)] bg-white ">
                                                <thead className="h-72">
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">عنوان</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">مبلغ (تومان)</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">کد پیگیری</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">ساعت</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">تاریخ</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">وضعیت</th>
                                                </thead>
                                                <tbody className="h-72 border-t border-[#B9B9B9] ">
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">خرید پکیج</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">۷۰۵,۰۰۰</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">۱۲۳۲۴</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">۱۱:۳۰:۵۴</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8">۱۴۰۲/۰۲/۳۱</th>
                                                    <th className="text-center text-stone-900 text-base font-bold p-8"><div className="bg-[#FDE9E9] text-[#EC0303] rounded-full w-full h-38 flex justify-center items-center">
                                                        <span className="">تراکنش ناموفق</span>
                                                    </div>
                                                    </th>
                                                </tbody>
                                            </table>
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
                                )
                            case "myAd":
                                return (
                                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-24 mt-40 gap-y-32 ">
                                        {props.myAd && props.myAd.map((item, index) => (<ProfileAdCard key={index} item={item} />))}
                                    </div>
                                )
                            case "savedAd":
                                return (
                                    <>
                                        <div className="flex flex-start w-full gap-x-[8px]  mt-40">
                                            <div className="w-60 h-38 text-center border-b border-[#8A8A8A] p-8 text-12 text-[#8A8A8A] cursor-pointer">آگهی‌ها</div>
                                            <div className="w-60 h-38 text-center p-8 text-12 text-[#8A8A8A] cursor-pointer" onClick={handlePagination} id="savedMag">مقالات</div>
                                        </div>
                                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-24 gap-y-32 mt-24">
                                            {advertises && advertises.map((item) => (<SavedCard key={item.id} />))}
                                        </div>
                                    </>
                                )
                            case "savedMag":
                                return (
                                    <>
                                        <div className="flex flex-start w-full gap-x-[8px]  mt-40">
                                            <div className="w-60 h-38 text-center p-8 text-12 text-[#8A8A8A] cursor-pointer" onClick={handlePagination} id="savedAd">آگهی‌ها</div>
                                            <div className="w-60 h-38 text-center p-8 text-12 text-[#8A8A8A] cursor-pointer border-b border-[#8A8A8A]">مقالات</div>
                                        </div>
                                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-24 mt-24 gap-y-32 ">
                                            {advertises && advertises.map((item) => (<SavedCard key={item.id} />))}
                                        </div>
                                    </>
                                )
                            default:
                                return (
                                    <p className="text-24 p-40">page not Found</p>
                                )
                        }
                    })()}
                </div>
            </div >
        </>
    );
}

export default Profile;

// export async function getStaticProps(context) {
//     const res = await fetch(`https://api.abarpetshop.com/api/v1/dashboard/advertise`)
//     const data = await res.json()
//     if (data.length === 0) {
//         return { notFound: true }
//     }
//     return {
//         props: {
//             myAd: data.data
//         },
//         revalidate: 10,
//     }
// }