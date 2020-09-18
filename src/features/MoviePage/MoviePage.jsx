import React from 'react';
import { connect } from 'react-redux';

import {Link} from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import CustomButton from "../../components/CustomButton/CustomButton";

import styles from './MoviePage.module.scss';

import {deleteMovie} from "../../redux/movies/movies.actions";
import {actorsDataSelector, moviesDataSelector} from "../../redux/movies/movies.selectors";

const MoviePage = ({ moviesData, actorsData, match, history, deleteMovie }) => {
  const activeMovieId = Number(match.params.id);

  const activeMovieData = moviesData.find(movie => movie.id === activeMovieId);

  const { id, title, posterUrl, description, likes, stars, director, actors, genres } = activeMovieData;

  const actorsLinks = actors.map((actorId, index) => {
    const actorData = actorsData.find(actor => actor.id === actorId);
    if (index === actors.length - 1) {
      return (
        <React.Fragment key={index}>
          <Link to={`/actor/${actorData.id}`}>{actorData.name}</Link>
        </React.Fragment>)
    } else {
      return (
        <React.Fragment key={index}>
          <Link to={`/actor/${actorData.id}`}>{actorData.name}</Link><span>, </span>
        </React.Fragment>)
    }
  });

  const editMovieHandler = () => history.push(`/edit-movie/${id}`);

  const deleteMovieHandler = () => {
    deleteMovie(id);
    history.push('/home');
  };

  return (
    <div className='container'>
      <div className={styles.MovieInfoTopbar}>
        <h1>{title}</h1>
        <div>
          <CustomButton value='Edit' clickHandler={editMovieHandler} />
          <CustomButton value='Delete' clickHandler={deleteMovieHandler} />
        </div>
      </div>
      <div className={`${styles.MovieInfoContainer} row`}>
        <img className={`${styles.MoviePoster} col-md-5`} src={posterUrl} alt='Movie poster' />
        <ul className={`${styles.MovieInfo} col-md-7`}>
          <li>Likes: {likes}</li>
          <li><Rating rate={stars} changeStarsHandler={() => false} /></li>
          <li>Director: <i>{director}</i></li>
          <li>Actors: <i>{ actorsLinks }</i></li>
          <li>Genres: <i>{ genres.join(', ') }</i></li>
          <li>Description:
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
  deleteMovie: (movieId) => deleteMovie(movieId)
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
