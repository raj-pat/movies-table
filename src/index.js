import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./Components/App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./Store/Store";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
