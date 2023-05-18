import "./similarSystemsCard.css"

const SimilarSystemsCard = (props) => {
    return (
        <a href={props.link}>
            <div className="w-100 h-129 ml-62 zIndex">
                <div className=" bg-[#ffffff] rounded-full w-100 h-100 pt-14 shadow">
                    <img width="72" src={props.img} className=" mx-14" />
                </div>
                <p className="block mt-8 leading-5 text-12">{props.item.name}</p>
            </div>
        </a>
    )
}

export default SimilarSystemsCard;