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
          <Showing count={this.props.moviesList.length} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rating</th>
                <th scope="col"></th>
                <th scope="col"></th>
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

const getCurrentMovies = ({ AllMovies, currentPage }) => {
  let end = currentPage * 4;
  console.log(end - 4, end);
  let temp = [...AllMovies];
  let page = AllMovies.slice(end - 4, end);
  console.log(page);
  return page;
};
//function mapping what properties of the state we will be using, return object
const mapStateToProps = (state) => ({
  moviesList: getCurrentMovies(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (idToDelete) => dispatch({ type: "DELETE", id: idToDelete }),
    onLikeDispatch: (_id) => dispatch({ type: "LIKE", id: _id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
// export default Table;
