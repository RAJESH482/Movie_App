import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./Movies/MovieSlice";

export const store = configureStore({
  reducer: {
    movies: MovieSlice,
  },
});
console.log(store);
