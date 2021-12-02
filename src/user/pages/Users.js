import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Roger Nordqvist",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
