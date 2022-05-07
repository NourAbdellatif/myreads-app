import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BookDisplay from "./BookDisplay";
import { search } from "../api/BooksAPI";
export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const updateQuery = (e) => {
    e.preventDefault();
    try {
      search(query).then((data) => setBooks(data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="mt-2">
      <form onSubmit={(event) => updateQuery(event)}>
        <div className="input-group col-md-4">
          <input
            className="form-control py-2 border-right-0 border"
            type="search"
            placeholder="Search Books ...."
            id="example-search-input"
            onChange={(e) => setQuery(e.target.value.trim())}
          />
          <Button onClick={updateQuery}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </div>
      </form>
      <BookDisplay books={books}></BookDisplay>
    </Container>
  );
}
