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
          <button className="btn btn-sm btn-danger">Delete </button>
        </td>
      </tr>
    );
  }

  getLikeIcon() {
    let liked = this.props.movie.liked;
    let btn_class = "btn btn-sm btn-" + (liked ? "success" : "primary");
    return <button className={btn_class}>{liked ? "Liked" : "Like"}</button>;
  }
}

export default TableRow;
