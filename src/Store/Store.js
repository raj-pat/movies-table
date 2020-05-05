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
export let store = createStore(reducer);
// console.log(store.getState());
