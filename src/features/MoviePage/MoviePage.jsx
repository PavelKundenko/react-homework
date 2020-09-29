import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Rating from '../../components/Rating/Rating';
import CustomButton from '../../components/CustomButton/CustomButton';
import { deleteMovie } from '../../redux/movies/movies.actions';
import { actorsDataSelector, moviesDataSelector } from '../../redux/movies/movies.selectors';
import { propTypesShapes } from '../../constants';
import styles from './MoviePage.module.scss';

const MoviePage = ({ moviesData, actorsData, match, history, deleteMovie }) => {
  const activeMovieId = Number(match.params.id);
  const activeMovieData = moviesData.find((movie) => movie.id === activeMovieId);
  const { id, title, posterUrl, description, likes, stars, director, actors, genres } = activeMovieData;

  const actorsLinks = actors.map((actorId, index) => {
    const actorData = actorsData.find((actor) => actor.id === actorId);
    if (index === actors.length - 1) {
      return (
        <Fragment key={index}>
          <Link className={styles.link} to={`/actor/${actorData.id}`}>{actorData.name}</Link>
        </Fragment>
      )
    } else {
      return (
        <Fragment key={index}>
          <Link className={styles.link} to={`/actor/${actorData.id}`}>{actorData.name}</Link><span>, </span>
        </Fragment>
      )
    }
  });

  const editMovieHandler = () => history.push(`/edit-movie/${id}`);

  const deleteMovieHandler = () => {
    deleteMovie(id);
    history.push('/home');
  };

  return (
    <div className='container'>
      <div className={styles.movieInfoTopbar}>
        <h1>{title}</h1>
        <div>
          <CustomButton value='Edit' clickHandler={editMovieHandler} />
          <CustomButton value='Delete' clickHandler={deleteMovieHandler} />
        </div>
      </div>
      <div className={`${styles.movieInfoContainer} row`}>
        <img className={`${styles.moviePoster} col-md-5`} src={posterUrl} alt='Movie poster' />
        <ul className={`${styles.movieInfo} col-md-7`}>
          <li className={styles.movieInfo__listItem}>Likes: {likes}</li>
          <li className={styles.movieInfo__listItem}><Rating rate={stars} changeStarsHandler={() => false} /></li>
          <li className={styles.movieInfo__listItem}>Director: <i>{director}</i></li>
          <li className={styles.movieInfo__listItem}>Actors: <i>{ actorsLinks }</i></li>
          <li className={styles.movieInfo__listItem}>Genres: <i>{ genres.join(', ') }</i></li>
          <li className={styles.movieInfo__listItem}>Description:
            <p>{ description }</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  moviesData: moviesDataSelector(state),
  actorsData: actorsDataSelector(state)
});

const mapDispatchToProps = {
  deleteMovie
};

MoviePage.propTypes = {
  moviesData: PropTypes.arrayOf(propTypesShapes.MOVIE).isRequired,
  actorsData: PropTypes.arrayOf(propTypesShapes.ACTOR).isRequired,
  deleteMovie: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
