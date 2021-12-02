import React from "react";
import { Card } from "react-bootstrap";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>
          {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
