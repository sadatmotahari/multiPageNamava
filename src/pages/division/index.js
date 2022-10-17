import { Link } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "../../components/Layouts/mainLayout"
import Section from "../../utils/division";
import { part } from "../../components/data";

export default function Division(){
    useEffect(function(){
        document.title = "دسته‌بندی | نماوا";
    })
    return(
        <MainLayout>
            <Section listName={part}/>
        </MainLayout>
    );
}