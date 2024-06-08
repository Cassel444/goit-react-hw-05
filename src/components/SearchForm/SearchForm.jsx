import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./SearchForm.module.css";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query });
  };
  return (
    <form className={css.box} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchForm;
