import React from "react";
import styles from './MovieCard.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Rating from "../../components/Rating/Rating";

const MovieCard = ({id, title, posterUrl, likes, stars, movieClickHandler, changeLikesHandler, changeStarsHandler }) => (
  <div className={`${styles.Card} col-sm-3`}>
    <div>
      <img className={styles.MoviePoster} src={posterUrl} alt="Movie poster"/>
      <h3 className={styles.CartTitle} onClick={() => movieClickHandler(id)}>{title}</h3>
    </div>
    <div className={styles.AssessmentContainer}>
      <div>
        {likes}
        <FontAwesomeIcon onClick={() => changeLikesHandler(id, 1)} className={`${styles.Icon} ${styles.Like}`} icon={faThumbsUp} />
        <FontAwesomeIcon onClick={() => changeLikesHandler(id, -1)} className={`${styles.Icon} ${styles.Dislike}`} icon={faThumbsDown} />
      </div>
      <Rating movieId={id} rate={stars} changeStarsHandler={changeStarsHandler} />
    </div>
  </div>
);

export default MovieCard;
