import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useContext, useEffect } from "react";
import BookContext from "./context/BooksContext";

function App() {
  const {fetchBooks} = useContext(BookContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
