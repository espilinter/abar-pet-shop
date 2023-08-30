import Image from "next/image";
import styles from "../../styles/components/similarSystemsCard.module.css"

const SimilarSystemsCard = (props) => {
    return (
        <a href={props.link} className="cursor-pointer">
            <div className="w-100 h-130 z-[1]">
                <div className={`bg-[#ffffff] rounded-full w-100 h-100 pt-14 ${styles.shadow}`}>
                    <Image alt="" width="72" src={props.img} className=" mx-14" />
                </div>
                <p className="block mt-8 leading-5 text-12">{props.item.name}</p>
            </div>
        </a>
    )
}

export default SimilarSystemsCard;