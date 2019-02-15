import Todos from "../SFCs/Todos";
import { connect } from "../utils";
import { AppConsumer } from "../contexts/app";

const mapProviderDataToProps = providerData => {
  return {
    todos: providerData.todos,
    onDelete: providerData.deleteTodo,
    onToggle: providerData.toggleTodo,
    onAddTodo: providerData.addTodo
  };
};

export default connect(
  AppConsumer,
  mapProviderDataToProps
)(Todos);
