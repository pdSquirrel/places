import React from "react";
import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  // If no users exists
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No users found.</h2>
      </div>
    );
  }

  // If users exists
  return (
    <ul className='users-list'>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;