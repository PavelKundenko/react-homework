import {moviesData} from "../../movies.data";
import {actorsData} from "../../actors.data";
import HomepageTypes from "./homepage.types";
import {changeRating, changeLikes, sortMoviesByProperty, editMovie, deleteMovie} from "./homepage.utils";

const INITIAL_STATE = {
  movies: moviesData.slice(0),
  actors: actorsData.slice(0),
  activeMovieId: null,
  searchFieldValue: '',
  sortByLikesAscending: true,
  sortByRatingAscending: true
};

export const homepageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomepageTypes.SET_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovieID: action.payload.movieId
      };

    case HomepageTypes.ADD_LIKE:
      return {
        ...state,
        movies: changeLikes(state.movies, action.payload)
      };

    case HomepageTypes.REMOVE_LIKE:
      return {
        ...state,
        movies: changeLikes(state.movies, action.payload)
      };

    case HomepageTypes.CHANGE_MOVIE_RATING:
      return {
        ...state,
        movies: changeRating(state.movies, action.payload)
      };

    case HomepageTypes.SEARCH_VALUE_CHANGED:
      return {
        ...state,
        searchFieldValue: action.payload.newValue
      };

    case HomepageTypes.SORT_BY_LIKES:
      return {
        ...state,
        movies: sortMoviesByProperty(state.movies, state.sortByLikesAscending, action.payload.comparedParam),
        sortByLikesAscending: !state.sortByLikesAscending
      };

    case HomepageTypes.SORT_BY_RATING:
      return {
        ...state,
        movies: sortMoviesByProperty(state.movies, state.sortByRatingAscending, action.payload.comparedParam),
        sortByRatingAscending: !state.sortByRatingAscending
      };

    case HomepageTypes.RESET_SORTING:
      return {
        ...state,
        movies: moviesData.slice(0)
      };

    case HomepageTypes.EDIT_MOVIE:
      return {
        ...state,
        movies: editMovie(state.movies, action.payload.editableMovieId, action.payload.editableMovieData)
      };

    case HomepageTypes.DELETE_MOVIE:
      return {
        ...state,
        movies: deleteMovie(state.movies, action.payload.movieId)
      };

    default:
      return {
      ...state
    }
  }
};
