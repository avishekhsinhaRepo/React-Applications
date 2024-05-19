import { useState } from "react";

function BookEdit({ book, onSave }) {
  const [title, setTitle] = useState(book.title);

  const editTitle = (event) => {
    event.preventDefault();
    onSave(book.id, title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };


  return (
    <form className="book-edit" onSubmit={editTitle}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary" >
        Save
      </button>
    </form>
  );
}
export default BookEdit;
