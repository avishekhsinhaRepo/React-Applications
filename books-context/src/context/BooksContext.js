import { createContext, useState } from "react";
import axios from 'axios' ;
const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(`http://localhost:3005/books`);
    const updatedBooks = response?.data;
    setBooks(updatedBooks);
  };

 

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

  const valueToShare = {
    books,
    createBook,
    fetchBooks,
    deleteBookById,
    onSaveBook
   
  };
  return <BookContext.Provider value={valueToShare}>
    {children}
  </BookContext.Provider>
}
export default BookContext;
export {Provider};
