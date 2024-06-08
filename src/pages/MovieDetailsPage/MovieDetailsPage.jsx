import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage";
import css from "./MovieDetailsPage.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;
    const getDetails = async () => {
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
    getDetails();
  }, [movieId]);

  return (
    <div className={css.box}>
      <Link to={backLink.current}>Go back</Link>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}

      {movie && (
        <div>
          <img
            className={css.poster}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Popularity: {movie.popularity}</p>
            <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
export default MovieDetailsPage;
