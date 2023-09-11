import { useState } from "react"

const insertAd = (props) => {
    const [level, setLevel] = useState("1")


    function step1Handler(params) {
        setLevel("1")
    }

    function step2Handler(params) {
        setLevel("2")
    }

    function step3Handler(params) {
        setLevel("3")
    }

    switch (level) {
        case '1':
            return (
                <>
                    <div className="w-80% mt-160 m-auto">
                        <h1 className="text-[#8A8A8A] text-center font-medium text-21 leading-[30px]">ثبت آگهی</h1>
                        <div className="mt-32 w-full flex items-center">
                            <div className="w-36 h-36 border-4 border-[#728A2D] rounded-full flex items-center"><div className="w-12 h-12 bg-[#728A2D] m-auto rounded-full"></div></div>
                            <div className="h-2 w-[calc(50%-54px)] bg-[#DCDCDC]"></div>
                            <div className="w-36 h-36 border-2 border-[#DCDCDC] rounded-full flex items-center"></div>
                            <div className="h-2 w-[calc(50%-54px)] bg-[#DCDCDC]"></div>
                            <div className="w-36 h-36 border-2 border-[#DCDCDC] rounded-full flex items-center"></div>
                        </div>
                        <div className=" w-full flex justify-between items-top mt-10">
                            <div>
                                <h3 className="text-[#535353] text-right rext-16 font-medium leading-[30px]">مرحله 1</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">انتخاب دسته بندی‌ها</p>
                            </div>
                            <div>
                                <h3 className="text-[#535353] text-center rext-16 font-medium leading-[30px]">مرحله 2</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">اطلاعات شخص / شرکت</p>
                            </div>
                            <div>
                                <h3 className="text-[#535353] text-left rext-16 font-medium leading-[30px]">مرحله 3</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">گالری تصاویر / فایل</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 1440:grid-cols-3  gap-x-20 gap-y-32 m-auto mt-60 ">
                            <select className="bg-white w-full h-50 border border-[#DCDCDC] rounded-md " >
                                <option className="text-right">انتخاب دسته بندی</option>
                            </select>
                            <select className="bg-white w-full h-50 border border-[#DCDCDC] rounded-md" >
                                <option className="text-right">انتخاب زیر دسته بندی</option>
                            </select>
                            <select className="bg-white w-full h-50 border border-[#DCDCDC] rounded-md" >
                                <option className="text-right">انتخاب زیر زیر دسته بندی</option>
                            </select>
                        </div>
                        <div className="flex w-full justify-end mt-60">
                            <button className="w-112 h-38  text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]" onClick={step2Handler}>مرحله بعد</button>
                        </div>
                    </div >
                </>
            );
            break;
        case '2':
            return (
                <>
                    <div className="w-80% mt-160 m-auto">
                        <h1 className="text-[#8A8A8A] font-medium text-21 leading-[30px] text-center">ثبت آگهی</h1>
                        <div className="mt-32 w-full flex items-center">
                            <div className="w-36 h-36 border-4 border-[#728A2D] rounded-full flex items-center"></div>
                            <div className="h-2 w-[calc(50%-54px)] bg-[#728A2D]"></div>
                            <div className="w-36 h-36 border-4 border-[#728A2D] rounded-full flex items-center"><div className="w-12 h-12 bg-[#728A2D] m-auto rounded-full"></div></div>
                            <div className="h-2 w-[calc(50%-54px)] bg-[#DCDCDC]"></div>
                            <div className="w-36 h-36 border-2 border-[#DCDCDC] rounded-full flex items-center"></div>
                        </div>
                        <div className=" w-full flex justify-between items-top mt-10">
                            <div>
                                <h3 className="text-[#535353] text-right rext-16 font-medium leading-[30px]">مرحله 1</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">انتخاب دسته بندی‌ها</p>
                            </div>
                            <div>
                                <h3 className="text-[#535353] text-center rext-16 font-medium leading-[30px]">مرحله 2</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">اطلاعات شخص / شرکت</p>
                            </div>
                            <div>
                                <h3 className="text-[#535353] text-left rext-16 font-medium leading-[30px]">مرحله 3</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">گالری تصاویر / فایل</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-x-20 gap-y-32 m-auto mt-60 ">
                            <div className="col-span-3 flex flex-col justify-start gap-y-4 gap-x-24">
                                <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">عنوان آگهی</lable>
                                <input type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" />
                            </div>
                            <div className="col-span-1 flex flex-col justify-start gap-y-4 gap-x-24">
                                <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">شماره تماس</lable>
                                <input type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" />
                            </div>
                            <div className="col-span-1 flex flex-col justify-start gap-y-4 gap-x-24">
                                <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">شماره تماس</lable>
                                <input type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" />
                            </div>
                            <div className="col-span-1 flex flex-col justify-start gap-y-4 gap-x-24">
                                <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">استان</lable>
                                <select type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50">
                                    <option></option>
                                </select>
                            </div>
                            <div className="col-span-1 flex flex-col justify-start gap-y-4 gap-x-24">
                                <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">شهر</lable>
                                <select type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50">
                                    <option></option>
                                </select>
                            </div>
                            <div className="col-span-3 flex flex-col justify-start gap-y-4 gap-x-24">
                                <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">آدرس</lable>
                                <textArea className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" />
                            </div>
                            <div className="col-span-5 flex flex-col justify-start gap-y-4 gap-x-24">
                                <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">آدرس</lable>
                                <textArea className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50" />
                            </div>
                            <div className="col-span-5 flex flex-col justify-start gap-y-4 gap-x-24">
                                <lable className="text-right text-[#535353] text-14 font-medium leading-[26px]">امکانات</lable>
                                <select type="text" className="rounded-md border border-[#DCDCDC] bg-[#f4f4f4] p-12 h-50">
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="flex w-full justify-between mt-60">
                            <button className="w-112 text-center h-38 border border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px]" onClick={step1Handler}>مرحله قبل</button>
                            <button className="w-112 h-38 text-white rounded-[6px] text-16 font-medium text-center bg-[#728A2D] leading-[30px]" onClick={step3Handler}>مرحله بعد</button>
                        </div>
                    </div >
                </>
            );
            break;
        case '3':
            return (
                <>
                    <div className="w-80% mt-160 m-auto">
                        <h1 className="text-[#8A8A8A] font-medium text-21 leading-[30px]">ثبت آگهی</h1>
                        <div className="mt-32 w-full flex items-center">
                            <div className="w-36 h-36 border-4 border-[#728A2D] rounded-full flex items-center"></div>
                            <div className="h-2 w-[calc(50%-54px)] bg-[#728A2D]"></div>
                            <div className="w-36 h-36 border-4 border-[#728A2D] rounded-full flex items-center"></div>
                            <div className="h-2 w-[calc(50%-54px)] bg-[#728A2D]"></div>
                            <div className="w-36 h-36 border-4 border-[#728A2D] rounded-full flex items-center"><div className="w-12 h-12 bg-[#728A2D] m-auto rounded-full"></div></div>
                        </div>
                        <div className=" w-full flex justify-between items-top mt-10">
                            <div>
                                <h3 className="text-[#535353] text-right rext-16 font-medium leading-[30px]">مرحله 1</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">انتخاب دسته بندی‌ها</p>
                            </div>
                            <div>
                                <h3 className="text-[#535353] text-center rext-16 font-medium leading-[30px]">مرحله 2</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">اطلاعات شخص / شرکت</p>
                            </div>
                            <div>
                                <h3 className="text-[#535353] text-left rext-16 font-medium leading-[30px]">مرحله 3</h3>
                                <p className="text-[#6E6E6E] text-14 leading-[26px]">گالری تصاویر / فایل</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 1440:grid-cols-3  gap-x-20 gap-y-32 m-auto mt-60 ">
                            <select className="bg-white w-full h-50 border border-[#DCDCDC] rounded-md " >
                                <option className="text-right">انتخاب دسته بندی</option>
                            </select>
                            <select className="bg-white w-full h-50 border border-[#DCDCDC] rounded-md" >
                                <option className="text-right">انتخاب زیر دسته بندی</option>
                            </select>
                            <select className="bg-white w-full h-50 border border-[#DCDCDC] rounded-md" >
                                <option className="text-right">انتخاب زیر زیر دسته بندی</option>
                            </select>
                        </div>
                        <div className="flex w-full justify-between mt-60 ">
                            <button className="w-112 text-center h-38 border border-[#A6B677] rounded-[6px] text-16 font-medium text-[#728A2D] leading-[30px]" onClick={step2Handler}>مرحله قبل</button>
                            <button className="w-112 h-38 text-center text-white rounded-[6px] text-16 font-medium bg-[#728A2D] leading-[30px]">مرحله بعد</button>
                        </div>
                    </div >
                </>
            );
            break;
        default:
            break;
    }

}

export default insertAd;