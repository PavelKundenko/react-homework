import PropTypes from 'prop-types';

export const movie = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  director: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}).isRequired;
