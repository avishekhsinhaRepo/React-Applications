import BookEdit from "./BookEdit";

import { useState } from "react";

function BookShow({ book, onDelete, onSave }) {
  const [showEdit, setShowEdit] = useState(false);
  const deleteBook = () => {
    onDelete(book.id);
  };

  const onBookSave = (id, newTitle) => {
    setShowEdit(false);
    onSave(id, newTitle);
  };
  return (
    <div className="book-show">
        
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt=""/>
      <div>{!showEdit ? book.title : <BookEdit book={book} onSave={onBookSave}></BookEdit>}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit((showEdit) => !showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={deleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
