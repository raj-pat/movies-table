import React, { Component } from "react";
import Table from "./Table";
import {Provider} from "react-redux"
import store  from "../Store/Store";

class App extends Component {
  state = {};

  render() {
    return (
        
      
        <Table />
     
    );
  }
}

export default App;
