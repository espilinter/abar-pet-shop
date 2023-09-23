import Image from "next/image";
import styles from "../../styles/components/similarSystemsCard.module.css"

const SimilarSystemsCard = (props) => {
    return (
        <a href={props.link} className="cursor-pointer">
            <div className=" w-56 sm:w-100 h-72 sm:h-130 z-[1] 500:scale-125 sm:scale-100">
                <div className={`bg-[#ffffff] rounded-full w-56 sm:w-100 h-56 sm:h-100 pt-14 ${styles.shadow}`}>
                    <Image alt="" src={props.img} className="w-32 sm:w-72 mx-14" />
                </div>
                <p className="block mt-8 leading-5 text-center text-10 sm:text-12">{props.item.name}</p>
            </div>
        </a>
    )
}

export default SimilarSystemsCard;