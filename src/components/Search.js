import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BookDisplay from "./BookDisplay";
import { getAll, search } from "../api/BooksAPI";
export default function Search() {
  const [books, setBooks] = useState([]);
  const [mainBooks, setMainBooks] = useState([]);
  const getBooks = async () => {
    try {
      const data = await getAll();
      setMainBooks(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);
  const updateQuery = (e) => {
    try {
      search(e).then((data) => setBooks(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-2">
      <form>
        <div className="input-group col-md-4">
          <input
            className="form-control py-2 border-right-0 border"
            type="search"
            placeholder="Search Books ...."
            id="example-search-input"
            onChange={(e) => updateQuery(e.target.value.trim())}
          />
          <div className="btn btn-outline-secondary">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </form>
      <BookDisplay
        setBooks={setMainBooks}
        mainBooks={mainBooks}
        books={books}
      ></BookDisplay>
    </Container>
  );
}
