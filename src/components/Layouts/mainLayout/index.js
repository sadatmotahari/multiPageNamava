import { Fragment } from "react";
import Footer from "../footer"
import Header from "../header";
export default function MainLayout({children}){
    return(
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}