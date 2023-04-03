import { useState } from "react";

function SearchBar({onSearch}) {
  const [term, setTerm] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSearch(term)
  };
  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <input value={term} onChange={handleOnChange} />
    </form>
  );
}

export default SearchBar;
