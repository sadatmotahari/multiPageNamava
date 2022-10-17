import { Fragment } from "react";
import Footer from "../footer"
import SecondHeader from "../secndHeader";

export default function SecondaryLayout({children}){
    return(
        <Fragment>
            <SecondHeader />
            {children}
            <Footer />
        </Fragment>
    )
}