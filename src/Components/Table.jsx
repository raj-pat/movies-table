import React, { Component } from "react";

import TableRow from "./TableRow";
class Table extends Component {
  state = {};
  render() {
    
    return (
      <React.Fragment>
        <table className="table table-responsive-med m-5">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rating</th>
              <th scope="col">Like</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <TableRow />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
