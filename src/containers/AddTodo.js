import AddTodo from "../SFCs/AddTodo";
import { connect } from "../utils";
import { AppConsumer } from "../contexts/app";

const mapProviderDataToProps = providerData => {
  return {
    onAddTodo: providerData.addTodo
  };
};

export default connect(
  AppConsumer,
  mapProviderDataToProps
)(AddTodo);
