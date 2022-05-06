import React, { useEffect, useState } from "react";
import { getAll } from "../api/BooksAPI";
import BookDisplay from "./BookDisplay";

export default function Read() {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const data = await getAll();
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <BookDisplay
      title=""
      books={books.filter((book) => book.shelf === "read")}
      setBooks={setBooks}
    />
  );
}
