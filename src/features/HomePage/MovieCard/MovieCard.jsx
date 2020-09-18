import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

import Rating from "../../../components/Rating/Rating";

import styles from './MovieCard.module.scss';

const MovieCard = ({ id, title, posterUrl, likes, stars, movieClickHandler, changeLikesHandler, changeStarsHandler }) => (
  <div className={`${styles.card} col-lg-3 col-sm-5`}>
    <div>
      <img className={styles.moviePoster} src={posterUrl} alt="Movie poster"/>
      <h3 className={styles.cardTitle} onClick={() => movieClickHandler(id)}>{title}</h3>
    </div>
    <div className={styles.assessmentContainer}>
      <div>
        {likes}
        <FontAwesomeIcon
          onClick={() => changeLikesHandler(id, 1)}
          className={`${styles.icon} ${styles.like}`}
          icon={faThumbsUp}
        />
        <FontAwesomeIcon
          onClick={() => changeLikesHandler(id, -1)}
          className={`${styles.icon} ${styles.dislike}`}
          icon={faThumbsDown}
        />
      </div>
      <Rating movieId={id} rate={stars} changeStarsHandler={changeStarsHandler} />
    </div>
  </div>
);

export default MovieCard;
