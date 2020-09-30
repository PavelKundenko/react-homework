import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import Rating from '../../../../components/Rating/Rating';
import { addLikeAsync, changeRatingAsync } from '../../../../redux/movies/movies.async.actions';
import { propTypesShapes } from '../../../../constants';
import styles from './MovieCard.module.scss';

const MovieCard = ({ movieData, addLikeAsync, changeRatingAsync }) => {
  const { id, title, posterUrl, likes, stars } = movieData;

  const changeLikesHandler = (likesAmount) => {
    const updatedData = {
      ...movieData,
      likes: movieData.likes + likesAmount
    };

    addLikeAsync(id, updatedData);
  };

  const changeRatingHandler = (movieId, newRating) => {
    const updatedData = {
      ...movieData,
      stars: newRating
    };

    changeRatingAsync(id, updatedData, newRating)
  };

  return (
    <div className={`${styles.card} col-lg-3 col-sm-5`}>
      <div>
        <img className={styles.moviePoster} src={posterUrl} alt="Movie poster"/>
        <h3 className={styles.cardTitle}><Link className={styles.link} to={`/movie/${id}`}>{title}</Link></h3>
      </div>
      <div className={styles.assessmentContainer}>
        <div>
          {likes}
          <FontAwesomeIcon
            onClick={() => changeLikesHandler(1)}
            className={`${styles.icon} ${styles.like}`}
            icon={faThumbsUp} />
          <FontAwesomeIcon
            onClick={() => changeLikesHandler(-1)}
            className={`${styles.icon} ${styles.dislike}`}
            icon={faThumbsDown} />
        </div>
        <Rating movieId={id} rate={stars} changeRating={changeRatingHandler} />
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  addLikeAsync,
  changeRatingAsync
};

MovieCard.propTypes = {
  movieData: PropTypes.shape(propTypesShapes.MOVIE),
  addLikeAsync: PropTypes.func.isRequired,
  changeRatingAsync: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MovieCard);
