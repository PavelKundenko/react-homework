import MoviesTypes from './movies.types';

export const changeLikes = (movieId, updatedMovie) => ({
  type: MoviesTypes.CHANGE_LIKES,
  payload: {
    movieId,
    updatedMovie
  }
});

export const changeMovieRating = (movieId, newRating) => ({
  type: MoviesTypes.CHANGE_MOVIE_RATING,
  payload: {
    movieId,
    newRating
  }
});

export const searchValueChanged = (newValue) => ({
  type: MoviesTypes.SEARCH_VALUE_CHANGED,
  payload: {
    newValue
  }
});

export const sortByLikes = () => ({
  type: MoviesTypes.SORT_BY_LIKES,
  payload: {
    comparedParam: 'likes'
  }
});

export const sortByRating = () => ({
  type: MoviesTypes.SORT_BY_RATING,
  payload: {
    comparedParam: 'stars'
  }
});

export const resetSorting = () => ({
  type: MoviesTypes.RESET_SORTING
});

export const editMovie = (editableMovieId, editableMovieData) => ({
  type: MoviesTypes.EDIT_MOVIE,
  payload: {
    editableMovieId,
    editableMovieData
  }
});

export const deleteMovie = (movieId) => ({
  type: MoviesTypes.DELETE_MOVIE,
  payload: {
    movieId
  }
});

export const moviesLoadingStart = () => ({
  type: MoviesTypes.MOVIES_LOADING_START
});

export const moviesLoaded = (moviesData) => ({
  type: MoviesTypes.MOVIES_LOADED,
  payload: {
    moviesData
  }
});

export const moviesLoadingFailed = () => ({
  type: MoviesTypes.MOVIES_LOADING_FAILED
});

export const activeMovieDataUpdated = (movieData) => ({
  type: MoviesTypes.ACTIVE_MOVIE_UPDATED,
  payload: {
    movieData
  }
});

export const actorsDataLoaded = (actorsData) => ({
  type: MoviesTypes.ACTORS_DATA_LOADED,
  payload: {
    actorsData
  }
});

export const changeLocalization = (newValue) => ({
  type: MoviesTypes.CHANGE_LOCALIZATION,
  payload: {
    newValue
  }
});
