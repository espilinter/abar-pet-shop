import Image from "next/image";
import category from "../../assets/image/category.png"

const CategoryCard = () => {

    return (
        <>
            <div className="w-250 h-282 m-auto ">
                <Image src={category} className="rounded-[16px] w-250 h-250" />
                <p className="text-20 mt-16">مربی حیوانات</p>
            </div>
        </>
    )
}

export default CategoryCard;