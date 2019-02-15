import React from "react";
import { Li } from "./style.js";

const Todo = ({ todo, onDelete, onToggle }) => (
  <Li
    strikeThrough={todo.completed}
    onClick={e => {
      if (e.target.type === "button") return;
      onToggle(todo.id);
    }}
  >
    <span>{todo.content}</span>
    <button
      type="button"
      className="button is-danger"
      onClick={() => onDelete(todo.id)}
    >
      Delete
    </button>
  </Li>
);

export default Todo;
