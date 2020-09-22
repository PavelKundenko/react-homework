import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../../../components/Rating/Rating';
import styles from './MovieDetails.module.scss';


const MovieDetails = ({ title, posterUrl, description, likes, stars, director, actors, genres }) => (
  <div className={styles.movieDetails}>
    <h1>{title}</h1>
    <div className={`${styles.movieInfoContainer} row`}>
      <img className={`${styles.moviePoster} col-lg-6`} src={posterUrl} alt='Movie poster' />
      <ul className={`${styles.movieInfo} col-lg-6`}>
        <li className={styles.movieInfo__listItem}>Likes: {likes}</li>
        <li className={styles.movieInfo__listItem}><Rating rate={stars} /></li>
        <li className={styles.movieInfo__listItem}>Director: <i>{director}</i></li>
        <li className={styles.movieInfo__listItem}>Actors: <i>{actors.join(', ')}</i></li>
        <li className={styles.movieInfo__listItem}>Genres: <i>{genres.join(', ')}</i></li>
        <li className={styles.movieInfo__listItem}>Description:
          <p>{ description }</p>
        </li>
      </ul>
    </div>
  </div>
);

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MovieDetails;
