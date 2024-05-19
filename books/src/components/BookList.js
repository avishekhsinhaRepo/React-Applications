import BookShow from "./BookShow";

function BookList({ books ,onDelete, onSave}) {
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} onDelete ={onDelete} onSave={onSave}></BookShow>;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
