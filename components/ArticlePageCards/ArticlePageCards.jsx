import Image from "next/image";
import articlesPageCard from "../../assets/image/articlesPageCard.png"
import articlesAvatar from "../../assets/image/articlesAvatar.png"
import moment from "moment";
import { useEffect, useState } from "react";
import Link from "next/link";

const ArticlePageCards = (props) => {

    const [reletivTime, setReletivTime] = useState('')

    useEffect(() => {
        moment.locale('fa');
        setReletivTime(moment.unix(props.item.created_at).fromNow())
        console.log(props.item.slug);
    }, [])
    return (

        <Link href={`/articles/${props.item.slug}`}>
            <div className="w-full md:w-200 h-132 md:h-auto flex flex-row md:flex-col p-16 md:p-0 gap-x-16 items-center shadow-[0px_0px_8px_2px_rgba(0,0,0,0.12)] md:shadow-none rounded-xl md:rounded-none">
                <Image alt={""} src={props.item.image.url} className="h-100 md:h-auto md:w-full w-100 rounded-lg md:rounded-none" height={300} width={200} />
                <div>
                    <p className="text-[#8A8A8A] text-10 md:pt-16">{reletivTime}</p>
                    <div className="flex gap-x-4 items-center mt-8">
                        <Image alt={""} src={articlesAvatar} className="rounded-full" width={20} height={20} />
                        <p className="text-[#8A8A8A] text-10">محمد محمدی</p>
                    </div>
                    <h3 className="text-14 text-[#1E1E1E] mt-8 md:mt-16">{props.item.title}</h3>
                    <p className="text-[#8A8A8A] text-10 mt-4 md:mt-8 line-clamp-2">{props.item.description}</p>
                </div>
            </div>
        </Link>

    );
}

export default ArticlePageCards;