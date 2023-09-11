import Image from "next/image";
import category from "../../assets/image/category.png"

const CategoryCard = () => {

    return (
        <>
            <div className=" scale-75 1440:scale-100 1440:w-250 1440:h-282 m-auto ">
                <Image alt="" src={category} className="rounded-[16px] w-1200 h-1200 1200:w-250 1200:h-250" />
                <p className="text-20 mt-16 text-center">مربی حیوانات</p>
            </div>
        </>
    )
}

export default CategoryCard;