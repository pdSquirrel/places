import React from "react";
import { Card } from "react-bootstrap";

const Avatar = (props) => {
  return (
    <Card.Img
      variant='top'
      src={props.image}
      alt={props.alt}
      style={{
        width: "10rem",
        height: "10rem",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
};

export default Avatar;
