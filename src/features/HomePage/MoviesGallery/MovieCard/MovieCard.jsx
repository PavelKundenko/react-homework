import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import Rating from '../../../../components/Rating/Rating';
import { addLike, changeMovieRating, removeLike } from '../../../../redux/movies/movies.actions';
import styles from './MovieCard.module.scss';

const MovieCard = ({ id, title, posterUrl, likes, stars, addLike, removeLike, changeMovieRating }) => (
  <div className={`${styles.card} col-lg-3 col-sm-5`}>
    <div>
      <img className={styles.moviePoster} src={posterUrl} alt="Movie poster"/>
      <h3 className={styles.cardTitle}><Link className={styles.link} to={`/movie/${id}`}>{title}</Link></h3>
    </div>
    <div className={styles.assessmentContainer}>
      <div>
        {likes}
        <FontAwesomeIcon
          onClick={() => addLike(id)}
          className={`${styles.icon} ${styles.like}`}
          icon={faThumbsUp} />
        <FontAwesomeIcon
          onClick={() => removeLike(id)}
          className={`${styles.icon} ${styles.dislike}`}
          icon={faThumbsDown} />
      </div>
      <Rating movieId={id} rate={stars} changeRating={changeMovieRating} />
    </div>
  </div>
);

const mapDispatchToProps = {
  addLike,
  removeLike,
  changeMovieRating
};

MovieCard.propTypes = {
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  changeMovieRating: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MovieCard);
