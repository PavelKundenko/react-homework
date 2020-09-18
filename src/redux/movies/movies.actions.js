import MoviesTypes from "./movies.types";

export const addLike = (movieId) => ({
  type: MoviesTypes.ADD_LIKE,
  payload: {
    movieId,
    likesAmount: 1
  }
});

export const removeLike = (movieId) => ({
  type: MoviesTypes.REMOVE_LIKE,
  payload: {
    movieId,
    likesAmount: -1
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
