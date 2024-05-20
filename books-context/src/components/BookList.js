import BookShow from "./BookShow";
import { useContext } from "react";
import BookContext from "../context/BooksContext";
function BookList() {
  const {books} = useContext(BookContext);
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} ></BookShow>;
  });
  return <div>
    {/* <p>{count}</p>
    <button onClick={()=> incrementCount()}>Increment</button> */}
    <div className="book-list">{renderedBooks}</div>;
 
    </div>
}

export default BookList;
  