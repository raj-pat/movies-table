import { getMovies } from "../Starter Code/services/fakeMovieService";
import { createStore } from "redux";

export function reducer(state = getMovies(), action) {
  //   console.log(getMovies());
  let newState;
  switch (action.type) {
    case "DELETE":
      newState = state.filter((movieObject) => movieObject._id !== action.id);
      return newState;

    case "LIKE":
      newState = state.map((movieObject) => {
        if (movieObject._id === action.id) {
          let newMovie = movieObject;
          newMovie.liked = !newMovie.liked;
          return newMovie;
        }
        return movieObject;
      });
      return newState;
    default:
      return state;
  }
}
let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
console.log(store.getState());
