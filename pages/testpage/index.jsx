import React from "react";

const testpage = () => {

    return (
        <>
            <div className="h-[800px] w-full pt-200">
                <div className="w-[358px] h-[133px] p-2 bg-white rounded-xl shadow flex-col justify-start items-center gap-2 inline-flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="self-stretch flex-col justify-end items-center gap-4 inline-flex">
                            <div className="self-stretch h-9 px-3 py-1 rounded-md border border-stone-400 justify-center items-center gap-2 inline-flex">
                                <div className="text-center text-lime-600 text-sm font-normal font-['IRANYekan']">اطلاعات بیشتر</div>
                            </div>
                        </div>
                        <div className="self-stretch flex-col justify-between items-start inline-flex">
                            <div className="self-stretch justify-between items-start inline-flex">
                                <div className="text-center text-neutral-600 text-[10px] font-bold font-['IRANYekan']">محمد محمدی</div>
                                <div className="text-center text-neutral-600 text-[10px] font-bold font-['IRANYekan']">مسئول : </div>
                            </div>
                            <div className="self-stretch justify-between items-start inline-flex">
                                <div className="text-center text-neutral-600 text-[10px] font-bold font-['IRANYekan']">تهران/یوسف‌آباد</div>
                                <div className="text-center text-neutral-600 text-[10px] font-bold font-['IRANYekan']">استان/شهر : </div>
                            </div>
                            <div className="self-stretch justify-between items-start inline-flex">
                                <div className="text-center text-neutral-600 text-[10px] font-bold font-['IRANYekan']">عضویت: ۸ ماه</div>
                                <div className="text-center text-neutral-600 text-[10px] font-bold font-['IRANYekan']">آگهی‌ها : ۲</div>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-center gap-4 inline-flex">
                            <div className="w-20 h-20 relative shadow">
                                <img className="w-20 h-20 left-[0.08px] top-0 absolute" src="https://via.placeholder.com/80x80" />
                            </div>
                            <div className="text-center text-zinc-800 text-xs font-normal font-['IRANYekan']">پت‌شاپ بول داگ</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default testpage;