import React, { Component } from "react";

import { connect } from "react-redux";
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
            {this.props.moviesList.map((movieObject) => {
              return <TableRow key={movieObject._id} movie={movieObject} />;
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
//function mapping what properties of the state we will be using, return object
const mapStateToProps = (state) => ({
  moviesList: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (idToDelete) => dispatch({ type: "Delete", id: idToDelete }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
// export default Table;
