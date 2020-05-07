import { getMovies } from "../Starter Code/services/fakeMovieService";
import { createStore } from "redux";

export function reducer(state = getMovies(), action) {
  let newState;
  switch (action.type) {
    case "DELETE":
      newState = state.AllMovies.filter(
        (movieObject) => movieObject._id !== action.id
      );
      return { AllMovies: newState, currentPage: state.currentPage };

    case "LIKE":
      newState = state.AllMovies.map((movieObject) => {
        if (movieObject._id === action.id) {
          let newMovie = movieObject;
          newMovie.liked = !newMovie.liked;
          return newMovie;
        }
        return movieObject;
      });
      return { AllMovies: newState, currentPage: state.currentPage };
    case "FILTER":
      if (action.filterBy === "All") {
        return getMovies();
      }
      newState = state.AllMovies.filter(
        (movieObject) => movieObject.genre.name === action.filterBy
      );
      return { AllMovies: newState, currentPage: state.currentPage };
    case "CHANGE-PAGE":
      return { AllMovies: state.AllMovies, currentPage: action.page };
    default:
      return state;
  }
}
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
