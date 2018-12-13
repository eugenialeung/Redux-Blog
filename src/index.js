import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import App from "./components/App";
import reducers from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

const createStoreWithMiddleware = applyMiddleware(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}

class Goodbye extends React.Component {
  render() {
    return <div>Bye!</div>;
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/hello" component={Hello} />
      <Route path="goodbye" component={Goodbye} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
