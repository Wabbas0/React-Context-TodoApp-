import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./style.js";

const Nav = ({ profile }) => (
  <NavBar className="navbar">
    <div className="navbar-brand">
      <Link className="title is-3 navbar-item" to="/">
        Todo App
      </Link>
    </div>

    <div className="navbar-end">
      <Link className="navbar-item" to="/profile">
        <img
          src="https://avatars1.githubusercontent.com/u/19857965?s=460&v=4"
          alt="profile picture"
        />
        <span>{profile.username}</span>
      </Link>
    </div>
  </NavBar>
);

export default Nav;
