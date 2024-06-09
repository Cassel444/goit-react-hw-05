import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.lists}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
