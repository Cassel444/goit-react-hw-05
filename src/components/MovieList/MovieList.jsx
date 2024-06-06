import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-api";
import Loader from "../Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import css from "./MoviesList.module.css";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1 className={css.header}>Trending today</h1>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}
      {!isLoading && !error && movies.length === 0 && (
        <p className={css.noFound}>No trending movies found.</p>
      )}
      <MoviesPage movies={movies} />
    </div>
  );
}
