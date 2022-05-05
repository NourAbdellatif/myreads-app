import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getAll } from "../api/BooksAPI";
import Book from "./Book";

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
      <Row>
        {books.map((book) => (
          <Book key={book.id} data={book}></Book>
        ))}
      </Row>
    </Container>
  );
}
