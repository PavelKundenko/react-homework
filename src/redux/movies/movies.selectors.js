export const moviesDataSelector = (state) => state.moviesReducer.movies;

export const actorsDataSelector = (state) => state.moviesReducer.actors;

export const searchFieldValueSelector = (state) => state.moviesReducer.searchFieldValue;
