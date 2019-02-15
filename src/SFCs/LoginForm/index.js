import React from "react";
import { Form } from "./style.js";
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(e) {
    const target = e.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state);
  }

  render() {
    const { user } = this.props;
    return (
      <Form>
        <h3 className="title is-3">Login</h3>
        <div className="field">
          <label className="label" htmlFor="username">
            Username:
          </label>
          <div className="control">
            <input
              className="input is-large"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
            />
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="password">
            password:
          </label>

          <div className="control">
            <input
              className="input is-large"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              id="password"
            />
          </div>
        </div>

        <button className="button " type="submit" onClick={this.handleSubmit}>
          Login
        </button>
      </Form>
    );
  }
}
