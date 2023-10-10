import Aside from "../aside/aside.layout";
import Footer from "../footer/footer.layout"
import Header from "../header/header.layout"
// import { Fragment } from "react"

const PageContainer = ({ children, ...props }) => {
    return (
        <>
            <Header />
            <Aside />
            {children}
            <Footer />
        </>
    )
}

export default PageContainer;