import React from "react";
import { connect } from "react-redux";

const Pagination = ({ totalPages, changePageTo, currentPage }) => {
  return (
    <nav aria-label="...">
      <ul className="pagination pagination-md">{getPagesJSX()}</ul>
    </nav>
  );
  function getPaginationClasses(page) {
    return page === currentPage
      ? "page-link bg-secondary text-light"
      : "page-link";
  }
  function getPagesJSX() {
    const jsxList = [];
    for (let i = 0; i < totalPages; i++) {
      jsxList[i] = (
        <li key={i} className="page-item">
          <button
            className={getPaginationClasses(i + 1)}
            onClick={() => changePageTo(i + 1)}
          >
            {i + 1}
          </button>
        </li>
      );
    }
    return jsxList;
  }
};

const mapStateToProps = (state) => ({
  totalPages: Math.floor((state.AllMovies.length - 1) / 4) + 1,
  currentPage: state.currentPage,
});

const mapDisptachToProps = (dispatch) => ({
  changePageTo: (page) => dispatch({ type: "CHANGE-PAGE", page }),
});

export default connect(mapStateToProps, mapDisptachToProps)(Pagination);
