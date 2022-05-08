import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { update } from "../api/BooksAPI";

export default function Book(props) {
  function moveBook(shelf) {
    const newBook = { ...props.book, shelf };
    update({ id: props.book.id }, shelf)
      .then(() =>
        props.setBooks((books) =>
          books.map((book) => (book.id === props.book.id ? newBook : book))
        )
      )
      .catch((err) => console.log(err));
  }
  const shelf =
    props.book.shelf ||
    props.mainBooks?.find((mainBook) => mainBook.id === props.book.id)?.shelf;
  return (
    <Card style={{ width: "12rem" }} className="border-0 mb-5">
      <Card.Img
        variant="top"
        src={props.book.imageLinks?.thumbnail}
        style={{ objectFit: "fill", maxHeight: "12rem", minHeight: "15rem" }}
      />
      <Card.Body className="justify-content-center">
        <Card.Title className="fs-6">{props.book.title}</Card.Title>
        <Card.Subtitle className="text-muted">
          {props.book.authors?.join(",")}
        </Card.Subtitle>
      </Card.Body>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Move to...
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            style={
              shelf === "currentlyReading"
                ? {
                    backgroundColor: "red",
                  }
                : {}
            }
            onClick={() => moveBook("currentlyReading")}
          >
            Currently Reading
          </Dropdown.Item>
          <Dropdown.Item
            style={
              shelf === "wantToRead"
                ? {
                    backgroundColor: "red",
                  }
                : {}
            }
            onClick={() => moveBook("wantToRead")}
          >
            Want to read
          </Dropdown.Item>
          <Dropdown.Item
            style={
              shelf === "read"
                ? {
                    backgroundColor: "red",
                  }
                : {}
            }
            onClick={() => moveBook("read")}
          >
            Read
          </Dropdown.Item>
          <Dropdown.Item onClick={() => moveBook("asdsada")}>
            None
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Card>
  );
}
