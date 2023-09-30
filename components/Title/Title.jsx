import Image from "next/image";
import start2 from "../../assets/image/star2.png"

const Title = (props) => {
    return (
        <div className={`w-fit h-39 m-auto ${props.className}`}>
            <div className="w-fit flex m-auto">
                <Image alt="" src={start2} className={`w-16 md:w-32 h-16 md:h-32 mt-5`} />
                <h2 className={`font-bold text-14 md:text-28 mr-5 w-auto h-24 md:h-48 border-b-2 border-b-[#F8DD48] inline-block pb-10`}><span className={props.textStyle}>{props.title}</span></h2>
            </div>
            {/* <div className="w-353 h-1 text-right flex mt-5">
                <div className=" w-36 h-1"></div>
                <div className="bg-[#F8DD48] w-205 h-[1.5px] "></div>
            </div> */}
        </div>
    )
}

export default Title;