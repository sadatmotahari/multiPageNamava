import { Fragment } from "react";
import { Link } from "react-router-dom";
import './style.css' ;
export default function Header(){
    return(
        <Fragment>
            <div className="container-full">
            <div className="header-parts">
                    <div className="right">
                        <div className="logo">
                            <p>نماوا</p>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Link to="/">خانه</Link></li>
                                <li><Link to="/movies"> فیلم‌ها </Link></li>
                                <li><Link to="/series">سریال‌ها</Link></li>
                                <li><Link to="/division">دسته‌بندی</Link></li>
                                <li><Link to="/news">تازه‌ها</Link></li>
                                <li><Link to="/kids">کودکان</Link></li>
                                <li><Link to="/movies">نماوامگ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="left">
                        <div className="magnify">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <p>خرید اشتراک</p>
                        <button className="enter"><Link to="/movies">ورود / ثبت‌نام</Link></button>
                    </div>
                    <div className="mobile-menu">
                        <i class="fa-solid fa-bars"></i>
                       </div>
            </div>
            </div>
        </Fragment>
    );
}