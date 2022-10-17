import { Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../../components/Layouts/mainLayout"
import MovieList from "../../utils/movieList";
import { special , news , dooble } from "../../components/data";
export default function Movies(){
    useEffect(function(){
        document.title = "تماشای آنلاین فیلم | نماوا";
    })
    return(
        <MainLayout>
            <MovieList title="ویژه" listName={special}/>
            <MovieList title="تازه‌های نماوا" listName={news}/>
            <MovieList title="دوبله نماوا" listName={dooble}/>
        </MainLayout>
    );
}