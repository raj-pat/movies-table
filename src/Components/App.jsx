import React, { Component } from "react";
import Table from "./Table";
import createStore from "react-redux";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Table />
      </React.Fragment>
    );
  }
}

export default App;
