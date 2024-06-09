import { useSearchParams } from "react-router-dom";
import css from "./SearchForm.module.css";

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ searchParams });
  };
  const changeFilter = (newFilter) => {
    searchParams.set("query", newFilter);
    setSearchParams(searchParams);
  };
  return (
    <form className={css.box} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={(e) => changeFilter(e.target.value)}
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchForm;
