import React from "react";
import { Redirect } from "react-router-dom";
import Nav from "../Nav";
import Todos from "../../containers/Todos";

const HomeScreen = ({ user }) => {
  return user ? (
    <div>
      <Nav profile={user} />

      <Todos />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default HomeScreen;
