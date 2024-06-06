import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "../movies-api";
import Loader from "../components/Loader/Loader";
import NotFoundPage from "../pages/NotFoundPage";

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}

      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <p>Use score: {movie.popularity}</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <p>{movie.genres}</p>
        </div>
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default MovieDetailsPage;
