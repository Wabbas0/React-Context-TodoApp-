import LoginScreen from "../SFCs/LoginScreen";
import { connect } from "../utils";
import { AppConsumer } from "../contexts/app";

const mapProviderDataToProps = providerData => {
  return {
    onSubmit: providerData.onLogin,
    user: providerData.user
  };
};

export default connect(
  AppConsumer,
  mapProviderDataToProps
)(LoginScreen);
