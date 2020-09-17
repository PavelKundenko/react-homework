export const moviesDataSelector = (state) => state.homepageReducer.movies;

export const actorsDataSelector = (state) => state.homepageReducer.actors;

export const activeMovieIdSelector = (state) => state.homepageReducer.activeMovieID;

export const searchFieldValueSelector = (state) => state.homepageReducer.searchFieldValue;
