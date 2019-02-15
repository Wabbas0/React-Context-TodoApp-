import React from "react";
import Todo from "../Todo";
import AddTodo from "../../containers/AddTodo.js";
import FilterTodos from "../../containers/FilterTodos.js";
import { Ul } from "./style";

const Todos = ({ todos, onDelete, onToggle, onAddTodo }) => (
  <Ul>
    <h3 className="title is-3">Todos</h3>
    {todos.map(todo => (
      <Todo todo={todo} onDelete={onDelete} onToggle={onToggle} />
    ))}

    <AddTodo />

    <FilterTodos />
  </Ul>
);

export default Todos;
