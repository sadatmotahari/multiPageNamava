import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import Movies from "./pages/movies";
import Series from "./pages/series";
import Division from "./pages/division";
import Kids from "./pages/kids";
function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movies" element={<Movies/>}></Route>
      <Route path="/series" element={<Series/>}></Route>
      <Route path="/news" element={<News/>}></Route>
      <Route path="/division" element={<Division/>}></Route>
      <Route path="/kids" element={<Kids/>}></Route>

      
    </Routes>
    </BrowserRouter>
  );
}

export default Router;
