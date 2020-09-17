import HomepageTypes from "./homepage.types";

export const setActiveMovie = (movieId) => ({
  type: HomepageTypes.SET_ACTIVE_MOVIE,
  payload: {
    movieId
  }
});

export const addLike = (movieId) => ({
  type: HomepageTypes.ADD_LIKE,
  payload: {
    movieId,
    likesAmount: 1
  }
});

export const removeLike = (movieId) => ({
  type: HomepageTypes.REMOVE_LIKE,
  payload: {
    movieId,
    likesAmount: -1
  }
});

export const changeMovieRating = (movieId, newRating) => ({
  type: HomepageTypes.CHANGE_MOVIE_RATING,
  payload: {
    movieId,
    newRating
  }
});

export const searchValueChanged = (newValue) => ({
  type: HomepageTypes.SEARCH_VALUE_CHANGED,
  payload: {
    newValue
  }
});

export const sortByLikes = () => ({
  type: HomepageTypes.SORT_BY_LIKES,
  payload: {
    comparedParam: 'likes'
  }
});

export const sortByRating = () => ({
  type: HomepageTypes.SORT_BY_RATING,
  payload: {
    comparedParam: 'stars'
  }
});

export const resetSorting = () => ({
  type: HomepageTypes.RESET_SORTING
});

export const editMovie = (editableMovieId, editableMovieData) => ({
  type: HomepageTypes.EDIT_MOVIE,
  payload: {
    editableMovieId,
    editableMovieData
  }
});

export const deleteMovie = (movieId) => ({
  type: HomepageTypes.DELETE_MOVIE,
  payload: {
    movieId
  }
});
