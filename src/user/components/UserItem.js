import React from "react";
import { Link } from "react-router-dom";
import { Card, Nav } from "react-bootstrap";
import Avatar from "../../shared/components/UIElements/Avatar";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <Card className='center' style={{ width: "14rem" }}>
      <Nav.Link as={Link} to={`/${props.id}/places`}>
        <div style={{ textAlign: "center" }}>
          <Avatar image={props.image} alt={props.name} />
        </div>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </Card.Subtitle>
        </Card.Body>
      </Nav.Link>
    </Card>
  );
};

export default UserItem;
