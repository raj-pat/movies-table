import React from "react";
import { connect } from "react-redux";
const FilterComp = (props) => {
  return (
    <React.Fragment>
      <div
        className="d-flex flex-column m-5 align-items-center"
        style={{ width: "10%" }}
      >
        <div className="m-2">Filter By</div>
        <button
          className="btn btn-dark border"
          onClick={() => props.onFilter("All")}
          style={{ width: "150px" }}
        >
          All movies
        </button>
        <button
          className="btn btn-secondary border"
          onClick={() => props.onFilter("Action")}
          style={{ width: "150px" }}
        >
          Action
        </button>
        <button
          className="btn btn-secondary border"
          onClick={() => props.onFilter("Thriller")}
          style={{ width: "150px" }}
        >
          Thriller
        </button>
        <button
          className="btn btn-secondary border"
          onClick={() => props.onFilter("Comedy")}
          style={{ width: "150px" }}
        >
          Comedy
        </button>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  moviesList: state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (filterBy) => dispatch({ type: "FILTER", filterBy }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComp);
// export default FilterComp;
