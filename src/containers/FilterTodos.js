import FilterTodos from "../SFCs/FilterTodos";
import { connect } from "../utils";
import { AppConsumer } from "../contexts/app";

const mapProviderDataToProps = providerData => {
  return {
    filterTodos: providerData.updateFilterBy
  };
};

export default connect(
  AppConsumer,
  mapProviderDataToProps
)(FilterTodos);
