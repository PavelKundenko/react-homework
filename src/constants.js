import PropTypes from 'prop-types';

import MoviesTypes from './redux/movies/movies.types';

export const propTypesShapes = {
  MOVIE: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    actors: PropTypes.arrayOf(PropTypes.number).isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,

  ACTOR: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired
  }).isRequired,

  USER_DATA: PropTypes.shape({
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
};

export const localStorageObjects = {
  USERS: 'users',
  CURRENT_USER: 'currentUser'
};

export const errorsMessages = {
  [MoviesTypes.MOVIES_LOADING_FAILED]: 'Movies loading failed.',
  [MoviesTypes.ACTORS_LOADING_FAILED]: 'Actors loading failed.',
  [MoviesTypes.SHOW_ERROR_MESSAGE]: 'Server error occurred.'
};
