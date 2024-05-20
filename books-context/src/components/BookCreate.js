import { useContext, useState } from "react";
import BookContext from "../context/BooksContext";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BookContext);
  const handleOnSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleOnSubmit}>
        <label>Title</label>
        <input className="input" type="text" value={title} onChange={handleOnChange} />
        <button type="submit" className="button">
          Create
        </button>
      </form>
    </div>
  );
}
export default BookCreate;
