import React, { Component } from "react";
class TableRow extends Component {
  render() {
    return (
      <tr>
        <td scope="row">1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdfo</td>
        <td>{this.getLikeIcon()}</td>
        <td>
          <button className="btn btn-sm btn-danger">Delete </button>
        </td>
      </tr>
    );
  }

  getLikeIcon() {
    let liked = false;
    let btn_class = "btn btn-sm btn-" + (liked ? "success" : "primary");
    return <button className={btn_class}>{liked ? "Liked" : "Like"}</button>;
  }
}

export default TableRow;
