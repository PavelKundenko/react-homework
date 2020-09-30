export const actorsDataSelector = (state) => state.moviesReducer.actors;

export const filteredMoviesSelector = (state) => state.moviesReducer.movies
  .filter((movie) => movie.title.toLowerCase().includes(state.moviesReducer.searchFieldValue.toLowerCase()));

export const isMoviesLoadingSelector = (state) => state.moviesReducer.isMoviesDataLoading;

export const activeMovieDataSelector = (state) => state.moviesReducer.activeMovieData;

export const localizationSelector = (state) => state.moviesReducer.currentLocalization;

export const nextLocalizationSelector = (state) => state.moviesReducer.nextLocalization;
