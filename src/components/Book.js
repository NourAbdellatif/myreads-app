import React from "react";
import { Card } from "react-bootstrap";

export default function Book(props) {
  return (
    <Card style={{ width: "12rem" }} className="border-0">
      <Card.Img
        variant="top"
        src={props.data.imageLinks.thumbnail}
        style={{ objectFit: "fill", maxHeight: "12rem", minHeight: "15rem" }}
      />
      <Card.Body className="justify-content-center">
        <Card.Title className="fs-6">{props.data.title}</Card.Title>
        <Card.Subtitle className="text-muted">
          {props.data.authors.join(",")}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
