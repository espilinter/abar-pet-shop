// import { clubCard } from "../../components/clubCard/clubCard"
import electedLogo from "../../assets/image/electedLogo.png"
import sort from "../../assets/image/sort.png"
import ClubCard from "@/components/ClubCard/ClubCard";
import fs from 'fs'
import Image from "next/image";
import path from 'path'
const Club = (props) => {
    return (
        <>
            <div className="pt-132 px-16 sm:px-50 lg:px-70">
                <div className="text-[#BDBDBD] text-12 font-extrabold flex">
                    <a href="#">صفحه اصلی</a>/<a href="#"> دسته بندی </a>/<p>زیر دسته بندی</p>
                </div>
                <div className="flex justify-between mt-32 w-full p-">
                    <div className="">
                        <input className="w-200 h-40 px-24 py-8 bg-[#f4f4f4] text-[#6E6E6E] rounded-md border border-[#8A8A8A]" placeholder="جستجو" />
                    </div>
                    <div className="flex items-center"><p>مرتب سازی</p><Image alt={""} src={sort} className="w-24 h-24" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 1440:grid-cols-4 1750:grid-cols-5 mt-48 gap-y-43 gap-x-40 ">
                    {props.data && props.data.electedMembers.map((item) => (
                        <ClubCard img={electedLogo} manager={item.manager} state={item.state} city={item.city} adNumber={item.adNumber} membershipPeriod={item.membershipPeriod} key={item.id} />
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


export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'db.json');
    const jsonData = await fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    //handle error 404
    if (data.framePage.length === 0) {
        return { notFound: true }
    }

    //handle any error
    // if (!data) {
    //     return {
    //         redirect: {
    //             destination: "/error500"
    //         }
    //     }
    // }
    return {
        props: {
            data: data.club
        },
        revalidate: 3600,
    }
}
export default Club;