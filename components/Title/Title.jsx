import Image from "next/image";
import start2 from "../../assets/image/star2.png"

const Title = (props) => {
    return (
        <div className="w-fit h-39 m-auto ">
            <div className="w-fit flex m-auto">
                <Image src={start2} className="w-32 h-32 mt-5" />
                <h2 className="font-bold text-28 mr-5 w-auto h-48 border-b-2 border-b-[#F8DD48] inline-block pb-10">{props.title}</h2>
            </div>
            {/* <div className="w-353 h-1 text-right flex mt-5">
                <div className=" w-36 h-1"></div>
                <div className="bg-[#F8DD48] w-205 h-[1.5px] "></div>
            </div> */}
        </div>
    )
}

export default Title;