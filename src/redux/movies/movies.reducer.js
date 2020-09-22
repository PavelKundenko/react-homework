import { moviesData } from '../../movies.data';
import { actorsData } from '../../actors.data';
import MoviesTypes from './movies.types';
import { changeRating, changeLikes, sortMoviesByProperty, editMovie, deleteMovie } from "./movies.utils";

const INITIAL_STATE = {
  actors: [...actorsData],
  movies: [...moviesData],
  unsortedMovies: [...moviesData],
  activeMovieId: null,
  searchFieldValue: '',
  sortByLikesAscending: true,
  sortByRatingAscending: true
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesTypes.ADD_LIKE:
      return {
        ...state,
        movies: changeLikes(state.movies, action.payload)
      };

    case MoviesTypes.REMOVE_LIKE:
      return {
        ...state,
        movies: changeLikes(state.movies, action.payload)
      };

    case MoviesTypes.CHANGE_MOVIE_RATING:
      return {
        ...state,
        movies: changeRating(state.movies, action.payload)
      };

    case MoviesTypes.SEARCH_VALUE_CHANGED:
      return {
        ...state,
        searchFieldValue: action.payload.newValue
      };

    case MoviesTypes.SORT_BY_LIKES:
      return {
        ...state,
        movies: sortMoviesByProperty(state.movies, state.sortByLikesAscending, action.payload.comparedParam),
        sortByLikesAscending: !state.sortByLikesAscending
      };

    case MoviesTypes.SORT_BY_RATING:
      return {
        ...state,
        movies: sortMoviesByProperty(state.movies, state.sortByRatingAscending, action.payload.comparedParam),
        sortByRatingAscending: !state.sortByRatingAscending
      };

    case MoviesTypes.RESET_SORTING:
      return {
        ...state,
        movies: [...state.unsortedMovies],
        searchFieldValue: ''
      };

    case MoviesTypes.EDIT_MOVIE:
      return {
        ...state,
        movies: editMovie(state.movies, action.payload.editableMovieId, action.payload.editableMovieData),
        unsortedMovies: editMovie(state.unsortedMovies, action.payload.editableMovieId, action.payload.editableMovieData)
      };

    case MoviesTypes.DELETE_MOVIE:
      return {
        ...state,
        movies: deleteMovie(state.movies, action.payload.movieId),
        unsortedMovies: deleteMovie(state.unsortedMovies, action.payload.movieId)
      };

    default:
      return state
  }
};
