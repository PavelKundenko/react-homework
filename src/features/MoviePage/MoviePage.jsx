import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Rating from '../../components/Rating/Rating';
import CustomButton from '../../components/CustomButton/CustomButton';
import Spinner from '../../components/Spinner/Spinner';
import { fetchDeleteMovie, fetchMovieById, fetchActors } from '../../redux/movies/movies.async.actions';
import { actorsDataSelector, activeMovieDataSelector } from '../../redux/movies/movies.selectors';
import { propTypesShapes } from '../../constants';
import styles from './MoviePage.module.scss';


class MoviePage extends Component {
  componentDidMount = () => {
    const { fetchMovieById, fetchActors, match } = this.props;

    fetchMovieById(Number(match.params.id));
    fetchActors()
  };

  getActorsLinks = (actorIds, actorsData) => actorIds.map((actorId, index) => {
    const actorData = actorsData.find((actor) => actor.id === actorId);
    if (index === actorIds.length - 1) {
      return (
        <React.Fragment key={index}>
          <Link className={styles.link} to={`/actor/${actorData.id}`}>{actorData.name}</Link>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment key={index}>
          <Link className={styles.link} to={`/actor/${actorData.id}`}>{actorData.name}</Link><span>, </span>
        </React.Fragment>
      )
    }
  });

  deleteMovieHandler = (id) => {
    const { history, fetchDeleteMovie } = this.props;

    fetchDeleteMovie(id);
    history.push('/home');
  };

  render() {
    const { activeMovieData, history, actorsData } = this.props;

    if (!activeMovieData || !actorsData) {
      return <Spinner/>
    } else {
      const { id, title, posterUrl, description, likes, stars, director, actors, genres } = activeMovieData;

      return (
        <div className='container'>
          <div className={styles.movieInfoTopbar}>
            <h1>{title}</h1>
            <div>
              <CustomButton value='Edit' clickHandler={() => history.push(`/edit-movie/${id}`)} />
              <CustomButton value='Delete' clickHandler={() => this.deleteMovieHandler(id)} />
            </div>
          </div>
          <div className={`${styles.movieInfoContainer} row`}>
            <img className={`${styles.moviePoster} col-md-5`} src={posterUrl} alt='Movie poster' />
            <ul className={`${styles.movieInfo} col-md-7`}>
              <li className={styles.movieInfo__listItem}>Likes: {likes}</li>
              <li className={styles.movieInfo__listItem}><Rating rate={stars} changeStarsHandler={() => false} /></li>
              <li className={styles.movieInfo__listItem}>Director: <i>{director}</i></li>
              <li className={styles.movieInfo__listItem}>Actors: <i>{ this.getActorsLinks(actors, actorsData) }</i></li>
              <li className={styles.movieInfo__listItem}>Genres: <i>{ genres.join(', ') }</i></li>
              <li className={styles.movieInfo__listItem}>Description:
                <p>{ description }</p>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  activeMovieData: activeMovieDataSelector(state),
  actorsData: actorsDataSelector(state),
});

const mapDispatchToProps = {
  fetchDeleteMovie,
  fetchMovieById,
  fetchActors,
};

MoviePage.propTypes = {
  activeMovieData: PropTypes.shape(propTypesShapes.MOVIE),
  actorsData: PropTypes.arrayOf(propTypesShapes.ACTOR),
  fetchDeleteMovie: PropTypes.func.isRequired,
  fetchMovieById: PropTypes.func.isRequired,
  fetchActors: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
