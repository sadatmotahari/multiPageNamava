import { Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../../components/Layouts/mainLayout"
import MovieList from "../../utils/movieList";
import { namava , news , updated , iranian } from "../../components/data";
export default function Series(){
    useEffect(function(){
        document.title = "تماشای آنلاین سریال | نماوا";
    })
    return(
        <MainLayout>
            <MovieList title="سریال‌های اختصاصی نماوا" listName={namava}/>
            <MovieList title="تازه‌های نماوا" listName={news}/>
            <MovieList title="سریال‌های به‌ روز شده" listName={updated}/>
            <MovieList title="سریال‌های ایرانی" listName={iranian}/>
        </MainLayout>
    );
}