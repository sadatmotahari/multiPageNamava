import { Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../../components/Layouts/mainLayout"
import MovieList from "../../utils/movieList";
import LiveStream from "../../utils/liveStream";
import Stars from "../../utils/stars";
import Long from "../../utils/longMovie";
import { special , live , namava , news , updated , iranian , dooble , stars , trend , long , best } from "../../components/data";
import './style.css' ;
import SecondaryLayout from "../../components/Layouts/secondaryLayout";

export default function Home(){
    useEffect(function(){
        document.title = "تماشای آنلاین فیلم و سریال | نماوا";
    })
    return(
        <MainLayout>
            <MovieList title="ویژه" listName={special}/>
            <LiveStream title="پخش زنده" listName={live}/>
            <MovieList title="سریال‌های اختصاصی نماوا" listName={namava}/>
            <MovieList title="تازه‌های نماوا" listName={news}/>
            <MovieList title="سریال‌های به‌ روز شده" listName={updated}/>
            <MovieList title="سریال‌های ایرانی" listName={iranian}/>
            <MovieList title="دوبله نماوا" listName={dooble}/>
            <Stars title="ستارگان" listName={stars}/>
            <MovieList title="2022" listName={trend}/>
            <Long listName={long}/>
            <MovieList title="برترین فیلم و سریال‌های IMDB" listName={best}/>
        </MainLayout>
    );
}