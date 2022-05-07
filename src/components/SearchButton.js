import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function SearchButton() {
  return (
    <Button
      as={Link}
      to="/search"
      className="search-button rounded-circle"
      variant="info"
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </Button>
  );
}
