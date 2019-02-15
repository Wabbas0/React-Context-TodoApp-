import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../LoginForm";

const LoginScreen = ({ onSubmit, user }) => {
  return !user ? <LoginForm onSubmit={onSubmit} /> : <Redirect to="/" />;
};

export default LoginScreen;
