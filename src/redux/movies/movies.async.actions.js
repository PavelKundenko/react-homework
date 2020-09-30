import Api from '../../helpers/Api';
import {
  activeMovieDataUpdated,
  actorsDataLoaded,
  changeLikes,
  changeMovieRating,
  deleteMovie,
  editMovie,
  moviesLoaded,
  moviesLoadingFailed,
  moviesLoadingStart
} from './movies.actions';

export const addLikeAsync = (movieId, movieData) => async (dispatch) => {
  Api.updateMovieData(movieId, movieData).then(() => dispatch(changeLikes(movieId, movieData)))
};

export const changeRatingAsync = (movieId, movieData, newRating) => async (dispatch) => {
  Api.updateMovieData(movieId, movieData).then(() => dispatch(changeMovieRating(movieId, newRating)))
};

export const fetchUpdateMovie = (movieId, movieData) => async (dispatch) => {
  dispatch(moviesLoadingStart());
  try {
    const { data } = await Api.updateMovieData(movieId, movieData);

    dispatch(editMovie(movieId, data));
    dispatch(activeMovieDataUpdated(data))
  } catch {
    dispatch(moviesLoadingFailed())
  }
};

export const fetchDeleteMovie = (movieId) => async (dispatch) =>{
  dispatch(moviesLoadingStart());

  Api.deleteMovie(movieId)
    .then(() => dispatch(deleteMovie(movieId)))
    .catch(() => dispatch(moviesLoadingFailed()))
};

export const fetchMovies = () => async (dispatch) => {
  dispatch(moviesLoadingStart());
  try {
    const { data } = await Api.getMovies();

    dispatch(moviesLoaded(data))
  } catch {
    dispatch(moviesLoadingFailed());
  }
};

export const fetchMovieById = (movieId) => async (dispatch) => {
  dispatch(moviesLoadingStart());
  try {
    const { data } = await Api.getMovieById(movieId);

    dispatch(activeMovieDataUpdated(data))
  } catch {
    dispatch(moviesLoadingFailed());
  }
};

export const fetchActors = () => async (dispatch) => {
  Api.getActors().then((response) => {
    dispatch(actorsDataLoaded(response.data))
  });
};
