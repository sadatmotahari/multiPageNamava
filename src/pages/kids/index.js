import { Link } from "react-router-dom";
import { useEffect } from "react";
import MovieList from "../../utils/movieList";
import {children , newsForChildren, updatedForChildren, dooblehForChildren } from "../../components/data";
import SecondaryLayout from "../../components/Layouts/secondaryLayout";
import Children from "../../utils/kids";
import CartoonList from "../../utils/cartoonList"
import './style.css' ;
export default function Kids(){
    useEffect(function(){
        document.title = "کودکان | نماوا";
    })
    return(
        <div className="login">
        <SecondaryLayout>
            <Children listName={children}/>   
            <CartoonList title="تازه‌‌های کودک" listName={newsForChildren}/>
            <CartoonList title="سریال‌های به روز شده کودک" listName={updatedForChildren}/>
            <CartoonList title="دوبله نماوا" listName={dooblehForChildren}/>
        </SecondaryLayout>
        </div>
    );
}