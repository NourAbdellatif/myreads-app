import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getAll } from "../api/BooksAPI";
import Book from "./Book";
import BookDisplay from "./BookDisplay";

export default function Home() {
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
  console.log(books);
  return (
    <Container>
      <BookDisplay
        title="Currently Reading"
        books={books.filter((book) => book.shelf === "currentlyReading")}
        setBooks={setBooks}
      />
      <BookDisplay
        title="Want To Read"
        books={books.filter((book) => book.shelf === "wantToRead")}
        setBooks={setBooks}
      />
      <BookDisplay
        title="Read"
        books={books.filter((book) => book.shelf === "read")}
        setBooks={setBooks}
      />
    </Container>
  );
}
