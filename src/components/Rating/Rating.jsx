import React from "react";
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as SolidStar} from "@fortawesome/free-solid-svg-icons";
import { faStar as EmptyStar } from "@fortawesome/free-regular-svg-icons";

import styles from './Rating.module.scss';

const Rating = ({ movieId, rate, changeRating }) => {
  const starTypes = new Array(rate).fill('solid').concat(new Array(5 - rate).fill('empty'));

  const stars = starTypes.map((type, index) => {
    if (type === 'solid') {
      return (
        <FontAwesomeIcon
          className={styles.Star}
          key={index}
          icon={SolidStar}
          onClick={() => changeRating(movieId, index + 1)}
        />
      )
    } else {
      return (
        <FontAwesomeIcon
          className={styles.Star}
          key={index}
          icon={EmptyStar}
          onClick={() => changeRating(movieId, index + 1)}
        />
      );
    }
  });

  return (
    <div>
      { stars }
    </div>
  )
};

Rating.propTypes = {
  movieId: PropTypes.number,
  rate: PropTypes.number.isRequired,
  changeRating: PropTypes.func
};

Rating.defaultProps = {
  changeRating: () => false
};

export default Rating;
