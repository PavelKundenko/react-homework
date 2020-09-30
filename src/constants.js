import PropTypes from 'prop-types';

export const languageShortages = {
  ENGLISH: 'en',
  UKRAINIAN: 'ua'
};

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

  LOCALIZATION_DATA: PropTypes.shape({
    [languageShortages.ENGLISH]: PropTypes.object,
    [languageShortages.UKRAINIAN]: PropTypes.object
  })
};

export const localStorageObjects = {
  USERS: 'users',
  CURRENT_USER: 'currentUser',
  LOCALIZATION: 'localization'
};
