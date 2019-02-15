import React from "react";

export function connect(Consumer, mapProviderDataToProps) {
  return function(SFC) {
    const ConnectedComponent = () => (
      <Consumer>
        {providerData => <SFC {...mapProviderDataToProps(providerData)} />}
      </Consumer>
    );

    return ConnectedComponent;
  };
}
