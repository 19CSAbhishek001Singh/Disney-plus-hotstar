import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: []
}
// Actions call reducers and reducers change the state
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    }
  }
})

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;
export default movieSlice.reducer;