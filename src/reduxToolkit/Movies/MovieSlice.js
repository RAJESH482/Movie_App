import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Apis/MovieApi";
import { APIKey } from "../../common/Apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncShowsorMovieDetails = createAsyncThunk(
  "movies/fetchAsyncShowsorMovieDetails",
  async (id) => {
    const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieorShow: {},
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieorShow: (state) => {
      state.selectedMovieorShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },

    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return {
        ...state,
        shows: payload,
      };
    },

    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return {
        ...state,
        movies: payload,
      };
    },

    [fetchAsyncShowsorMovieDetails.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return {
        ...state,
        selectedMovieorShow: payload,
      };
    },

    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { addMovies, removeSelectedMovieorShow } = MovieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default MovieSlice.reducer;
