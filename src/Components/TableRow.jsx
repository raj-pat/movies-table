import React, { Component } from "react";
class TableRow extends Component {
  render() {
    const {
      _id,
      title,
      genre,
      numberInStock,
      dailyRentalRate,
    } = this.props.movie;
    return (
      <tr>
        <td scope="row">{title}</td>
        <td>{genre.name}</td>
        <td>{numberInStock}</td>
        <td>{dailyRentalRate}</td>
        <td>{this.getLikeIcon()}</td>
        <td>
          <button
            onClick={() => this.props.onDeleteDispatch(_id)}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  getLikeIcon() {
    let { liked, _id } = this.props.movie;

    let btn_class = "btn btn-sm btn-" + (liked ? "success" : "primary");
    return (
      <button
        onClick={() => this.props.onLikeDispatch(_id)}
        className={btn_class}
      >
        {liked ? "Liked" : "Like"}
      </button>
    );
  }
}

export default TableRow;
