import Api from '../../helpers/Api';
import {
  activeMovieDataUpdated,
  actorsDataLoaded,
  actorsLoadingFailed,
  actorsLoadingStart,
  changeLikes,
  changeMovieRating,
  deleteMovie,
  editMovie,
  moviesLoaded,
  moviesLoadingFailed,
  moviesLoadingStart,
  showErrorMessage
} from './movies.actions';

export const addLikeAsync = (movieId, movieData) => async (dispatch) => {
  try {
    const { status } = await Api.updateMovieData(movieId, movieData);

    status === 200 ? dispatch(changeLikes(movieId, movieData)) : dispatch(showErrorMessage());
  } catch {
    dispatch(showErrorMessage());
  }
};

export const changeRatingAsync = (movieId, movieData, newRating) => async (dispatch) => {
  try {
    const { status } = await Api.updateMovieData(movieId, movieData);

    status === 200 ? dispatch(changeMovieRating(movieId, newRating)) : dispatch(showErrorMessage());
  } catch {
    dispatch(showErrorMessage());
  }
};

export const fetchUpdateMovie = (movieId, movieData) => async (dispatch) => {
  dispatch(moviesLoadingStart());
  try {
    const { data, status } = await Api.updateMovieData(movieId, movieData);

    if (status === 200) {
      dispatch(editMovie(movieId, data));
      dispatch(activeMovieDataUpdated(data));
    } else {
     dispatch(moviesLoadingFailed());
    }
  } catch {
    dispatch(moviesLoadingFailed())
  }
};

export const fetchDeleteMovie = (movieId) => async (dispatch) => {
  dispatch(moviesLoadingStart());
  try {
    const { status } = Api.deleteMovie(movieId);

    status === 200 ? dispatch(deleteMovie(movieId)) : dispatch(moviesLoadingFailed());
  } catch {
    dispatch(moviesLoadingFailed());
  }
};

export const fetchMovies = () => async (dispatch) => {
  dispatch(moviesLoadingStart());
  try {
    const { data, status } = await Api.getMovies();

    status === 200 ? dispatch(moviesLoaded(data)) : dispatch(moviesLoadingFailed());
  } catch {
    dispatch(moviesLoadingFailed());
  }
};

export const fetchMovieById = (movieId) => async (dispatch) => {
  dispatch(moviesLoadingStart());
  try {
    const { data, status } = await Api.getMovieById(movieId);

    status === 200 ? dispatch(activeMovieDataUpdated(data)) : dispatch(moviesLoadingFailed());
  } catch {
    dispatch(moviesLoadingFailed());
  }
};

export const fetchActors = () => async (dispatch) => {
  dispatch(actorsLoadingStart());

  try {
    const { data, status } = await Api.getActors();

    status === 200 ? dispatch(actorsDataLoaded(data)) : dispatch(actorsLoadingFailed());
  } catch {
    dispatch(actorsLoadingFailed());
  }
};
