import React from "react";
import { Li } from "./style.js";
export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this);

    this.state = { newTodoValue: "" };
  }

  handleNewTodoChange(e) {
    const { target } = e;
    const value = target.value;

    this.setState({
      newTodoValue: value
    });
  }

  onAddTodo() {
    const { onAddTodo } = this.props;
    onAddTodo(this.state.newTodoValue);
    this.setState({ newTodoValue: "" });
  }

  render() {
    return (
      <Li className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input is-medium"
            type="text"
            name="new"
            value={this.state.newTodoValue}
            onChange={this.handleNewTodoChange}
          />
        </div>

        <div className="control">
          <button className="button is-medium" onClick={this.onAddTodo}>
            Add
          </button>
        </div>
      </Li>
    );
  }
}
