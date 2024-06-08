import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../movies-api";
import Loader from "../Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage";
import css from "./MovieCast.module.css";

const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <NotFoundPage />}
      <ul className={css.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.item}>
            <img
              src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
              alt={actor.name}
            />
            {/* <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            /> */}
            <p>{actor.name}</p>
            <p>Role: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
