import { getMovies } from "../Starter Code/services/fakeMovieService";
import { createStore } from "redux";

export function reducer(state = getMovies(), action) {
  //   console.log(getMovies());
  switch (action.type) {
    case "DELETE":
      return state;
    case "del2":
      return state;
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
