import React from "react";
import data from "../data.json";

const AppContext = React.createContext();

export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      filterBy: "all",
      todos: []
    };

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.addTodo = this.addTodo.bind(this);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateFilterBy = this.updateFilterBy.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
  }

  onLogin({ username, passeword }) {
    const user = data.user;

    if (username === user.username && passeword === user.passeword) {
      this.setState({
        user: user,
        todos: data.todos
      });
    }
  }

  onLogout() {
    this.setState({
      user: null,
      todos: []
    });
  }

  updateFilterBy(filterValue) {
    this.setState({
      filterBy: filterValue
    });
  }

  filterTodos(filterby) {
    let todos;
    switch (filterby) {
      case "completed":
        todos = this.state.todos.filter(todo => todo.completed);
        return todos;
        break;

      case "uncompleted":
        todos = this.state.todos.filter(todo => !todo.completed);
        return todos;
        break;

      default:
        return this.state.todos;
    }
  }

  addTodo(content) {
    let todosclone = this.state.todos.slice();

    todosclone.push({
      content,
      completed: false,
      id: Math.floor(100000 + Math.random() * 900000)
    });

    this.setState({
      todos: todosclone
    });
  }

  deleteTodo(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos
    });
  }

  toggleTodo(id) {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }

      return todo;
    });

    this.setState({
      todos
    });
  }

  render() {
    const {
      onLogin,
      onLogout,
      addTodo,
      deleteTodo,
      toggleTodo,
      filterTodos,
      updateFilterBy
    } = this;

    const todos = filterTodos(this.state.filterBy);

    return (
      <AppContext.Provider
        value={{
          ...this.state,
          todos,
          onLogin,
          onLogout,
          addTodo,
          deleteTodo,
          toggleTodo,
          updateFilterBy
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
