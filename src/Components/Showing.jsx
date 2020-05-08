import React from "react";

const Showing = (props) => {
  return (
    <h3 className="p-2 rounded shadow-sm">Showing {props.count} movies</h3>
  );
};

export default Showing;
