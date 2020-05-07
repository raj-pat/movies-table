import React, { Component } from "react";
import { connect } from "react-redux";
import TableRow from "./TableRow";
import Showing from "./Showing";
import Pagination from "./Pagination";


class Table extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ width: "80%" }}>
          <Showing />
          <table className="table">
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
                return (
                  <TableRow
                    key={movieObject._id}
                    movie={movieObject}
                    onLikeDispatch={this.props.onLikeDispatch}
                    onDeleteDispatch={this.props.onDelete}
                  />
                );
              })}
            </tbody>
          </table>
          <Pagination />
        </div>
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
    onDelete: (idToDelete) => dispatch({ type: "DELETE", id: idToDelete }),
    onLikeDispatch: (_id) => dispatch({ type: "LIKE", id: _id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
// export default Table;
