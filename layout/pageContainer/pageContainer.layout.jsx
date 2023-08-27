import Footer from "../footer/footer.layout"
import Header from "../header/header.layout"
// import { Fragment } from "react"

const PageContainer = ({ children, ...props }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default PageContainer;