export const moviesDataSelector = (state) => state.moviesReducer.movies;

export const actorsDataSelector = (state) => state.moviesReducer.actors;

export const filteredMoviesSelector = (state) => state.moviesReducer.movies
  .filter(movie => movie.title.toLowerCase().includes(state.moviesReducer.searchFieldValue.toLowerCase()));
