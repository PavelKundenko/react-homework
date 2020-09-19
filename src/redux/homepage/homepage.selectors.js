export const moviesDataSelector = (state) => state.homepageReducer.movies;

export const activeMovieDataSelector = (state) => state.homepageReducer.movies
  .find((movie) => movie.id === state.homepageReducer.activeMovieId);

export const searchFieldValueSelector = (state) => state.homepageReducer.searchFieldValue;

export const filteredMoviesSelector = (state) => state.homepageReducer.movies
  .filter(movie => movie.title.toLowerCase().includes(state.homepageReducer.searchFieldValue.toLowerCase()));
