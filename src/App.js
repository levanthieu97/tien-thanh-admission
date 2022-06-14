import React from "react";
import { Provider } from "react-redux";
import store from "./reducer";
import Routes from "./pages/routes";
require('./common/Listeners');

const App = () => {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
};

export default React.memo(App);
