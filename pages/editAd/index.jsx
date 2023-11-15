import LocationContainer from "@/components/LocationContainer/LocationContainer";
import Spinner from "@/components/Spinner/Spinner";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react"

function useForceUpdate() {
    const [value, setState] = useState(true);
    return () => setState(!value);
}

const EditAd = (props) => {

    const [multiImage, setMultiImage] = useState([])
    const [title, setTitle] = useState("")
    const [phone1, setPhone1] = useState("")
    const [phone2, setPhone2] = useState("")
    const [provience, setProvience] = useState("")
    const [city, setCity] = useState("")
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [options, setOptions] = useState("")
    const [category, setCategory] = useState("")
    // const [subCategoryArrey, setSubCategoryArrey] = useState([])
    const [cityData, setCityData] = useState([])
    const [location, setLocation] = useState("")
    const [spinnerState, SetSpinnerState] = useState("")
    const handleForceupdateMethod = useForceUpdate();
    function postData() {
        let array = multiImage.map((item) => { return item.id })
        const object = {
            title: title,
            phone: phone1,
            description: description,
            address: address,
            province_id: provience,
            city_id: city,
            category_id: category,
            image_ids: array,
            map: location
        }
        axios.post(`${process.env.BASE_API}/advertise/store`, object).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }
    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }
    function phone1ChangeHandler(event) {
        setPhone1(event.target.value)
    }
    function phone2ChangeHandler(event) {
        setPhone2(event.target.value)
    }
    function cityChangeHandler(event) {
        setCity(event.target.value)
    }
    function addressChangeHandler(event) {
        setAddress(event.target.value)
    }
    function descriptionChangeHandler(event) {
        setDescription(event.target.value)
    }
    function optionsChangeHandler(event) {
        setOptions(event.target.value)
    }
    function categoryChangeHandler(event) {
        if (event.target.value) {
            const subCategoryData = props.categoryData.filter((item) => {
                return +item.id === +event.target.value
            })
            setSubCategoryArrey(subCategoryData[0].children)
        }
    }
    function subCategoryChangeHandler(event) {
        setCategory(event.target.value)
    }
    function provienceChangeHandler(event) {
        setProvience(event.target.value)
        console.log(event.target.value);
        if (event.target.value) {
            axios.get(`https://api.abarpetshop.com/api/v1/cities/${event.target.value}`).then((res) => {
                // setProvience(res.data.data.id);
                setCityData(res.data.data)
            })
        }
    }
    function cityChangeHandler(event) {
        setCity(event.target.value)
    }

    function blobToFile(theBlob, fileName) {
        //A Blob() is almost a File() - it's just missing the two properties below which we will add
        theBlob.lastModifiedDate = new Date();
        theBlob.name = fileName;
        return theBlob;
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
                        let array = multiImage;
                        array.push({
                            url: res,
                            name: event.target.files[0].name,
                            id: multiImage.length + 1,
                            size: (event.target.files[0].size / 1000000).toFixed(1),
                            upload: true
                        })
                        setMultiImage(array)
                        handleForceupdateMethod()
                        const file = new File([blob], event.target.files[0].name, {
                            type: `${event.target.files[0].type}`,
                        });
                        const formData = new FormData();
                        formData.append("image", file);
                        formData.append("type", "SLIDER");
                        SetSpinnerState(event.target.files[0].name)
                        axios.post(`https://api.abarpetshop.com/api/v1/files`, formData)
                            .then((res) => {
                                let array = multiImage;
                                array[multiImage.length - 1].id = res.data.data.id
                                setMultiImage(array)
                            }).then(() => {
                                SetSpinnerState("")
                                handleForceupdateMethod()
                            })
                    });
            })
            .catch(err => console.log(err))
    };

    function deleteImgHandler(event) {
        let array = multiImage;
        console.log(event.target.id);
        let newArray = array.filter((item) => {
            return +item.id !== +event.target.id
        })
        console.log(newArray);
        setMultiImage(newArray)
        handleForceupdateMethod()
    }

    return (
        <>
            <div className="w-80% pt-160 m-auto">
                <h1 className="text-[#8A8A8A] text-center font-medium text-21 leading-[30px]">ثبت آگهی</h1>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 1440:grid-cols-3  gap-x-20 gap-y-32 m-auto mt-60 ">
                    
                    <select className="bg-[#f4f4f4] w-full h-50 border border-[#DCDCDC] rounded-md" onChange={subCategoryChangeHandler}>
                        <option className="text-right" value={false}>انتخاب زیر دسته بندی</option>
                        {subCategoryArrey.map((item, index) => (
                            <option value={item.id} key={index}>{item.name}</option>
                        ))}
                    </select>
                </div> */}
                <div className="grid grid-cols-12 gap-x-20 gap-y-32 m-auto mt-60 mb-30">
                    <div className="col-span-12 860:col-span-6 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">عنوان آگهی</lable>
                        <input type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" value={title} onChange={titleChangeHandler} />
                    </div>
                    <div className="col-span-12 500:col-span-6 860:col-span-3 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">شماره تماس</lable>
                        <input type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" value={phone1} onChange={phone1ChangeHandler} />
                    </div>
                    <div className="col-span-12 500:col-span-6 860:col-span-3 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">شماره تماس</lable>
                        <input type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" value={phone2} onChange={phone2ChangeHandler} />
                    </div>
                    <div className="col-span-12 500:col-span-6 860:col-span-4 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">استان</lable>
                        <select type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" onChange={provienceChangeHandler}>
                            <option className="text-right" value={false}>انتخاب استان</option>
                            {props.provinceData.map((item, index) => (
                                <option value={item.id} key={index}>{item.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-12 500:col-span-6 860:col-span-4 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">شهر</lable>
                        <select type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" onChange={cityChangeHandler}>
                            <option>انتخاب کنید</option>
                            {cityData.map((item, index) => (<option value={item.id} key={index}>{item.title}</option>))}
                        </select>
                    </div>
                    <div className="col-span-12 860:col-span-4 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">دسته‌بندی</lable>
                        <select className="w-full h-50 border border-[#DCDCDC] rounded-md bg-[#f4f4f4]" onChange={categoryChangeHandler}>
                            <option className="text-right" value={false}>انتخاب دسته بندی</option>
                            {props.categoryData.map((item, index) => (
                                <option value={item.id} key={index}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-span-12 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">آدرس</lable>
                        <textArea className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" value={address} onChange={addressChangeHandler} />
                    </div>
                    <div className="col-span-12 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">توضیحات</lable>
                        <textarea className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-150" value={description} onChange={descriptionChangeHandler} />
                    </div>
                    {/* <div className="col-span-5 flex flex-col justify-start gap-y-4 gap-x-24">
                        <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">امکانات</lable>
                        <select type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" value={options} onChange={optionsChangeHandler}>
                            <option></option>
                        </select>
                    </div> */}
                </div>
                <LocationContainer location={location} setLocation={setLocation} />
                <div className="w-full h-150 bg-white mt-32 rounded-3xl text-center border border-[#B9B9B9] relative justify-center items-center flex flex-col p-16">
                    <input type="file" className="opacity-0 absolute top-0 h-full cursor-pointer w-full right-0 rounded-3xl" onChange={imageInputHandler} />
                    <div className="w-48 h-48 rounded-full border-[3px] border-[#728A2D] flex items-center justify-around"><span className="text-40 font-medium text-[#728A2D] h-24 w-24 mt-[-28px] ml-2">+</span></div>
                    <h3 className="text-[#728A2D] text-16 leading-[30px] mt-12">بارگذاری فایل</h3>
                    <p className="text-12 leading-[22px] text-[#B9B9B9] mt-4">فایل تا 5MB با فرمت PNG, JPG, GIF</p>
                </div>
                <div className="flex flex-wrap gap-16 mt-32">
                    {multiImage.map((item, index) => (
                        <div className="relative bg-[#DCDCDC] flex p-10 gap-x-16 rounded-lg" key={index}>
                            <div className="flex flex-col justify-between items-start">
                                <i className="aps-close-circle-o text-24 cursor-pointer" id={item.id} onClick={deleteImgHandler}></i>
                                <span className="text-right text-zinc-800 text-base font-normal leading-[30px]">{item.name}</span>
                                <span className="text-right text-zinc-400 text-xs font-normal leading-snug">{item.size}MB</span>
                            </div>
                            <div className="relative h-100">
                                <Image src={item.url} className="h-100" alt={""} width={100} height={100} />
                                {spinnerState === item.name ? <div className="w-full h-100 bg-[#00000062] flex justify-center items-center absolute top-0">
                                    <Spinner />
                                </div> : ""}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-end mt-60">
                    <button className="w-112 h-38 text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]" onClick={postData}>ثبت آگهی</button>
                </div>
            </div >
        </>
    );

}

export async function getStaticProps() {
    try {
        const category = await axios.get("https://api.abarpetshop.com/api/v1/category")
        const province = await axios.get("https://api.abarpetshop.com/api/v1/provinces")
        return {
            props: {
                categoryData: category.data.data,
                provinceData: province.data.data
            },
            revalidate: 3600,
        }
    }
    catch (error) {
        console.log(error);
    }
    // const filePath = path.join(process.cwd(), 'db.json');
    // const jsonData = await fs.readFileSync(filePath);
    // const data = JSON.parse(jsonData);
    //handle error 404
    // if (data.framePage.length === 0) {
    //     return { notFound: true }
    // }
    //handle any error
    // if (!data) {
    //     return {
    //         redirect: {
    //             destination: "/error500"
    //         }
    //     }
    // }

}
export default EditAd;