import css from "./MoviesPage.module.css";
import { Link } from "react-router-dom";

export default function MoviesPage({ movies }) {
  return (
    <ul className={css.lists}>
      {movies.map((movie) => (
        <li className={css.item} key={movie.id}>
          <Link to={`/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
