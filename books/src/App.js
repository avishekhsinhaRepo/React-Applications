import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3005/books`);
    const updatedBooks = response?.data;
    setBooks(updatedBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3005/books/${id}`);
    if (response.status != 200) {
      return;
    }
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const onSaveBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3005/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    console.log(title);
    const response = await axios.post("http://localhost:3005/books", {
      title,
    });
    // const updatedBooks = [
    //   ...books,
    //   {
    //     id: Math.round(Math.random() * 9999),
    //     title,
    //   },
    // ];
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onSave={onSaveBook}></BookList>
      <BookCreate onCreate={createBook}></BookCreate>
    </div>
  );
}

export default App;
