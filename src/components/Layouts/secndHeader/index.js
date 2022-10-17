import { Fragment } from "react";
import { Link } from "react-router-dom";
import './style.css' ;
export default function SecondHeader(){
    return(
        <Fragment>
            <div className="container-full">
            <div className="second-header-parts">
                    <div className="second-right">
                            <ul>
                            <li><h1>نماوا</h1></li>
                            <li><button className="child"><Link to="/movies">کودک</Link></button></li>
                            <li><Link to="/">خانه</Link></li>
                            </ul>
                    </div>
                    <div className="second-left">
                        <button className="second-enter"><Link to="/movies">خروج از بخش کودکان</Link></button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}