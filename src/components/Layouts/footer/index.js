import { Fragment } from "react";
import { Link } from "react-router-dom";
import './style.css' ;
export default function Footer(){
    return(
        <Fragment>
            <div className="footer-parts">
                <div className="container-full">
                    <div className="footer-menu">
                        <ul>
                            <li><Link to="/">درباره نماوا</Link></li>
                            <li><Link to="/movies"> اپلیکیشن‌ها </Link></li>
                            <li><Link to="/series">فرصت‌های شغلی</Link></li>
                            <li><Link to="/division">خرید اشتراک</Link></li>
                            <li><Link to="/news">کارت هدیه</Link></li>
                            <li><Link to="/kids">نماوامگ</Link></li>
                            <li><Link to="/movies">سوالات متداول</Link></li>
                            <li><Link to="/movies">تماس با ما</Link></li>
                            <li><Link to="/movies">قوانین</Link></li>
                            <li><Link to="/movies">شرایط مصرف اینترنت</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-full">
                <div className="download">
                        <div className="right">
                            <div className="namava-rec">نماوا</div>
                            <p>دانلود اپلیکیشن</p>
                        </div>
                        <div className="left">
                            <div className="application">
                                <p>دریافت از بازار</p>
                            </div>
                            <div className="application">
                                <p>دریافت از سیب‌اپ</p>
                            </div>
                            <div className="application">
                                <p>دریافت از گوگل پلی</p>
                            </div>
                            <p>بیشتر</p>
                        </div>
                </div>
            </div>
        </Fragment>
    );
}