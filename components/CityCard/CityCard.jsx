import { useState } from "react";

const CityCard = (props) => {

    const [checkedState, setCheckedState] = useState(false)

    function cityClickHandler(event) {
        if (checkedState) {
            setCheckedState(false)
            let arrey = props.selectedCitys
            let arrey2 = arrey.filter((item) => {
                if (item !== event.currentTarget.id) {
                    return item
                }
            })
            props.setSelectedCitys(arrey2)
        } else {
            setCheckedState(true);
            let arrey = props.selectedCitys
            arrey.push(event.currentTarget.id)
            props.setSelectedCitys(arrey)
        }
    }

    return (
        <>
            <div className="border-b border-[#DCDCDC] flex justify-between items-center pb-8 pt-16 cursor-pointer" for={props.item.slug} onClick={cityClickHandler} id={props.item.slug}>
                <lable className="text-right text-stone-900 text-sm font-normal" >{props.item.title}</lable>
                {/* <i className="aps-arrow-left-o text-24 text-[#1E1E1E]"></i> */}
                <input type="checkbox" className="w-20 h-20 rounded-lg" name={props.item.slug} checked={checkedState} id={`cityCheckBox${props.item.province_id} cityCheckBoxAll`} key={props.item.title} />
            </div>
        </>
    );
}

export default CityCard;