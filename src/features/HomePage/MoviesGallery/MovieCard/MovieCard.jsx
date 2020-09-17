import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import Rating from "../../../../components/Rating/Rating";

import styles from './MovieCard.module.scss';

import {addLike, changeMovieRating, removeLike} from "../../../../redux/homepage/homepage.actions";

const MovieCard = ({id, title, posterUrl, likes, stars, addLike, removeLike, changeRating }) => (
  <div className={`${styles.Card} col-lg-3 col-sm-5`}>
    <div>
      <img className={styles.MoviePoster} src={posterUrl} alt="Movie poster"/>
      <h3 className={styles.CartTitle}><Link to={`/movie/${id}`}>{title}</Link></h3>
    </div>
    <div className={styles.AssessmentContainer}>
      <div>
        {likes}
        <FontAwesomeIcon onClick={() => addLike(id)} className={`${styles.Icon} ${styles.Like}`} icon={faThumbsUp} />
        <FontAwesomeIcon onClick={() => removeLike(id)} className={`${styles.Icon} ${styles.Dislike}`} icon={faThumbsDown} />
      </div>
      <Rating movieId={id} rate={stars} changeRating={changeRating} />
    </div>
  </div>
);

const mapDispatchToProps = {
  addLike: (id) => addLike(id),
  removeLike: (id) => removeLike(id),
  changeRating: (id, newRating) => changeMovieRating(id, newRating)
};

MovieCard.propTypes = {
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  changeRating: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MovieCard);
