import { Fragment } from "react";
import { Helmet } from "react-helmet";
import PageContainer from "../../layouts/pageContainer/pageContainer.layout";
import { getAppDescription, getAppTitle } from "../../utils";
import background1 from "../../assets/image/Frame44326.png";
import system from "../../assets/image/image3.png"
const FramePage = () => {
    const appTitle = getAppTitle()
    const appDescription = getAppDescription()
    return (
        <Fragment>
            <Helmet>
                <title>{appTitle}</title>
                <meta name="description" content="appDescription" />
            </Helmet>
            <PageContainer>
                <div className="w-full ">
                    <img className="w-full " src={background1} />
                </div>
                {/* <div className="w-100 h-129">
                    <div className="bg-[#cccccc] rounded-full w-100 h-100 pt-14">
                        <img width="72" src={system} className=" mx-14" />
                    </div>
                    <p className="block mt-8 leading-5">تهران درمان</p>
                </div> */}
            </PageContainer>

        </Fragment>
    )
}

export default FramePage;