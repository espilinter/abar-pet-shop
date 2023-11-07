import { useState } from "react";

const CityCard = (props) => {

    const [checkedState, setCheckedState] = useState(false)

    // function cityClickHandler(event) {
    //     if (checkedState) {
    //         setCheckedState(false)
    //         let arrey = props.selectedCitys
    //         let arrey2 = arrey.filter((item) => {
    //             if (item !== event.currentTarget.id) {
    //                 return item
    //             }
    //         })
    //         props.setSelectedCitys(arrey2)
    //     } else {
    //         setCheckedState(true);
    //         let arrey = props.selectedCitys
    //         arrey.push(event.currentTarget.id)
    //         props.setSelectedCitys(arrey)
    //     }
    // }

    function cityClickHandler(event) {
        props.setSelectedCitys(event.currentTarget.id)
        console.log(event.currentTarget.id);
        localStorage.setItem("city_id", event.currentTarget.id)
    }
    return (
        <>
            {/* <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 cursor-pointer" for={props.item.slug} onClick={cityClickHandler} id={props.item.slug}>
                <lable className="text-right text-stone-900 text-sm font-normal" >{props.item.title}</lable>
                <input type="checkbox" className="w-20 h-20 rounded-lg" name={props.item.slug} checked={checkedState} id={`cityCheckBox${props.item.province_id} cityCheckBoxAll`} key={props.item.title} />
            </div> */}
            <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 px-8 cursor-pointer hover:bg-[#f0f0f0]" onClick={cityClickHandler} id={props.item.id}>
                <span className="w-full text-right text-stone-900 text-sm font-normal">{props.item.title}</span>
            </div>
        </>
    );
}

export default CityCard;