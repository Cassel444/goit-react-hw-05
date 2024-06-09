import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import css from "./SearchForm.module.css";

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className={css.box} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={searchQuery}
        onChange={handleChange}
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}
export default SearchForm;
