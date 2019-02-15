import React from "react";
import { Container } from "./style.js";

export default class FilterTodos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredBy: "all"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(filteredBy) {
    const { filterTodos } = this.props;
    this.setState({
      filteredBy
    });

    filterTodos(filteredBy);
  }

  render() {
    return (
      <Container>
        <ul className="tabs">
          <li
            className={`${this.state.filteredBy === "all" ? "is-active" : ""}`}
          >
            <a onClick={() => this.handleChange("all")}>All</a>
          </li>
          <li
            className={`${
              this.state.filteredBy === "completed" ? "is-active" : ""
            }`}
          >
            <a onClick={() => this.handleChange("completed")}>Completed</a>
          </li>
          <li
            className={`${
              this.state.filteredBy === "uncompleted" ? "is-active" : ""
            }`}
          >
            <a onClick={() => this.handleChange("uncompleted")}>Uncompleted</a>
          </li>
        </ul>
      </Container>
    );
  }
}
