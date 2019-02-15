import HomeScreen from "../SFCs/HomeScreen";
import { connect } from "../utils";
import { AppConsumer } from "../contexts/app";

const mapProviderDataToProps = providerData => {
  return {
    user: providerData.user
  };
};

export default connect(
  AppConsumer,
  mapProviderDataToProps
)(HomeScreen);
