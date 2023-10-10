import { store } from "@/store/store";
import Aside from "../aside/aside.layout";
import Footer from "../footer/footer.layout"
import Header from "../header/header.layout"
import { Provider } from "react-redux";
// import { Fragment } from "react"

const PageContainer = ({ children, ...props }) => {
    return (
        <>
            <Provider store={store}>
                <Header />
                <Aside />
                {children}
                <Footer />
            </Provider>
        </>
    )
}

export default PageContainer;