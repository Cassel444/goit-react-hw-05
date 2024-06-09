import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const makeLinksClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeLinksClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={makeLinksClass}>
        Movies
      </NavLink>
      <h2 className={css.name}>MovieScout</h2>
    </nav>
  );
}
export default Navigation;
