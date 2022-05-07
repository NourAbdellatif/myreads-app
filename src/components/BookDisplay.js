import React from "react";
import { Row } from "react-bootstrap";
import Book from "./Book";

export default function BookDisplay(props) {
  return (
    <div className="mt-2">
      {props.title && (
        <>
          <h2>{props.title}</h2>
          <hr></hr>
        </>
      )}

      {props.books?.length > 0 ? (
        <Row className="justify-content-center">
          {props.books.map((book) => (
            <Book
              books={props.books}
              setBooks={props.setBooks}
              key={book.id}
              book={book}
            ></Book>
          ))}
        </Row>
      ) : (
        <h3 className="text-muted d-flex ms-auto">No books here</h3>
      )}
    </div>
  );
}
