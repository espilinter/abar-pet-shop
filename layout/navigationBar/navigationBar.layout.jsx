const NavigationBar = () => {
    return (
        <>
            <div className="fixed bottom-0 w-full backdrop-blur-[20px] bg-[#FFFFFF26] h-68 z-[11] shadow-[0px_-2px_10px_0px_rgba(0,0,0,0.10)] lg:hidden flex flex-row p-14 justify-between items-center">
                <div className="w-40 h-40 p-8 rounded-lg">
                    <i className="aps-Icons text-24"></i>
                </div>
                <div className="w-40 h-40 p-8 rounded-lg">
                    <i className="aps-Frame-1064 text-24"></i>
                </div>
                <div className="w-40 h-40 p-2 rounded-lg">
                    <i className="aps-add-o text-36"></i>
                </div>
                <div className="w-40 h-40 p-8 rounded-lg">
                    <i className="aps-search-normal1 text-24"></i>
                </div>
                <div className="w-40 h-40 p-8 rounded-lg">
                    <i className="aps-profile-o text-24"></i>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;