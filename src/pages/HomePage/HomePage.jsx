import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [trendingMovies, setTrendMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setTrendMovie(data);
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
      <h1 className={css.header}>Trending movies today</h1>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}
      <MovieList movies={trendingMovies} />
    </div>
  );
}
