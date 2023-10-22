const ButtonLight = (props) => {
    return (
        <>
            <button className={`${props.className} py-4 px-12 text-[#728A2D] rounded-md bg-white leading-[10px] border border-[#728A2D] flex items-center justify-around text-center h-38`} onClick={props.onClick}>{props.text}</button>
        </>
    );
}

export default ButtonLight;