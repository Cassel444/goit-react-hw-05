import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage";

function App() {
  return (
    <div className={css.box}>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
