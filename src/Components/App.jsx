import React, { Component } from "react";
import Table from "./Table";

import { store } from "../Store/Store";

class App extends Component {
  state = {};

  render() {
    console.log(store.getState());
    return (
      <React.Fragment>
        <Table />
      </React.Fragment>
    );
  }
}

export default App;
