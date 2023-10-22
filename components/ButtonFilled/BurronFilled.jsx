const ButtonFilled = (props) => {
    return (
        <>
            <button className={`${props.className} py-4 px-12 bg-[#728A2D] rounded-md h-38 text-white leading-[10px] border border-[#728A2D] flex items-center justify-around text-center`} onClick={props.onClick}>{props.text}</button>
        </>
    );
}

export default ButtonFilled;