import React from 'react';

import Rating from '../../../components/Rating/Rating';

import styles from './MovieDetails.module.scss';

const MovieDetails = ({ title, posterUrl, description, likes, stars, director, actors, genres }) => (
  <div className={styles.movieDetails}>
    <h1>{title}</h1>
    <div className={`${styles.movieInfoContainer} row`}>
      <img className={`${styles.moviePoster} col-lg-6`} src={posterUrl} alt='Movie poster' />
      <ul className={`${styles.movieInfo} col-lg-6`}>
        <li>Likes: {likes}</li>
        <li><Rating rate={stars} /></li>
        <li>Director: <i>{director}</i></li>
        <li>Actors: <i>{actors.join(', ')}</i></li>
        <li>Genres: <i>{genres.join(', ')}</i></li>
        <li>Description:
          <p>{ description }</p>
        </li>
      </ul>
    </div>
  </div>
);

export default MovieDetails;
