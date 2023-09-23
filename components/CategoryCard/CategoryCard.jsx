import Image from "next/image";
import category from "../../assets/image/category.png"

const CategoryCard = () => {

    return (
        <>
            <div className="w-65 my-0 sm:my-auto sm:w-150 h-80 sm:h-170 1440:w-250 1440:h-282 m-auto ">
                <Image alt="" src={category} className="rounded-[16px] w-65 sm:w-150 h-65 sm:h-150 1440:w-250 1440:h-250" />
                <p className="text-10 sm:text-20 mt-16 text-center">مربی حیوانات</p>
            </div>
        </>
    )
}

export default CategoryCard;