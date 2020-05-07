import React, { Component } from "react";
import Table from "./Table";
import { Provider } from "react-redux";
import store from "../Store/Store";
import FilterComp from "./FilterComp";

class App extends Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <div className="d-flex flex">
          <FilterComp />
          <Table />
        </div>
      </Provider>
    );
  }
}

export default App;
