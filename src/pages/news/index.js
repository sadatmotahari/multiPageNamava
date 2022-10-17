import { Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../../components/Layouts/mainLayout"
import MovieList from "../../utils/movieList";
import { news } from "../../components/data";
export default function News(){
    useEffect(function(){
        document.title = "تازه ها | نماوا";
    })
    return(
        <MainLayout>
            <MovieList title="تازه‌های نماوا" listName={news}/>
        </MainLayout>
    );
}